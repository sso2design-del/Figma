/**
 * Figma API 테스트 스크립트
 * 토큰과 연결이 제대로 작동하는지 확인합니다.
 */

import { config } from 'dotenv';
config();

const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FILE_KEY = process.env.VITE_FIGMA_FILE_KEY || 'uLN8hMLUjPOaR035FSB7BT';

console.log('🎨 Figma API 테스트 시작...\n');

if (!FIGMA_API_TOKEN) {
  console.error('❌ FIGMA_API_TOKEN이 설정되지 않았습니다.');
  console.error('   .env 파일을 확인해주세요.');
  process.exit(1);
}

console.log(`✓ API 토큰: ${FIGMA_API_TOKEN.substring(0, 10)}...`);
console.log(`✓ 파일 키: ${FILE_KEY}\n`);

async function testFigmaAPI() {
  try {
    // 1. 파일 정보 가져오기
    console.log('📥 파일 정보 가져오는 중...');
    const fileResponse = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: {
        'X-Figma-Token': FIGMA_API_TOKEN,
      },
    });

    if (!fileResponse.ok) {
      throw new Error(`API 오류: ${fileResponse.status} ${fileResponse.statusText}`);
    }

    const fileData = await fileResponse.json();

    console.log('\n✅ 파일 정보 성공!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📄 파일 이름: ${fileData.name}`);
    console.log(`🕐 마지막 수정: ${fileData.lastModified}`);
    console.log(`📌 버전: ${fileData.version}`);
    console.log(`🔗 썸네일: ${fileData.thumbnailUrl || 'N/A'}`);

    // 2. 문서 구조 탐색
    const document = fileData.document;
    console.log(`\n📂 문서 구조:`);
    console.log(`   루트 노드: ${document.name} (${document.type})`);

    if (document.children) {
      console.log(`   하위 페이지: ${document.children.length}개`);
      document.children.slice(0, 5).forEach((page, i) => {
        const childCount = page.children ? page.children.length : 0;
        console.log(`      ${i + 1}. ${page.name} (${page.type}) - ${childCount}개 요소`);
      });
      if (document.children.length > 5) {
        console.log(`      ... 외 ${document.children.length - 5}개 더`);
      }
    }

    // 3. 컴포넌트 가져오기
    console.log('\n📦 컴포넌트 가져오는 중...');
    const componentsResponse = await fetch(
      `https://api.figma.com/v1/files/${FILE_KEY}/components`,
      {
        headers: {
          'X-Figma-Token': FIGMA_API_TOKEN,
        },
      }
    );

    if (componentsResponse.ok) {
      const componentsData = await componentsResponse.json();
      const components = componentsData.meta?.components || [];

      console.log(`✅ 컴포넌트: ${components.length}개 발견`);
      if (components.length > 0) {
        components.slice(0, 5).forEach((comp, i) => {
          console.log(`   ${i + 1}. ${comp.name}`);
        });
        if (components.length > 5) {
          console.log(`   ... 외 ${components.length - 5}개 더`);
        }
      }
    }

    // 4. 스타일 가져오기
    console.log('\n🎨 스타일 가져오는 중...');
    const stylesResponse = await fetch(
      `https://api.figma.com/v1/files/${FILE_KEY}/styles`,
      {
        headers: {
          'X-Figma-Token': FIGMA_API_TOKEN,
        },
      }
    );

    if (stylesResponse.ok) {
      const stylesData = await stylesResponse.json();
      const styles = stylesData.meta?.styles || [];

      console.log(`✅ 스타일: ${styles.length}개 발견`);
      if (styles.length > 0) {
        const stylesByType = {};
        styles.forEach(style => {
          stylesByType[style.style_type] = (stylesByType[style.style_type] || 0) + 1;
        });
        Object.entries(stylesByType).forEach(([type, count]) => {
          console.log(`   ${type}: ${count}개`);
        });
      }
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ 모든 테스트 성공!');
    console.log('🎉 Figma API 연결이 정상적으로 작동합니다.');

  } catch (error) {
    console.error('\n❌ 오류 발생:');
    console.error(error.message);

    if (error.message.includes('403')) {
      console.error('\n💡 해결 방법:');
      console.error('   - API 토큰이 유효한지 확인하세요');
      console.error('   - 파일에 접근 권한이 있는지 확인하세요');
    } else if (error.message.includes('404')) {
      console.error('\n💡 해결 방법:');
      console.error('   - 파일 키가 올바른지 확인하세요');
      console.error('   - URL에서 파일 키를 다시 확인하세요');
    }

    process.exit(1);
  }
}

testFigmaAPI();
