import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight, ShieldCheck, Bell, Search, ChevronDown, AlertCircle, CheckCircle2, FileText } from "lucide-react";
import { useState, useEffect } from "react";

// Counter animation hook
function useCounter(end: number, duration: number = 2000, delay: number = 0, decimals: number = 0) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const startValue = 0;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = startValue + (end - startValue) * easeOutQuart;
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);
  
  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();
}

export function Hero() {
  const score = useCounter(98.5, 2000, 0, 1);
  const resolvedRisks = useCounter(1284, 2000, 0);
  const generatedReports = useCounter(842, 2000, 0);
  const vulnerabilityDiagnosis = useCounter(0, 2000, 0);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#0561A4]/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-[#FF5812]/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm group">
              <div className="relative">
                  <ShieldCheck className="w-4 h-4 text-[#FF5812]" fill="currentColor" />
                  <svg className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 text-white fill-white animate-pulse drop-shadow-sm" viewBox="0 0 24 24">
                      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                  </svg>
              </div>
              <span className="text-sm font-medium text-white/90">
                통합 <span className="font-bold text-[#FF5812]">ESG-컴플라이언스</span> 플랫폼
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              기업의 ESG와 <br />
              <span className="text-[rgba(5,97,164,0)] bg-clip-text bg-gradient-to-r from-[#fff] to-[#ffffff]/60">
                컴플라이언스 관리
              </span>의 시작
            </h1>
            <p className="text-lg text-white/60 mb-14 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              복잡한 산업안전보건법부터 중대재해처벌법까지. 
              <br className="hidden md:block" />
              CompliLaw가 실시간으로 리스크를 진단하고 대응책을 제안합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                className="h-14 px-8 text-lg bg-[#FF5812] hover:bg-[#E0480F] text-white rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(255,88,18,0.4)] active:scale-95 border-none w-full sm:w-auto"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                문의하기
              </Button>
              <Button 
                variant="ghost" 
                className="h-14 px-8 text-lg text-white hover:bg-white/10 rounded-full font-medium w-full sm:w-auto"
              >
                무료 데모신청 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Visual - Minimal & Focused */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[650px] aspect-[4/3]"
          >
             {/* Floating Window */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotateX: [0, 2, 0],
                rotateY: [0, 2, 0]
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#f3f6f9] flex flex-col group"
            >
                {/* Top Bar (No Menu) */}
                <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
                    <div className="flex items-center gap-4">
                         <span className="text-[#001B3D] font-bold text-lg animate-fadeInLeft">CompliLaw</span>
                         <div className="h-4 w-px bg-gray-300 mx-2 animate-fadeInUp animation-delay-200" />
                         <div className="flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-100 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-[#0561A4]/10 hover:text-[#0561A4] cursor-pointer animate-fadeInLeft animation-delay-300">
                             <span>전사 대시보드</span>
                             <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 duration-300" />
                         </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-[#0561A4]/10 hover:text-[#0561A4] hover:scale-110 cursor-pointer animate-fadeInScale animation-delay-400">
                            <Search className="w-4 h-4" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 relative transition-all duration-300 hover:bg-[#FF5812]/10 hover:text-[#FF5812] hover:scale-110 cursor-pointer animate-fadeInScale animation-delay-500">
                            <Bell className="w-4 h-4" />
                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[#FF5812] rounded-full border border-white animate-pulse" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#0561A4] text-white flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer animate-fadeInScale animation-delay-600">
                            JS
                        </div>
                    </div>
                </div>

                {/* Main Content - Minimal Grid */}
                <div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">
                    
                    {/* Top Row: Hero Metrics */}
                    <div className="grid grid-cols-3 gap-6 h-40">
                        {/* Main Score Card */}
                        <motion.div 
                            className="col-span-2 bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden animate-fadeInUp animation-delay-200"
                            animate={{ 
                                y: [0, -8, 0],
                                boxShadow: [
                                    '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                                    '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                    '0 1px 3px 0 rgb(0 0 0 / 0.1)'
                                ]
                            }}
                            transition={{ 
                                duration: 4, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                             <div className="flex justify-between items-start relative z-10">
                                 <div>
                                     <div className="text-gray-500 text-xs font-medium mb-1 animate-fadeInLeft animation-delay-400">규정 준수 점수</div>
                                     <motion.div 
                                        className="text-4xl font-bold text-[#001B3D] drop-shadow-sm bg-white/30 backdrop-blur-[2px] px-1 rounded animate-fadeInScale animation-delay-500"
                                        animate={{ 
                                            scale: [1, 1.05, 1],
                                        }}
                                        transition={{ 
                                            duration: 3, 
                                            repeat: Infinity, 
                                            ease: "easeInOut",
                                            delay: 2
                                        }}
                                     >
                                        {score}<span className="text-lg text-gray-400 font-normal ml-1">점</span>
                                     </motion.div>
                                 </div>
                                 <div className="px-2.5 py-1 rounded-full bg-[#0561A4]/10 text-[#0561A4] text-xs font-bold flex items-center gap-1 animate-fadeInScale animation-delay-600">
                                     <div className="w-1.5 h-1.5 rounded-full bg-[#0561A4] animate-pulse" />
                                     안전
                                 </div>
                             </div>
                             {/* Minimal Area Chart - Lowered to avoid overlap */}
                             <div className="absolute bottom-0 left-0 right-0 h-16 opacity-60">
                                <svg viewBox="0 0 300 60" preserveAspectRatio="none" className="w-full h-full">
                                    <motion.path 
                                        d="M0 60 L0 40 Q 50 25 100 35 T 200 20 T 300 45 V 60 Z" 
                                        fill="url(#chartGrad)"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ 
                                            pathLength: { duration: 2, ease: "easeInOut" },
                                            opacity: { duration: 0.5 }
                                        }}
                                    />
                                    <motion.path 
                                        d="M0 40 Q 50 25 100 35 T 200 20 T 300 45" 
                                        fill="none" 
                                        stroke="#0561A4" 
                                        strokeWidth="3" 
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0561A4" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#0561A4" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                             </div>
                        </motion.div>

                        {/* Calendar Card (Replaces Side Stat) */}
                        <motion.div 
                            className="col-span-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden animate-fadeInUp animation-delay-300"
                            animate={{ 
                                y: [0, -6, 0],
                            }}
                            transition={{ 
                                duration: 4.5, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 1.5
                            }}
                        >
                            <div className="flex items-center justify-between mb-2 animate-fadeInLeft animation-delay-500">
                                <span className="text-xs font-bold text-[#001B3D]">2024.01</span>
                                <div className="flex gap-1">
                                    <ChevronDown className="w-3 h-3 rotate-90 text-gray-400 cursor-pointer transition-all duration-300 hover:text-[#0561A4] hover:scale-110" />
                                    <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 cursor-pointer transition-all duration-300 hover:text-[#0561A4] hover:scale-110" />
                                </div>
                            </div>
                            <div className="grid grid-cols-7 text-[8px] text-gray-400 mb-1 text-center animate-fadeInUp animation-delay-600">
                                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                            </div>
                            <div className="grid grid-cols-7 gap-y-1 text-[8px] font-medium text-center text-[#001B3D] flex-1 content-start animate-fadeInUp animation-delay-700">
                                <div className="text-gray-300">29</div><div className="text-gray-300">30</div><div className="text-gray-300">31</div><div>1</div><div>2</div><div>3</div><div>4</div>
                                <div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div className="bg-[#0561A4] text-white rounded-full w-4 h-4 flex items-center justify-center mx-auto shadow-sm transition-all duration-300 hover:scale-125 hover:shadow-md cursor-pointer">10</div><div>11</div>
                                <div>12</div><div>13</div><div>14</div><div>15</div><div>16</div><div>17</div><div>18</div>
                                <div>19</div><div>20</div><div>21</div><div>22</div><div>23</div><div>24</div><div>25</div>
                            </div>
                            {/* Event Dot */}
                            <div className="absolute bottom-2 right-2 flex gap-1">
                                <div className="w-1 h-1 rounded-full bg-[#FF5812] animate-pulse" />
                                <div className="w-1 h-1 rounded-full bg-[#0561A4] animate-pulse animation-delay-300" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Row: Status Cards */}
                    <div className="grid grid-cols-3 gap-6">
                         <motion.div 
                            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm cursor-pointer animate-fadeInUp animation-delay-400"
                            animate={{ 
                                y: [0, -5, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{ 
                                duration: 3.5, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                         >
                             <div className="flex items-center justify-between mb-3">
                                 <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                                     <AlertCircle className="w-4 h-4 text-[#FF5812] animate-pulse" />
                                 </div>
                             </div>
                             <div className="text-gray-500 text-xs mb-1">해결된 리스크</div>
                             <div className="text-xl font-bold text-[#001B3D]">{resolvedRisks}</div>
                         </motion.div>
                         <motion.div 
                            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm cursor-pointer animate-fadeInUp animation-delay-500"
                            animate={{ 
                                y: [0, -5, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{ 
                                duration: 3.5, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 1
                            }}
                         >
                             <div className="flex items-center justify-between mb-3">
                                 <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                     <FileText className="w-4 h-4 text-[#0561A4] animate-pulse animation-delay-200" />
                                 </div>
                             </div>
                             <div className="text-gray-500 text-xs mb-1">생성된 보고서</div>
                             <div className="text-xl font-bold text-[#001B3D]">{generatedReports}</div>
                         </motion.div>
                         {/* Vulnerability Stat (Moved Here) */}
                         <motion.div 
                            className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm relative overflow-hidden cursor-pointer animate-fadeInUp animation-delay-600"
                            animate={{ 
                                y: [0, -5, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{ 
                                duration: 3.5, 
                                repeat: Infinity, 
                                ease: "easeInOut",
                                delay: 1.5
                            }}
                         >
                             <div className="flex items-center justify-between mb-3">
                                 <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                                     <CheckCircle2 className="w-4 h-4 text-red-500 animate-pulse animation-delay-400" />
                                 </div>
                             </div>
                             <div className="text-gray-500 text-xs mb-1">취약점 진단</div>
                             <div className="text-xl font-bold text-[#001B3D]">{vulnerabilityDiagnosis}<span className="text-xs font-normal text-gray-400 ml-1">건</span></div>
                         </motion.div>
                    </div>

                    {/* Bottom: Simple List */}
                    <motion.div 
                        className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5 animate-fadeInUp animation-delay-700"
                        animate={{ 
                            y: [0, -4, 0],
                        }}
                        transition={{ 
                            duration: 5, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: 2
                        }}
                    >
                        <div className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">Recent Activity</div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 hover:bg-gray-50 -mx-2 px-2 py-1 rounded transition-all duration-300 cursor-pointer animate-fadeInLeft" style={{ animationDelay: '0.8s' }}>
                                <div className="mt-1 w-2 h-2 rounded-full bg-[#FF5812] animate-pulse" />
                                <div>
                                    <div className="text-sm font-bold text-[#001B3D]">중대재해처벌법 개정안 업데이트</div>
                                    <div className="text-xs text-gray-400 mt-0.5">법령 DB가 2시간 전 자동 동기화되었습니다.</div>
                                </div>
                            </div>
                            <div className="w-full h-px bg-gray-50" />
                            <div className="flex items-start gap-3 hover:bg-gray-50 -mx-2 px-2 py-1 rounded transition-all duration-300 cursor-pointer animate-fadeInLeft" style={{ animationDelay: '0.9s' }}>
                                <div className="mt-1 w-2 h-2 rounded-full bg-[#0561A4] animate-pulse animation-delay-300" />
                                <div>
                                    <div className="text-sm font-bold text-[#001B3D]">1분기 정기 안전 보건 감사</div>
                                    <div className="text-xs text-gray-400 mt-0.5">김철수 관리자가 감사 보고서를 생성했습니다.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
                
                {/* Overlay for gloss effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}