import { motion } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { ThreeDIcon, IconType } from "./ThreeDIcon";
import { useState } from "react";
import { ReportPreview } from "./ReportPreview";
import { SolutionImage } from "./SolutionImage";
import { CarbonDashboard } from "./CarbonDashboard";

const solutions: { icon: IconType; title: string; desc: string; delay: number; detailContent: string; features: string[]; benefits: string[] }[] = [
  {
    icon: "management",
    title: "ESG 경영",
    desc: "지속가능경영 목표 수립 및 성과 관리를 위한 통합 솔루션을 제공하여 기업 가치를 제고합니다.",
    delay: 0.1,
    detailContent: "CompliLaw ESG 경영 솔루션은 기업의 지속가능경영 전략 수립부터 실행, 모니터링, 보고까지 전 과정을 지원합니다. 환경(E), 사회(S), 지배구조(G) 각 영역에서 기업이 직면한 과제를 체계적으로 관리하고, 글로벌 표준에 부합하는 ESG 경영 체계를 구축할 수 있도록 돕습니다. 데이터 기반의 의사결정을 통해 ESG 성과를 지속적으로 개선하고, 이해관계자와의 신뢰를 강화할 수 있습니다.",
    features: [
      "ESG 목표 수립 및 KPI 관리 - 전사적인 ESG 목표를 설정하고 부서별 세부 목표를 연계하여 ���리합니다.",
      "실시간 성과 모니터링 - 대시보드를 통해 ESG 이행 현황을 실시간으로 확인하고 이슈를 조기에 파악합니다.",
      "리스크 평가 및 관리 - ESG 리스크를 식별하고 우선순위를 정하여 선제적으로 대응합니다.",
      "이해관계자 참여 관리 - 임직원, 투자자, 지역사회 등 다양한 이해관계자의 의견을 수렴하고 소통합니다.",
      "개선 과제 추적 - 발굴된 개선 과제의 실행 계획을 수립하고 이행 현황을 체계적으로 추적합니다."
    ],
    benefits: [
      "투자자 신뢰 확보 - ESG 정보 공시를 통해 투자자와 금융기관의 신뢰를 얻고 자금 조달 기회를 확대합니다.",
      "기업 가치 제고 - 체계적인 ESG 경영으로 브랜드 이미지를 개선하고 장기적인 기업 가치를 향상시킵니다.",
      "리스크 최소화 - 환경, 사회, 지배구조 리스크를 사전에 식별하고 관리하여 잠재적 손실을 방지합니다.",
      "규제 대응력 강화 - 변화하는 ESG 규제에 신속하게 대응하고 컴플라이언스를 확보합니다."
    ]
  },
  {
    icon: "disclosure",
    title: "ESG 공시",
    desc: "ISSB, ESRS 등 글로벌 공시 기준에 맞춘 데이터 수집 및 공시 프로세스를 지원합니다.",
    delay: 0.15,
    detailContent: "글로벌 ESG 공시 규제가 강화되면서 기업들은 ISSB, ESRS, TCFD 등 다양한 기준에 따라 ESG 정보를 공시해야 합니다. CompliLaw ESG 공시 솔루션은 복잡한 공시 요구사항을 체계적으로 관리하고, 필요한 데이터를 자동으로 수집·검증하여 정확하고 신뢰성 있는 공시를 지원합니다. 공시 프로세스를 표준화하고 자동화함으로써 담당자의 업무 부담을 크게 줄이고 공시 품질을 향상시킬 수 있습니다.",
    features: [
      "다중 공시 기준 지원 - ISSB, ESRS, TCFD, GRI 등 다양한 글로벌 공시 기준을 동시에 지원합니다.",
      "데이터 자동 수집 - 각 공시 기준에 필요한 데이터를 조직 내 시스템에서 자동으로 수집합니다.",
      "공시 템플릿 제공 - 각 기준에 최적화된 공시 템플릿을 제공하여 작성 시간을 단축합니다.",
      "데이터 검증 프로세스 - 공시 데이터의 정확성과 완전성을 자동으로 검증하고 오류를 사전에 방지합니다.",
      "법규 업데이트 알림 - 공시 기준 및 규제의 변경사항을 실시간으로 모니터링하고 알립니다."
    ],
    benefits: [
      "공시 준비 시간 단축 - 자동화된 데이터 수집과 템플릿을 통해 공시 준비 시간을 최대 70% 단축합니다.",
      "공시 품질 향상 - 체계적인 검증 프로세스로 오류를 최소화하고 공시의 신뢰성을 높입니다.",
      "규제 준수 보장 - 최신 공시 기준을 반영하여 규제 미준수 리스크를 방지합니다.",
      "투명성 강화 - 정확하고 일관된 ESG 정보 공개로 이해관계자의 신뢰를 확보합니다."
    ]
  },
  {
    icon: "report",
    title: "ESG 보고서",
    desc: "수집된 데이터를 기반으로 지속가능경영 보고서를 자동으로 생성하고 관리합니다.",
    delay: 0.2,
    detailContent: "지속가능경영 보고서는 기업의 ESG 활동과 성과를 이해관계자에게 전달하는 핵심 커뮤니케이션 도구입니다. CompliLaw ESG 보고서 솔루션은 GRI, SASB 등 국제 표준에 부합하는 전문적인 보고서를 간편하게 작성할 수 있도록 지원합니다. 수집된 데이터를 자동으로 보고서 형식으로 변환하고, 다양한 템플릿과 시각화 도구를 제공하여 효과적인 스토리텔링이 가능합니다.",
    features: [
      "자동 보고서 생성 - 수집된 ESG 데이터를 기반으로 보고서를 자동으로 생성합니다.",
      "맞춤형 템플릿 - GRI, SASB, TCFD 등 다양한 프레임워크에 맞춘 템플릿을 제공합니다.",
      "데이터 시각화 - 차트, 그래프, 인포그래픽 등 다양한 시각화 도구로 데이터를 효과적으로 표현합니다.",
      "협업 기능 - 여러 부서가 동시에 작업하고 검토할 수 있는 협업 환경을 제공합니다.",
      "버전 관리 - 보고서의 수정 이력을 추적하고 이전 버전과 비교할 수 있습니다.",
      "다국어 지원 - 한국어, 영어 등 다국어 보고서를 동시에 작성하고 관리합니다."
    ],
    benefits: [
      "보고서 작성 시간 단축 - 자동화와 템플릿을 통해 보고서 작성 시간을 대폭 줄입니다.",
      "전문성 향상 - 국제 표준에 부합하는 고품질 보고서를 작성할 수 있습니다.",
      "일관성 유지 - 해마다 일관된 형식과 구조로 보고서를 작성하여 비교 가능성을 높입니다.",
      "이해관계자 소통 강화 - 시각적이고 이해하기 쉬운 보고서로 효과적인 커뮤니케이션이 가능합니다."
    ]
  },
  {
    icon: "data",
    title: "ESG 데이터",
    desc: "조직 내 흩어진 ESG 데이터를 한곳에 모아 체계적으로 관리하고 실시간으로 분석합니다.",
    delay: 0.25,
    detailContent: "ESG 경영의 핵심은 정확한 데이터입니다. CompliLaw ESG 데이터 솔루션은 조직 내 여러 부서와 시스템에 흩어져 있는 ESG 데이터를 하나의 플랫폼에 통합하고, 데이터 수집부터 검증, 승인, 분석까지 전 과정을 자동화합니다. 실시간 대시보드를 통해 핵심 ESG 지표를 한눈에 파악하고, 데이터 기반의 의사결정을 내릴 수 있습니다.",
    features: [
      "통합 데이터 플랫폼 - 환경, 사회, 지배구조 데이터를 한곳에서 관리합니다.",
      "자동화 워크플로우 - 데이터 수집, 검증, 승인 프로세스를 자동화하여 효율성을 높입니다.",
      "실시간 대시보드 - 핵심 ESG 지표를 실시간으로 모니터링하고 시각화합니다.",
      "API 연동 - ERP, MES 등 기존 시스템과 API로 연동하여 데이터를 자동 수집합니다.",
      "데이터 품질 관리 - 데이터 입력 오류를 자동으로 감지하고 수정을 요청합니다.",
      "이력 추적 - 모든 데이터의 수정 이력을 추적하여 투명성과 신뢰성을 확보합니다."
    ],
    benefits: [
      "데이터 정확성 향상 - 자동 검증 프로세스로 데이터 오류를 최소화합니다.",
      "업무 효율성 증대 - 수작업 데이터 입력과 집계 시간을 대폭 줄입니다.",
      "실시간 인사이트 - 실시간 데이터 분석으로 빠른 의사결정이 가능합니다.",
      "확장성 - 조직 규모와 데이터 양이 증가해도 유연하게 대응할 수 있습니다."
    ]
  },
  {
    icon: "carbon",
    title: "탄소배출량",
    desc: "Scope 1, 2, 3 탄소 배출량을 정밀하게 측정하고 감축 목표 달성을 위한 인사이트를 제공합니다.",
    delay: 0.3,
    detailContent: "탄소중립은 이제 선택이 아닌 필수입니다. CompliLaw 탄소배출량 솔루션은 GHG 프로토콜 기준에 따라 Scope 1, 2, 3의 온실가스 배출량을 정밀하게 산정하고, 배출원별 상세 분석을 제공합니다. 감축 시나리오 시뮬레이션을 통해 효과적인 감축 전략을 수립하고, 탄소중립 목표 달성을 위한 실행 계획을 체계적으로 관리할 수 있습니다.",
    features: [
      "Scope 1, 2, 3 산정 - GHG 프로토콜 기준에 따라 모든 범위의 배출량을 정확히 계산합니다.",
      "배출원 분석 - 사업장, 공정, 설비별 배출원을 상세히 분석하고 핫스팟을 식별합니다.",
      "감축 시뮬레이션 - 다양한 감축 시나리오를 시뮬레이션하고 효과를 예측합니다.",
      "탄소중립 로드맵 - 단계별 감축 목표와 실행 계획을 수립하고 관리합니다.",
      "제3자 검증 지원 - 검증 기관에 제출할 증빙 자료를 자동으로 생성합니다.",
      "배출권거래제 대응 - 할당량 관리, 거래 내역 추적 등 배출권거래제 업무를 지원합니다."
    ],
    benefits: [
      "정확한 배출량 산정 - 국제 표준에 따른 정밀한 배출량 계산으로 신뢰성을 확보합니다.",
      "효과적인 감축 전략 - 데이터 기반 분석으로 가장 효과적인 감축 방안을 도출합니다.",
      "비용 절감 - 에너지 효율화와 배출권 거래 최적화로 비용을 절감합니다.",
      "규제 대응 - 온실가스 감축 의무와 배출권거래제에 체계적으로 대응합니다."
    ]
  },
  {
    icon: "supply",
    title: "공급망 진단",
    desc: "협력사의 ESG 리스크를 진단하고 개선 활동을 지원하여 공급망 전체의 건전성을 확보합니다.",
    delay: 0.35,
    detailContent: "기업의 ESG 책임은 자사를 넘어 공급망 전체로 확대되고 있습니다. CompliLaw 공급망 진단 솔루션은 협력사의 ESG 성과를 체계적으로 평가하고, 리스크를 조기에 발견하여 선제적으로 대응할 수 있도록 지원합니다. 협력사와의 협업을 통해 공급망 전체의 ESG 역량을 강화하고, 지속가능한 공급망 생태계를 구축할 수 있습니다.",
    features: [
      "협력사 ESG 평가 - 맞춤형 평가 지표로 협력사의 환경, 사회, 지배구조 수준을 진단합니다.",
      "리스크 등급 관리 - 평가 결과를 기반으로 협력사를 리스크 등급별로 분류하고 관리합니다.",
      "현장 실사 지원 - 현장 실사 체크리스트와 보고서 작성 도구를 제공합니다.",
      "개선 계획 추적 - 협력사의 개선 계획 수립부터 이행까지 전 과정을 추적합니다.",
      "소통 채널 - 협력사와의 양방향 소통을 위한 포털과 알림 기능을 제공합니다.",
      "성과 모니터링 - 협력사의 ESG 성과 개선 추이를 지속적으로 모니터링합니다."
    ],
    benefits: [
      "공급망 리스크 최소화 - 협력사의 ESG 리스크를 사전에 파악하고 관리합니다.",
      "평판 리스크 방지 - 협력사의 ESG 이슈로 인한 기업 평판 손상을 예방합니다.",
      "지속가능한 공급망 - 협력사와 함께 성장하는 지속가능한 공급망 생태계를 만듭니다.",
      "구매 의사결정 개선 - ESG 평가 결과를 구매 의사결정에 반영하여 책임있는 조달을 실천합니다."
    ]
  },
  {
    icon: "compliance",
    title: "컴플라이언스",
    desc: "국내외 환경·안전·보건 법규 준수 여부를 상시 모니터링하여 법적 리스크를 최소화합니다.",
    delay: 0.4,
    detailContent: "환경, 안전, 보건 관련 법규는 수천 개에 달하며 수시로 개정됩니다. CompliLaw 컴플라이언스 솔루션은 귀사에 적용되는 모든 법규를 자동으로 식별하고, 개정사항을 실시간으로 모니터링하여 알려니다. 법규 준수 체크리스트를 통해 이행 현황을 체계적으로 관리하고, 규제 당국의 감사에 대비한 증빙 자료를 자동으로 준비할 수 있습니다.",
    features: [
      "법규 자동 매핑 - 기업의 업종, 규모, 사업장 특성에 따라 적용 법규를 자동으로 식별합니다.",
      "실시간 법규 모니터링 - 국내외 환경·안전·보건 법규의 제·개정 사항을 실시간으로 추적합니다.",
      "준수 체크리스트 - 각 법규별 준수 요구사항을 체크리스트로 관리하고 이행 현황을 추적합니다.",
      "알림 서비스 - 법규 개정, 준수 기한, 보고 일정 등을 사전에 알려줍니다.",
      "증빙 자료 관리 - 법규 준수 증빙 자료를 체계적으로 보관하고 관리합니다.",
      "감사 대응 - 규제 당국의 감사 요청에 신속하게 대응할 수 있도록 자료를 준비합니다."
    ],
    benefits: [
      "법적 리스크 최소화 - 법규 위반으로 인한 과태료, 영업정지 등의 리스크를 방지합니다.",
      "업무 효율성 향상 - 수작업 법규 검토 시간을 대폭 줄이고 핵심 업무에 집중합니다.",
      "전문성 확보 - 전문가 수준의 법규 지식과 해석을 제공받습니다.",
      "선제적 대응 - 법규 변화를 미리 파악하고 충분한 시간을 두고 준비할 수 있습니다."
    ]
  },
  {
    icon: "safety",
    title: "중대재해예방",
    desc: "위험성 평가 및 안전 보건 조치 이행 현황을 관리하여 중대재해를 사전에 예방합니다.",
    delay: 0.45,
    detailContent: "중대재해처벌법 시행으로 경영진의 안전보건 책임이 강화되었습니다. CompliLaw 중대재해예방 솔루션은 위험성 평가, 안전점검, 교육 이수 등 안전보건관리체계의 모든 활동을 체계적으로 관리하고, 경영진의 의무 이행을 입증할 수 있는 기록을 자동으로 보관합니다. 위험 요인을 조기에 발견하고 개선 조치를 추적하여 중대재해를 사전에 예방할 수 있습니다.",
    features: [
      "위험성 평가 관리 - 유해위험요인 파악, 위험도 산정, 개선 대책 수립 전 과정을 관리합니다.",
      "안전점검 체계 - 일상점검, 정기점검, 특별점검 등 모든 안전점검을 체계적으로 수행하고 기록합니다.",
      "교육 이수 관리 - 법정 안전보건 교육 계획을 수립하고 이수 현황을 추적합니다.",
      "사고 관리 - 아차사고, 재해사고를 기록하고 원인 분석 및 재발 방지 대책을 수립합니다.",
      "개선 조치 추적 - 발견된 위험요인의 개선 조치 계획을 수립하고 완료까지 추적합니다.",
      "경영진 보고 - 안전보건 활동 현황을 경영진에게 정기적으로 보고합니다."
    ],
    benefits: [
      "중대재해 예방 - 체계적인 위험 관리로 중대재해 발생을 사전에 방지합니다.",
      "법적 책임 입증 - 경영진의 안전보건 의무 이행을 객관적으로 입증할 수 있습니다.",
      "안전문화 구축 - 전사적인 안전보건 활동으로 안전문화를 정착시킵니다.",
      "생산성 향상 - 안전한 작업 환경 조성으로 재해 손실을 줄이고 생산성을 높입니다."
    ]
  }
];

export function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null);

  return (
    <section id="features" className="py-32 relative bg-white overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0561A4]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            복잡한 규제, <br />
            <span className="text-[#0561A4]">하나의 플랫폼</span>으로 해결하세요
          </h2>
          <p className="text-slate-600 text-lg max-w-none mx-auto">
            CompliLaw는 기업이 직면한 다양한 규제 리스크를 가장 직관적인 방법으로 관리할 수 있도록 돕습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-gradient-to-b from-[#001B3D] via-[#002854] to-[#0561A4] border border-white/10 shadow-[0_8px_30px_rgba(5,97,164,0.12)] hover:shadow-[0_20px_60px_rgba(5,97,164,0.25)] hover:from-[#001020] hover:via-[#001B3D] hover:to-[#004080] transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Removed transparent={true} and added drop-shadow for better visibility */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0 relative z-10 drop-shadow-lg">
                <ThreeDIcon type={item.icon} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-blue-100 leading-relaxed mb-8 text-sm flex-grow">
                {item.desc}
              </p>
              <div className="flex items-center text-white font-bold text-sm cursor-pointer group-hover:text-[#FF5812] transition-colors mt-auto" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedSolution(item);
              }}>
                자세히 보기 <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* ESG Solution Part */}
          <a href="/esg" className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#006B56] to-[#004d3f] p-10 transition-all hover:-translate-y-1 hover:shadow-2xl block">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">ESG 솔루션 파트</h3>
                <p className="text-emerald-100 mb-8 leading-relaxed">
                  지속가능경영 목표 수립부터 성과 관리, 공시 대응까지. <br className="hidden md:block"/>
                  ESG 경영에 필요한 모든 기능을 하나의 플랫폼에서 만나보세요.
                </p>
                <span className="inline-flex items-center text-white font-bold transition-colors">
                  자세히 보기 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
            </div>
          </a>

          {/* Compliance Solution Part */}
          <a href="#compliance" className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#415AA9] to-[#2d3f75] p-10 transition-all hover:-translate-y-1 hover:shadow-2xl block">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">컴플라이언스 솔루션 파트</h3>
                <p className="text-indigo-100 mb-8 leading-relaxed">
                   중대재해예방부터 환경안전 법규 준수까지. <br className="hidden md:block"/>
                   기업의 리스크를 실시간으로 모니터링하고 선제적으로 대응하세요.
                </p>
                <span className="inline-flex items-center text-white font-bold transition-colors">
                  자세히 보기 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
            </div>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedSolution && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedSolution(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedSolution(null)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5 text-slate-700" />
            </button>

            {/* Content based on type */}
            {selectedSolution.icon === "report" ? (
              // Report Preview for ESG 보고서
              <div className="p-6">
                <ReportPreview type={selectedSolution.icon} title={selectedSolution.title} />
              </div>
            ) : selectedSolution.icon === "carbon" ? (
              // Carbon Dashboard for 탄소배출량
              <CarbonDashboard />
            ) : (
              // Image for other solutions
              <SolutionImage type={selectedSolution.icon} title={selectedSolution.title} desc={selectedSolution.desc} />
            )}

            {/* Detailed Content Section */}
            <div className="px-10 pt-6 pb-6 space-y-8">
              {/* Overview */}
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border-2 border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#0561A4] rounded-lg p-2">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001B3D]">솔루션 개요</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {selectedSolution.detailContent}
                </p>
              </div>

              {/* Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-[#FF5812] rounded-lg p-2">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001B3D]">주요 기능</h3>
                </div>
                <div className="grid gap-4">
                  {selectedSolution.features.map((feature, idx) => {
                    const [title, ...descParts] = feature.split(' - ');
                    const description = descParts.join(' - ');
                    return (
                      <div key={idx} className="bg-white rounded-xl p-6 border-l-4 border-[#0561A4] shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="bg-[#0561A4] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0 mt-1">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#001B3D] text-lg mb-2">{title}</h4>
                            {description && (
                              <p className="text-slate-600 leading-relaxed">{description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-[#0561A4] to-[#0671BF] rounded-lg p-2">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001B3D]">기대 효과</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedSolution.benefits.map((benefit, idx) => {
                    const [title, ...descParts] = benefit.split(' - ');
                    const description = descParts.join(' - ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#FF5812]/5 to-[#FF5812]/10 rounded-xl p-6 border border-[#FF5812]/20 hover:border-[#FF5812]/40 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="bg-[#FF5812] rounded-lg p-1.5 shrink-0 mt-1">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#001B3D] mb-2">{title}</h4>
                            {description && (
                              <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="px-10 pb-10 flex gap-4">
              <button 
                onClick={() => {
                  setSelectedSolution(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 bg-[#FF5812] hover:bg-[#E04A0A] text-white font-bold py-4 px-8 rounded-2xl transition-colors"
              >
                도입 문의하기
              </button>
              <button 
                onClick={() => setSelectedSolution(null)}
                className="px-8 py-4 border-2 border-slate-200 hover:border-[#0561A4] hover:text-[#0561A4] text-slate-700 font-bold rounded-2xl transition-colors"
              >
                닫기
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}