import { Leaf, TrendingDown, Factory, Zap, Wind, Droplets, BarChart3, Target, CheckCircle2 } from "lucide-react";

export function CarbonDashboard() {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-50 to-white">
      {/* Content Layer */}
      <div className="relative h-full">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-block bg-[#FF5812] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                실시간 모니터링
              </div>
              <h2 className="text-3xl font-bold text-[#001B3D] mb-1">
                탄소배출량 관리 대시보드
              </h2>
              <p className="text-gray-600 text-sm">
                Scope 1·2·3 배출량을 자동 계산하고 감축 목표를 추적합니다
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl px-6 py-4 border border-green-200">
              <div className="text-gray-600 text-xs font-medium mb-1">감축 목표 달성률</div>
              <div className="flex items-center gap-2">
                <div className="text-2xl font-black text-green-600">73%</div>
                <TrendingDown className="w-5 h-5 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-4">
          {/* Top Stats Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-xs font-medium">총 배출량 (연간)</span>
                <Factory className="w-4 h-4 text-[#001B3D]" />
              </div>
              <div className="text-2xl font-black text-[#001B3D]">12,847</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingDown className="w-3 h-3 text-green-600" />
                <span className="text-xs text-green-600 font-medium">-18% 감소</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">tCO₂eq</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-xs font-medium">Scope 1 (직접배출)</span>
                <Zap className="w-4 h-4 text-[#FF5812]" />
              </div>
              <div className="text-2xl font-black text-[#001B3D]">3,240</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-[#FF5812] h-1.5 rounded-full" style={{ width: '25%' }} />
              </div>
              <div className="text-xs text-gray-500 mt-1">전체의 25%</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-xs font-medium">Scope 2 (간접배출)</span>
                <Droplets className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl font-black text-[#001B3D]">5,127</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '40%' }} />
              </div>
              <div className="text-xs text-gray-500 mt-1">전체의 40%</div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-xs font-medium">Scope 3 (기타)</span>
                <Wind className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-2xl font-black text-[#001B3D]">4,480</div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '35%' }} />
              </div>
              <div className="text-xs text-gray-500 mt-1">전체의 35%</div>
            </div>
          </div>

          {/* Main Content Row */}
          <div className="grid grid-cols-3 gap-4">
            {/* Monthly Emissions Chart */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#FF5812]/10 rounded-lg p-2">
                  <BarChart3 className="w-5 h-5 text-[#FF5812]" />
                </div>
                <h3 className="font-bold text-[#001B3D]">월별 배출량 추이</h3>
              </div>
              <div className="flex items-end justify-between h-32 gap-2">
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="text-xs font-bold text-gray-700 mb-1">1,214</div>
                  <div className="w-full bg-gradient-to-t from-gray-300 to-gray-400 rounded-t relative" style={{ height: '95%' }}>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">1월</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="text-xs font-bold text-gray-700 mb-1">1,121</div>
                  <div className="w-full bg-gradient-to-t from-gray-300 to-gray-400 rounded-t relative" style={{ height: '88%' }}>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">2월</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="text-xs font-bold text-gray-700 mb-1">1,045</div>
                  <div className="w-full bg-gradient-to-t from-gray-300 to-gray-400 rounded-t relative" style={{ height: '82%' }}>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">3월</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1">
                  <div className="text-xs font-bold text-[#FF5812] mb-1">827</div>
                  <div className="w-full bg-gradient-to-t from-[#FF5812] to-[#FF7842] rounded-t relative shadow-lg" style={{ height: '65%' }}>
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FF5812] rounded-full"></div>
                  </div>
                  <span className="text-xs text-[#001B3D] font-bold mt-1">4월</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <TrendingDown className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-600 font-medium">전월 대비 21% 감소</span>
                  </div>
                  <span className="text-xs text-gray-500">단위: tCO₂eq</span>
                </div>
              </div>
            </div>

            {/* Emission Sources */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gray-100 rounded-lg p-2">
                  <Factory className="w-5 h-5 text-[#001B3D]" />
                </div>
                <h3 className="font-bold text-[#001B3D]">배출원별 분석</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">제조 공정</span>
                    <span className="font-bold text-[#001B3D]">45%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#FF5812] h-2 rounded-full" style={{ width: '45%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">전력 사용</span>
                    <span className="font-bold text-[#001B3D]">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">운송/물류</span>
                    <span className="font-bold text-[#001B3D]">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">기타</span>
                    <span className="font-bold text-[#001B3D]">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-500 h-2 rounded-full" style={{ width: '10%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Reduction Goals */}
            <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-green-100 rounded-lg p-2">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-[#001B3D]">감축 목표 현황</h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-xs text-gray-600">2024년 목표</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#001B3D]">-20%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-xs text-gray-600">현재 달성률</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold text-green-600">73%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-xs text-gray-600">절감량</span>
                  <div className="flex items-center gap-1">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-bold text-[#001B3D]">2,810 tCO₂</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-gray-600">목표 달성 예상</span>
                  <span className="text-xs font-bold text-[#001B3D]">2024.11</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Calculation Process */}
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-[#001B3D] mb-3 text-sm">자동 배출량 계산 프로세스</h3>
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <Factory className="w-6 h-6 text-[#001B3D]" />
                </div>
                <div>
                  <div className="text-[#001B3D] font-bold text-sm">활동 데이터 수집</div>
                  <div className="text-gray-600 text-xs">연료, 전력, 운송량 등</div>
                </div>
              </div>
              <div className="text-gray-400 text-xl">→</div>
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <BarChart3 className="w-6 h-6 text-[#001B3D]" />
                </div>
                <div>
                  <div className="text-[#001B3D] font-bold text-sm">배출계수 적용</div>
                  <div className="text-gray-600 text-xs">IPCC, GHG Protocol</div>
                </div>
              </div>
              <div className="text-gray-400 text-xl">→</div>
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <CheckCircle2 className="w-6 h-6 text-[#001B3D]" />
                </div>
                <div>
                  <div className="text-[#001B3D] font-bold text-sm">배출량 산정</div>
                  <div className="text-gray-600 text-xs">Scope별 자동 계산</div>
                </div>
              </div>
              <div className="text-gray-400 text-xl">→</div>
              <div className="flex-1 flex items-center gap-3">
                <div className="bg-gray-100 rounded-lg p-3">
                  <Target className="w-6 h-6 text-[#001B3D]" />
                </div>
                <div>
                  <div className="text-[#001B3D] font-bold text-sm">목표 추적</div>
                  <div className="text-gray-600 text-xs">감축 현황 모니터링</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}