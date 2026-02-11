# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based CompliLaw application with comprehensive Figma integration. The project consists of:
1. **Main React App** - Landing page and insight management system
2. **Figma MCP Server** - Model Context Protocol server for Figma API integration
3. **Figma Integration Layer** - React components, hooks, and client library for Figma

Original Figma design: https://www.figma.com/design/uLN8hMLUjPOaR035FSB7BT/complilaw-project

## Development Commands

### Main React Application

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run dev

# Build for production
npm run build
```

### Figma MCP Server

```bash
# Navigate to MCP server
cd mcp-server

# Install dependencies
npm install

# Build the server
npm run build

# Development mode (with hot reload)
npm run dev

# Production mode
npm start
```

## Architecture

### Dual-Project Structure

The codebase has two distinct parts that work together:

1. **React Frontend** (`/src`) - Vite-based React app
2. **MCP Server** (`/mcp-server`) - Standalone Node.js server for Figma API

### Figma Integration Architecture

Three integration layers work together:

1. **Figma Client** (`src/lib/figma-client.ts`)
   - Core API client (`FigmaClient` class)
   - Type definitions for Figma API responses
   - Utility methods: `searchNodes()`, `rgbaToCss()`, `rgbaToHex()`
   - Methods: `getFile()`, `getComponents()`, `getStyles()`, `exportImage()`, `getComments()`

2. **React Hooks** (`src/hooks/useFigma.ts`)
   - `useFigmaFile()` - Fetch file data with loading/error states
   - `useFigmaComponents()` - Get components list
   - `useFigmaStyles()` - Get design tokens/styles
   - `useFigmaExport()` - Export nodes as images
   - `useFigmaClient()` - Manage client instance
   - All hooks support `autoFetch` option and return `refetch()` method

3. **React Components** (`src/components/figma/`)
   - `FigmaImage` - Display exported Figma nodes as images
   - `FigmaDesignTokens` - Display design tokens (colors, text styles)
   - `ImageWithFallback` - Image with error fallback

4. **MCP Server** (`mcp-server/src/index.ts`)
   - Implements Model Context Protocol for AI assistants
   - Tools: `get_figma_file`, `get_figma_components`, `get_figma_styles`, `export_figma_node`, `get_figma_comments`
   - Requires `FIGMA_API_TOKEN` environment variable

### Component Organization

```
src/
├── components/
│   ├── common/         # Shared utilities (ScrollToTop)
│   ├── figma/          # Figma integration components
│   ├── insight/        # Insight pages (list, detail)
│   ├── landing/        # Landing page sections
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Radix UI components (shadcn/ui)
├── hooks/              # React hooks (useFigma)
├── lib/                # Core libraries (figma-client)
├── pages/              # Route pages (Home, Insight*, Root)
└── routes.ts           # React Router configuration
```

### Routing Structure

Routes defined in `src/routes.ts` using React Router:
- `/` - Home page (landing)
- `/insight` - Insight list
- `/insight/:id` - Insight detail

Root layout (`pages/Root.tsx`) wraps all routes with common layout (Navbar, Footer).

## Configuration

### Path Aliases

Vite is configured with `@` alias pointing to `src/`:

```typescript
import { FigmaImage } from '@/components/figma';
import { Button } from '@/components/ui/button';
```

### Figma Asset Aliases

The project includes special `figma:asset/*` path aliases in `vite.config.ts` that map Figma-exported assets to the `src/assets/` directory. These are auto-generated during Figma export.

### Environment Variables

**Main App:**
```env
FIGMA_API_TOKEN=your_token
VITE_FIGMA_FILE_KEY=your_file_key  # Optional default
```

**MCP Server:**
```env
FIGMA_API_TOKEN=your_token  # Required
```

Get Figma API token: https://www.figma.com/developers/api#access-tokens

### Build Configuration

- **Base Path**: `/Figma/` (configured for GitHub Pages deployment)
- **Dev Server**: Port 3000, auto-opens browser
- **Build Target**: ESNext
- **React Plugin**: SWC for fast refresh

## Key Technical Details

### Figma File Keys

Extract from Figma URLs:
```
https://www.figma.com/design/FILE_KEY/File-Name
                              ^^^^^^^^
```

### MCP Server Integration

To use with Claude Desktop, add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "figma": {
      "command": "node",
      "args": ["/absolute/path/to/Figma/mcp-server/dist/index.js"],
      "env": {
        "FIGMA_API_TOKEN": "your_token"
      }
    }
  }
}
```

### Supabase Integration

The app includes Supabase backend support (`@supabase/supabase-js`). Server functions are in `src/supabase/functions/`.

## Working with Figma

### Using the Client Library

```typescript
import { createFigmaClient } from '@/lib/figma-client';

const client = createFigmaClient(token);
const file = await client.getFile(fileKey);
const frames = client.searchNodes(file.document,
  node => node.type === 'FRAME'
);
```

### Using Hooks

```typescript
const { data, loading, error, refetch } = useFigmaFile(fileKey, {
  apiToken: token,
  autoFetch: true
});
```

### Exporting Images

```typescript
const { exportNode } = useFigmaExport(fileKey, { apiToken: token });
const imageUrl = await exportNode(nodeId, {
  format: 'png',
  scale: 2
});
```

## Dependencies

- **React**: 18.3.1
- **Vite**: 6.3.5
- **UI**: Radix UI (shadcn/ui components)
- **Routing**: React Router (latest)
- **Styling**: Tailwind CSS (via shadcn/ui)
- **Backend**: Supabase
- **MCP SDK**: @modelcontextprotocol/sdk ^1.0.4
