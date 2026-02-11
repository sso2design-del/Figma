import { motion } from "motion/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Bell, Search, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ThreeDIcon, IconType } from "./ThreeDIcon";

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

const data = [
  { name: '1월', score: 65 },
  { name: '2월', score: 59 },
  { name: '3월', score: 80 },
  { name: '4월', score: 81 },
  { name: '5월', score: 86 },
  { name: '6월', score: 95 },
  { name: '7월', score: 98 },
];

const features: { icon: IconType; title: string; desc: string }[] = [
    { icon: "compliance", title: "실시간 리스크 모니터링", desc: "대시보드에서 전사의 컴플라이언스 현황을 한눈에 파악하세요." },
    { icon: "data", title: "AI 기반 취약점 분석", desc: "법령 개정 사항을 자동으로 반영하여 취약점을 분석합니다." },
    { icon: "report", title: "원클릭 보고서 생성", desc: "감독 기관 제출용 보고서를 클릭 한 번으로 생성할 수 있습니다." }
];

export function DashboardPreview() {
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 });
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter hooks - only start when section is visible
  const score = useCounter(98.5, 2000, isVisible ? 0 : 999999, 1);
  const resolvedIssues = useCounter(1284, 2000, isVisible ? 0 : 999999);
  const pendingAudits = useCounter(3, 2000, isVisible ? 0 : 999999);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const updateSize = () => {
        if (chartContainerRef.current) {
            const { offsetWidth, offsetHeight } = chartContainerRef.current;
            setChartDimensions({ width: offsetWidth, height: offsetHeight });
        }
    };

    // Initial measure
    updateSize();

    // Observe resizing
    const resizeObserver = new ResizeObserver(() => {
        updateSize();
    });
    
    resizeObserver.observe(chartContainerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  // Intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="dashboard" className="py-32 bg-gradient-to-b from-slate-100 to-slate-50 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[800px] bg-[#0561A4]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              데이터로 증명하는 <br />
              <span className="text-[#0561A4]">완벽한 규정 준수</span>
            </h2>
            <div className="space-y-8">
                {features.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                        <div className="shrink-0 relative -ml-2 -mt-2">
                            {/* Use ThreeDIcon with same style as Solutions cards */}
                            <ThreeDIcon type={item.icon} className="w-20 h-20" noGlow />
                        </div>
                        <div className="pt-2">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>

          {/* Right: Mock UI (Light Theme matching Hero Dashboard) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden relative transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
                {/* Mock Window Header */}
                <div className="h-12 border-b border-gray-200 flex items-center px-4 justify-between bg-white">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/40 animate-pulse-slow" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/40 animate-pulse-slow animation-delay-200" />
                        <div className="w-3 h-3 rounded-full bg-green-400/40 animate-pulse-slow animation-delay-400" />
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <Search className="w-4 h-4 transition-all duration-300 group-hover:text-[#0561A4] group-hover:scale-110" />
                        <Bell className="w-4 h-4 transition-all duration-300 group-hover:text-[#FF5812] group-hover:scale-110 group-hover:animate-wiggle" />
                        <div className="w-6 h-6 rounded-full bg-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0561A4] group-hover:to-[#FF5812]" />
                    </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 bg-[#f3f6f9]">
                    {/* Chart Area */}
                    <div className="col-span-1 lg:col-span-2 space-y-4 md:space-y-6 min-w-0">
                        <div className="bg-white rounded-lg p-4 md:p-5 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-[1.01] animate-fadeInUp animation-delay-200">
                            <div className="flex justify-between items-center mb-4 md:mb-6">
                                <div>
                                    <h3 className="text-[#001B3D] font-medium text-sm md:text-base">월간 규정 준수 점수</h3>
                                    <p className="text-xs text-gray-400">지난 6개월 추이</p>
                                </div>
                                <span className="text-[#FF5812] font-bold text-lg md:text-xl transition-all duration-500 group-hover:scale-110 animate-fadeInScale animation-delay-400">{score}점</span>
                            </div>
                            {/* Recharts Manual Container */}
                            <div className="w-full h-[180px] md:h-[200px] relative" ref={chartContainerRef}>
                                {chartDimensions.width > 0 ? (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: isVisible ? 1 : 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <AreaChart width={chartDimensions.width} height={chartDimensions.height} data={data}>
                                            <defs>
                                                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#0561A4" stopOpacity={0.3}/>
                                                    <stop offset="95%" stopColor="#0561A4" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                                            <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                            <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                            <Tooltip 
                                                contentStyle={{ backgroundColor: '#fff', borderColor: '#E5E7EB', color: '#001B3D' }}
                                                itemStyle={{ color: '#001B3D' }}
                                            />
                                            <Area 
                                                type="monotone" 
                                                dataKey="score" 
                                                stroke="#0561A4" 
                                                fillOpacity={1} 
                                                fill="url(#colorScore)" 
                                                strokeWidth={3}
                                                animationBegin={0}
                                                animationDuration={2000}
                                                animationEasing="ease-out"
                                                isAnimationActive={isVisible}
                                            />
                                        </AreaChart>
                                    </motion.div>
                                ) : (
                                    <div className="w-full h-full bg-gray-100 animate-pulse rounded flex items-center justify-center text-gray-300 text-sm">
                                        Loading Chart...
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                             <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-105 group-hover:-translate-y-1 animate-fadeInUp animation-delay-400">
                                <div className="text-gray-400 text-sm mb-1">해결된 이슈</div>
                                <div className="text-2xl font-bold text-[#001B3D]">{resolvedIssues} <span className="text-sm text-green-500 font-normal animate-fadeInLeft animation-delay-600">+12%</span></div>
                             </div>
                             <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:scale-105 group-hover:-translate-y-1 animate-fadeInUp animation-delay-500">
                                <div className="text-gray-400 text-sm mb-1">대기 중인 감사</div>
                                <div className="text-2xl font-bold text-[#001B3D]">{pendingAudits} <span className="text-sm text-yellow-500 font-normal animate-fadeInLeft animation-delay-700">-2</span></div>
                             </div>
                        </div>
                    </div>

                    {/* Sidebar Right */}
                    <div className="col-span-1 lg:col-span-1 bg-white rounded-lg p-4 border border-gray-100 shadow-sm h-full transition-all duration-500 group-hover:shadow-md animate-fadeInUp animation-delay-300">
                        <h4 className="text-[#001B3D] font-medium mb-4">최근 알림</h4>
                        <div className="space-y-3">
                            {[1,2,3].map((i) => (
                                <div key={i} className="flex gap-3 items-start p-3 rounded bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer duration-300 hover:scale-105 hover:shadow-sm animate-fadeInLeft" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                                    <AlertCircle className="w-4 h-4 text-[#FF5812] mt-1 shrink-0 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                                    <div>
                                        <div className="text-[#001B3D] text-sm font-medium">중대재해법 개정안</div>
                                        <div className="text-gray-400 text-xs mt-1">2시간 전 업데이트됨</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="text-center text-gray-400 text-xs transition-colors duration-300 group-hover:text-[#0561A4] cursor-pointer">모든 알림 보기</div>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}