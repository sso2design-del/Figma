import { CheckCircle } from "lucide-react";
import { ThreeDIcon, IconType } from "./ThreeDIcon";

export function PDCACycle() {
  const cycles: {
    title: string;
    subtitle: string;
    color: string;
    icon: IconType;
    items: string[];
  }[] = [
    {
      title: "Plan",
      subtitle: "(계획)",
      color: "#FF5812",
      icon: "plan",
      items: [
        "규제관리",
        "유해·위험요인 식별",
        "고도화 및 추적 관리"
      ]
    },
    {
      title: "Do",
      subtitle: "(실행)",
      color: "#00A0E9",
      icon: "execute",
      items: [
        "To-do에 대한 업무 관리",
        "세부 활동 Activity 및 증빙 관리",
        "사고·재해 보고 및 원인 파악"
      ]
    },
    {
      title: "Check",
      subtitle: "(평가)",
      color: "#FFB800",
      icon: "evaluate",
      items: [
        "내부 자체 심사 관리",
        "외부 기관 심사 대응",
        "규제 준수 증명"
      ]
    },
    {
      title: "Act",
      subtitle: "(개선)",
      color: "#00C896",
      icon: "improve",
      items: [
        "평가에 따른 개선방안 수립",
        "사고·재해 재발 방지 조치",
        "예방활동 개선을 위한 Feedback"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-100 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#001B3D] mb-6 leading-tight">
            PDCA 사이클을 기반으로 한<br />
            <span className="text-[#0561A4]">법률 리스크와 규제 완벽대응</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            모든 비즈니스와 산업 현장에 적용 가능한 CompliLaw
          </p>
        </div>

        {/* PDCA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cycles.map((cycle) => {
            const IconComponent = cycle.icon;
            return (
              <div
                key={cycle.title}
                className="bg-white rounded-2xl p-8 border-2 border-gray-300/50"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    <ThreeDIcon
                      type={cycle.icon}
                      variant="grayblue"
                      className="w-20 h-20"
                      noGlow
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001B3D] mb-1">
                    {cycle.title}
                  </h3>
                  <p className="text-gray-500">{cycle.subtitle}</p>
                </div>

                {/* Items */}
                <ul className="space-y-3">
                  {cycle.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div 
                        className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full flex items-center justify-center transition-colors duration-300"
                        style={{ backgroundColor: cycle.color }}
                      >
                        <svg 
                          className="w-3 h-3 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={3} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0561A4]/10 rounded-full">
            <div className="flex items-center gap-1">
              {cycles.map((cycle, index) => (
                <div key={cycle.title} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: cycle.color }}
                  />
                  {index < cycles.length - 1 && (
                    <svg
                      className="w-4 h-4 text-gray-400 mx-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <span className="text-[#001B3D] font-medium ml-2">
              지속적인 개선과 성장
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}