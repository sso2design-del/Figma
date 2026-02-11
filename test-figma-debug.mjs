/**
 * Figma API 디버그 테스트
 * 토큰 권한과 접근 가능한 파일 확인
 */

import { config } from 'dotenv';
config();

const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FILE_KEY = 'uLN8hMLUjPOaR035FSB7BT';

console.log('🔍 Figma API 디버그 테스트\n');

// 여러 엔드포인트 시도
async function testEndpoints() {
  const tests = [
    {
      name: '1. 파일 정보 (/files/)',
      url: `https://api.figma.com/v1/files/${FILE_KEY}`,
    },
    {
      name: '2. 파일 노드 (/files/ with nodes)',
      url: `https://api.figma.com/v1/files/${FILE_KEY}?depth=1`,
    },
    {
      name: '3. 사용자 정보 (/me)',
      url: `https://api.figma.com/v1/me`,
    },
  ];

  for (const test of tests) {
    console.log(`\n${test.name}`);
    console.log(`URL: ${test.url}`);

    try {
      const response = await fetch(test.url, {
        headers: {
          'X-Figma-Token': FIGMA_API_TOKEN,
        },
      });

      console.log(`상태: ${response.status} ${response.statusText}`);

      if (response.ok) {
        const data = await response.json();
        console.log('✅ 성공!');

        // 응답 데이터 샘플 출력
        if (data.name) console.log(`   파일명: ${data.name}`);
        if (data.email) console.log(`   이메일: ${data.email}`);
        if (data.handle) console.log(`   핸들: ${data.handle}`);
        if (data.lastModified) console.log(`   수정일: ${data.lastModified}`);

        // 전체 응답 구조 출력 (처음 200자)
        const jsonStr = JSON.stringify(data, null, 2);
        if (jsonStr.length > 200) {
          console.log(`\n응답 미리보기:\n${jsonStr.substring(0, 200)}...`);
        } else {
          console.log(`\n전체 응답:\n${jsonStr}`);
        }
      } else {
        const errorText = await response.text();
        console.log(`❌ 실패`);
        console.log(`   오류: ${errorText.substring(0, 200)}`);
      }
    } catch (error) {
      console.log(`❌ 네트워크 오류: ${error.message}`);
    }
  }

  // 토큰 형식 검증
  console.log('\n\n📋 토큰 정보:');
  console.log(`   형식: ${FIGMA_API_TOKEN.substring(0, 4)}...(${FIGMA_API_TOKEN.length}자)`);
  console.log(`   접두사: ${FIGMA_API_TOKEN.split('_')[0]}_`);

  if (FIGMA_API_TOKEN.startsWith('figd_')) {
    console.log('   ✓ 일반 Personal Access Token');
  } else if (FIGMA_API_TOKEN.startsWith('igd_')) {
    console.log('   ⚠️  비표준 토큰 형식 (권한이 제한될 수 있음)');
  } else {
    console.log('   ❓ 알 수 없는 토큰 형식');
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n💡 해결 방법:');
  console.log('   1. Figma에서 새 Personal Access Token 생성');
  console.log('      → https://www.figma.com/settings');
  console.log('      → "Personal access tokens" 섹션');
  console.log('      → "Generate new token" 클릭');
  console.log('\n   2. 파일이 /make/ 경로면:');
  console.log('      → FigJam 파일은 API 접근이 제한될 수 있음');
  console.log('      → /design/ 경로의 일반 Figma 파일을 사용하세요');
  console.log('\n   3. 파일 권한 확인:');
  console.log('      → 해당 파일을 직접 열 수 있는지 확인');
  console.log('      → 팀/프로젝트 멤버인지 확인');
}

testEndpoints();
