import svgPaths from "./svg-tz754ho8vh";
import imgUser from "figma:asset/6f47b4d031aff2ba2d965fe9a6d0eb02a3e53237.png";

function Background() {
  return <div className="absolute bg-[#f3f6f9] h-[1865px] left-[252px] top-0 w-[1668px]" data-name="Background" />;
}

function Component02ElementsCardBg() {
  return (
    <div className="absolute h-[246px] left-[276px] rounded-[4px] top-[95px] w-[1072px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <p className="basis-0 font-['Noto_Sans_KR:Bold',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#001b3d] text-[18px] tracking-[-0.6px]">알림</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <circle cx="20" cy="20" fill="var(--fill-0, #73777F)" fillOpacity="0.12" id="Ellipse" r="20" />
          <g id="Announcement">
            <path d={svgPaths.p30795e00} fill="var(--fill-0, #73777F)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">공지</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label />
    </div>
  );
}

function BasicBadge() {
  return (
    <div className="bg-[#73777f] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <BasicBadge />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">컴플라이로 v3.7 정기 업데이트 일정 안내</p>
    </div>
  );
}

function Eta() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] items-center leading-[1.5] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" data-name="ETA">
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024년 1월 10일(수)
      </p>
      <p className="font-['Roboto:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        ·
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        30분 전
      </p>
    </div>
  );
}

function Message() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message">
      <Row />
      <Eta />
    </div>
  );
}

function Alarm() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Alarm">
      <Icon />
      <Message />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <circle cx="20" cy="20" fill="var(--fill-0, #FF5812)" fillOpacity="0.12" id="Ellipse" r="20" />
          <g id="support">
            <path d={svgPaths.p7659e00} fill="var(--fill-0, #FF5812)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">1:1 문의</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label1 />
    </div>
  );
}

function BasicBadge1() {
  return (
    <div className="bg-[#ff5812] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container1 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <BasicBadge1 />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">[1:1문의 제목] 문의글이 등록되었습니다.</p>
    </div>
  );
}

function Eta1() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] items-center leading-[1.5] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" data-name="ETA">
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024년 1월 10일(수)
      </p>
      <p className="font-['Roboto:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        ·
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        1시간 전
      </p>
    </div>
  );
}

function Message1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message">
      <Row1 />
      <Eta1 />
    </div>
  );
}

function Alarm1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Alarm">
      <Icon1 />
      <Message1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <circle cx="20" cy="20" fill="var(--fill-0, #0561A4)" fillOpacity="0.12" id="Ellipse" r="20" />
          <g id="clipboard">
            <path d={svgPaths.p9108780} fill="var(--fill-0, #0561A4)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Label2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">일반</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label2 />
    </div>
  );
}

function BasicBadge2() {
  return (
    <div className="bg-[#0561a4] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <BasicBadge2 />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">{`[일반게시판 제목] 게시글에 댓글이 등록되었습니다. `}</p>
    </div>
  );
}

function Eta2() {
  return (
    <div className="content-stretch flex font-normal gap-[4px] items-center leading-[1.5] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" data-name="ETA">
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024년 1월 8(월)
      </p>
      <p className="font-['Roboto:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        ·
      </p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        2일 전
      </p>
    </div>
  );
}

function Message2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Message">
      <Row2 />
      <Eta2 />
    </div>
  );
}

function Alarm2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Alarm">
      <Icon2 />
      <Message2 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-0 pb-0 pt-[16px] px-0 top-0 w-[500px]" data-name="List">
      <Alarm />
      <Alarm1 />
      <Alarm2 />
    </div>
  );
}

function Line() {
  return (
    <div className="absolute contents left-[20px] top-[56px]" data-name="Line">
      <div className="absolute flex h-[32px] items-center justify-center left-[20px] top-[56px] w-0" style={{ "--transform-inner-width": "32", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[32px]" data-name="Line">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <line id="Line" stroke="var(--stroke-0, #DFE2EB)" strokeDasharray="2 2" x2="32" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[32px] items-center justify-center left-[20.5px] top-[128.5px] w-0" style={{ "--transform-inner-width": "32", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[32px]" data-name="Line">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1">
                <path d="M0 0.5H32" id="Line" stroke="var(--stroke-0, #DFE2EB)" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlertWidget() {
  return (
    <div className="h-[190px] relative shrink-0 w-full" data-name="Alert Widget">
      <List />
      <Line />
    </div>
  );
}

function InputGroup() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[276px] px-[20px] py-[16px] top-[95px] w-[1072px]" data-name="Input Group">
      <Header />
      <AlertWidget />
    </div>
  );
}

function Widget() {
  return (
    <div className="absolute contents left-[276px] top-[95px]" data-name="Widget">
      <Component02ElementsCardBg />
      <InputGroup />
    </div>
  );
}

function Component02ElementsCardBg1() {
  return (
    <div className="absolute h-[410px] left-[276px] rounded-[4px] top-[365px] w-[1072px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function Title() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow h-[38px] items-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#001b3d] text-[18px] tracking-[-0.6px]">
        <p className="leading-[24px]">대기 중인 업무</p>
      </div>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card-Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[20px] py-[8px] relative w-full">
          <Title />
        </div>
      </div>
    </div>
  );
}

function CardTop() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[276px] rounded-tl-[4px] rounded-tr-[4px] top-[365px] w-[1072px]" data-name="Card Top">
      <CardTitle />
    </div>
  );
}

function Label3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label3 />
    </div>
  );
}

function BasicBadge3() {
  return (
    <div className="bg-[#0561a4] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[12px] py-0 relative rounded-[100px] shrink-0" data-name="Basic Badge">
      <Container3 />
    </div>
  );
}

function Tab() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[52px] items-center pb-[18px] pt-[14px] px-[16px] relative shrink-0" data-name="Tab">
      <div aria-hidden="true" className="absolute border-[#0561a4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-center text-nowrap tracking-[-0.6px] whitespace-pre">규제관리</p>
      <BasicBadge3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label4 />
    </div>
  );
}

function BasicBadge4() {
  return (
    <div className="bg-[rgba(115,119,127,0.12)] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[12px] py-0 relative rounded-[100px] shrink-0" data-name="Basic Badge">
      <Container4 />
    </div>
  );
}

function Tab1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[52px] items-center pb-[18px] pt-[14px] px-[16px] relative shrink-0" data-name="Tab">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#878a99] text-[14px] text-center text-nowrap tracking-[-0.6px] whitespace-pre">예방관리</p>
      <BasicBadge4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label5 />
    </div>
  );
}

function BasicBadge5() {
  return (
    <div className="bg-[rgba(115,119,127,0.12)] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[12px] py-0 relative rounded-[100px] shrink-0" data-name="Basic Badge">
      <Container5 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[52px] items-center pb-[18px] pt-[14px] px-[16px] relative shrink-0" data-name="Tab">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#878a99] text-[14px] text-center text-nowrap tracking-[-0.6px] whitespace-pre">이슈관리</p>
      <BasicBadge5 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tabs">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start px-[16px] py-0 relative w-full">
          <div className="absolute bottom-0 h-px left-0 right-0" data-name="Line">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1">
              <path clipRule="evenodd" d="M1072 0H0V1H1072V0V0Z" fill="var(--fill-0, #DFE2EB)" fillRule="evenodd" id="Line" />
            </svg>
          </div>
          <Tab />
          <Tab1 />
          <Tab2 />
        </div>
      </div>
    </div>
  );
}

function CardHeaderTab() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[276px] top-[419px] w-[1072px]" data-name="Card Header Tab">
      <Tabs />
    </div>
  );
}

function HeaderLabel() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">규제명</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel1() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center px-[24px] py-0 relative shrink-0 w-[180px]" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">진행상태</p>
    </div>
  );
}

function HeaderLabel2() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center px-[24px] py-0 relative shrink-0 w-[160px]" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">요청자</p>
    </div>
  );
}

function HeaderLabel3() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center px-[24px] py-0 relative shrink-0 w-[160px]" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">요청일</p>
    </div>
  );
}

function Headings() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex items-start min-h-[40px] relative shrink-0 w-full" data-name="Headings">
      <HeaderLabel />
      <HeaderLabel1 />
      <HeaderLabel2 />
      <HeaderLabel3 />
    </div>
  );
}

function Title1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center leading-[0] min-h-px min-w-px relative shrink-0 text-nowrap" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#0561a4] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">[중대재해] 1. 중대재해처벌법-휴맥스EV</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">·</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#73777f] text-[12px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">항목번호 7</p>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-[12px] relative w-full">
          <Title1 />
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">검토요청</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label6 />
    </div>
  );
}

function BasicBadge6() {
  return (
    <div className="bg-[rgba(5,97,164,0.12)] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container6 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[10px] relative shrink-0 w-[180px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <BasicBadge6 />
    </div>
  );
}

function Account() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">나안전</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Account />
    </div>
  );
}

function Cell3() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center px-[24px] py-[8px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[96px]">
        <p className="leading-[24px]">2024-01-10</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
    </div>
  );
}

function Title2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center leading-[0] min-h-px min-w-px relative shrink-0 text-nowrap" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#0561a4] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">[ISO] ISO 37301: 2021 - 전체</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">·</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#73777f] text-[12px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">항목번호 6</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-[12px] relative w-full">
          <Title2 />
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">검토요청</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label7 />
    </div>
  );
}

function BasicBadge7() {
  return (
    <div className="bg-[rgba(5,97,164,0.12)] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container7 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[10px] relative shrink-0 w-[180px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <BasicBadge7 />
    </div>
  );
}

function Account1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">김재무</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Account1 />
    </div>
  );
}

function Cell7() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center px-[24px] py-[8px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[96px]">
        <p className="leading-[24px]">2024-01-10</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <div className="absolute bg-[rgba(206,212,218,0.12)] h-[48px] left-0 right-0 top-0" data-name="Focused" />
      <Cell4 />
      <Cell5 />
      <Cell6 />
      <Cell7 />
    </div>
  );
}

function Title3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center leading-[0] min-h-px min-w-px relative shrink-0 text-nowrap" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#0561a4] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">[ESG] GRI Standards: 2021</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">·</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#73777f] text-[12px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">항목번호 5</p>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-[12px] relative w-full">
          <Title3 />
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">검토요청</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label8 />
    </div>
  );
}

function BasicBadge8() {
  return (
    <div className="bg-[rgba(5,97,164,0.12)] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container8 />
    </div>
  );
}

function Cell9() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[10px] relative shrink-0 w-[180px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <BasicBadge8 />
    </div>
  );
}

function Account2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">전환경</p>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Account2 />
    </div>
  );
}

function Cell11() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center px-[24px] py-[8px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[96px]">
        <p className="leading-[24px]">2024-01-10</p>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function Title4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center leading-[0] min-h-px min-w-px relative shrink-0 text-nowrap" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#0561a4] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">[ESG] TCFD: 2021</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">·</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#73777f] text-[12px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">항목번호 1.2</p>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-[12px] relative w-full">
          <Title4 />
        </div>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">검토요청</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label9 />
    </div>
  );
}

function BasicBadge9() {
  return (
    <div className="bg-[rgba(5,97,164,0.12)] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container9 />
    </div>
  );
}

function Cell13() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <BasicBadge9 />
    </div>
  );
}

function Account3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">전환경</p>
      </div>
    </div>
  );
}

function Cell14() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Account3 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="box-border content-stretch flex h-[48px] items-center px-[24px] py-[8px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-[96px]">
        <p className="leading-[24px]">2024-01-09</p>
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
    </div>
  );
}

function Title5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center leading-[0] min-h-px min-w-px relative shrink-0 text-nowrap" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#0561a4] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">[ISO] ISO 14067: 2018</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">·</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#73777f] text-[12px] tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">항목번호 1.1</p>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-[12px] relative w-full">
          <Title5 />
        </div>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">검토요청</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label10 />
    </div>
  );
}

function BasicBadge10() {
  return (
    <div className="bg-[rgba(5,97,164,0.12)] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[4px] shrink-0" data-name="Basic Badge">
      <Container10 />
    </div>
  );
}

function Cell17() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[12px] relative shrink-0 w-[180px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <BasicBadge10 />
    </div>
  );
}

function Account4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Account">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">최소장</p>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="box-border content-stretch flex flex-col h-[48px] items-start justify-center px-[24px] py-[12px] relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Account4 />
    </div>
  );
}

function Cell19() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[48px] items-center px-[24px] py-0 relative shrink-0 w-[160px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">2024-01-09</p>
      </div>
    </div>
  );
}

function Row7() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[276px] top-[479px] w-[1072px]" data-name="Table">
      <Headings />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
    </div>
  );
}

function Component02ElementsScrollBar() {
  return (
    <div className="absolute h-[80px] right-[576px] top-[487px] w-[8px]" data-name="02) Elements / ScrollBar">
      <div className="absolute bg-black inset-0 opacity-50 rounded-[4px]" data-name="Vector" />
    </div>
  );
}

function Table1() {
  return (
    <div className="absolute contents left-[276px] top-[419px]" data-name="Table">
      <CardHeaderTab />
      <Table />
      <Component02ElementsScrollBar />
    </div>
  );
}

function Widget1() {
  return (
    <div className="absolute contents left-[276px] top-[365px]" data-name="Widget">
      <Component02ElementsCardBg1 />
      <CardTop />
      <Table1 />
    </div>
  );
}

function Component02ElementsCardBg2() {
  return (
    <div className="absolute h-[342px] left-[824px] rounded-[4px] top-[1157px] w-[524px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function DateRange() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`심사기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2024-01-18 ~ 2024-01-25</p>
      </div>
    </div>
  );
}

function FileInfo() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[48px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="File Info">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-full">
        <p className="leading-[20px]">ISO14001 인증 환경경영시스템 문서 심사</p>
      </div>
      <DateRange />
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left">
      <FileInfo />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end leading-[0] not-italic relative shrink-0 text-[#0561a4] tracking-[-0.6px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">2</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[14px] w-[13px]">
        <p className="leading-[20px]">건</p>
      </div>
    </div>
  );
}

function Total() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Total">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">등록</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-end leading-[0] not-italic relative shrink-0 text-[#212529] tracking-[-0.6px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">3</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[14px] w-[13px]">
        <p className="leading-[20px]">건</p>
      </div>
    </div>
  );
}

function Total1() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Total">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">요청</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <Total />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">/</p>
      </div>
      <Total1 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-end justify-center relative shrink-0" data-name="Text">
      <Frame1 />
    </div>
  );
}

function StatusCard() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] relative rounded-[4px] shrink-0 w-full" data-name="Status Card">
      <div aria-hidden="true" className="absolute border border-[#e9ebec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[20px] py-[16px] relative w-full">
          <Left />
          <Text />
        </div>
      </div>
    </div>
  );
}

function DateRange1() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`심사기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2023-05-18 ~ 2024-12-31</p>
      </div>
    </div>
  );
}

function FileInfo1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[48px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="File Info">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-full">
        <p className="leading-[20px]">GRI 2021 관련 예방 업무 심사</p>
      </div>
      <DateRange1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left">
      <FileInfo1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-end leading-[0] not-italic relative shrink-0 text-[#0561a4] tracking-[-0.6px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">0</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[14px] w-[13px]">
        <p className="leading-[20px]">건</p>
      </div>
    </div>
  );
}

function Total2() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Total">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">등록</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-end leading-[0] not-italic relative shrink-0 text-[#212529] tracking-[-0.6px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">5</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[14px] w-[13px]">
        <p className="leading-[20px]">건</p>
      </div>
    </div>
  );
}

function Total3() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Total">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">요청</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <Total2 />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">/</p>
      </div>
      <Total3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-end justify-center relative shrink-0" data-name="Text">
      <Frame6 />
    </div>
  );
}

function StatusCard1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Status Card">
      <div aria-hidden="true" className="absolute border border-[#e9ebec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[20px] py-[16px] relative w-full">
          <Left1 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function DateRange2() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`심사기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2024-12-12 ~ 2024-01-15</p>
      </div>
    </div>
  );
}

function FileInfo2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[48px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="File Info">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-full">
        <p className="leading-[20px]">컴플라이언스 업무활동 1분기 심사</p>
      </div>
      <DateRange2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left">
      <FileInfo2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-end leading-[0] not-italic relative shrink-0 text-[#0561a4] tracking-[-0.6px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">4</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[14px] w-[13px]">
        <p className="leading-[20px]">건</p>
      </div>
    </div>
  );
}

function Total4() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Total">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">등록</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-end leading-[0] not-italic relative shrink-0 text-[#212529] tracking-[-0.6px]">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[22px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">5</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[14px] w-[13px]">
        <p className="leading-[20px]">건</p>
      </div>
    </div>
  );
}

function Total5() {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0" data-name="Total">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">요청</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
      <Total4 />
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">/</p>
      </div>
      <Total5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[48px] items-end justify-center relative shrink-0" data-name="Text">
      <Frame9 />
    </div>
  );
}

function StatusCard2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Status Card">
      <div aria-hidden="true" className="absolute border border-[#e9ebec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[20px] items-start px-[20px] py-[16px] relative w-full">
          <Left2 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[844px] overflow-clip top-[1227px] w-[484px]" data-name="List">
      <StatusCard />
      <StatusCard1 />
      <StatusCard2 />
    </div>
  );
}

function Title6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[38px] items-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3d] text-[18px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">심사자료 등록 현황</p>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d={svgPaths.p2d7af680} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Action">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#73777f] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">바로가기</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card-Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[20px] py-[8px] relative w-full">
          <Title6 />
          <Action />
        </div>
      </div>
    </div>
  );
}

function CardTop1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[824px] rounded-tl-[4px] rounded-tr-[4px] top-[1157px] w-[524px]" data-name="Card Top">
      <CardTitle1 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 524 1">
            <path d="M0 0.5H524" id="Line" stroke="var(--stroke-0, #DFE2EB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Widget2() {
  return (
    <div className="absolute contents left-[824px] top-[1157px]" data-name="Widget">
      <Component02ElementsCardBg2 />
      <List1 />
      <CardTop1 />
    </div>
  );
}

function Component02ElementsCardBg3() {
  return (
    <div className="absolute h-[254px] left-[276px] rounded-[4px] top-[1523px] w-[1072px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function Label11() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">오프라인</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label11 />
    </div>
  );
}

function BasicBadge11() {
  return (
    <div className="bg-[#0561a4] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[100px] shrink-0" data-name="Basic Badge">
      <Container11 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Title">
      <BasicBadge11 />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px]">Compliance 교육 2차</p>
      </div>
    </div>
  );
}

function DateRange3() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`교육기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2024-01-01 ~ 2024-01-25</p>
      </div>
    </div>
  );
}

function FileInfo3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[48px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="File Info">
      <Title7 />
      <DateRange3 />
    </div>
  );
}

function Left3() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left">
      <FileInfo3 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[12px] items-start relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-[#e9ebec] h-[12px] rounded-[30px] shrink-0 w-full" data-name="Line" />
      <div className="absolute bg-[#0561a4] bottom-0 left-0 rounded-[30px] top-0 w-[53.6px]" data-name="Line / Active" />
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Progress Bar">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0561a4] text-[14px] tracking-[-0.6px] w-full">수강률 16%</p>
      <ProgressBar />
    </div>
  );
}

function Count() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 text-nowrap" data-name="Count">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[#0561a4] text-[22px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">160</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0 text-[#212529] text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">/</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[#212529] text-[22px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">1,000</p>
      </div>
    </div>
  );
}

function Total6() {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-end leading-[0] not-italic relative shrink-0 tracking-[-0.6px] w-[148px]" data-name="Total">
      <Count />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[#212529] text-[14px] w-[13px]">
        <p className="leading-[20px]">명</p>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-end relative shrink-0 w-[500px]" data-name="Right">
      <ProgressBar1 />
      <Total6 />
    </div>
  );
}

function ProgressCard() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] relative rounded-[4px] shrink-0 w-full" data-name="Progress Card">
      <div aria-hidden="true" className="absolute border border-[#e9ebec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[20px] py-[16px] relative w-full">
          <Left3 />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Label12() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pb-[4px] pt-[2px] px-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[16px] whitespace-pre">온라인</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label12 />
    </div>
  );
}

function BasicBadge12() {
  return (
    <div className="bg-[#cea331] box-border content-stretch flex gap-[10px] h-[22px] items-center px-[9px] py-0 relative rounded-[100px] shrink-0" data-name="Basic Badge">
      <Container12 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Title">
      <BasicBadge12 />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px]">2023년 HUMAX Integrity code 교육 2차</p>
      </div>
    </div>
  );
}

function DateRange4() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`교육기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2024-01-01 ~ 2024-01-25</p>
      </div>
    </div>
  );
}

function FileInfo4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow h-[48px] items-start justify-center min-h-px min-w-px relative shrink-0" data-name="File Info">
      <Title8 />
      <DateRange4 />
    </div>
  );
}

function Left4() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Left">
      <FileInfo4 />
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[12px] items-start justify-center relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-[#e9ebec] h-[12px] rounded-[30px] shrink-0 w-full" data-name="Line" />
      <div className="absolute bg-[#cea331] h-[12px] left-0 rounded-[30px] top-0 w-[168px]" data-name="Line / Active" />
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Progress Bar">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#cea331] text-[14px] tracking-[-0.6px] w-full">수강률 80%</p>
      <ProgressBar2 />
    </div>
  );
}

function Count1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 text-nowrap" data-name="Count">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[#0561a4] text-[22px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">8</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0 text-[#212529] text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">/</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[#212529] text-[22px]">
        <p className="leading-[28px] text-nowrap whitespace-pre">10</p>
      </div>
    </div>
  );
}

function Total7() {
  return (
    <div className="content-stretch flex gap-[2px] items-end justify-end leading-[0] not-italic relative shrink-0 tracking-[-0.6px] w-[148px]" data-name="Total">
      <Count1 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[#212529] text-[14px] w-[13px]">
        <p className="leading-[20px]">명</p>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-end relative shrink-0 w-[500px]" data-name="Right">
      <ProgressBar3 />
      <Total7 />
    </div>
  );
}

function ProgressCard1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Progress Card">
      <div aria-hidden="true" className="absolute border border-[#e9ebec] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[20px] py-[16px] relative w-full">
          <Left4 />
          <Right1 />
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[296px] top-[1593px] w-[1032px]" data-name="List">
      <ProgressCard />
      <ProgressCard1 />
    </div>
  );
}

function Title9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[38px] items-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3d] text-[18px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">진행 중인 교육 현황</p>
      </div>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d={svgPaths.p2d7af680} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Action">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#73777f] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">바로가기</p>
      </div>
      <ChevronRight1 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card-Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[20px] py-[8px] relative w-full">
          <Title9 />
          <Action1 />
        </div>
      </div>
    </div>
  );
}

function CardTop2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[276px] rounded-tl-[4px] rounded-tr-[4px] top-[1523px] w-[1072px]" data-name="Card Top">
      <CardTitle2 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1">
            <path d="M0 0.5H1072" id="Line" stroke="var(--stroke-0, #DFE2EB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Widget3() {
  return (
    <div className="absolute contents left-[276px] top-[1523px]" data-name="Widget">
      <Component02ElementsCardBg3 />
      <List2 />
      <CardTop2 />
    </div>
  );
}

function Component02ElementsCardBg4() {
  return (
    <div className="absolute h-[342px] left-[276px] rounded-[4px] top-[1157px] w-[524px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function ChartTitle() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center leading-[0] left-1/2 not-italic text-[#212529] text-center top-1/2 tracking-[-0.6px] translate-x-[-50%] translate-y-[-50%]" data-name="Chart Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-end relative shrink-0 text-[16px] w-[112px]">
        <p className="leading-[24px]">완료율</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-end relative shrink-0 text-[0px] w-[112px]">
        <p className="leading-[0]">
          <span className="leading-[28px] text-[22px]">50</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[26px] not-italic text-[20px] tracking-[-0.6px]">%</span>
        </p>
      </div>
    </div>
  );
}

function SimpleDonutChart() {
  return (
    <div className="absolute left-[220px] size-[240px] top-0" data-name="Simple Donut Chart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
        <g id="Doughnut">
          <g id="01">
            <mask fill="white" id="path-1-inside-1_4_11991">
              <path d={svgPaths.pb797e00} />
            </mask>
            <path d={svgPaths.pb797e00} fill="var(--fill-0, #006B56)" />
            <path d={svgPaths.pb797e00} fill="url(#paint0_linear_4_11991)" />
            <path d={svgPaths.pb797e00} mask="url(#path-1-inside-1_4_11991)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
          <g id="02">
            <mask fill="white" id="path-2-inside-2_4_11991">
              <path d={svgPaths.p70f4e40} />
            </mask>
            <path d={svgPaths.p70f4e40} fill="var(--fill-0, #FF5812)" mask="url(#path-2-inside-2_4_11991)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
          <g id="03">
            <mask fill="white" id="path-3-inside-3_4_11991">
              <path d={svgPaths.p20634f00} />
            </mask>
            <path d={svgPaths.p20634f00} fill="var(--fill-0, #0561A4)" mask="url(#path-3-inside-3_4_11991)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
          <g id="Multiply">
            <mask fill="white" id="path-4-inside-4_4_11991">
              <path d={svgPaths.p2a50b900} />
            </mask>
            <path d={svgPaths.p2a50b900} fill="var(--fill-0, black)" fillOpacity="0.498039" mask="url(#path-4-inside-4_4_11991)" stroke="var(--stroke-0, white)" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_11991" x1="0" x2="0" y1="1" y2="241">
            <stop stopColor="white" stopOpacity="0.14902" />
            <stop offset="1" stopColor="white" stopOpacity="0.01" />
          </linearGradient>
        </defs>
      </svg>
      <ChartTitle />
    </div>
  );
}

function Conatainer() {
  return (
    <div className="content-stretch flex font-['Noto_Sans_KR:Bold',sans-serif] gap-[5px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.6px]" data-name="Conatainer">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">해결 :</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[20px] text-nowrap whitespace-pre">10</p>
      </div>
    </div>
  );
}

function TooltipChart() {
  return (
    <div className="absolute bg-[#0561a4] box-border content-stretch flex flex-col items-end justify-center px-[10px] py-[4px] right-[-12px] rounded-[4px] top-1/2 translate-y-[-50%]" data-name="Tooltip Chart">
      <Conatainer />
    </div>
  );
}

function Chart() {
  return (
    <div className="absolute contents left-[220px] top-0" data-name="Chart">
      <SimpleDonutChart />
      <TooltipChart />
    </div>
  );
}

function Label13() {
  return (
    <div className="content-stretch flex font-['Noto_Sans_KR:Bold',sans-serif] gap-[4px] items-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px] w-full" data-name="Label">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[20px]">이슈 요청</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[20px] whitespace-pre">20건</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Label13 />
      <div className="h-px relative shrink-0 w-full" data-name="Line">
        <div aria-hidden="true" className="absolute border border-[#e9ebec] border-dashed inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Bullet() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start overflow-clip p-[4px] relative shrink-0" data-name="Bullet">
      <div className="bg-[#0561a4] rounded-[100px] shrink-0 size-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Range() {
  return (
    <div className="basis-0 content-stretch flex font-['Noto_Sans_KR:Medium',sans-serif] gap-[4px] grow items-end leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212529]" data-name="Range">
      <div className="basis-0 flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px]">해결</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[0px] text-nowrap tracking-[-0.4px]">
        <p className="leading-[20px] not-italic text-[14px] tracking-[-0.6px] whitespace-pre">
          <span className="font-['Noto_Sans_KR:Bold',sans-serif]">10</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif]">건</span>
        </p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Data">
      <Bullet />
      <Range />
    </div>
  );
}

function Bullet1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start overflow-clip p-[4px] relative shrink-0" data-name="Bullet">
      <div className="bg-[#006b56] rounded-[100px] shrink-0 size-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Range1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Range">
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px]">{`조치 중 `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[0px] text-nowrap tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] not-italic text-[14px] tracking-[-0.6px] whitespace-pre">
          <span className="font-['Noto_Sans_KR:Bold',sans-serif]">10</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif]">건</span>
        </p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Data">
      <Bullet1 />
      <Range1 />
    </div>
  );
}

function Bullet2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start overflow-clip p-[4px] relative shrink-0" data-name="Bullet">
      <div className="bg-[#ff5812] rounded-[100px] shrink-0 size-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Range2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-end leading-[0] min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Range">
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center min-h-px min-w-px not-italic relative shrink-0 text-[14px] tracking-[-0.6px]">
        <p className="leading-[20px]">대기</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-end relative shrink-0 text-[0px] text-nowrap tracking-[-0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] not-italic text-[14px] tracking-[-0.6px] whitespace-pre">
          <span className="font-['Noto_Sans_KR:Bold',sans-serif]">10</span>
          <span className="font-['Noto_Sans_KR:Medium',sans-serif]">건</span>
        </p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Data">
      <Bullet2 />
      <Range2 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Data />
      <Data1 />
      <Data2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Header1 />
      <List3 />
    </div>
  );
}

function ChartInfo() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] items-start left-[4px] p-[16px] top-[calc(50%-0.5px)] translate-y-[-50%] w-[160px]" data-name="Chart Info">
      <div aria-hidden="true" className="absolute border-4 border-[rgba(206,212,218,0.12)] border-solid inset-[-4px] pointer-events-none" />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[240px] left-[308px] top-[1235px] w-[460px]" data-name="Container">
      <Chart />
      <ChartInfo />
    </div>
  );
}

function Title10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[38px] items-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#001b3d] text-nowrap tracking-[-0.6px]" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center relative shrink-0 text-[18px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">이슈 처리 현황</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0 text-[14px]">
        <p className="leading-[24px] text-nowrap whitespace-pre">(요청일 기준, 최근 30일)</p>
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d={svgPaths.p2d7af680} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Action">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#73777f] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">바로가기</p>
      </div>
      <ChevronRight2 />
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card-Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center px-[20px] py-[8px] relative w-full">
          <Title10 />
          <Action2 />
        </div>
      </div>
    </div>
  );
}

function CardTop3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[276px] rounded-tl-[4px] rounded-tr-[4px] top-[1157px] w-[524px]" data-name="Card Top">
      <CardTitle3 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 524 1">
            <path d="M0 0.5H524" id="Line" stroke="var(--stroke-0, #DFE2EB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Widget4() {
  return (
    <div className="absolute contents left-[276px] top-[1157px]" data-name="Widget">
      <Component02ElementsCardBg4 />
      <Container14 />
      <CardTop3 />
    </div>
  );
}

function Component02ElementsCardBg5() {
  return (
    <div className="absolute h-[334px] left-[276px] rounded-[4px] top-[799px] w-[1072px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path d={svgPaths.p2ca643f2} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BasicElementsDropdowns() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[38px] items-center pl-[14px] pr-[10px] py-[7px] relative rounded-[4px] shrink-0 w-[96px]" data-name="Basic Elements / Dropdowns">
      <div aria-hidden="true" className="absolute border border-[#dfe2eb] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#212529] text-[14px] tracking-[-0.6px]">
        <p className="leading-[24px]">2024</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function Title11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[38px] items-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3d] text-[18px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[24px] whitespace-pre">관리 업무 현황</p>
      </div>
      <BasicElementsDropdowns />
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-right">
          <path d={svgPaths.p2d7af680} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action3() {
  return (
    <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-name="Action">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#73777f] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">바로가기</p>
      </div>
      <ChevronRight3 />
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="box-border content-stretch flex gap-[20px] items-center px-[20px] py-[8px] relative shrink-0 w-[1072px]" data-name="Card-Title">
      <Title11 />
      <Action3 />
    </div>
  );
}

function CardTop4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[54px] items-start left-[276px] rounded-tl-[4px] rounded-tr-[4px] top-[799px]" data-name="Card Top">
      <CardTitle4 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1072 1">
            <path d="M0 0.5H1072" id="Line" stroke="var(--stroke-0, #DFE2EB)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel4() {
  return (
    <div className="box-border content-stretch flex h-[40px] items-center px-[24px] py-0 relative shrink-0 w-[560px]" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">업무</p>
    </div>
  );
}

function HeaderLabel5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">활동 상태</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel6() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">전체</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel7() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">대기</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel8() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">지연</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel9() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">재요청</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel10() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">완료</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel11() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">승인</p>
        </div>
      </div>
    </div>
  );
}

function HeaderLabel12() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Header Label">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[20px] items-center justify-center px-[24px] py-0 relative w-full">
          <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#001b3d] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">완료율</p>
        </div>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <HeaderLabel6 />
      <HeaderLabel7 />
      <HeaderLabel8 />
      <HeaderLabel9 />
      <HeaderLabel10 />
      <HeaderLabel11 />
      <HeaderLabel12 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <HeaderLabel5 />
      <Row8 />
    </div>
  );
}

function Headings1() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex h-[40px] items-start min-h-[40px] relative shrink-0 w-full" data-name="Headings">
      <HeaderLabel4 />
      <Frame />
    </div>
  );
}

function DateRange5() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`운영기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2023-08-01 ~</p>
      </div>
    </div>
  );
}

function Title12() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">사이버보안(ISO 27001) 준수관리</p>
      </div>
      <DateRange5 />
    </div>
  );
}

function Cell20() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[72px] items-center px-[24px] py-[16px] relative shrink-0 w-[560px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Title12 />
    </div>
  );
}

function Cell21() {
  return (
    <div className="basis-0 bg-[rgba(206,212,218,0.12)] grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell25() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell26() {
  return (
    <div className="basis-0 bg-[rgba(5,97,164,0.05)] grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[20px] whitespace-pre">30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CellGroup() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Cell Group">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <Cell21 />
      {[...Array(2).keys()].map((_, i) => (
        <Cell22 key={i} />
      ))}
      <Cell23 />
      <Cell24 />
      <Cell25 />
      <Cell26 />
    </div>
  );
}

function Row9() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell20 />
      <CellGroup />
    </div>
  );
}

function DateRange6() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`운영기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2023-05-18 ~ 2024-12-31</p>
      </div>
    </div>
  );
}

function Title13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">20230518_월말정기점검 업무</p>
      </div>
      <DateRange6 />
    </div>
  );
}

function Cell27() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[72px] items-center px-[24px] py-[16px] relative shrink-0 w-[560px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Title13 />
    </div>
  );
}

function Cell28() {
  return (
    <div className="basis-0 bg-[rgba(206,212,218,0.12)] grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell30() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell31() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell32() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell33() {
  return (
    <div className="basis-0 bg-[rgba(5,97,164,0.05)] grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[20px] whitespace-pre">30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CellGroup1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Cell Group">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <Cell28 />
      {[...Array(2).keys()].map((_, i) => (
        <Cell29 key={i} />
      ))}
      <Cell30 />
      <Cell31 />
      <Cell32 />
      <Cell33 />
    </div>
  );
}

function Row10() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell27 />
      <CellGroup1 />
    </div>
  );
}

function DateRange7() {
  return (
    <div className="content-stretch flex font-normal gap-[8px] items-center leading-[0] relative shrink-0 text-[#73777f] text-[12px] text-nowrap tracking-[-0.4px] w-full" data-name="Date Range">
      <div className="flex flex-col font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`운영기간  `}</p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.5] text-nowrap whitespace-pre">2023-05-18 ~ 2033-12-31</p>
      </div>
    </div>
  );
}

function Title14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">퇴근전 업무용PC 전원 종료 점검</p>
      </div>
      <DateRange7 />
    </div>
  );
}

function Cell34() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[72px] items-center px-[24px] py-[16px] relative shrink-0 w-[560px]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Title14 />
    </div>
  );
}

function Cell35() {
  return (
    <div className="basis-0 bg-[rgba(206,212,218,0.12)] grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell36() {
  return (
    <div className="basis-0 bg-white grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell37() {
  return (
    <div className="basis-0 bg-white grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell38() {
  return (
    <div className="basis-0 bg-white grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell39() {
  return (
    <div className="basis-0 bg-white grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[24px] whitespace-pre">30</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell40() {
  return (
    <div className="basis-0 bg-[rgba(5,97,164,0.05)] grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[24px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
            <p className="leading-[20px] whitespace-pre">30%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CellGroup2() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Cell Group">
      <div aria-hidden="true" className="absolute border-[#dfe2eb] border-[0px_1px_1px] border-solid inset-0 pointer-events-none" />
      <Cell35 />
      {[...Array(2).keys()].map((_, i) => (
        <Cell36 key={i} />
      ))}
      <Cell37 />
      <Cell38 />
      <Cell39 />
      <Cell40 />
    </div>
  );
}

function Row11() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <Cell34 />
      <CellGroup2 />
    </div>
  );
}

function Table2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[276px] top-[861px] w-[1072px]" data-name="Table">
      <Headings1 />
      <Row9 />
      <Row10 />
      <Row11 />
    </div>
  );
}

function Component02ElementsScrollBar1() {
  return (
    <div className="absolute h-[80px] right-[576px] top-[869px] w-[8px]" data-name="02) Elements / ScrollBar">
      <div className="absolute bg-black inset-0 opacity-50 rounded-[4px]" data-name="Vector" />
    </div>
  );
}

function Widget5() {
  return (
    <div className="absolute contents left-[276px] top-[799px]" data-name="Widget">
      <Component02ElementsCardBg5 />
      <CardTop4 />
      <Table2 />
      <Component02ElementsScrollBar1 />
    </div>
  );
}

function Component02ElementsCardBg6() {
  return (
    <div className="h-[1723px] relative rounded-[4px] w-[524px]" data-name="02) Elements / Card BG">
      <div className="absolute bg-white inset-0 rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.12)]" data-name="Shadow" />
      <div className="absolute bg-white inset-0 rounded-[4px]" data-name="Card BG" />
    </div>
  );
}

function Label14() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[38px] items-center pb-[8px] pt-[6px] px-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">오늘</p>
    </div>
  );
}

function ButtonsDefaultSoftButton() {
  return (
    <div className="bg-[rgba(5,97,164,0.12)] box-border content-stretch flex gap-[4px] h-[38px] items-center px-[16px] py-0 relative rounded-[4px] shrink-0" data-name="Buttons / Default / Soft Button">
      <Label14 />
    </div>
  );
}

function Left5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-0" data-name="Left">
      <ButtonsDefaultSoftButton />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-left">
          <path d={svgPaths.p3033b700} fill="var(--fill-0, #212529)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Left6() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px mr-[-1px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Left">
      <div aria-hidden="true" className="absolute border border-[#dfe2eb] border-solid inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[38px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <ChevronLeft />
        </div>
      </div>
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-right">
          <path d={svgPaths.p31670000} fill="var(--fill-0, #212529)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Right2() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px mr-[-1px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0" data-name="Right">
      <div aria-hidden="true" className="absolute border border-[#dfe2eb] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[38px] items-center justify-center px-[14px] py-[7px] relative w-full">
          <ChevronRight4 />
        </div>
      </div>
    </div>
  );
}

function ButtonGroups() {
  return (
    <div className="absolute box-border content-stretch flex items-center overflow-clip pl-0 pr-px py-0 right-0 rounded-[4px] top-0 w-[76px]" data-name="Button Groups">
      <Left6 />
      <Right2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[38px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <Left5 />
      <div className="absolute flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-38px)] not-italic text-[#001b3d] text-[18px] text-nowrap top-1/2 tracking-[-0.6px] translate-y-[-50%]">
        <p className="leading-[24px] whitespace-pre">2024년 1월</p>
      </div>
      <ButtonGroups />
    </div>
  );
}

function CalendarActions() {
  return (
    <div className="box-border content-stretch flex items-center px-[20px] py-[16px] relative shrink-0 w-[524px]" data-name="Calendar Actions">
      <Container15 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="basis-0 bg-[#f6f7fb] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[13px] text-nowrap tracking-[-0.4px]">
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">일</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="basis-0 bg-[#f6f7fb] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[13px] text-nowrap tracking-[-0.4px]">
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">월</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="basis-0 bg-[#f6f7fb] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[13px] text-nowrap tracking-[-0.4px]">
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">화</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="basis-0 bg-[#f6f7fb] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[13px] text-nowrap tracking-[-0.4px]">
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">수</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="basis-0 bg-[#f6f7fb] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[13px] text-nowrap tracking-[-0.4px]">
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">목</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="basis-0 bg-[#f6f7fb] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[13px] text-nowrap tracking-[-0.4px]">
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">금</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="basis-0 bg-[#f6f7fb] grow min-h-px min-w-px relative shrink-0" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative w-full">
          <div className="basis-0 flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#001b3d] text-[13px] text-nowrap tracking-[-0.4px]">
            <p className="[white-space-collapse:collapse] leading-[16px] overflow-ellipsis overflow-hidden">토</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarHeader() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Calendar Header">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
    </div>
  );
}

function Background1() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">31</p>
      </div>
    </div>
  );
}

function DateTop() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate />
    </div>
  );
}

function DateBody() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container16() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop />
      <DateBody />
    </div>
  );
}

function CalendarWidgetCell() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background1 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">1</p>
      </div>
    </div>
  );
}

function DateTop1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate1 />
    </div>
  );
}

function DateBody1() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container17() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop1 />
      <DateBody1 />
    </div>
  );
}

function CalendarWidgetCell1() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background2 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">2</p>
      </div>
    </div>
  );
}

function DateTop2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate2 />
    </div>
  );
}

function Dots() {
  return (
    <div className="h-[8px] relative shrink-0 w-[56px]" data-name="Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 8">
        <g id="Dots">
          <circle cx="4" cy="4" fill="var(--fill-0, #0561A4)" id="Ellipse" r="4" />
          <circle cx="16" cy="4" fill="var(--fill-0, #415AA9)" id="Ellipse_2" r="4" />
          <circle cx="28" cy="4" fill="var(--fill-0, #006B56)" id="Ellipse_3" r="4" />
          <circle cx="40" cy="4" fill="var(--fill-0, #CEA331)" id="Ellipse_4" r="4" />
          <circle cx="52" cy="4" fill="var(--fill-0, #FF5812)" id="Ellipse_5" r="4" />
        </g>
      </svg>
    </div>
  );
}

function DateBody2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="Date Body">
      <Dots />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop2 />
      <DateBody2 />
    </div>
  );
}

function CalendarWidgetCell2() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background3 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">3</p>
      </div>
    </div>
  );
}

function DateTop3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate3 />
    </div>
  );
}

function DateBody3() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop3 />
      <DateBody3 />
    </div>
  );
}

function CalendarWidgetCell3() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background4 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">4</p>
      </div>
    </div>
  );
}

function DateTop4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate4 />
    </div>
  );
}

function DateBody4() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container20() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop4 />
      <DateBody4 />
    </div>
  );
}

function CalendarWidgetCell4() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background5 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">5</p>
      </div>
    </div>
  );
}

function DateTop5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate5 />
    </div>
  );
}

function DateBody5() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container21() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop5 />
      <DateBody5 />
    </div>
  );
}

function CalendarWidgetCell5() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background6 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">6</p>
      </div>
    </div>
  );
}

function DateTop6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate6 />
    </div>
  );
}

function DateBody6() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container22() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop6 />
      <DateBody6 />
    </div>
  );
}

function CalendarWidgetCell6() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background7 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <CalendarWidgetCell />
      <CalendarWidgetCell1 />
      <CalendarWidgetCell2 />
      <CalendarWidgetCell3 />
      <CalendarWidgetCell4 />
      <CalendarWidgetCell5 />
      <CalendarWidgetCell6 />
    </div>
  );
}

function Background8() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">7</p>
      </div>
    </div>
  );
}

function DateTop7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate7 />
    </div>
  );
}

function DateBody7() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container23() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop7 />
      <DateBody7 />
    </div>
  );
}

function CalendarWidgetCell7() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background8 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Background9() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">8</p>
      </div>
    </div>
  );
}

function DateTop8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate8 />
    </div>
  );
}

function DateBody8() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container24() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop8 />
      <DateBody8 />
    </div>
  );
}

function CalendarWidgetCell8() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background9 />
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">9</p>
      </div>
    </div>
  );
}

function DateTop9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate9 />
    </div>
  );
}

function DateBody9() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop9 />
      <DateBody9 />
    </div>
  );
}

function CalendarWidgetCell9() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background10 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Background11() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">10</p>
      </div>
    </div>
  );
}

function DateTop10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate10 />
    </div>
  );
}

function DateBody10() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container26() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop10 />
      <DateBody10 />
    </div>
  );
}

function CalendarWidgetCell10() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background11 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Background12() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">11</p>
      </div>
    </div>
  );
}

function DateTop11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate11 />
    </div>
  );
}

function DateBody11() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container27() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop11 />
      <DateBody11 />
    </div>
  );
}

function CalendarWidgetCell11() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background12 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Background13() {
  return <div className="absolute bg-[#f3f6f9] bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center pb-[3px] pt-px px-[2px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #0561A4)" id="Ellipse 1" r="12" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">12</p>
      </div>
    </div>
  );
}

function DateTop12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate12 />
    </div>
  );
}

function Dots1() {
  return (
    <div className="h-[8px] relative shrink-0 w-[32px]" data-name="Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 8">
        <g id="Dots">
          <circle cx="4" cy="4" fill="var(--fill-0, #415AA9)" id="Ellipse" r="4" />
          <circle cx="16" cy="4" fill="var(--fill-0, #006B56)" id="Ellipse_2" r="4" />
          <circle cx="28" cy="4" fill="var(--fill-0, #FF5812)" id="Ellipse_3" r="4" />
        </g>
      </svg>
    </div>
  );
}

function DateBody12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="Date Body">
      <Dots1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop12 />
      <DateBody12 />
    </div>
  );
}

function CalendarWidgetCell12() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background13 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Background14() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">13</p>
      </div>
    </div>
  );
}

function DateTop13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate13 />
    </div>
  );
}

function DateBody13() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container29() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop13 />
      <DateBody13 />
    </div>
  );
}

function CalendarWidgetCell13() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background14 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <CalendarWidgetCell7 />
      <CalendarWidgetCell8 />
      <CalendarWidgetCell9 />
      <CalendarWidgetCell10 />
      <CalendarWidgetCell11 />
      <CalendarWidgetCell12 />
      <CalendarWidgetCell13 />
    </div>
  );
}

function Background15() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate14() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">14</p>
      </div>
    </div>
  );
}

function DateTop14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate14 />
    </div>
  );
}

function DateBody14() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container30() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop14 />
      <DateBody14 />
    </div>
  );
}

function CalendarWidgetCell14() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background15 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Background16() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate15() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">15</p>
      </div>
    </div>
  );
}

function DateTop15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate15 />
    </div>
  );
}

function DateBody15() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop15 />
      <DateBody15 />
    </div>
  );
}

function CalendarWidgetCell15() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background16 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Background17() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate16() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">16</p>
      </div>
    </div>
  );
}

function DateTop16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate16 />
    </div>
  );
}

function DateBody16() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container32() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop16 />
      <DateBody16 />
    </div>
  );
}

function CalendarWidgetCell16() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background17 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Background18() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate17() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">17</p>
      </div>
    </div>
  );
}

function DateTop17() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate17 />
    </div>
  );
}

function DateBody17() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container33() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop17 />
      <DateBody17 />
    </div>
  );
}

function CalendarWidgetCell17() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background18 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Background19() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate18() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">18</p>
      </div>
    </div>
  );
}

function DateTop18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate18 />
    </div>
  );
}

function Dots2() {
  return (
    <div className="h-[8px] relative shrink-0 w-[56px]" data-name="Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 8">
        <g id="Dots">
          <circle cx="4" cy="4" fill="var(--fill-0, #0561A4)" id="Ellipse" r="4" />
          <circle cx="16" cy="4" fill="var(--fill-0, #415AA9)" id="Ellipse_2" r="4" />
          <circle cx="28" cy="4" fill="var(--fill-0, #006B56)" id="Ellipse_3" r="4" />
          <circle cx="40" cy="4" fill="var(--fill-0, #CEA331)" id="Ellipse_4" r="4" />
          <circle cx="52" cy="4" fill="var(--fill-0, #FF5812)" id="Ellipse_5" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="plus">
          <path d={svgPaths.p2f660b80} fill="var(--fill-0, #0561A4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Count2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-full items-center pb-[2px] pt-0 px-0 relative shrink-0" data-name="Count">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0561a4] text-[10px] text-nowrap tracking-[-0.4px] whitespace-pre">2</p>
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-[62.286px]" data-name="Text Link">
      <Plus />
      <Count2 />
    </div>
  );
}

function DateBody18() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="Date Body">
      <Dots2 />
      <TextLink />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop18 />
      <DateBody18 />
    </div>
  );
}

function CalendarWidgetCell18() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background19 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Background20() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate19() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">19</p>
      </div>
    </div>
  );
}

function DateTop19() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate19 />
    </div>
  );
}

function DateBody19() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container35() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop19 />
      <DateBody19 />
    </div>
  );
}

function CalendarWidgetCell19() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background20 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Background21() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate20() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">20</p>
      </div>
    </div>
  );
}

function DateTop20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate20 />
    </div>
  );
}

function DateBody20() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container36() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop20 />
      <DateBody20 />
    </div>
  );
}

function CalendarWidgetCell20() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background21 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <CalendarWidgetCell14 />
      <CalendarWidgetCell15 />
      <CalendarWidgetCell16 />
      <CalendarWidgetCell17 />
      <CalendarWidgetCell18 />
      <CalendarWidgetCell19 />
      <CalendarWidgetCell20 />
    </div>
  );
}

function Background22() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate21() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">21</p>
      </div>
    </div>
  );
}

function DateTop21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate21 />
    </div>
  );
}

function DateBody21() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container37() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop21 />
      <DateBody21 />
    </div>
  );
}

function CalendarWidgetCell21() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background22 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Background23() {
  return <div className="absolute bg-[rgba(206,212,218,0.12)] bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate22() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center pb-[3px] pt-px px-[2px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" id="Ellipse 1" r="11.5" stroke="var(--stroke-0, #0561A4)" />
        </svg>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0561a4] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">22</p>
      </div>
    </div>
  );
}

function DateTop22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate22 />
    </div>
  );
}

function Dots3() {
  return (
    <div className="h-[8px] relative shrink-0 w-[20px]" data-name="Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 8">
        <g id="Dots">
          <circle cx="4" cy="4" fill="var(--fill-0, #0561A4)" id="Ellipse" r="4" />
          <circle cx="16" cy="4" fill="var(--fill-0, #415AA9)" id="Ellipse_2" r="4" />
        </g>
      </svg>
    </div>
  );
}

function DateBody22() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] relative shrink-0 w-full" data-name="Date Body">
      <Dots3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop22 />
      <DateBody22 />
    </div>
  );
}

function CalendarWidgetCell22() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background23 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Background24() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate23() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">23</p>
      </div>
    </div>
  );
}

function DateTop23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate23 />
    </div>
  );
}

function DateBody23() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container39() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop23 />
      <DateBody23 />
    </div>
  );
}

function CalendarWidgetCell23() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background24 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Background25() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate24() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">24</p>
      </div>
    </div>
  );
}

function DateTop24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate24 />
    </div>
  );
}

function DateBody24() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container40() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop24 />
      <DateBody24 />
    </div>
  );
}

function CalendarWidgetCell24() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background25 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Background26() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">25</p>
      </div>
    </div>
  );
}

function DateTop25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate25 />
    </div>
  );
}

function DateBody25() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container41() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop25 />
      <DateBody25 />
    </div>
  );
}

function CalendarWidgetCell25() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background26 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Background27() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate26() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">26</p>
      </div>
    </div>
  );
}

function DateTop26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate26 />
    </div>
  );
}

function DateBody26() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container42() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop26 />
      <DateBody26 />
    </div>
  );
}

function CalendarWidgetCell26() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background27 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Background28() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate27() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">27</p>
      </div>
    </div>
  );
}

function DateTop27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate27 />
    </div>
  );
}

function DateBody27() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop27 />
      <DateBody27 />
    </div>
  );
}

function CalendarWidgetCell27() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background28 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <CalendarWidgetCell21 />
      <CalendarWidgetCell22 />
      <CalendarWidgetCell23 />
      <CalendarWidgetCell24 />
      <CalendarWidgetCell25 />
      <CalendarWidgetCell26 />
      <CalendarWidgetCell27 />
    </div>
  );
}

function Background29() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate28() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">28</p>
      </div>
    </div>
  );
}

function DateTop28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate28 />
    </div>
  );
}

function DateBody28() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container44() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop28 />
      <DateBody28 />
    </div>
  );
}

function CalendarWidgetCell28() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background29 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Background30() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate29() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">29</p>
      </div>
    </div>
  );
}

function DateTop29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate29 />
    </div>
  );
}

function DateBody29() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container45() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop29 />
      <DateBody29 />
    </div>
  );
}

function CalendarWidgetCell29() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background30 />
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Background31() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate30() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">30</p>
      </div>
    </div>
  );
}

function DateTop30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate30 />
    </div>
  );
}

function DateBody30() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container46() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop30 />
      <DateBody30 />
    </div>
  );
}

function CalendarWidgetCell30() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background31 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Background32() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#212529] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">31</p>
      </div>
    </div>
  );
}

function DateTop31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate31 />
    </div>
  );
}

function DateBody31() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container47() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop31 />
      <DateBody31 />
    </div>
  );
}

function CalendarWidgetCell31() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background32 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Background33() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate32() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">1</p>
      </div>
    </div>
  );
}

function DateTop32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate32 />
    </div>
  );
}

function DateBody32() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container48() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop32 />
      <DateBody32 />
    </div>
  );
}

function CalendarWidgetCell32() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background33 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Background34() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">2</p>
      </div>
    </div>
  );
}

function DateTop33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate33 />
    </div>
  );
}

function DateBody33() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container49() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop33 />
      <DateBody33 />
    </div>
  );
}

function CalendarWidgetCell33() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background34 />
          <Container49 />
        </div>
      </div>
    </div>
  );
}

function Background35() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate34() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">3</p>
      </div>
    </div>
  );
}

function DateTop34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate34 />
    </div>
  );
}

function DateBody34() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container50() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop34 />
      <DateBody34 />
    </div>
  );
}

function CalendarWidgetCell34() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background35 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <CalendarWidgetCell28 />
      <CalendarWidgetCell29 />
      <CalendarWidgetCell30 />
      <CalendarWidgetCell31 />
      <CalendarWidgetCell32 />
      <CalendarWidgetCell33 />
      <CalendarWidgetCell34 />
    </div>
  );
}

function Background36() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate35() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">4</p>
      </div>
    </div>
  );
}

function DateTop35() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate35 />
    </div>
  );
}

function DateBody35() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container51() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop35 />
      <DateBody35 />
    </div>
  );
}

function CalendarWidgetCell35() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background36 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Background37() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate36() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">5</p>
      </div>
    </div>
  );
}

function DateTop36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate36 />
    </div>
  );
}

function DateBody36() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container52() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop36 />
      <DateBody36 />
    </div>
  );
}

function CalendarWidgetCell36() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background37 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Background38() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate37() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">6</p>
      </div>
    </div>
  );
}

function DateTop37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate37 />
    </div>
  );
}

function DateBody37() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container53() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop37 />
      <DateBody37 />
    </div>
  );
}

function CalendarWidgetCell37() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background38 />
          <Container53 />
        </div>
      </div>
    </div>
  );
}

function Background39() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate38() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">7</p>
      </div>
    </div>
  );
}

function DateTop38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate38 />
    </div>
  );
}

function DateBody38() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container54() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop38 />
      <DateBody38 />
    </div>
  );
}

function CalendarWidgetCell38() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background39 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Background40() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate39() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">8</p>
      </div>
    </div>
  );
}

function DateTop39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate39 />
    </div>
  );
}

function DateBody39() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container55() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop39 />
      <DateBody39 />
    </div>
  );
}

function CalendarWidgetCell39() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background40 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Background41() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate40() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">9</p>
      </div>
    </div>
  );
}

function DateTop40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate40 />
    </div>
  );
}

function DateBody40() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container56() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop40 />
      <DateBody40 />
    </div>
  );
}

function CalendarWidgetCell40() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background41 />
          <Container56 />
        </div>
      </div>
    </div>
  );
}

function Background42() {
  return <div className="absolute bottom-px left-0 right-px top-0" data-name="Background" />;
}

function CalendarDate41() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[5px] pt-[3px] px-[4px] relative shrink-0 size-[24px]" data-name="Calendar Date">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#878a99] text-[13px] text-center text-nowrap tracking-[-0.4px]">
        <p className="leading-[16px] overflow-ellipsis overflow-hidden whitespace-pre">10</p>
      </div>
    </div>
  );
}

function DateTop41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Date Top">
      <CalendarDate41 />
    </div>
  );
}

function DateBody41() {
  return <div className="box-border content-stretch flex flex-col gap-[4px] items-start opacity-50 px-0 py-[4px] shrink-0 w-full" data-name="Date Body" />;
}

function Container57() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <DateTop41 />
      <DateBody41 />
    </div>
  );
}

function CalendarWidgetCell41() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Calendar Widget Cell">
      <div aria-hidden="true" className="absolute border-[#e9ebec] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[64px] items-start p-[4px] relative w-full">
          <Background42 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Row17() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="Row">
      <CalendarWidgetCell35 />
      <CalendarWidgetCell36 />
      <CalendarWidgetCell37 />
      <CalendarWidgetCell38 />
      <CalendarWidgetCell39 />
      <CalendarWidgetCell40 />
      <CalendarWidgetCell41 />
    </div>
  );
}

function CalendarBody() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Calendar Body">
      <Row12 />
      <Row13 />
      <Row14 />
      <Row15 />
      <Row16 />
      <Row17 />
      <div className="absolute bottom-0 flex items-center justify-center left-0 right-0 top-[-32px]">
        <div className="flex-none h-[416px] rotate-[180deg] scale-y-[-100%] w-[484px]">
          <div className="relative size-full" data-name="Border">
            <div aria-hidden="true" className="absolute border border-[#dfe2eb] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarBody1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-0 px-[20px] relative shrink-0 w-[524px]" data-name="Calendar Body">
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <circle cx="8" cy="8" fill="var(--fill-0, #0561A4)" id="Ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function CategoryLabels() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center px-0 py-px relative shrink-0" data-name="Category Labels">
      <Icon3 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">규제</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <circle cx="8" cy="8" fill="var(--fill-0, #415AA9)" id="Ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function CategoryLabels1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center px-0 py-px relative shrink-0" data-name="Category Labels">
      <Icon4 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">활동</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <circle cx="8" cy="8" fill="var(--fill-0, #006B56)" id="Ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function CategoryLabels2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center px-0 py-px relative shrink-0" data-name="Category Labels">
      <Icon5 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">심사</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <circle cx="8" cy="8" fill="var(--fill-0, #CEA331)" id="Ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function CategoryLabels3() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center px-0 py-px relative shrink-0" data-name="Category Labels">
      <Icon6 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">교육</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <circle cx="8" cy="8" fill="var(--fill-0, #FF5812)" id="Ellipse" r="6" />
        </g>
      </svg>
    </div>
  );
}

function CategoryLabels4() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center px-0 py-px relative shrink-0" data-name="Category Labels">
      <Icon7 />
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#212529] text-[14px] text-center text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">법령</p>
      </div>
    </div>
  );
}

function Labels() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Labels">
      <CategoryLabels />
      <CategoryLabels1 />
      <CategoryLabels2 />
      <CategoryLabels3 />
      <CategoryLabels4 />
    </div>
  );
}

function CalendarBottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="Calendar Bottom">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-end justify-center pb-[16px] pt-0 px-[20px] relative w-full">
          <Labels />
        </div>
      </div>
    </div>
  );
}

function CalendarWidetMonth() {
  return (
    <div className="absolute bg-[rgba(206,212,218,0.12)] content-stretch flex flex-col items-start left-[1372px] top-[95px]" data-name="Calendar Widet / Month">
      <CalendarActions />
      <CalendarBody1 />
      <CalendarBottom />
    </div>
  );
}

function Label15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px] w-[492px]">{`1월 2일 화요일 `}</p>
    </div>
  );
}

function Title15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start line-through min-h-px min-w-px relative shrink-0 tracking-[-0.4px]" data-name="Title">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#001b3d] text-[14px] w-[min-content]">[ESG] TCFD: 2021</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#212529] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        규제 갱신일
      </p>
    </div>
  );
}

function Left7() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#0561a4] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title15 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Checkbox">
          <path d={svgPaths.p2567a080} fill="var(--fill-0, #0561A4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CheckBox() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox />
    </div>
  );
}

function Label16() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox />
      <Label16 />
    </div>
  );
}

function Row18() {
  return (
    <div className="content-stretch flex gap-[16px] items-center opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left7 />
      <Checkbox1 />
    </div>
  );
}

function TaskCard() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[8px] pt-[20px] px-[20px] relative w-full">
          <Row18 />
        </div>
      </div>
    </div>
  );
}

function TodoList() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Todo List">
      <TaskCard />
    </div>
  );
}

function TodoCardList() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[4px] shrink-0 w-[484px]" data-name="Todo Card List">
      <Label15 />
      <TodoList />
    </div>
  );
}

function Label17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0561a4] text-[14px] tracking-[-0.6px] w-[492px]">{`1월 2일 화요일 `}</p>
    </div>
  );
}

function Title16() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-[min-content]">[ESG] TCFD: 2021</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212529] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        규제 갱신일
      </p>
    </div>
  );
}

function Left8() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#0561a4] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title16 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox2 />
    </div>
  );
}

function Label18() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox1 />
      <Label18 />
    </div>
  );
}

function Row19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left8 />
      <Checkbox3 />
    </div>
  );
}

function TaskCard1() {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[8px] pt-[20px] px-[20px] relative w-full">
          <Row19 />
        </div>
      </div>
    </div>
  );
}

function Title17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-[min-content]">ISO14001 인증 환경경영시스템 예비 심사</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212529] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        심사 시작일
      </p>
    </div>
  );
}

function Left9() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#006b56] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title17 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox4 />
    </div>
  );
}

function Label19() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox2 />
      <Label19 />
    </div>
  );
}

function Row20() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left9 />
      <Checkbox5 />
    </div>
  );
}

function TaskCard2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[8px] relative w-full">
          <Row20 />
        </div>
      </div>
    </div>
  );
}

function Title18() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] tracking-[-0.6px] w-[min-content]">어선법 시행규칙</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        개정 공포일
      </p>
    </div>
  );
}

function Left10() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#ff5812] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title18 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox6 />
    </div>
  );
}

function Label20() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox3 />
      <Label20 />
    </div>
  );
}

function Row21() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left10 />
      <Checkbox7 />
    </div>
  );
}

function TaskCard3() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[8px] px-[20px] relative w-full">
          <Row21 />
        </div>
      </div>
    </div>
  );
}

function TodoList1() {
  return (
    <div className="bg-[#f3f6f9] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Todo List">
      <TaskCard1 />
      <TaskCard2 />
      <TaskCard3 />
    </div>
  );
}

function TodoCardList1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[4px] shrink-0 w-[484px]" data-name="Todo Card List">
      <Label17 />
      <TodoList1 />
    </div>
  );
}

function Label21() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px] w-[492px]">{`1월 18일 목요일 `}</p>
    </div>
  );
}

function Title19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-[min-content]">[ISO] ISO 37301: 2021 - 전체</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212529] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        규제 갱신일
      </p>
    </div>
  );
}

function Left11() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#0561a4] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title19 />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox8 />
    </div>
  );
}

function Label22() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox4 />
      <Label22 />
    </div>
  );
}

function Row22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left11 />
      <Checkbox9 />
    </div>
  );
}

function TaskCard4() {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[8px] pt-[20px] px-[20px] relative w-full">
          <Row22 />
        </div>
      </div>
    </div>
  );
}

function Title20() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-[min-content]">사업장 현황 정리 1</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212529] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        활동 시작일
      </p>
    </div>
  );
}

function Left12() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#415aa9] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title20 />
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox5() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox10 />
    </div>
  );
}

function Label23() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox5 />
      <Label23 />
    </div>
  );
}

function Row23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left12 />
      <Checkbox11 />
    </div>
  );
}

function TaskCard5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[8px] relative w-full">
          <Row23 />
        </div>
      </div>
    </div>
  );
}

function Title21() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] tracking-[-0.6px] w-[min-content]">ISO14001 인증 환경경영시스템 문서 심사</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        심사 시작일
      </p>
    </div>
  );
}

function Left13() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#006b56] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title21 />
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox6() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox12 />
    </div>
  );
}

function Label24() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox6 />
      <Label24 />
    </div>
  );
}

function Row24() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left13 />
      <Checkbox13 />
    </div>
  );
}

function TaskCard6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[8px] relative w-full">
          <Row24 />
        </div>
      </div>
    </div>
  );
}

function Title22() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] tracking-[-0.6px] w-[min-content]">[신규입사자] Compliance 교육 2차</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        교육 시작일
      </p>
    </div>
  );
}

function Left14() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#cea331] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title22 />
    </div>
  );
}

function Checkbox14() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox14 />
    </div>
  );
}

function Label25() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox7 />
      <Label25 />
    </div>
  );
}

function Row25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left14 />
      <Checkbox15 />
    </div>
  );
}

function TaskCard7() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[8px] relative w-full">
          <Row25 />
        </div>
      </div>
    </div>
  );
}

function Title23() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] tracking-[-0.6px] w-[min-content]">에너지이용 합리화법 시행규칙</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        개정 시행일
      </p>
    </div>
  );
}

function Left15() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#ff5812] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title23 />
    </div>
  );
}

function Checkbox16() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox16 />
    </div>
  );
}

function Label26() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox8 />
      <Label26 />
    </div>
  );
}

function Row26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left15 />
      <Checkbox17 />
    </div>
  );
}

function TaskCard8() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[8px] relative w-full">
          <Row26 />
        </div>
      </div>
    </div>
  );
}

function Title24() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] tracking-[-0.6px] w-[min-content]">전기안전관리법 시행규칙</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        개정 공포일
      </p>
    </div>
  );
}

function Left16() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#ff5812] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title24 />
    </div>
  );
}

function Checkbox18() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox18 />
    </div>
  );
}

function Label27() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox9 />
      <Label27 />
    </div>
  );
}

function Row27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left16 />
      <Checkbox19 />
    </div>
  );
}

function TaskCard9() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[8px] relative w-full">
          <Row27 />
        </div>
      </div>
    </div>
  );
}

function Title25() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#212529]" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] tracking-[-0.6px] w-[min-content]">환경오염시설의 통합관리에 관한 법률 시행령</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        개정 공포일
      </p>
    </div>
  );
}

function Left17() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#ff5812] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title25 />
    </div>
  );
}

function Checkbox20() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox10() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox20 />
    </div>
  );
}

function Label28() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox10 />
      <Label28 />
    </div>
  );
}

function Row28() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left17 />
      <Checkbox21 />
    </div>
  );
}

function TaskCard10() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[8px] px-[20px] relative w-full">
          <Row28 />
        </div>
      </div>
    </div>
  );
}

function TodoList2() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Todo List">
      <TaskCard4 />
      <TaskCard5 />
      <TaskCard6 />
      <TaskCard7 />
      <TaskCard8 />
      <TaskCard9 />
      <TaskCard10 />
    </div>
  );
}

function TodoCardList2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[4px] shrink-0 w-[484px]" data-name="Todo Card List">
      <Label21 />
      <TodoList2 />
    </div>
  );
}

function Label29() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="font-['Noto_Sans_KR:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px] w-[492px]">{`1월 22일 화요일 `}</p>
    </div>
  );
}

function Title26() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-[min-content]">[중대재해] 1. 중대재해처벌법-휴맥스EV</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212529] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        규제 갱신일
      </p>
    </div>
  );
}

function Left18() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#0561a4] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title26 />
    </div>
  );
}

function Checkbox22() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox11() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox22 />
    </div>
  );
}

function Label30() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox11 />
      <Label30 />
    </div>
  );
}

function Row29() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left18 />
      <Checkbox23 />
    </div>
  );
}

function TaskCard11() {
  return (
    <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start pb-[8px] pt-[20px] px-[20px] relative w-full">
          <Row29 />
        </div>
      </div>
    </div>
  );
}

function Title27() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Title">
      <p className="font-['Noto_Sans_KR:Medium',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#001b3d] text-[14px] tracking-[-0.6px] w-[min-content]">사업장 현황 정리 2</p>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212529] text-[12px] text-nowrap tracking-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        활동 시작일
      </p>
    </div>
  );
}

function Left19() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-[5px]" style={{ "--transform-inner-width": "48", "--transform-inner-height": "5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="bg-[#415aa9] h-[5px] w-[48px]" data-name="Line" />
        </div>
      </div>
      <Title27 />
    </div>
  );
}

function Checkbox24() {
  return (
    <div className="bg-white relative shrink-0 size-[14px]" data-name="Checkbox">
      <div className="absolute border border-[#dfe2eb] border-solid inset-0 rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function CheckBox12() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[3px] relative shrink-0" data-name="Check Box">
      <Checkbox24 />
    </div>
  );
}

function Label31() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-[2px] py-0 relative shrink-0" data-name="Label">
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#212529] text-[14px] text-nowrap tracking-[-0.6px] whitespace-pre">일정 확인</p>
    </div>
  );
}

function Checkbox25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Checkbox">
      <CheckBox12 />
      <Label31 />
    </div>
  );
}

function Row30() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative rounded-[8px] shrink-0 w-full" data-name="Row">
      <Left19 />
      <Checkbox25 />
    </div>
  );
}

function TaskCard12() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Task Card">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[20px] py-[8px] relative w-full">
          <Row30 />
        </div>
      </div>
    </div>
  );
}

function TodoList3() {
  return (
    <div className="bg-[rgba(206,212,218,0.12)] content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Todo List">
      <TaskCard11 />
      <TaskCard12 />
    </div>
  );
}

function TodoCardList3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[4px] shrink-0 w-[484px]" data-name="Todo Card List">
      <Label29 />
      <TodoList3 />
    </div>
  );
}

function TaskList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[1392px] top-[645px]" data-name="Task List">
      <TodoCardList />
      <TodoCardList1 />
      <TodoCardList2 />
      <TodoCardList3 />
    </div>
  );
}

function Widget6() {
  return (
    <div className="absolute contents left-[1372px] top-[94px]" data-name="Widget">
      <div className="absolute flex h-[1723px] items-center justify-center left-[1372px] top-[94px] w-[524px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Component02ElementsCardBg6 />
        </div>
      </div>
      <CalendarWidetMonth />
      <TaskList />
    </div>
  );
}

function ArrowFromRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="arrow-from-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-from-right">
          <path d={svgPaths.p126dc600} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconBtn() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[9px] relative shrink-0" data-name="icon-btn">
      <ArrowFromRight />
    </div>
  );
}

function SearchAlt() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search-alt-2">
          <path d={svgPaths.p1dfb2700} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Objects() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[356px]" data-name="Objects">
      <SearchAlt />
      <p className="basis-0 font-['Noto_Sans_KR:Regular',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#73777f] text-[14px] tracking-[-0.6px]">검색어를 입력해 주세요.</p>
    </div>
  );
}

function SearchBox() {
  return (
    <div className="bg-[#f3f6f9] box-border content-stretch flex flex-col gap-[8px] items-start pb-[10px] pt-[9px] px-[14px] relative rounded-[4px] shrink-0 w-[486px]" data-name="Search Box">
      <Objects />
    </div>
  );
}

function Left20() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Left">
      <IconBtn />
      <SearchBox />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="help-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="help-circle">
          <g id="Vector">
            <path d={svgPaths.p10f68e80} fill="var(--fill-0, #73777F)" />
            <path d={svgPaths.p2d0a5080} fill="var(--fill-0, #73777F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconBtn1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[9px] relative shrink-0" data-name="icon-btn">
      <HelpCircle />
    </div>
  );
}

function Announcement() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Announcement">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Announcement">
          <path d={svgPaths.p2e053f00} fill="var(--fill-0, #73777F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Label32() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center px-0 py-[3px] relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white tracking-[-0.4px]">
        <p className="leading-[14px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Label32 />
    </div>
  );
}

function BasicBadge13() {
  return (
    <div className="absolute bg-[#ff5812] box-border content-stretch flex gap-[8px] h-[16px] items-center px-[6px] py-0 right-0 rounded-[100px] top-[0.5px]" data-name="Basic Badge">
      <Container58 />
    </div>
  );
}

function IconBtn2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-start p-[9px] relative shrink-0" data-name="icon-btn">
      <Announcement />
      <BasicBadge13 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <IconBtn1 />
      <IconBtn2 />
    </div>
  );
}

function Row31() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <Left20 />
      <Right3 />
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Actions">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[14px] py-[13px] relative w-full">
          <Row31 />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar">
      <div className="absolute left-0 rounded-[100px] size-[32px] top-0" data-name="User">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[100px] size-full" src={imgUser} />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0561a4] text-[14px] text-nowrap tracking-[-0.6px]">
        <p className="leading-[20px] whitespace-pre">김경영(관리자)</p>
      </div>
      <p className="font-['Roboto:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#212529] text-[12px] tracking-[-0.4px] w-[77px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        본사
      </p>
    </div>
  );
}

function Objects1() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Objects">
      <Avatar />
      <Text3 />
    </div>
  );
}

function Component03BaseUiUserInfo() {
  return (
    <div className="bg-[rgba(5,97,164,0.05)] box-border content-stretch flex flex-col gap-[8px] h-[70px] items-start justify-center max-w-[188px] min-w-[160px] pb-[16px] pt-[19px] px-[16px] relative shrink-0 w-[186px]" data-name="03) Base UI / User-info">
      <Objects1 />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1668px]" data-name="Top">
      <Actions />
      <Component03BaseUiUserInfo />
    </div>
  );
}

function Topbar() {
  return (
    <div className="absolute bg-white content-stretch flex items-start left-[252px] right-0 top-0" data-name="Topbar">
      <Top />
      <div className="absolute bg-[#dfe2eb] bottom-0 h-px left-0 right-0" data-name="Line" />
    </div>
  );
}

function Layout() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="layout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="layout">
          <path d={svgPaths.pb796780} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Left21() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <Layout />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.6px] whitespace-pre">대시보드</p>
    </div>
  );
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[12px] relative w-full">
          <Left21 />
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[252px]" data-name="Menu 01">
      <Item />
    </div>
  );
}

function BookAlt() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="book-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="book-alt">
          <g id="Vector">
            <path d={svgPaths.p228faf80} fill="#878A99" />
            <path d={svgPaths.p3c462a00} fill="#878A99" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Left22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Left">
      <BookAlt />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">규제관리</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[12px] relative w-full">
          <Left22 />
        </div>
      </div>
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[252px]" data-name="Menu 02">
      <Item1 />
    </div>
  );
}

function Error() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="error">
          <path d={svgPaths.pc009990} fill="var(--fill-0, #878A99)" id="Vector" />
          <path d={svgPaths.p2dc8ca80} fill="var(--fill-0, #878A99)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Left23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <Error />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">위험관리</p>
    </div>
  );
}

function IconsBxChevronRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icons / bx-chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left23 />
      <IconsBxChevronRight />
    </div>
  );
}

function Menu2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[252px]" data-name="Menu 03">
      <Item2 />
    </div>
  );
}

function Task() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="task">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="task">
          <path d={svgPaths.p7436bf0} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
          <path d={svgPaths.p27f0f030} fill="var(--fill-0, #878A99)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Left24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <Task />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">예방관리</p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path d={svgPaths.p1491e600} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left24 />
      <ChevronDown1 />
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu 04">
      <Item3 />
    </div>
  );
}

function CommentError() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="comment-error">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="comment-error">
          <path d={svgPaths.pc5e7400} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
          <path d={svgPaths.p17246d00} fill="var(--fill-0, #878A99)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Left25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <CommentError />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">이슈관리</p>
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Item">
      <Left25 />
      <ChevronRight5 />
    </div>
  );
}

function Menu4() {
  return (
    <div className="box-border content-stretch flex items-start px-[24px] py-[12px] relative shrink-0" data-name="Menu 05">
      <Item4 />
    </div>
  );
}

function Rule() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="rule">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="rule">
          <path d={svgPaths.p3c54fb80} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Left26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <Rule />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">심사관리</p>
    </div>
  );
}

function ChevronRight6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item5() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left26 />
      <ChevronRight6 />
    </div>
  );
}

function Menu5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu 06">
      <Item5 />
    </div>
  );
}

function School() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="school">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="school">
          <path d={svgPaths.p1b130b80} fill="var(--fill-0, #878A99)" id="school_2" />
        </g>
      </svg>
    </div>
  );
}

function Left27() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <School />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">교육관리</p>
    </div>
  );
}

function ChevronRight7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left27 />
      <ChevronRight7 />
    </div>
  );
}

function Menu6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu 07">
      <Item6 />
    </div>
  );
}

function Gavel() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="gavel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="gavel">
          <path d={svgPaths.p3a97df00} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Left28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <Gavel />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">법령관리</p>
    </div>
  );
}

function ChevronRight8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left28 />
      <ChevronRight8 />
    </div>
  );
}

function Menu7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu 08">
      <Item7 />
    </div>
  );
}

function PersonalInjury() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="personal_injury">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="personal_injury">
          <path d={svgPaths.p183ec780} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Left29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <PersonalInjury />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">사고관리</p>
    </div>
  );
}

function ChevronRight9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left29 />
      <ChevronRight9 />
    </div>
  );
}

function Menu8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu 09">
      <Item8 />
    </div>
  );
}

function Board() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="board">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="board">
          <path d={svgPaths.p16f24200} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Left30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <Board />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">게시판</p>
    </div>
  );
}

function ChevronRight10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left30 />
      <ChevronRight10 />
    </div>
  );
}

function Menu9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu 10">
      <Item9 />
    </div>
  );
}

function IdCard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="id-card">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="id-card">
          <path d={svgPaths.pc03c100} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Left31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[174px]" data-name="Left">
      <IdCard />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] leading-[23px] not-italic relative shrink-0 text-[#878a99] text-[15px] text-nowrap tracking-[-0.6px] whitespace-pre">기준정보 관리</p>
    </div>
  );
}

function ChevronRight11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons / bx-chevron-right">
          <path d={svgPaths.p312a6680} fill="var(--fill-0, #878A99)" id="Vector" stroke="var(--stroke-0, #878A99)" />
        </g>
      </svg>
    </div>
  );
}

function Item10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start px-[24px] py-[12px] relative shrink-0" data-name="Item">
      <Left31 />
      <ChevronRight11 />
    </div>
  );
}

function Menu10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Menu 11">
      <Item10 />
    </div>
  );
}

function MenuLlst() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[80px]" data-name="Menu-Llst">
      <Menu />
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
      <Menu7 />
      <Menu8 />
      <Menu9 />
      <Menu10 />
    </div>
  );
}

function CompliLawBi() {
  return (
    <div className="absolute inset-[7.69%_2.12%_3.85%_1.59%]" data-name="CompliLaw_BI">
      <div className="absolute bottom-[-0.01%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 23">
          <g id="CompliLaw_BI">
            <g id="Group">
              <path d={svgPaths.p333e32f2} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p1e4f9470} fill="var(--fill-0, white)" id="Vector_2" />
              <path d={svgPaths.p1bee0900} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.p95426f0} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.pa6e1100} fill="var(--fill-0, white)" id="Vector_5" />
              <path d={svgPaths.p7fb4f00} fill="var(--fill-0, white)" id="Vector_6" />
              <path d={svgPaths.p57e4300} fill="var(--fill-0, white)" id="Vector_7" />
              <path d={svgPaths.p7992880} fill="var(--fill-0, white)" id="Vector_8" />
              <path d={svgPaths.pd4f63f0} fill="var(--fill-0, white)" id="Vector_9" />
            </g>
            <path d={svgPaths.p15e8b300} fill="var(--fill-0, #FF5812)" id="Vector_10" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component02ElementsLogo() {
  return (
    <div className="absolute h-[26px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[126px]" data-name="02) Elements / Logo">
      <CompliLawBi />
    </div>
  );
}

function LogoSmall() {
  return (
    <div className="h-[28px] relative shrink-0 w-[126px]" data-name="Logo(Small)">
      <Component02ElementsLogo />
    </div>
  );
}

function Top1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-start left-0 pb-[14px] pt-[28px] px-[63px] top-0" data-name="Top">
      <LogoSmall />
    </div>
  );
}

function SideBar() {
  return (
    <div className="absolute bg-[#001b3d] h-[1865px] left-0 top-0 w-[252px]" data-name="Side Bar">
      <MenuLlst />
      <Top1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="1-1. 대시보드_관리자">
      <Background />
      <Widget />
      <Widget1 />
      <Widget2 />
      <Widget3 />
      <Widget4 />
      <Widget5 />
      <Widget6 />
      <Topbar />
      <SideBar />
    </div>
  );
}