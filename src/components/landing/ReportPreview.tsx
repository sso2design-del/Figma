import { IconType, ThreeDIcon } from "./ThreeDIcon";

interface ReportPreviewProps {
  type: IconType;
  title: string;
}

export function ReportPreview({ type, title }: ReportPreviewProps) {
  // Different content based on report type
  const getContent = () => {
    switch (type) {
      case "management":
        return {
          period: "2024-01-01 ~ 2024-12-31",
          purpose: "지속가능경영 목표 달성을 위한 체계적인 관리 체계를 수립하고, 전사적인 ESG 성과를 종합적으로 평가하여 이해관계자에게 투명하게 공시합니다.",
          items: [
            { category: "환경(E)", activities: ["탄소배출량 관리", "에너지 효율화", "폐기물 감축", "수자원 관리"] },
            { category: "사회(S)", activities: ["근로환경 개선", "인권 보호", "지역사회 기여", "공급망 관리"] },
            { category: "지배구조(G)", activities: ["이사회 다양성", "윤리경영", "리스크 관리", "정보공시 투명성"] }
          ]
        };
      
      case "disclosure":
        return {
          period: "2024-01-01 ~ 2024-12-31",
          purpose: "ISSB, ESRS 등 글로벌 공시 기준에 따라 기업의 ESG 정보를 체계적으로 수집하고 검증하여 투자자 및 이해관계자에게 신뢰성 있는 정보를 제공합니다.",
          items: [
            { category: "ISSB 기준", activities: ["지속가능성 관련 재무정보", "기후변화 공시(IFRS S2)", "일반 요구사항(IFRS S1)", "산업별 공시사항"] },
            { category: "ESRS 기준", activities: ["환경 공시사항", "사회 공시사항", "지배구조 공시사항", "이중 중요성 평가"] },
            { category: "국내 규제", activities: ["ESG 정보공개 가이던스", "지속가능경영보고서", "통합보고서", "온실가스 배출권거래제"] }
          ]
        };
      
      case "report":
        return {
          period: "2024-01-01 ~ 2024-12-31",
          purpose: "GRI, SASB 등 국제 표준에 부합하는 지속가능경영 보고서를 작성하여 기업의 ESG 성과를 종합적으로 보고하고, 이해관계자와의 소통을 강화합니다.",
          items: [
            { category: "보고서 구성", activities: ["CEO 메시지", "ESG 전략 및 목표", "중대성 평가 결과", "성과 지표 및 데이터"] },
            { category: "GRI 표준", activities: ["GRI 2: 일반 공개", "GRI 3: 중대 주제", "주제별 표준 적용", "이해관계자 참여"] },
            { category: "검증 및 보증", activities: ["제3자 검증", "데이터 정확성 확인", "프로세스 적정성 평가", "개선 권고사항"] }
          ]
        };
      
      case "data":
        return {
          period: "실시간 데이터 수집",
          purpose: "조직 내 다양한 부서에서 발생하는 ESG 데이터를 실시간으로 수집하고 통합 관리하여, 정확한 의사결정을 지원하고 보고 업무의 효율성을 극대화합니다.",
          items: [
            { category: "데이터 수집", activities: ["에너지 사용량", "온실가스 배출량", "폐기물 발생량", "용수 사용량"] },
            { category: "데이터 관리", activities: ["자동화 워크플로우", "데이터 검증 프로세스", "승인 체계", "이력 관리"] },
            { category: "데이터 분석", activities: ["실시간 대시보드", "추세 분석", "벤치마킹", "KPI 모니터링"] }
          ]
        };
      
      case "carbon":
        return {
          period: "2024-01-01 ~ 2024-12-31",
          purpose: "GHG 프로토콜에 따라 Scope 1, 2, 3의 온실가스 배출량을 정밀하게 산정하고, 탄소중립 목표 달성을 위한 감축 전략을 수립합니다.",
          items: [
            { category: "Scope 1", activities: ["직접 배출원 파악", "고정 연소 배출", "이동 연소 배출", "공정 배출"] },
            { category: "Scope 2", activities: ["전력 사용량", "스팀 사용량", "냉난방 에너지", "간접 배출 계산"] },
            { category: "Scope 3", activities: ["구매한 제품/서비스", "출장 및 통근", "폐기물 처리", "공급망 배출"] }
          ]
        };
      
      case "supply":
        return {
          period: "2024-01-01 ~ 2024-12-31",
          purpose: "협력사의 ESG 리스크를 체계적으로 진단하고 개선 활동을 지원하여, 지속가능한 공급망 생태계를 구축합니다.",
          items: [
            { category: "협력사 평가", activities: ["ESG 자가진단", "현장 실사", "리스크 등급 분류", "개선 계획 수립"] },
            { category: "모니터링", activities: ["정기 점검", "성과 추적", "이슈 관리", "개선 이행 확인"] },
            { category: "지원 프로그램", activities: ["교육 프로그램", "컨설팅 지원", "우수사례 공유", "인센티브 제공"] }
          ]
        };
      
      case "compliance":
        return {
          period: "실시간 법규 모니터링",
          purpose: "국내외 환경·안전·보건 관련 법규를 실시간으로 추적하고, 기업에 적용되는 규제 준수 여부를 체계적으로 관리하여 법적 리스크를 최소화합니다.",
          items: [
            { category: "법규 관리", activities: ["법규 DB 구축", "개정사항 추적", "적용 법규 매핑", "알림 서비스"] },
            { category: "준수 점검", activities: ["체크리스트 관리", "이행 현황 모니터링", "미준수 사항 식별", "개선 조치 추적"] },
            { category: "보고 및 대응", activities: ["당국 보고서 작성", "감사 대비 문서", "리스크 평가", "시정 조치 계획"] }
          ]
        };
      
      case "safety":
        return {
          period: "2024-01-01 ~ 2024-12-31",
          purpose: "중대재해처벌법에 따른 안전보건관리체계를 구축하고, 위험성 평가 및 안전 조치 이행 현황을 체계적으로 관리하여 중대재해를 사전에 예방합니다.",
          items: [
            { category: "위험성 평가", activities: ["유해위험요인 파악", "위험도 산정", "개선 대책 수립", "근로자 참여"] },
            { category: "안전보건 조치", activities: ["안전교육 실시", "보호구 지급 관리", "안전점검 수행", "위험 작업 허가"] },
            { category: "경영책임", activities: ["안전보건 방침", "예산 및 인력 배정", "이행점검 체계", "개선 명령 이행"] }
          ]
        };
      
      default:
        return {
          period: "2024-01-01 ~ 2024-12-31",
          purpose: "ESG 규제 준수를 위한 체계적인 관리 및 보고 체계를 구축합니다.",
          items: [
            { category: "항목 1", activities: ["활동 1", "활동 2", "활동 3", "활동 4"] },
            { category: "항목 2", activities: ["활동 1", "활동 2", "활동 3", "활동 4"] }
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
      {/* Document Header with Icon */}
      <div className="relative bg-gradient-to-r from-[#001B3D] via-[#0561A4] to-[#001B3D] text-white px-10 py-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5812]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        
        <div className="relative flex items-center gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
            <div className="w-20 h-20">
              <ThreeDIcon type={type} />
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-block bg-[#FF5812] text-white text-xs font-bold px-4 py-2 rounded-full mb-3">
              상세 리포트
            </div>
            <h3 className="text-4xl font-bold mb-2">{title}</h3>
            <p className="text-blue-100 text-sm font-medium">CompliLaw ESG Compliance Platform</p>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-10 space-y-8">
        {/* Info Cards Row */}
        <div className="grid grid-cols-1 gap-6">
          {/* Period Card */}
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#0561A4]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#0561A4]/10 rounded-lg p-2">
                <svg className="w-5 h-5 text-[#0561A4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-bold text-[#001B3D] text-sm uppercase tracking-wide">리포트 기간</p>
            </div>
            <p className="text-slate-700 text-lg font-semibold ml-11">{content.period}</p>
          </div>

          {/* Purpose Card */}
          <div className="bg-gradient-to-br from-[#FF5812]/5 to-[#FF5812]/10 rounded-xl p-6 shadow-md border-l-4 border-[#FF5812]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#FF5812] rounded-lg p-2">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="font-bold text-[#001B3D] text-sm uppercase tracking-wide">리포트 목적</p>
            </div>
            <p className="text-slate-700 leading-relaxed ml-11">{content.purpose}</p>
          </div>
        </div>

        {/* Main Table Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-[#0561A4] to-[#0671BF] px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-lg p-2">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <p className="font-bold text-white text-base uppercase tracking-wide">주요 관리 항목</p>
            </div>
          </div>
          
          <div className="overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-5 bg-[#F6F7FB] border-b-2 border-[#0561A4]">
              <div className="col-span-2 px-6 py-4 font-bold text-[#001B3D] text-sm border-r border-slate-300">
                분류 항목
              </div>
              <div className="col-span-3 px-6 py-4 font-bold text-[#001B3D] text-sm">
                세부 관리 활동
              </div>
            </div>

            {/* Table Body */}
            {content.items.map((item, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-5 border-b last:border-b-0 border-slate-200 transition-colors hover:bg-slate-50 ${
                  idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'
                }`}
              >
                <div className="col-span-2 px-6 py-5 border-r border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0561A4] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-bold text-[#001B3D] text-base">{item.category}</span>
                  </div>
                </div>
                <div className="col-span-3 px-6 py-5">
                  <div className="grid grid-cols-2 gap-3">
                    {item.activities.map((activity, actIdx) => (
                      <div key={actIdx} className="flex items-center gap-2 bg-white rounded-lg px-4 py-2.5 shadow-sm border border-slate-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF5812] shrink-0" />
                        <span className="text-sm text-slate-700 font-medium">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stamp */}
        <div className="relative bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl p-6 border-2 border-dashed border-slate-300 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0561A4]/5 rounded-full blur-2xl" />
          <div className="relative flex items-start gap-4">
            <div className="bg-[#FF5812]/10 rounded-full p-3 shrink-0">
              <svg className="w-6 h-6 text-[#FF5812]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1">본 리포트 정보</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                본 리포트는 CompliLaw 플랫폼을 통해 자동으로 생성되었습니다. 
                상세한 데이터, 실시간 분석 결과 및 인사이트는 플랫폼 내에서 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}