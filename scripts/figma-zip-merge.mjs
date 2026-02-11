#!/usr/bin/env node

import { mkdtemp, readdir, readFile, rm, mkdir, copyFile, stat } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';

const DEFAULT_INCLUDE = ['src', 'assets', 'index.html'];
const DEFAULT_EXCLUDE = ['node_modules', '.git', 'dist', 'build', '.DS_Store'];

function resolveUserPath(baseDir, inputPath) {
  if (!inputPath) return inputPath;
  if (inputPath === '~') return os.homedir();
  if (inputPath.startsWith(`~${path.sep}`)) {
    return path.join(os.homedir(), inputPath.slice(2));
  }
  return path.isAbsolute(inputPath) ? inputPath : path.resolve(baseDir, inputPath);
}

function printHelp() {
  console.log(`
Usage:
  node scripts/figma-zip-merge.mjs --zip <path/to/export.zip> [options]
  node scripts/figma-zip-merge.mjs --dir <path/to/extracted> [options]

Options:
  --apply                 Apply changed/new files to this project
  --delete                When used with --apply, also delete files removed in source
  --include <a,b,c>       Paths to compare (default: src,assets,index.html)
  --exclude <a,b,c>       Ignore patterns by path segment (default: node_modules,.git,dist,build,.DS_Store)
  --source-root <path>    Root path inside extracted source (default: auto-detect)
  --backup-dir <path>     Backup directory for overwritten/deleted files (default: .figma-backups/<timestamp>)
  --help                  Show this message

Examples:
  node scripts/figma-zip-merge.mjs --zip ~/Downloads/figma-export.zip
  node scripts/figma-zip-merge.mjs --zip ~/Downloads/figma-export.zip --apply
  node scripts/figma-zip-merge.mjs --dir ./tmp/figma-export --apply --delete
`);
}

function parseArgs(argv) {
  const args = {
    apply: false,
    delete: false,
    include: [...DEFAULT_INCLUDE],
    exclude: [...DEFAULT_EXCLUDE],
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const next = argv[i + 1];
    if (key === '--zip') {
      args.zip = next;
      i += 1;
      continue;
    }
    if (key === '--dir') {
      args.dir = next;
      i += 1;
      continue;
    }
    if (key === '--source-root') {
      args.sourceRoot = next;
      i += 1;
      continue;
    }
    if (key === '--include') {
      args.include = next.split(',').map((v) => v.trim()).filter(Boolean);
      i += 1;
      continue;
    }
    if (key === '--exclude') {
      args.exclude = next.split(',').map((v) => v.trim()).filter(Boolean);
      i += 1;
      continue;
    }
    if (key === '--backup-dir') {
      args.backupDir = next;
      i += 1;
      continue;
    }
    if (key === '--apply') {
      args.apply = true;
      continue;
    }
    if (key === '--delete') {
      args.delete = true;
      continue;
    }
    if (key === '--help' || key === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${key}`);
  }

  return args;
}

async function exists(targetPath) {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
}

function isExcluded(relativePath, excludeList) {
  const segments = relativePath.split(path.sep);
  return excludeList.some((pattern) => segments.includes(pattern));
}

async function collectFromInclude(root, includes, excludes) {
  const map = new Map();

  async function walkDir(baseDir, currentRelDir) {
    const absDir = path.join(baseDir, currentRelDir);
    const entries = await readdir(absDir, { withFileTypes: true });
    for (const entry of entries) {
      const relPath = path.join(currentRelDir, entry.name);
      if (isExcluded(relPath, excludes)) {
        continue;
      }
      const absPath = path.join(baseDir, relPath);
      if (entry.isDirectory()) {
        await walkDir(baseDir, relPath);
      } else if (entry.isFile()) {
        map.set(relPath, absPath);
      }
    }
  }

  for (const includePath of includes) {
    const absInclude = path.join(root, includePath);
    if (!(await exists(absInclude))) {
      continue;
    }
    const includeStat = await stat(absInclude);
    if (includeStat.isDirectory()) {
      await walkDir(root, includePath);
    } else if (includeStat.isFile() && !isExcluded(includePath, excludes)) {
      map.set(includePath, absInclude);
    }
  }

  return map;
}

async function filesDiffer(sourcePath, targetPath) {
  const [a, b] = await Promise.all([readFile(sourcePath), readFile(targetPath)]);
  return !a.equals(b);
}

async function extractZip(zipPath) {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), 'figma-merge-'));
  // macOS `ditto -xk` is more robust than `unzip` for filenames from design exports.
  const dittoResult = spawnSync('ditto', ['-x', '-k', zipPath, tempRoot], { stdio: 'inherit' });
  if (dittoResult.status !== 0) {
    const unzipResult = spawnSync('unzip', ['-q', '-o', zipPath, '-d', tempRoot], {
      stdio: 'inherit',
    });
    if (unzipResult.status !== 0) {
      throw new Error(`Failed to unzip file: ${zipPath}`);
    }
  }
  return tempRoot;
}

async function detectSourceRoot(extractedRoot, includes) {
  const hasIncludeInRoot = await Promise.all(
    includes.map((p) => exists(path.join(extractedRoot, p))),
  );
  if (hasIncludeInRoot.some(Boolean)) {
    return extractedRoot;
  }

  const children = (await readdir(extractedRoot, { withFileTypes: true }))
    .filter((e) => e.isDirectory())
    .map((e) => path.join(extractedRoot, e.name));

  if (children.length !== 1) {
    return extractedRoot;
  }

  const child = children[0];
  const hasIncludeInChild = await Promise.all(includes.map((p) => exists(path.join(child, p))));
  if (hasIncludeInChild.some(Boolean)) {
    return child;
  }

  return extractedRoot;
}

async function backupFile(targetPath, projectRoot, backupRoot) {
  const relative = path.relative(projectRoot, targetPath);
  const backupPath = path.join(backupRoot, relative);
  await mkdir(path.dirname(backupPath), { recursive: true });
  await copyFile(targetPath, backupPath, fsConstants.COPYFILE_FICLONE);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    return;
  }
  if (!args.zip && !args.dir) {
    throw new Error('Either --zip or --dir must be provided.');
  }
  if (args.zip && args.dir) {
    throw new Error('Use one source only: either --zip or --dir.');
  }

  const projectRoot = process.cwd();
  let tempExtractRoot;
  let sourceRootBase = args.dir;
  if (args.zip) {
    sourceRootBase = await extractZip(resolveUserPath(projectRoot, args.zip));
    tempExtractRoot = sourceRootBase;
  } else {
    sourceRootBase = resolveUserPath(projectRoot, args.dir);
  }

  const sourceRoot = args.sourceRoot
    ? resolveUserPath(sourceRootBase, args.sourceRoot)
    : await detectSourceRoot(sourceRootBase, args.include);

  const [sourceFiles, targetFiles] = await Promise.all([
    collectFromInclude(sourceRoot, args.include, args.exclude),
    collectFromInclude(projectRoot, args.include, args.exclude),
  ]);

  const added = [];
  const modified = [];
  const deleted = [];
  const unchanged = [];

  for (const [relPath, sourcePath] of sourceFiles) {
    const targetPath = targetFiles.get(relPath);
    if (!targetPath) {
      added.push(relPath);
      continue;
    }
    if (await filesDiffer(sourcePath, targetPath)) {
      modified.push(relPath);
    } else {
      unchanged.push(relPath);
    }
  }

  for (const relPath of targetFiles.keys()) {
    if (!sourceFiles.has(relPath)) {
      deleted.push(relPath);
    }
  }

  console.log(`Source root: ${sourceRoot}`);
  console.log(`Project root: ${projectRoot}`);
  console.log(`\nChanged files summary:`);
  console.log(`  Added: ${added.length}`);
  console.log(`  Modified: ${modified.length}`);
  console.log(`  Deleted: ${deleted.length}`);
  console.log(`  Unchanged: ${unchanged.length}`);

  if (added.length > 0) console.log(`\n[Added]\n${added.join('\n')}`);
  if (modified.length > 0) console.log(`\n[Modified]\n${modified.join('\n')}`);
  if (deleted.length > 0) console.log(`\n[Deleted]\n${deleted.join('\n')}`);

  if (args.apply) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupRoot = args.backupDir
      ? resolveUserPath(projectRoot, args.backupDir)
      : path.join(projectRoot, '.figma-backups', timestamp);

    await mkdir(backupRoot, { recursive: true });

    for (const relPath of modified) {
      const src = sourceFiles.get(relPath);
      const target = path.join(projectRoot, relPath);
      await backupFile(target, projectRoot, backupRoot);
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(src, target);
    }

    for (const relPath of added) {
      const src = sourceFiles.get(relPath);
      const target = path.join(projectRoot, relPath);
      await mkdir(path.dirname(target), { recursive: true });
      await copyFile(src, target);
    }

    if (args.delete) {
      for (const relPath of deleted) {
        const target = path.join(projectRoot, relPath);
        await backupFile(target, projectRoot, backupRoot);
        await rm(target);
      }
    }

    console.log(`\nApplied changes. Backup saved to: ${backupRoot}`);
    if (deleted.length > 0 && !args.delete) {
      console.log('Note: Deleted files were not removed. Re-run with --delete to remove them.');
    }
  } else {
    console.log('\nDry run mode. Re-run with --apply to apply changes.');
  }

  if (tempExtractRoot) {
    await rm(tempExtractRoot, { recursive: true, force: true });
  }
}

main().catch(async (error) => {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
});
