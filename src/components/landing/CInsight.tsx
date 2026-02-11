import { motion } from "motion/react";
import { LineChart, Search, Zap } from "lucide-react";

export function CInsight() {
  return (
    <section id="insight" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <h2 className="text-4xl font-bold text-[#001B3D] mb-6">
               C.Insight <br/>
               <span className="text-[#0561A4]">AI 기반 규제 분석 리포트</span>
             </h2>
             <p className="text-slate-600 text-lg mb-8 leading-relaxed">
               매일 쏟아지는 새로운 규제와 법안들. <br/>
               C.Insight는 AI 기술을 활용하여 기업에 영향을 미치는 
               규제 이슈를 실시간으로 분석하고 핵심 인사이트를 제공합니다.
             </p>
             
             <div className="space-y-6">
               {[
                 { icon: Search, title: "실시간 규제 모니터링", desc: "국내외 1,000여 개 규제 기관의 데이터를 실시간으로 수집합니다." },
                 { icon: Zap, title: "AI 영향도 분석", desc: "우리 기업에 미치는 영향을 AI가 자동으로 분석하여 중요도를 판별합니다." },
                 { icon: LineChart, title: "맞춤형 인사이트", desc: "산업군, 규모, 지역에 최적화된 대응 전략을 제안합니다." }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-[#0561A4]/10 flex items-center justify-center shrink-0">
                     <item.icon className="w-6 h-6 text-[#0561A4]" />
                   </div>
                   <div>
                     <h4 className="font-bold text-[#001B3D] mb-1">{item.title}</h4>
                     <p className="text-sm text-slate-500">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="aspect-[4/3] bg-gradient-to-br from-[#001B3D] to-[#0561A4] rounded-3xl shadow-2xl p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="text-white text-center relative z-10">
                  <div className="text-6xl font-bold mb-4">AI</div>
                  <div className="text-xl opacity-80">Regulatory Intelligence</div>
                </div>
             </div>
             
             {/* Floating Card */}
             <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-3 h-3 rounded-full bg-red-500" />
                 <span className="font-bold text-[#001B3D]">긴급 이슈 감지</span>
               </div>
               <p className="text-sm text-slate-600">
                 새로운 환경법 개정안이 발의되었습니다. 
                 대응 시나리오를 확인하세요.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
