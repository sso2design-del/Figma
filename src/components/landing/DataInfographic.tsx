import { BarChart3, Database, TrendingUp, Zap, Globe, Shield, Activity, CheckCircle2, AlertCircle, Layers } from "lucide-react";

export function DataInfographic() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-t-3xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Nzc5NTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001B3D]/95 via-[#0561A4]/90 to-[#001B3D]/95" />

      {/* Content Layer */}
      <div className="relative h-full z-10">
        {/* Header */}
        <div className="px-8 py-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-block bg-[#FF5812] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                실시간 모니터링
              </div>
              <h2 className="text-3xl font-bold text-white mb-1 drop-shadow-lg">
                ESG 데이터 통합 대시보드
              </h2>
              <p className="text-white/90 text-sm drop-shadow">
                조직 내 모든 ESG 데이터를 한눈에 확인하고 실시간으로 분석합니다
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-white/80 text-xs font-medium mb-1">데이터 상태</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-bold">정상 운영 중</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-4">
          {/* Top Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-xs font-medium">총 데이터 포인트</span>
                <Database className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-black text-white">50,247</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-xs text-green-400 font-medium">+12% 증가</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-xs font-medium">데이터 정확도</span>
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-2xl font-black text-white">99.9%</div>
              <div className="w-full bg-white/20 rounded-full h-1.5 mt-2">
                <div className="bg-green-400 h-1.5 rounded-full" style={{ width: '99.9%' }} />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-xs font-medium">연동 시스템</span>
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div className="text-2xl font-black text-white">15개</div>
              <div className="text-xs text-white/70 mt-1">ERP, MES, HRM 등</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-xs font-medium">실시간 처리</span>
                <Activity className="w-4 h-4 text-[#FF5812]" />
              </div>
              <div className="text-2xl font-black text-white">24/7</div>
              <div className="text-xs text-[#FF5812] font-medium mt-1">가동 중</div>
            </div>
          </div>

          {/* Main Content Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Data Collection Status */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white/20 rounded-lg p-2">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white">데이터 수집 현황</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/80">환경 데이터</span>
                    <span className="font-bold text-white">100%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/80">사회 데이터</span>
                    <span className="font-bold text-white">87%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/80">지배구조 데이터</span>
                    <span className="font-bold text-white">95%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '95%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Data Analysis Chart */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#FF5812]/20 rounded-lg p-2">
                  <BarChart3 className="w-5 h-5 text-[#FF5812]" />
                </div>
                <h3 className="font-bold text-white">데이터 분석</h3>
              </div>
              <div className="flex items-end justify-between h-24 gap-2">
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-gradient-to-t from-white/60 to-white/80 rounded-t" style={{ height: '85%' }} />
                  <span className="text-xs text-white/80">1월</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-gradient-to-t from-white/60 to-white/80 rounded-t" style={{ height: '70%' }} />
                  <span className="text-xs text-white/80">2월</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-gradient-to-t from-white/60 to-white/80 rounded-t" style={{ height: '95%' }} />
                  <span className="text-xs text-white/80">3월</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-gradient-to-t from-[#FF5812] to-[#FF7842] rounded-t" style={{ height: '100%' }} />
                  <span className="text-xs text-white font-bold">4월</span>
                </div>
              </div>
            </div>

            {/* Data Verification */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-400/20 rounded-lg p-2">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-bold text-white">데이터 검증</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-xs text-white/80">자동 검증 완료</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-bold text-white">1,247건</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-xs text-white/80">검토 대기</span>
                  <div className="flex items-center gap-1">
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-white">23건</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-white/80">승인 완료</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold text-white">1,198건</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Process Flow */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
            <h3 className="font-bold text-white mb-3 text-sm">데이터 처리 프로세스</h3>
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">수집</div>
                  <div className="text-white/80 text-xs">15개 시스템 연동</div>
                </div>
              </div>
              <div className="text-white/50 text-xl">→</div>
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">검증</div>
                  <div className="text-white/80 text-xs">자동 품질 관리</div>
                </div>
              </div>
              <div className="text-white/50 text-xl">→</div>
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">분석</div>
                  <div className="text-white/80 text-xs">실시간 인사이트</div>
                </div>
              </div>
              <div className="text-white/50 text-xl">→</div>
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur rounded-lg p-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">보고</div>
                  <div className="text-white/80 text-xs">대시보드 시각화</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}