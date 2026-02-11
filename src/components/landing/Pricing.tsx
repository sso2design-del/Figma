import { motion } from "motion/react";
import { Check, Tag } from "lucide-react";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Trial",
    price: "0",
    desc: "체험을 통해 경험해 보세요",
    features: [
      { text: "User 5명, 15일간 사용가능", disabled: false },
      { text: "1GB 제공", disabled: false },
      { text: "기술 지원", disabled: true }
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "30,000",
    desc: "기업의 성장을 위한 최적의 솔루션",
    features: [
      { text: "최소 가입 인원 5명", disabled: false },
      { text: "10GB 제공", disabled: false },
      { text: "기술지원", disabled: false },
      { text: "AI 리스크 분석", disabled: false },
      { text: "전담 매니저 배정", disabled: false }
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "문의",
    desc: "대기업 및 그룹사를 위한 맞춤형 플랜",
    features: [
      { text: "사용자 무제한", disabled: false },
      { text: "맞춤형 대시보드 구축", disabled: false },
      { text: "API 연동 지원", disabled: false },
      { text: "24/7 기술 지원", disabled: false },
      { text: "On-Premise 설치 가능", disabled: false }
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#0561A4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            투명하고 합리적인 요금제
          </h2>
          <p className="text-white/80 text-lg">
            기업의 규모와 필요에 맞는 최적의 플랜을 선택하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl bg-white flex flex-col h-full ${
                plan.popular 
                  ? "shadow-[0_20px_50px_rgba(0,0,0,0.2)] scale-105 z-10 border-4 border-white" 
                  : "shadow-lg border border-white/10 opacity-95 hover:opacity-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#001B3D] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  추천 요금제
                </div>
              )}

              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <div className="text-slate-500 text-sm mb-6">{plan.desc}</div>
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                {plan.price !== "문의" && <span className="text-slate-500 mb-1">원 / 월</span>}
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-[#0561A4]" : "bg-slate-100"}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-slate-500"}`} />
                    </div>
                    <span className={`text-sm ${feat.disabled ? "text-slate-400" : "text-slate-700"}`}>{feat.text}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-6 rounded-xl font-bold text-lg transition-all ${
                  plan.popular 
                    ? "bg-[#001B3D] hover:bg-[#002654] text-white shadow-lg border-none" 
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900 border-none"
                }`}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {plan.price === "문의" ? "문의하기" : "시작하기"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Discount Options */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-[#0561A4]/10 p-3 rounded-xl shrink-0">
                  <Tag className="w-6 h-6 text-[#0561A4]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#0561A4] mb-1">Option 1</div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">1년 장기 계약 할인</h3>
                  <p className="text-slate-600 text-sm">50명 이상 단체 계약 시</p>
                </div>
              </div>
              <div className="flex flex-col items-end ml-auto md:ml-6">
                <span className="text-4xl md:text-5xl font-bold text-[#0561A4]">5%</span>
                <span className="text-slate-700 text-sm mt-1">할인</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-[#0561A4]/10 p-3 rounded-xl shrink-0">
                  <Tag className="w-6 h-6 text-[#0561A4]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#0561A4] mb-1">Option 2</div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">대규모 단체 할인</h3>
                  <p className="text-slate-600 text-sm">100명 이상 단체 계약 시</p>
                </div>
              </div>
              <div className="flex flex-col items-end ml-auto md:ml-6">
                <span className="text-4xl md:text-5xl font-bold text-[#0561A4]">10%</span>
                <span className="text-slate-700 text-sm mt-1">할인</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}