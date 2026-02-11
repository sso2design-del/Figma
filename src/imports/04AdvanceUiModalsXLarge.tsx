import svgPaths from "./svg-nxplynebql";

function Component02ElementsCardBg() {
  return (
    <div className="absolute bg-white bottom-[2779px] left-0 rounded-[4px] top-0 w-[1138px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d={svgPaths.p26aa4c80} fill="var(--fill-0, #73777F)" id="Vector" stroke="var(--stroke-0, #73777F)" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-center relative shrink-0 w-full" data-name="Title">
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow h-[23px] justify-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[18px] tracking-[-0.6px]">
        <p className="leading-[22px]">심사보고서 미리보기</p>
      </div>
      <X />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] pt-[10px] px-[20px] relative shrink-0 w-[1138px]" data-name="Title">
      <Title />
    </div>
  );
}

function Component02ElementsCardBg1() {
  return (
    <div className="[grid-area:1_/_1] h-[3773px] ml-0 mt-0 relative rounded-[4px] w-[1138px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function DateRange() {
  return (
    <div className="content-stretch flex font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[4px] items-start leading-[24px] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]" data-name="Date Range">
      <p className="relative shrink-0">2023-06-01</p>
      <p className="relative shrink-0">~</p>
      <p className="relative shrink-0">2023-06-03</p>
    </div>
  );
}

function InputGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input Group">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[min-content]">심사 기간</p>
        <DateRange />
      </div>
    </div>
  );
}

function InputGroup1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input Group">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative text-[#212529] text-[14px] tracking-[-0.6px] w-full">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 w-[min-content]">심사 목적</p>
        <div className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 w-[min-content]">
          <p className="mb-0">{`기업은 수익성을 희생시키지 않는 ESG 투자전략을 통해 자산운용의 안정성, 수익성을 제고할 수 있게 된다. `}</p>
          <p>그리고 ESG를 고려하여 운용전략을 수립할 경우 기금의 최종 수익자에게 경제적, 사회적, 환경적 이익이 될 수 있다. 사회 및 국가 경제에 이익을 창출할 수 있다.</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Label">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">심사 항목</p>
    </div>
  );
}

function Component05FormsBasicInputMedium() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] w-[401px]" data-name="05) Forms / Basic Input / Medium">
      <ul className="block font-['Noto_Sans_KR:Regular',sans-serif] font-normal relative shrink-0">
        <li className="ms-[21px]">
          <span className="leading-[24px]">{`규제 `}</span>
        </li>
      </ul>
      <ol className="block font-['Noto_Sans_KR:Medium',sans-serif] font-medium list-decimal relative shrink-0" start="1">
        <li className="ms-[21px]">
          <span className="leading-[20px]">휴맥스EV-중대재해처벌법</span>
        </li>
      </ol>
    </div>
  );
}

function TableTop() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Top">
      <Component05FormsBasicInputMedium />
    </div>
  );
}

function InputGroups() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start ml-0 mt-0 px-[16px] py-0 relative w-[1090px]" data-name="Input Groups">
      <Label />
      <TableTop />
    </div>
  );
}

function Box() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px]">
            <p className="leading-[20px]">업무</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[16px] py-[10px] relative w-full">
          <Box />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#f6f7fb] h-[40px] min-h-[40px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center min-h-[inherit] pl-[16px] pr-0 py-0 relative size-full">
          <Header />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
    </div>
  );
}

function Box1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-0 py-[2px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-full justify-center leading-[0] relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[152px]">
            <ol className="list-decimal" start="1">
              <li className="ms-[21px]">
                <span className="leading-[20px]">사업장 개요 정리</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[48px] min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[20px] pr-[16px] py-[10px] relative size-full">
          <Box1 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="h-[164px] min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_0px_0px] border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <div className="content-stretch flex items-start min-h-[inherit] pl-[16px] pr-0 py-0 relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Box2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-0 py-[2px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-full justify-center leading-[0] relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[152px]">
            <ol className="list-decimal" start="2">
              <li className="ms-[21px]">
                <span className="leading-[20px]">위험성평가 추진계획</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[48px] min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[20px] pr-[16px] py-[10px] relative size-full">
          <Box2 />
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] h-[164px] min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start min-h-[inherit] pl-[16px] pr-0 py-0 relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Box3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-0 py-[2px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-full justify-center leading-[0] relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[152px]">
            <ol className="list-decimal" start="3">
              <li className="ms-[21px]">
                <span className="leading-[20px]">유해 위험요인</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 grow h-[48px] min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[20px] pr-[16px] py-[10px] relative size-full">
          <Box3 />
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="h-[164px] min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start min-h-[inherit] pl-[16px] pr-0 py-0 relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Box4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-0 py-[2px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-full justify-center leading-[0] relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[152px]">
            <ol className="list-decimal" start="4">
              <li className="ms-[21px]">
                <span className="leading-[20px]">안전보건 현황</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[48px] min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[20px] pr-[16px] py-[10px] relative size-full">
          <Box4 />
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] h-[164px] min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start min-h-[inherit] pl-[16px] pr-0 py-0 relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Box5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[4px] pr-0 py-[2px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold h-full justify-center leading-[0] relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[152px]">
            <ol className="list-decimal" start="5">
              <li className="ms-[21px]">
                <span className="leading-[20px]">위험성 평가 이후 개선 조치</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow h-[48px] min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] pl-[20px] pr-[16px] py-[10px] relative size-full">
          <Box5 />
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="h-[164px] min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start min-h-[inherit] pl-[16px] pr-0 py-0 relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function TableTree() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[267px]" data-name="Table Tree">
      <Header1 />
      <Cell />
      <div className="bg-[#dfe2eb] h-px shrink-0 w-full" data-name="Line" />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Box6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px]">
            <p className="leading-[20px]">업무별 활동</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[16px] py-[10px] relative w-full">
          <Box6 />
        </div>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex h-[40px] items-center justify-center min-h-[40px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <Header2 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <p className="leading-[20px] relative shrink-0 w-full">사업장 현황 정리</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">관리·감독 조직도</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">작업공정 개요·평가</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">안전보건방침 및 추진 목표</p>
      </div>
    </div>
  );
}

function Box7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-full min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box7 />
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex h-[164px] items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_0px_0px] border-solid inset-[0_-1px_0_0] pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <p className="leading-[20px] relative shrink-0 w-full">위험성평가 실시 내용</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">위험성평가 교육 실시 내용</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">위험성평가 실행계획서</p>
      </div>
    </div>
  );
}

function Box8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 grow h-full min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box8 />
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] content-stretch flex h-[164px] items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <p className="leading-[20px] relative shrink-0 w-full">안전보건상 위험정보</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">유해위험요인 발굴 근로자 참여 결과</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">유해위험작업 발굴 토의</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">유해위험요인 현황·조치</p>
      </div>
    </div>
  );
}

function Box9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-full min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box9 />
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex h-[164px] items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <p className="leading-[20px] relative shrink-0 w-full">최근 작업환경측정결과·건강진단결과 정보</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">재해사례·재해통계 등에 관한 정보</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">물질안전보건자료(MSDS)</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">{`기계기구설비 목록 & 사양서`}</p>
      </div>
    </div>
  );
}

function Box10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-full min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box10 />
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] content-stretch flex h-[164px] items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium gap-[12px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <p className="leading-[20px] relative shrink-0 w-full">공장 개선 조치</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">본사 작업환경 개선 조치</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">본사 개선 조치</p>
      </div>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 w-full">
        <p className="leading-[20px]">콜센터 개선 조치</p>
      </div>
    </div>
  );
}

function Box11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-full min-h-[48px] min-w-px relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box11 />
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="content-stretch flex h-[164px] items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-[0_-1px_-1px_0] pointer-events-none" />
      <Container9 />
    </div>
  );
}

function TableTree1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[256px]" data-name="Table Tree">
      <Header3 />
      <Cell5 />
      <div className="bg-[#dfe2eb] h-px shrink-0 w-full" data-name="Line" />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
    </div>
  );
}

function Box12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] pr-0 py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px]">
            <p className="leading-[20px]">규제 항목</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[20px] pr-[16px] py-[10px] relative w-full">
          <Box12 />
        </div>
      </div>
    </div>
  );
}

function Header5() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex h-[40px] items-center justify-center min-h-[40px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_0px_1px] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Header4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <ol className="block list-decimal relative shrink-0 w-full" start="1">
        <li className="ms-[21px]">
          <span className="leading-[24px]">개념 (2개 항목)</span>
        </li>
      </ol>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="2">
          <li className="ms-[21px]">
            <span className="leading-[24px]">안전 및 보건 확보의무 (22개 항목)</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="3">
          <li className="ms-[21px]">
            <span className="leading-[24px]">도급,용역,위탁 등 안전·보건 확보의무</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="4">
          <li className="ms-[21px]">
            <span className="leading-[24px]">서면보관</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="5">
          <li className="ms-[21px]">
            <span className="leading-[24px]">안전보건교육</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Box13() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow min-h-[48px] min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box13 />
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <Container10 />
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <ol className="block list-decimal relative shrink-0 w-full" start="1">
        <li className="ms-[21px]">
          <span className="leading-[24px]">개념 (2개 항목)</span>
        </li>
      </ol>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="2">
          <li className="ms-[21px]">
            <span className="leading-[24px]">안전 및 보건 확보의무 (22개 항목)</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="3">
          <li className="ms-[21px]">
            <span className="leading-[24px]">도급,용역,위탁 등 안전·보건 확보의무</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="4">
          <li className="ms-[21px]">
            <span className="leading-[24px]">서면보관</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="5">
          <li className="ms-[21px]">
            <span className="leading-[24px]">안전보건교육</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Box14() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text6 />
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow min-h-[48px] min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box14 />
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_0px_1px] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[4px] grow items-start leading-[0] min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]" data-name="Text">
      <ol className="block list-decimal relative shrink-0 w-full" start="1">
        <li className="ms-[21px]">
          <span className="leading-[24px]">개념 (2개 항목)</span>
        </li>
      </ol>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="2">
          <li className="ms-[21px]">
            <span className="leading-[24px]">안전 및 보건 확보의무 (22개 항목)</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="3">
          <li className="ms-[21px]">
            <span className="leading-[24px]">도급,용역,위탁 등 안전·보건 확보의무</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="4">
          <li className="ms-[21px]">
            <span className="leading-[24px]">서면보관</span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 w-full">
        <ol className="list-decimal" start="5">
          <li className="ms-[21px]">
            <span className="leading-[24px]">안전보건교육</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Box15() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px px-0 py-[2px] relative shrink-0" data-name="Box">
      <Text7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow min-h-[48px] min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex items-start min-h-[inherit] px-[24px] py-[12px] relative size-full">
        <Box15 />
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_0px_1px] border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <Container12 />
    </div>
  );
}

function TableTree2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Table Tree">
      <Header5 />
      <Cell10 />
      <div className="bg-[#dfe2eb] h-px shrink-0 w-full" data-name="Line" />
      <Cell11 />
      <Cell12 />
      <Cell11 />
      <Cell12 />
    </div>
  );
}

function TableTrees() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start ml-0 mt-[68px] relative w-[1090px]" data-name="Table Trees">
      <TableTree />
      <TableTree1 />
      <TableTree2 />
    </div>
  );
}

function Thread() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Thread">
      <InputGroups />
      <TableTrees />
    </div>
  );
}

function Account() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">김관리</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px] text-nowrap">(본사-안전관리팀)</p>
      </div>
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="User">
      <Account />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center px-0 py-[3px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[14px]">현장</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label1 />
    </div>
  );
}

function BasicBadge() {
  return (
    <div className="bg-[#73777f] content-stretch flex gap-[8px] h-[20px] items-center px-[8px] py-0 relative rounded-[100px] shrink-0" data-name="Basic Badge">
      <Container13 />
    </div>
  );
}

function Account1() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">김현장</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px] text-nowrap">(수내사무실-안전관리팀)</p>
      </div>
    </div>
  );
}

function User1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="User">
      <BasicBadge />
      <Account1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center px-0 py-[3px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[14px]">현장</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label2 />
    </div>
  );
}

function BasicBadge1() {
  return (
    <div className="bg-[#73777f] content-stretch flex gap-[8px] h-[20px] items-center px-[8px] py-0 relative rounded-[100px] shrink-0" data-name="Basic Badge">
      <Container14 />
    </div>
  );
}

function Account2() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">나안전</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px] text-nowrap">(수내사무실-안전관리팀)</p>
      </div>
    </div>
  );
}

function User2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="User">
      <BasicBadge1 />
      <Account2 />
    </div>
  );
}

function Account3() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">이심사</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px] text-nowrap">(본사-안전관리팀)</p>
      </div>
    </div>
  );
}

function User3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="User">
      <Account3 />
    </div>
  );
}

function Users() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Users">
      <div aria-hidden="true" className="absolute border border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[14px] py-[10px] relative w-full">
        <User />
        <User1 />
        <User2 />
        <User3 />
      </div>
    </div>
  );
}

function InputGroup2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input Group">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-full">심사 대상</p>
        <Users />
      </div>
    </div>
  );
}

function Account4() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap">이심사</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0">
        <p className="leading-[24px] text-nowrap">(본사-안전관리팀)</p>
      </div>
    </div>
  );
}

function User4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="User">
      <Account4 />
    </div>
  );
}

function InputGroup3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input Group">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative w-full">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[min-content]">심사자</p>
        <User4 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[40px] items-start ml-0 mt-[54px] px-0 py-[20px] relative w-[1090px]" data-name="Container">
      <InputGroup />
      <InputGroup1 />
      <Thread />
      <InputGroup2 />
      <InputGroup3 />
    </div>
  );
}

function Title2() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-[38px] items-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[18px] tracking-[-0.6px]">
        <ol className="list-decimal" start="1">
          <li className="ms-[27px]">
            <span className="leading-[24px]">심사 개요</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[8px] relative w-full">
          <Title2 />
        </div>
      </div>
    </div>
  );
}

function CardTop() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(206,212,218,0.12)] content-stretch flex flex-col h-[54px] items-start ml-0 mt-0 relative rounded-tl-[4px] rounded-tr-[4px] w-[1090px]" data-name="Card Top">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <CardTitle />
    </div>
  );
}

function Thread1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[24px] mt-[180px] place-items-start relative" data-name="Thread">
      <Container15 />
      <div className="[grid-area:1_/_1] border border-[#dfe2eb] border-solid h-[1465px] ml-0 mt-[54px] w-[1090px]" data-name="Border" />
      <CardTop />
    </div>
  );
}

function InputGroup4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input Group">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-0 relative text-[#212529] tracking-[-0.6px] w-full">
        <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] min-w-full relative shrink-0 text-[14px] w-[min-content]">심사결과 요약</p>
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-[14px] text-nowrap">
          <span className="leading-[24px]">{`심사항목  `}</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] tracking-[-0.6px]">{`전체 `}</span>
          <span className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] tracking-[-0.6px]">14개</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] tracking-[-0.6px]">{`  /  `}</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] text-[#0561a4] tracking-[-0.6px]">{`적합 `}</span>
          <span className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] text-[#0561a4] tracking-[-0.6px]">13건</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] text-[#0561a4] tracking-[-0.6px]"> </span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] tracking-[-0.6px]">{` /  `}</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[20px] text-[#ff5812] tracking-[-0.6px]">{`부적합 `}</span>
          <span className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[20px] text-[#ff5812] tracking-[-0.6px]">1건</span>
        </p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="content-stretch flex items-start px-[20px] py-0 relative w-full">
        <p className="basis-0 font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]">심사 항목</p>
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] h-[68px] relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start px-[24px] py-[20px] relative size-full">
        <p className="basis-0 font-['Noto_Sans_KR:Bold',sans-serif] font-bold grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[22px] text-center tracking-[-0.6px]">ISO45001(안전보건경영시스템) 내부심사 체크리스트</p>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section-Heading">
      <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative w-full">
        <Title3 />
      </div>
    </div>
  );
}

function Cell13() {
  return (
    <div className="content-stretch flex h-[50px] items-center min-w-[160px] px-[28px] py-[12px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white tracking-[-0.6px]">
        <p className="leading-[24px]">응답</p>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="basis-0 grow h-[50px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[28px] py-[12px] relative size-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[16px] text-center text-white tracking-[-0.6px]">
            <p className="leading-[24px]">의견</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Headings() {
  return (
    <div className="bg-[#73777f] content-stretch flex items-start relative shrink-0 w-full" data-name="Headings">
      <Cell13 />
      <Cell14 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[14px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[16px] tracking-[-0.6px]">
            <p className="leading-[24px]">관리부서</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell15 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[863px]" data-name="Paragraph">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">조달 및 구매관리 절차는 수립되어 있는가?</p>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell16 />
      <Cell17 />
      <Cell18 />
    </div>
  );
}

function Cell19() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell19 />
      <Cell20 />
    </div>
  );
}

function Cell21() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#ff5812] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">부적합</p>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[1292px]">
            <p className="leading-[24px]">리스크 관련 미비, 보완 필요</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell21 />
      <Cell22 />
    </div>
  );
}

function Cell23() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[1292px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell23 />
      <Cell24 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[863px]" data-name="Paragraph">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">내부 심사원은 독립된 자에 의해 수행되고 있는가?</p>
      </div>
    </div>
  );
}

function Cell25() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Cell26() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell27() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell25 />
      <Cell26 />
      <Cell27 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">내부심사 결과 보고서에 대해 최고 경영자를 포함한 모든 조직 구성원과 의사소통이 되는가?</p>
      </div>
    </div>
  );
}

function Cell28() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell30() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell28 />
      <Cell29 />
      <Cell30 />
    </div>
  );
}

function Cell31() {
  return (
    <div className="content-stretch flex items-center min-w-[547px] px-[24px] py-[14px] relative shrink-0 w-[911px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">시공·생산부서</p>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell31 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[863px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">작업장의 안전조치를 위한 작업 구역 설정 및 현장 관리 상태는 양호한가?</p>
      </div>
    </div>
  );
}

function Cell32() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Cell33() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell34() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell32 />
      <Cell33 />
      <Cell34 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[863px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">작업장의 안전조치를 위한 통로 구분, 비상구 설치 및 안전표지 상태는 양호한가?</p>
      </div>
    </div>
  );
}

function Cell35() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Cell36() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row9() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell35 />
      <Cell36 />
      <Cell37 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">작업장의 안전조치를 위해 바닥, 개구부 등의 추락방지 및 낙하물 관리상태는 양호한가?</p>
      </div>
    </div>
  );
}

function Cell38() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Cell39() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell38 />
      <Cell39 />
      <Cell40 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">중량물 운반기에 대한 안전조치를 위한 동력 운반관리 작업지침에 따른 내용은 준수되고 있는가?</p>
      </div>
    </div>
  );
}

function Cell41() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Cell42() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row11() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell41 />
      <Cell42 />
      <Cell43 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">중량물 운반기에 대한 안전조치를 위한 인력 운반관리 기준의 설정 및 준수상태는 양호한가?</p>
      </div>
    </div>
  );
}

function Cell44() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Cell45() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell46() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell44 />
      <Cell45 />
      <Cell46 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[863px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">개인 보호구 지급 및 지급 관리대장은 제대로 작성 관리되고 있는가?</p>
      </div>
    </div>
  );
}

function Cell47() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Cell48() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell49() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell47 />
      <Cell48 />
      <Cell49 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[863px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">개인 보호구의 예비품은 보유하고 있는가?</p>
      </div>
    </div>
  );
}

function Cell50() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Cell51() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell50 />
      <Cell51 />
      <Cell52 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full">
        <p className="leading-[24px]">위험기계, 기구에 대한 방호 조치로 설비에 대한 파악 및 설치, 운영 관리는 되고 있는가?</p>
      </div>
    </div>
  );
}

function Cell53() {
  return (
    <div className="basis-0 grow min-h-px min-w-[547px] relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[24px] py-[16px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Cell54() {
  return (
    <div className="content-stretch flex items-center min-w-[160px] px-[24px] py-[16px] relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[16px] tracking-[-0.6px]">
        <p className="leading-[24px]">적합</p>
      </div>
    </div>
  );
}

function Cell55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#ced4da] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-[381px]">
            <p className="leading-[24px]">고려되어 반영되어 있음</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row15() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell53 />
      <Cell54 />
      <Cell55 />
    </div>
  );
}

function ReportTables() {
  return (
    <div className="relative shrink-0 w-full" data-name="Report Tables">
      <div className="content-stretch flex flex-col items-start pb-0 pt-[20px] px-[20px] relative w-full">
        <Headings />
        <Row />
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
        <Row5 />
        <Row6 />
        <Row7 />
        <Row8 />
        <Row9 />
        <Row10 />
        <Row11 />
        <Row12 />
        <Row13 />
        <Row14 />
        <Row15 />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <SectionHeading />
      <ReportTables />
    </div>
  );
}

function InputGroup5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Group">
      <Label3 />
      <Table />
    </div>
  );
}

function UserCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="user-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user-check">
          <g id="Subtract">
            <path d={svgPaths.p381af080} fill="var(--fill-0, #0561A4)" />
            <path d={svgPaths.p1e1a5900} fill="var(--fill-0, #0561A4)" />
            <path clipRule="evenodd" d={svgPaths.p173fc100} fill="var(--fill-0, #0561A4)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Label">
      <UserCheck />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0561a4] text-[16px] text-nowrap tracking-[-0.6px]">종합 의견</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start px-[16px] py-0 relative w-full">
        <p className="basis-0 font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px]">본사 및 현장 공사감독 및 시공사관계자 면담결과 일부 구성원의 시스템에대한 이해수준, 매뉴얼에 대한 숙지정도가 다소 낮은 것으로 판단 됨.</p>
      </div>
    </div>
  );
}

function Paaragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Paaragraph">
      <ol className="block font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] list-decimal relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full" start="1">
        <li className="ms-[24px]">
          <span className="leading-[24px]">안전보건경영시스템 이해수준 향상 및 매뉴얼 숙지 대책 필요 개선</span>
        </li>
      </ol>
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start px-[16px] py-0 relative w-full">
        <p className="basis-0 font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px]">내부심사는 내부직원이 수행하여 당사의 특성을 반영한 안전보건경영시스템의문제점 파악 및 개선을 통한 수준향상에 목적이 있으므로, 안전보건활동추진계획의 실행여부 성과측정과 명확한 구분 실시 필요</p>
      </div>
    </div>
  );
}

function Paaragraph1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Paaragraph">
      <ol className="block font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] list-decimal relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full" start="2">
        <li className="ms-[24px]">
          <span className="leading-[24px]">내부심사 활동 강화 필요</span>
        </li>
      </ol>
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start px-[16px] py-0 relative w-full">
        <p className="basis-0 font-['Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px]">현장별 안전보건 목표는 있으나 일부 현장의 목표는 구체성이 부족하므로현장 특성을 반영한 구체적인 목표 설정이 되도록 관리 필요.</p>
      </div>
    </div>
  );
}

function Paaragraph2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Paaragraph">
      <ol className="block font-['Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] list-decimal relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full" start="3">
        <li className="ms-[24px]">
          <span className="leading-[24px]">현장 안전보건목표 구체적 작성 필요</span>
        </li>
      </ol>
      <Text10 />
    </div>
  );
}

function InputGroup6() {
  return (
    <div className="bg-[rgba(5,97,164,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Input Group">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <Label4 />
        <Paaragraph />
        <Paaragraph1 />
        <Paaragraph2 />
      </div>
    </div>
  );
}

function Comment() {
  return (
    <div className="content-stretch flex flex-col items-start px-[20px] py-0 relative shrink-0 w-[1090px]" data-name="Comment">
      <InputGroup6 />
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[40px] items-start ml-0 mt-[54px] px-0 py-[20px] relative w-[1090px]" data-name="Container">
      <InputGroup4 />
      <InputGroup5 />
      <Comment />
    </div>
  );
}

function Title4() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-[38px] items-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[18px] tracking-[-0.6px]">
        <ol className="list-decimal" start="2">
          <li className="ms-[27px]">
            <span className="leading-[24px]">심사 결과</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[8px] relative w-full">
          <Title4 />
        </div>
      </div>
    </div>
  );
}

function CardTop1() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(206,212,218,0.12)] content-stretch flex flex-col h-[54px] items-start ml-0 mt-0 relative rounded-tl-[4px] rounded-tr-[4px] w-[1090px]" data-name="Card Top">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <CardTitle1 />
    </div>
  );
}

function Thread2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[24px] mt-[1723px] place-items-start relative" data-name="Thread">
      <Container16 />
      <div className="[grid-area:1_/_1] border border-[#dfe2eb] border-solid h-[1650px] ml-0 mt-[54px] w-[1090px]" data-name="Border" />
      <CardTop1 />
    </div>
  );
}

function InputGroup7() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] relative shrink-0 text-[#212529] text-[16px] tracking-[-0.6px] w-full" data-name="Input Group">
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">2024년 2월 재인증심사 대비 지속적인 모니터링 및 피드백 실시</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">전문성 강화를 위한 안전보건경영 우수기관 벤치마킹 추진 (2024년도 별도예산 반영조치 : 관외여비)</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">내부 심사 활동에 따른 마일리지 및 전문서적 지원 등 인센티브 부여</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">작업장 안전분야 : 안전작업허가제도 운영</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">시설물 안전분야 : 매월 안전점검의 날 실시</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 w-full">
        <li className="ms-[24px]">
          <span className="leading-[24px]">기타 안전분야 : 안전제안방 운영, 체험식 재난 안전교육 실시</span>
        </li>
      </ul>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[54px] p-[20px] relative w-[1090px]" data-name="Container">
      <InputGroup7 />
    </div>
  );
}

function Title5() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-[38px] items-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#001b3d] text-[18px] tracking-[-0.6px]">
        <ol className="list-decimal" start="3">
          <li className="ms-[27px]">
            <span className="leading-[24px]">향후 계획</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card-Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[8px] relative w-full">
          <Title5 />
        </div>
      </div>
    </div>
  );
}

function CardTop2() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(206,212,218,0.12)] content-stretch flex flex-col h-[54px] items-start ml-0 mt-0 relative rounded-tl-[4px] rounded-tr-[4px] w-[1090px]" data-name="Card Top">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[1px_1px_0px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <CardTitle2 />
    </div>
  );
}

function Thread3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[24px] mt-[3451px] place-items-start relative" data-name="Thread">
      <Container17 />
      <div className="[grid-area:1_/_1] border border-[#dfe2eb] border-solid h-[244px] ml-0 mt-[54px] w-[1090px]" data-name="Border" />
      <CardTop2 />
    </div>
  );
}

function Title6() {
  return (
    <div className="bg-[rgba(5,97,164,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start px-[24px] py-[20px] relative w-full">
        <p className="basis-0 font-['Noto_Sans_KR:Bold',sans-serif] font-bold grow h-[28px] leading-[28px] min-h-px min-w-px relative shrink-0 text-[#0561a4] text-[22px] text-center tracking-[-0.6px]">상반기 ESG 규제 심사 결과 보고</p>
      </div>
    </div>
  );
}

function FileTypePdf() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="file_type_pdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p1d6bd880} fill="var(--fill-0, #9D9C9B)" fillRule="evenodd" id="doc" />
          <g id="box">
            <path d={svgPaths.p32fef400} fill="var(--fill-0, #DB4032)" id="box_2" />
            <g id="PDF">
              <path d={svgPaths.p3b514a80} fill="white" />
              <path d={svgPaths.p2dda5280} fill="white" />
              <path d={svgPaths.p14b4ab80} fill="white" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function FileName() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="File Name">
      <FileTypePdf />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">2023 상반기 ESG 규제 심사 결과 보고 결과보고_1.pdf</p>
      </div>
    </div>
  );
}

function AttachedFile() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Attached File">
      <FileName />
    </div>
  );
}

function AttachedFile1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-[502px]" data-name="Attached File">
      <AttachedFile />
    </div>
  );
}

function FileTypePdf1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="file_type_pdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p1d6bd880} fill="var(--fill-0, #9D9C9B)" fillRule="evenodd" id="doc" />
          <g id="box">
            <path d={svgPaths.p32fef400} fill="var(--fill-0, #DB4032)" id="box_2" />
            <g id="PDF">
              <path d={svgPaths.p3b514a80} fill="white" />
              <path d={svgPaths.p2dda5280} fill="white" />
              <path d={svgPaths.p14b4ab80} fill="white" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function FileName1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="File Name">
      <FileTypePdf1 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">2023 상반기 ESG 규제 심사 결과 보고 결과보고_2.pdf</p>
      </div>
    </div>
  );
}

function AttachedFile2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Attached File">
      <FileName1 />
    </div>
  );
}

function AttachedFile3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-[502px]" data-name="Attached File">
      <AttachedFile2 />
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex gap-[32px] h-[24px] items-start relative shrink-0 w-full" data-name="Row">
      <AttachedFile1 />
      <AttachedFile3 />
    </div>
  );
}

function FileTypePdf2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="file_type_pdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path clipRule="evenodd" d={svgPaths.p1d6bd880} fill="var(--fill-0, #9D9C9B)" fillRule="evenodd" id="doc" />
          <g id="box">
            <path d={svgPaths.p32fef400} fill="var(--fill-0, #DB4032)" id="box_2" />
            <g id="PDF">
              <path d={svgPaths.p3b514a80} fill="white" />
              <path d={svgPaths.p2dda5280} fill="white" />
              <path d={svgPaths.p14b4ab80} fill="white" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function FileName2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="File Name">
      <FileTypePdf2 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">2023 상반기 ESG 규제 심사 결과 보고 결과보고_3.pdf</p>
      </div>
    </div>
  );
}

function AttachedFile4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Attached File">
      <FileName2 />
    </div>
  );
}

function AttachedFile5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-[502px]" data-name="Attached File">
      <AttachedFile4 />
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <AttachedFile5 />
    </div>
  );
}

function FileList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="File List">
      <Row16 />
      <Row17 />
    </div>
  );
}

function AttachedFile6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Attached File">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <FileList />
      </div>
    </div>
  );
}

function SectionHeading1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-0 pb-0 pt-[24px] px-[24px] relative w-[1138px]" data-name="Section-Heading">
      <Title6 />
      <AttachedFile6 />
    </div>
  );
}

function Threads() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Threads">
      <Component02ElementsCardBg1 />
      <Thread1 />
      <Thread2 />
      <Thread3 />
      <SectionHeading1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="Container">
      <Title1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1138 1">
            <path d="M0 0.5H1138" id="Line" stroke="var(--stroke-0, #DFE2EB)" />
          </svg>
        </div>
      </div>
      <Threads />
    </div>
  );
}

export default function Component04AdvanceUiModalsXLarge() {
  return (
    <div className="relative rounded-[4px] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.12)] size-full" data-name="04) Advance UI / Modals / XLarge">
      <Component02ElementsCardBg />
      <Container18 />
    </div>
  );
}