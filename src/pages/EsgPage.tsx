import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle2, Quote, Calendar, TrendingUp, Shield, Globe, Users, Leaf, Building2, BarChart3, X, AlertTriangle, Bell, Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ThreeDIcon } from "../components/landing/ThreeDIcon";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart as RechartsBarChart, Bar, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import SamsungLogo from "../imports/SamsungLogo";
import HyundaiLogo from "../imports/HyundaiLogo";
import SKHynixLogo from "../imports/SKHynixLogo";
import LGChemLogo from "../imports/LGChemLogo";

// Chart Data for each tab
const esgScoreData = [
  { month: '1월', score: 72 },
  { month: '2월', score: 75 },
  { month: '3월', score: 78 },
  { month: '4월', score: 82 },
  { month: '5월', score: 86 },
  { month: '6월', score: 91 },
];

const disclosureData = [
  { name: 'ISSB', progress: 85 },
  { name: 'ESRS', progress: 72 },
  { name: 'GRI', progress: 95 },
  { name: 'SASB', progress: 68 },
];

const carbonData = [
  { month: '1월', scope1: 120, scope2: 85, scope3: 450 },
  { month: '2월', scope1: 115, scope2: 82, scope3: 430 },
  { month: '3월', scope1: 110, scope2: 80, scope3: 410 },
  { month: '4월', scope1: 105, scope2: 78, scope3: 390 },
  { month: '5월', scope1: 100, scope2: 75, scope3: 370 },
  { month: '6월', scope1: 95, scope2: 72, scope3: 350 },
];

const supplyChainData = [
  { name: 'Low Risk', value: 65, color: '#10b981' },
  { name: 'Medium Risk', value: 28, color: '#f59e0b' },
  { name: 'High Risk', value: 7, color: '#ef4444' },
];

const reportData = [
  { section: '환경', progress: 95 },
  { section: '사회', progress: 78 },
  { section: '지배구조', progress: 88 },
  { section: '재무영향', progress: 65 },
];

const dataCollectionData = [
  { dept: 'HR', rate: 98 },
  { dept: '재무', rate: 92 },
  { dept: '생산', rate: 85 },
  { dept: '구매', rate: 88 },
  { dept: 'R&D', rate: 75 },
  { dept: '영업', rate: 82 },
];

// Testimonial Slider Component
function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      company: "삼성전자",
      quote: "CompliLaw 도입 후 ESG 공시 준비 시간이 70% 단축되었습니다. 특히 데이터 수집과 검증 과정이 자동화되어 담당자의 업무 부담이 크게 줄었습니다.",
      author: "김준수",
      role: "ESG팀장",
      industry: "전자제조"
    },
    {
      company: "현대자동차",
      quote: "ISSB, ESRS 등 복잡한 공시 기준을 자동으로 매칭해주어 규제 대응이 훨씬 수월해졌습니다. AI 어시스턴트가 실시간으로 답변해주는 것도 큰 도움이 됩니다.",
      author: "이지혜",
      role: "지속가능경영 담당",
      industry: "자동차"
    },
    {
      company: "SK하이닉스",
      quote: "공급망 ESG 관리가 가장 어려웠는데, CompliLaw로 협력사 데이터를 한눈에 파악하고 리스크를 조기에 발견할 수 있게 되었습니다.",
      author: "박민수",
      role: "구매본부장",
      industry: "반도체"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      {/* Cards Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-3">
              <div className="bg-white rounded-2xl p-10 border border-slate-200 max-w-2xl mx-auto min-h-[320px] flex flex-col">
                {/* Company Logo/Name */}
                <div className="mb-8">
                  <div className="text-slate-400 font-semibold text-sm tracking-wide">
                    {testimonial.company}
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 mb-8">
                  <p className="text-slate-700 leading-relaxed text-base">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.industry}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-400 flex items-center justify-center transition-colors bg-white"
          aria-label="Previous testimonial"
        >
          <ArrowRight className="w-4 h-4 text-slate-600 rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-400 flex items-center justify-center transition-colors bg-white"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-4 h-4 text-slate-600" />
        </button>
      </div>
    </div>
  );
}

// Video Section Component with Autoplay on View
function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch((error) => {
              console.log('Autoplay failed:', error);
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            리걸테크 혁신기업, <span className="text-[#0561A4]">HUMAX IT</span>
          </h2>
          <p className="text-lg text-slate-600">
            법무팀, 로펌용 법무관리시스템부터 ESG경영까지
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-slate-100 rounded-2xl border-2 border-slate-200 flex items-center justify-center overflow-hidden">
            <video 
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source 
                src="https://www.humaxit.com/wp-content/uploads/2023/11/HUMAX-IT_%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C%EC%98%81%EC%83%81_%EB%82%A9%ED%92%88%EB%B3%B8_%EC%9B%8C%ED%84%B0%EB%A7%88-1.mp4" 
                type="video/mp4" 
              />
              <div className="text-center p-8">
                <p className="text-slate-600 font-medium">비디오를 로드할 수 없습니다</p>
                <p className="text-sm text-slate-500 mt-1">브라우저가 비디오 형식을 지원하지 않습니다</p>
              </div>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EsgPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPillar, setSelectedPillar] = useState<'environment' | 'social' | 'governance' | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Minimal & Focused */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#0561A4]/15 to-[#0561A4]/8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/80 border border-[#0561A4]/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <Leaf className="w-4 h-4 text-[#0561A4]" />
                <span className="text-sm font-semibold text-[#0561A4]">ESG Management Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                3개월 안에 ESG 공시 준비를<br />
                <span className="text-[#0561A4]">70% 더 빠르게</span> 완료하시겠습니까?
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                복잡한 ESG 규제 대응부터 데이터 수집, 공시 보고서 작성까지.<br />
                CompliLaw가 자동화로 해결합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  className="h-14 px-8 text-lg bg-[#FF5812] hover:bg-[#E0480F] text-white rounded-xl font-bold transition-all border-none"
                  onClick={() => setShowContactModal(true)}
                >
                  무료 상담 신청하기
                </Button>
                <Button 
                  variant="outline"
                  className="h-14 px-8 text-lg border-2 border-slate-300 hover:border-[#0561A4] hover:text-[#0561A4] rounded-xl font-semibold"
                  onClick={() => {
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  데모 영상 보기
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0561A4]" />
                  <span>신용카드 불필요</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0561A4]" />
                  <span>15일 무료 체험</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0561A4]" />
                  <span>도입 후 평균 4주 ROI 달성</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why ESG Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left - Text Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  ESG 규제를 자동으로<br />
                  파악하고 대응하세요.
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  CompliLaw의 AI가 ISSB, ESRS, GRI 등 복잡한 공시 기준을 분석하고,
                  귀사에 적용되는 규제 항목만 자동으로 필터링합니다.
                  매일 업데이트되는 법규 변경사항도 놓치지 마세요.
                </p>
              </div>

              {/* Right - UI Preview */}
              <div className="bg-[#f5f5f0] rounded-3xl p-12 min-h-[500px] flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
                  {/* Alert Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-slate-900">ISSB 기준 업데이트</div>
                      <div className="text-xs text-slate-500">2024년 2월 11일</div>
                    </div>
                  </div>

                  {/* Compliance Status */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-900">자동 매칭 완료</span>
                    </div>
                    <ul className="space-y-1 text-xs text-green-800 ml-6">
                      <li className="animate-fadeInLeft" style={{ animationDelay: '2.3s' }}>✓ 탄소배출량 데이터 수집</li>
                      <li className="animate-fadeInLeft" style={{ animationDelay: '2.6s' }}>✓ 재무영향 분석</li>
                      <li className="animate-fadeInLeft" style={{ animationDelay: '2.9s' }}>✓ 공급망 실사</li>
                    </ul>
                  </div>

                  {/* Status Indicators */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">진행률</span>
                      <span className="font-semibold text-slate-900">87%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-[87%] bg-[#0561A4] rounded-full animate-slideInLeft-infinite" style={{ animationDuration: '1.5s', animationDelay: '0.8s' }}></div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-6 bg-[#0561A4] hover:bg-[#044A85] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    상세 보기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Pillars - Card Style with Modal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              CompliLaw가 <span className="text-[#0561A4]">E·S·G 전 영역</span>을 지원합니다
            </h2>
            <div className="inline-block bg-slate-100 px-4 py-2 rounded-full text-sm text-slate-600 mt-4">
              ESG Management
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Environment Card */}
            <motion.div
              onClick={() => setSelectedPillar('environment')}
              className="relative h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=800&fit=crop"
                alt="Environment"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
              
              {/* Label */}
              <div className="absolute top-6 left-6">
                <span className="text-white/90 text-sm font-medium">Environment</span>
              </div>

              {/* Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  탄소중립 달성을 위한<br />체계적 환경 관리
                </h3>
              </div>

              {/* Plus Icon */}
              <div className="absolute bottom-6 right-6">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <span className="text-white text-2xl font-light">+</span>
                </div>
              </div>
            </motion.div>

            {/* Social Card */}
            <motion.div
              onClick={() => setSelectedPillar('social')}
              className="relative h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=800&fit=crop"
                alt="Social"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
              
              <div className="absolute top-6 left-6">
                <span className="text-white/90 text-sm font-medium">Social</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  인권 존중과<br />안전한 근무환경 구축
                </h3>
              </div>

              <div className="absolute bottom-6 right-6">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <span className="text-white text-2xl font-light">+</span>
                </div>
              </div>
            </motion.div>

            {/* Governance Card */}
            <motion.div
              onClick={() => setSelectedPillar('governance')}
              className="relative h-[400px] rounded-3xl overflow-hidden cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop"
                alt="Governance"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
              
              <div className="absolute top-6 left-6">
                <span className="text-white/90 text-sm font-medium">Governance</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  투명한 지배구조와<br />윤리경영 실천
                </h3>
              </div>

              <div className="absolute bottom-6 right-6">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <span className="text-white text-2xl font-light">+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Modal */}
        {selectedPillar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#C84B31] hover:bg-[#B03A22] text-white flex items-center justify-center transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="p-12">
                {selectedPillar === 'environment' && (
                  <>
                    <p className="text-sm text-slate-500 mb-2">Environment</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                      탄소중립 달성을 위한 체계적 환경 관리
                    </h2>
                    <img
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop"
                      alt="Environment"
                      className="w-full h-80 object-cover rounded-2xl mb-8"
                    />
                    <p className="text-slate-700 leading-relaxed">
                      CompliLaw의 환경(E) 솔루션은 기업의 탄소중립 목표 달성을 위한 통합 환경 관리 시스템입니다. 
                      Scope 1·2·3 탄소배출량을 정확하게 측정하고, 에너지 효율화 프로그램을 통해 배출량을 감축합니다. 
                      폐기물 관리 시스템으로 자원 순환을 촉진하고, 수자원 관리를 최적화하여 환경 영향을 최소화합니다. 
                      실시간 모니터링 대시보드로 환경 성과를 추적하고, TCFD 등 글로벌 환경 공시 기준에 대응합니다.
                    </p>
                  </>
                )}

                {selectedPillar === 'social' && (
                  <>
                    <p className="text-sm text-slate-500 mb-2">Social</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                      인권 존중과 안전한 근무환경 구축
                    </h2>
                    <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop"
                      alt="Social"
                      className="w-full h-80 object-cover rounded-2xl mb-8"
                    />
                    <p className="text-slate-700 leading-relaxed">
                      CompliLaw의 사회(S) 솔루션은 임직원의 인권과 노동권을 보호하고, 안전한 근무환경을 조성합니다. 
                      산업안전보건 관리 시스템으로 중대재해를 예방하고, 다양성과 포용성을 증진하는 조직문화를 구축합니다. 
                      협력사 인권 실사를 통해 공급망 전반의 사회적 책임을 강화하고, 지역사회 공헌 활동을 체계적으로 관리합니다. 
                      임직원 만족도 조사와 고충처리 시스템으로 건강한 조직문화를 만들어갑니다.
                    </p>
                  </>
                )}

                {selectedPillar === 'governance' && (
                  <>
                    <p className="text-sm text-slate-500 mb-2">Governance</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                      투명한 지배구조와 윤리경영 실천
                    </h2>
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
                      alt="Governance"
                      className="w-full h-80 object-cover rounded-2xl mb-8"
                    />
                    <p className="text-slate-700 leading-relaxed">
                      CompliLaw의 지배구조(G) 솔루션은 이사회의 독립성과 전문성을 강화하고, 투명한 의사결정 체계를 구축합니다. 
                      윤리경영 시스템으로 부패 방지와 공정거래를 실천하며, 내부통제 시스템으로 리스크를 체계적으로 관리합니다. 
                      주주권 보호와 정보 공시의 투명성을 높이고, 컴플라이언스 관리를 통해 법규 위반을 사전에 방지합니다. 
                      이사회 운영 현황과 경영진 보수 정책을 투명하게 공개하여 이해관계자의 신뢰를 확보합니다.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Core Solutions - Tab Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              CompliLaw의 <span className="text-[#0561A4]">6가지 핵심 기능</span>
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              ESG 경영에 필요한 모든 것을 하나의 플랫폼에서
            </p>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {[
                { id: 0, name: 'ESG 경영', icon: BarChart3 },
                { id: 1, name: 'ESG 공시', icon: Globe },
                { id: 2, name: '탄소배출량 관리', icon: Leaf },
                { id: 3, name: '공급망 ESG 진단', icon: Shield },
                { id: 4, name: 'ESG 보고서', icon: Building2 },
                { id: 5, name: 'ESG 데이터 관리', icon: Users },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? tab.id === 2
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                          : 'bg-[#0561A4] text-white shadow-lg shadow-blue-200'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 rounded-3xl p-10 border-2 border-slate-100"
            >
              {/* Tab 0: ESG 경영 */}
              {activeTab === 0 && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#0561A4] flex items-center justify-center">
                        <BarChart3 className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">ESG 경영</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      지속가능경영 목표 수립부터 성과 관리까지 전 과정을 체계적으로 지원합니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">목표 설정 및 추적</div>
                          <p className="text-sm text-slate-600">ESG 목표를 설정하고 실시간으로 진행 상황을 모니터링합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">실시간 모니터링</div>
                          <p className="text-sm text-slate-600">KPI 대시보드로 ESG 성과를 한눈에 파악합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">리스크 평가</div>
                          <p className="text-sm text-slate-600">ESG 리스크를 사전에 식별하고 대응 계획을 수립합니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                      {/* Animated Dashboard Illustration */}
                      <svg viewBox="0 0 400 300" className="w-full h-full p-8">
                        {/* Chart Bars */}
                        <motion.rect
                          x="50" y="180" width="40" height="0"
                          fill="#0561A4"
                          rx="4"
                          initial={{ height: 0, y: 240 }}
                          animate={{ height: 60, y: 180 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        />
                        <motion.rect
                          x="110" y="150" width="40" height="0"
                          fill="#0561A4"
                          rx="4"
                          initial={{ height: 0, y: 240 }}
                          animate={{ height: 90, y: 150 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                        />
                        <motion.rect
                          x="170" y="120" width="40" height="0"
                          fill="#FF5812"
                          rx="4"
                          initial={{ height: 0, y: 240 }}
                          animate={{ height: 120, y: 120 }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        />
                        <motion.rect
                          x="230" y="90" width="40" height="0"
                          fill="#0561A4"
                          rx="4"
                          initial={{ height: 0, y: 240 }}
                          animate={{ height: 150, y: 90 }}
                          transition={{ duration: 0.8, delay: 0.8 }}
                        />
                        
                        {/* Trend Line */}
                        <motion.path
                          d="M 70 200 Q 130 170, 190 140 T 310 70"
                          stroke="#10b981"
                          strokeWidth="3"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        
                        {/* Trend Dots */}
                        {[70, 130, 190, 250].map((x, i) => (
                          <motion.circle
                            key={i}
                            cx={x}
                            cy={200 - i * 30}
                            r="0"
                            fill="#10b981"
                            initial={{ r: 0 }}
                            animate={{ r: 6 }}
                            transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
                          />
                        ))}
                        
                        {/* Dashboard Cards */}
                        <motion.rect
                          x="280" y="50" width="90" height="50"
                          fill="white"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                          rx="8"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 50 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        />
                        <motion.rect
                          x="280" y="115" width="90" height="50"
                          fill="white"
                          stroke="#e2e8f0"
                          strokeWidth="2"
                          rx="8"
                          initial={{ opacity: 0, y: 95 }}
                          animate={{ opacity: 1, y: 115 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 1: ESG 공시 */}
              {activeTab === 1 && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#0561A4] flex items-center justify-center">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">ESG 공시</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      ISSB, ESRS 등 글로벌 공시 기준에 맞춘 데이터 수집 및 공시를 자동화합니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">다중 기준 지원</div>
                          <p className="text-sm text-slate-600">ISSB, ESRS, GRI, SASB 등 글로벌 공시 기준을 모두 지원합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">자동 데이터 수집</div>
                          <p className="text-sm text-slate-600">각 부서의 데이터를 자동으로 수집하고 검증합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">법규 변경 알림</div>
                          <p className="text-sm text-slate-600">최신 규제 동향을 실시간으로 알려드립니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                      {/* Mock Window Header */}
                      <div className="h-10 border-b border-gray-200 flex items-center px-4 bg-white">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400/40" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                          <div className="w-3 h-3 rounded-full bg-green-400/40" />
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-6 bg-[#f3f6f9]">
                        <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm mb-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-slate-900 font-medium text-sm">공시 기준 대응 현황</h3>
                              <p className="text-xs text-gray-400">ISSB, ESRS, GRI, SASB</p>
                            </div>
                            <span className="text-[#0561A4] font-bold text-lg">94%</span>
                          </div>
                          <div className="space-y-3">
                            {/* ISSB */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-medium text-slate-700">ISSB S1/S2</span>
                                <span className="text-xs text-slate-500">100%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#0561A4] rounded-full" style={{ width: '100%' }}></div>
                              </div>
                            </div>
                            {/* ESRS */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-medium text-slate-700">ESRS</span>
                                <span className="text-xs text-slate-500">95%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#0561A4] rounded-full" style={{ width: '95%' }}></div>
                              </div>
                            </div>
                            {/* GRI */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-medium text-slate-700">GRI Standards</span>
                                <span className="text-xs text-slate-500">92%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                              </div>
                            </div>
                            {/* SASB */}
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-medium text-slate-700">SASB</span>
                                <span className="text-xs text-slate-500">88%</span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-amber-500 rounded-full" style={{ width: '88%' }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center gap-4 mt-4">
                            <div className="text-xs text-slate-500">
                              글로벌 공시 기준 자동 매핑
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">수집 완료</div>
                            <div className="text-2xl font-bold text-slate-900">247 <span className="text-sm text-green-500 font-normal">94%</span></div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">법규 업데이트</div>
                            <div className="text-2xl font-bold text-slate-900">3 <span className="text-sm text-orange-500 font-normal">신규</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: 탄소배출량 관리 */}
              {activeTab === 2 && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center">
                        <Leaf className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">탄소배출량 관리</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      Scope 1, 2, 3 배출량을 정밀하게 측정하고 감축 목표를 관리합니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">GHG 프로토콜 준수</div>
                          <p className="text-sm text-slate-600">국제 표준에 따라 정확하게 배출량을 산정합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">감축 시뮬레이션</div>
                          <p className="text-sm text-slate-600">다양한 감축 시나리오를 시뮬레이션하고 최적 방안을 도출합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">탄소중립 로드맵</div>
                          <p className="text-sm text-slate-600">2030/2050 탄소중립 목표 달성을 위한 로드맵을 수립합니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                      {/* Mock Window Header */}
                      <div className="h-10 border-b border-gray-200 flex items-center px-4 bg-white">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400/40" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                          <div className="w-3 h-3 rounded-full bg-green-400/40" />
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-6 bg-[#f3f6f9]">
                        <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm mb-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-slate-900 font-medium text-sm">탄소배출량 추이 (tCO2e)</h3>
                              <p className="text-xs text-gray-400">Scope 1, 2, 3 배출량</p>
                            </div>
                            <span className="text-emerald-600 font-bold text-lg">-22%</span>
                          </div>
                          <div className="w-full h-[180px] overflow-hidden">
                            <LineChart width={500} height={180} data={carbonData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                                <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#E5E7EB' }} />
                                <Line type="monotone" dataKey="scope1" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} name="Scope 1" />
                                <Line type="monotone" dataKey="scope2" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} name="Scope 2" />
                                <Line type="monotone" dataKey="scope3" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} name="Scope 3" />
                              </LineChart>
                          </div>
                          <div className="flex justify-center gap-4 mt-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-emerald-500" />
                              <span className="text-xs text-slate-600">Scope 1</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-blue-500" />
                              <span className="text-xs text-slate-600">Scope 2</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-amber-500" />
                              <span className="text-xs text-slate-600">Scope 3</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">총 배출량</div>
                            <div className="text-2xl font-bold text-slate-900">517 <span className="text-sm text-emerald-500 font-normal">-22%</span></div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">감축 목표</div>
                            <div className="text-2xl font-bold text-slate-900">40% <span className="text-sm text-blue-500 font-normal">2030</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: 공급망 ESG 진단 */}
              {activeTab === 3 && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#0561A4] flex items-center justify-center">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">공급망 ESG 진단</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      협력사의 ESG 리스크를 진단하고 개선 활동을 체계적으로 지원합니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">협력사 ESG 평가</div>
                          <p className="text-sm text-slate-600">체계적인 평가 기준으로 협력사의 ESG 수준을 진단합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">리스크 등급 관리</div>
                          <p className="text-sm text-slate-600">High/Medium/Low 등급으로 우선순위를 관리합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">개선 활동 추적</div>
                          <p className="text-sm text-slate-600">협력사 개선 계획 수립부터 이행까지 전 과정을 지원합니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                      {/* Mock Window Header */}
                      <div className="h-10 border-b border-gray-200 flex items-center px-4 bg-white">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400/40" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                          <div className="w-3 h-3 rounded-full bg-green-400/40" />
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-6 bg-[#f3f6f9]">
                        <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm mb-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-slate-900 font-medium text-sm">협력사 리스크 분포</h3>
                              <p className="text-xs text-gray-400">총 120개 협력사</p>
                            </div>
                          </div>
                          <div className="w-full h-[180px] flex items-center justify-center overflow-hidden">
                            <PieChart width={300} height={180}>
                                <Pie
                                  data={supplyChainData}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={50}
                                  outerRadius={70}
                                  paddingAngle={2}
                                  dataKey="value"
                                >
                                  {supplyChainData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                  ))}
                                </Pie>
                                <Tooltip />
                              </PieChart>
                          </div>
                          <div className="flex justify-center gap-4 mt-4">
                            {supplyChainData.map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                <span className="text-xs text-slate-600">{item.name} ({item.value}%)</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">평가 완료</div>
                            <div className="text-2xl font-bold text-slate-900">105 <span className="text-sm text-green-500 font-normal">87%</span></div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">High Risk</div>
                            <div className="text-2xl font-bold text-slate-900">8 <span className="text-sm text-red-500 font-normal">7%</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: ESG 보고서 */}
              {activeTab === 4 && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#0561A4] flex items-center justify-center">
                        <Building2 className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">ESG 보고서</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      GRI, SASB 등 국제 표준에 부합하는 전문적인 보고서를 자동으로 생성합니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">GRI 표준 준수</div>
                          <p className="text-sm text-slate-600">GRI Standards에 따른 지속가능경영보고서를 작성합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">SASB 업종별 지표</div>
                          <p className="text-sm text-slate-600">업종별 중요 지표를 반영한 SASB 보고서를 생성합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">원클릭 보고서 생성</div>
                          <p className="text-sm text-slate-600">수집된 데이터를 기반으로 자동으로 보고서를 완성합니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                      {/* Mock Window Header */}
                      <div className="h-10 border-b border-gray-200 flex items-center px-4 bg-white">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400/40" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                          <div className="w-3 h-3 rounded-full bg-green-400/40" />
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-6 bg-[#f3f6f9]">
                        <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm mb-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-slate-900 font-medium text-sm">보고서 작성 진행률</h3>
                              <p className="text-xs text-gray-400">섹션별 완성도</p>
                            </div>
                            <span className="text-[#0561A4] font-bold text-lg">81%</span>
                          </div>
                          <div className="w-full h-[180px] overflow-hidden">
                            <RechartsBarChart width={500} height={180} data={reportData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                                <XAxis dataKey="section" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#E5E7EB' }} />
                                <Bar dataKey="progress" fill="#0561A4" radius={[8, 8, 0, 0]} />
                              </RechartsBarChart>
                          </div>
                          <div className="flex justify-center gap-4 mt-4">
                            <div className="text-xs text-slate-500">
                              GRI, SASB 표준 기반 자동 생성
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">완성된 섹션</div>
                            <div className="text-2xl font-bold text-slate-900">3/4 <span className="text-sm text-green-500 font-normal">75%</span></div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">검토 대기</div>
                            <div className="text-2xl font-bold text-slate-900">1 <span className="text-sm text-orange-500 font-normal">검토중</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 5: ESG 데이터 관리 */}
              {activeTab === 5 && (
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-[#0561A4] flex items-center justify-center">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">ESG 데이터 관리</h3>
                    </div>
                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      조직 내 흩어진 ESG 데이터를 통합하고 실시간으로 분석합니다.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">다중 소스 통합</div>
                          <p className="text-sm text-slate-600">ERP, HR, 설비 관리 등 다양한 시스템의 데이터를 통합합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">실시간 분석</div>
                          <p className="text-sm text-slate-600">AI 기반 분석으로 ESG 트렌드와 인사이트를 제공합니다</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#0561A4] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-slate-900 mb-1">커스텀 대시보드</div>
                          <p className="text-sm text-slate-600">경영진과 실무자를 위한 맞춤형 대시보드를 제공합니다</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                      {/* Mock Window Header */}
                      <div className="h-10 border-b border-gray-200 flex items-center px-4 bg-white">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400/40" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400/40" />
                          <div className="w-3 h-3 rounded-full bg-green-400/40" />
                        </div>
                      </div>

                      {/* Dashboard Content */}
                      <div className="p-6 bg-[#f3f6f9]">
                        <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm mb-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-slate-900 font-medium text-sm">부서별 데이터 수집률</h3>
                              <p className="text-xs text-gray-400">실시간 현황</p>
                            </div>
                            <span className="text-[#0561A4] font-bold text-lg">87%</span>
                          </div>
                          <div className="w-full h-[180px] overflow-hidden">
                            <AreaChart width={500} height={180} data={dataCollectionData}>
                                <defs>
                                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0561A4" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#0561A4" stopOpacity={0}/>
                                  </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                                <XAxis dataKey="dept" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#E5E7EB' }} />
                                <Area type="monotone" dataKey="rate" stroke="#0561A4" fillOpacity={1} fill="url(#colorRate)" strokeWidth={3} />
                              </AreaChart>
                          </div>
                          <div className="flex justify-center gap-4 mt-4">
                            <div className="text-xs text-slate-500">
                              ERP, HR 등 다중 소스 실시간 통합
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">통합 소스</div>
                            <div className="text-2xl font-bold text-slate-900">12 <span className="text-sm text-green-500 font-normal">+3</span></div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                            <div className="text-gray-400 text-sm mb-1">데이터 정확도</div>
                            <div className="text-2xl font-bold text-slate-900">98% <span className="text-sm text-blue-500 font-normal">우수</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Testimonials Grid with Preview */}
            <div className="relative">
              <div id="testimonial-scroll" className="overflow-x-auto pb-8 hide-scrollbar scroll-smooth">
                <div className="flex gap-6 min-w-max px-4">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl p-10 border border-slate-200 w-[500px] flex-shrink-0 min-h-[320px] flex flex-col">
                    <div className="mb-8">
                      <div className="w-32 h-auto">
                        <SamsungLogo />
                      </div>
                    </div>
                    <div className="flex-1 mb-8">
                      <p className="text-slate-700 leading-relaxed text-base">
                        CompliLaw 도입 후 ESG 공시 준비 시간이 70% 단축되었습니다. 특히 데이터 수집과 검증 과정이 자동화되어 담당자의 업무 부담이 크게 줄었습니다.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">김준수</div>
                      <div className="text-sm text-slate-500">ESG팀장, 전자제조</div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl p-10 border border-slate-200 w-[500px] flex-shrink-0 min-h-[320px] flex flex-col">
                    <div className="mb-8">
                      <div className="w-32 h-auto">
                        <HyundaiLogo />
                      </div>
                    </div>
                    <div className="flex-1 mb-8">
                      <p className="text-slate-700 leading-relaxed text-base">
                        ISSB, ESRS 등 복잡한 공시 기준을 자동으로 매칭해주어 규제 대응이 훨씬 수월해졌습니다. AI 어시스턴트가 실시간으로 답변해주는 것도 큰 도움이 됩니다.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">이지혜</div>
                      <div className="text-sm text-slate-500">지속가능경영 담당, 자동차</div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl p-10 border border-slate-200 w-[500px] flex-shrink-0 min-h-[320px] flex flex-col">
                    <div className="mb-8 flex items-start -mt-2">
                      <div className="w-32 h-auto">
                        <SKHynixLogo />
                      </div>
                    </div>
                    <div className="flex-1 mb-8">
                      <p className="text-slate-700 leading-relaxed text-base">
                        공급망 ESG 관리가 가장 어려웠는데, CompliLaw로 협력사 데이터를 한눈에 파악하고 리스크를 조기에 발견할 수 있게 되었습니다.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">박민수</div>
                      <div className="text-sm text-slate-500">구매본부장, 반도체</div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-2xl p-10 border border-slate-200 w-[500px] flex-shrink-0 min-h-[320px] flex flex-col">
                    <div className="mb-8">
                      <div className="w-32 h-auto">
                        <LGChemLogo />
                      </div>
                    </div>
                    <div className="flex-1 mb-8">
                      <p className="text-slate-700 leading-relaxed text-base">
                        글로벌 공시 기준 변경사항을 실시간으로 알려주어 항상 최신 규제를 준수할 수 있습니다. 다국적 운영에 꼭 필요한 솔루션입니다.
                      </p>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">최서연</div>
                      <div className="text-sm text-slate-500">환경안전팀장, 화학</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Navigation */}
              <div className="flex justify-center gap-3 mt-6">
                <button
                  onClick={() => {
                    const container = document.getElementById('testimonial-scroll');
                    if (container) {
                      container.scrollBy({ left: -520, behavior: 'smooth' });
                    }
                  }}
                  className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-400 flex items-center justify-center transition-colors bg-white"
                  aria-label="Previous testimonial"
                >
                  <ArrowRight className="w-4 h-4 text-slate-600 rotate-180" />
                </button>
                <button
                  onClick={() => {
                    const container = document.getElementById('testimonial-scroll');
                    if (container) {
                      container.scrollBy({ left: 520, behavior: 'smooth' });
                    }
                  }}
                  className="w-10 h-10 rounded-full border border-slate-300 hover:border-slate-400 flex items-center justify-center transition-colors bg-white"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>

            <style>{`
              .hide-scrollbar {
                scrollbar-width: none;
                -ms-overflow-style: none;
              }
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                ESG 공시 준비를 자동화하세요.
              </h2>
              <p className="text-lg text-slate-400">
                복잡한 데이터 수집부터 보고서 작성까지, CompliLaw가 해결합니다
              </p>
            </div>

            {/* Two Column Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Left Card - ESG Report Preview */}
              <div className="bg-[#e8e8e8] rounded-3xl p-8 min-h-[400px] flex flex-col">
                <div className="bg-white rounded-2xl p-6 shadow-lg flex-1 flex flex-col">
                  {/* Report Header */}
                  <div className="flex items-start gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#0561A4] flex items-center justify-center shrink-0">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg">ESG 공시 보고서</h3>
                      <p className="text-sm text-slate-500">2024년 2분기 진행률</p>
                    </div>
                  </div>

                  {/* Report Items */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                      <Globe className="w-5 h-5 text-slate-400" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-700">환경 (Environment)</div>
                        <div className="text-xs text-slate-500">탄소배출 데이터 수집 완료</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>

                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                      <Users className="w-5 h-5 text-slate-400" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-700">사회 (Social)</div>
                        <div className="text-xs text-slate-500">인권실사 진행중</div>
                      </div>
                      <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-[#FF5812]"></div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                      <Building2 className="w-5 h-5 text-slate-400" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-slate-700">지배구조 (Governance)</div>
                        <div className="text-xs text-slate-500">이사회 구성 검토</div>
                      </div>
                      <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-[#0561A4]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Auto Tag */}
                  <div className="mt-4 inline-flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 w-fit">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-slate-700">자동 수집 중</span>
                  </div>
                </div>
              </div>

              {/* Right Card - AI Assistant */}
              <div className="bg-[#e8e8e8] rounded-3xl p-8 min-h-[400px] flex flex-col">
                <div className="bg-white rounded-2xl shadow-lg flex-1 flex flex-col overflow-hidden">
                  {/* Image Area */}
                  <div className="h-48 bg-gradient-to-br from-[#0561A4]/10 to-[#FF5812]/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Leaf className="w-24 h-24 text-[#0561A4]/20" />
                    </div>
                  </div>

                  {/* Chat Bubble */}
                  <div className="p-6 flex-1 flex flex-col justify-end">
                    <div className="bg-[#0561A4] text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%] ml-auto mb-4">
                      <p className="text-sm">ISSB 기준으로 보고서를 작성해야 하나요?</p>
                    </div>
                    
                    <div className="bg-slate-100 text-slate-900 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-sm">네, 귀사의 업종과 규모를 고려하면 ISSB 기준이 가장 적합합니다. CompliLaw가 자동으로 해당 기준에 맞춰 데이터를 분류하고 보고서를 생성해드립니다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Descriptions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">데이터가 자동으로 수집됩니다.</h3>
                <p className="text-slate-400 leading-relaxed">
                  부서별로 흩어진 데이터를 자동으로 수집하고 분류합니다. 엑셀, API, 수동 입력 등 다양한 방식으로 데이터를 연동할 수 있습니다.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3">AI 어시스턴트가 항상 답변합니다.</h3>
                <p className="text-slate-400 leading-relaxed">
                  CompliLaw AI와 자연어로 대화하며 정책, 규제 기준, 보고서 작성 방법 등을 실시간으로 문의할 수 있습니다.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
              <Button 
                className="h-14 px-8 text-lg bg-[#0561A4] hover:bg-[#044A85] text-white rounded-xl font-bold border-none"
                onClick={() => setShowContactModal(true)}
              >
                무료로 시작하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Numbers */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              CompliLaw로 얻을 수 있는<br />
              <span className="text-[#0561A4]">구체적인 성과</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#0561A4] mb-3">70%</div>
              <div className="font-semibold text-slate-900 mb-2">시간 절감</div>
              <p className="text-sm text-slate-600">공시 준비 시간 단축</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-3">95%</div>
              <div className="font-semibold text-slate-900 mb-2">오류 감소</div>
              <p className="text-sm text-slate-600">데이터 검증 자동화</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[#FF5812] mb-3">3배</div>
              <div className="font-semibold text-slate-900 mb-2">투자 유치</div>
              <p className="text-sm text-slate-600">ESG 펀드 유입 증가</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-[#CEA331] mb-3">4주</div>
              <div className="font-semibold text-slate-900 mb-2">ROI 달성</div>
              <p className="text-sm text-slate-600">평균 투자 회수 기간</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <VideoSection />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#001B3D] to-[#0561A4]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              지금 바로 무료 상담을<br />
              신청하세요
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              ESG 전문가가 귀사의 현황을 분석하고<br />
              최적의 솔루션을 제안해드립니다
            </p>
            
            <Button 
              className="h-16 px-10 text-xl bg-[#FF5812] hover:bg-[#E0480F] text-white rounded-xl font-bold transition-all hover:shadow-[0_0_40px_rgba(255,88,18,0.5)] border-none mb-8"
              onClick={() => setShowContactModal(true)}
            >
              15분 무료 상담 예약하기
            </Button>

            <div className="flex flex-wrap justify-center gap-8 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>평균 15분 소요</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>맞춤형 제안서 제공</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>즉시 무료 체험 가능</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">무료 상담 신청</h3>
            <p className="text-slate-600 mb-6">정보를 입력하시면 담당자가 연락드립니다</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">회사명</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#0561A4] outline-none transition-colors"
                  placeholder="회사명을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">담당자명</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#0561A4] outline-none transition-colors"
                  placeholder="이름을 입력하세요"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">이메일</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#0561A4] outline-none transition-colors"
                  placeholder="email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">전화번호</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#0561A4] outline-none transition-colors"
                  placeholder="010-1234-5678"
                />
              </div>

              <Button 
                type="submit"
                className="w-full h-12 bg-[#FF5812] hover:bg-[#E0480F] text-white rounded-xl font-bold border-none"
              >
                상담 신청하기
              </Button>
            </form>

            <p className="text-xs text-slate-500 mt-4 text-center">
              신청 후 평균 1시간 이내에 연락드립니다
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}