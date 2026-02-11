import { Shield, Lock, History, Server, Cloud, FileCheck, FolderUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import CertifiedLogo1Pc from "../../imports/CertifiedLogo1Pc";
import CertifiedLogo2Pc from "../../imports/CertifiedLogo2Pc";
import CertifiedLogo3Pc from "../../imports/CertifiedLogo3Pc";
import CertifiedLogo4Pc from "../../imports/CertifiedLogo4Pc";
import { ThreeDIcon } from "./ThreeDIcon";

export function SecurityFeatures() {
  return (
    <section id="insight" className="py-24 bg-white">
       <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                <span className="text-[#0561A4]">손실과 유출에 대한 걱정 NO!</span><br/>
                안심하고 업무에만 집중하세요
             </h2>
          </div>

          {/* Main Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
             {/* Card 1 */}
             <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 pb-0 relative overflow-hidden h-auto lg:min-h-[450px] flex flex-col group">
                <div className="relative z-10 mb-1 md:mb-8 pr-16 md:pr-20">
                   <p className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
                      컴플라이로는 클라우드 보안 서버에서 <br className="hidden md:block"/>
                      데이터를 암호화해서 저장합니다.
                   </p>
                </div>
                <div className="absolute top-6 md:top-8 right-6 md:right-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                   <ThreeDIcon type="safety" className="w-24 h-24 md:w-28 md:h-28" noGlow />
                </div>
                
                {/* Security Background Elements - Hidden on mobile */}
                <div className="hidden lg:block absolute inset-0 opacity-5 pointer-events-none">
                   <Lock className="absolute top-20 left-12 w-24 h-24 text-cyan-600 rotate-12 animate-[float_6s_ease-in-out_infinite] group-hover:animate-[spin_3s_linear_infinite]" />
                   <Shield className="absolute bottom-32 right-16 w-32 h-32 text-blue-600 -rotate-6 animate-[float_8s_ease-in-out_infinite_0.5s] group-hover:scale-110 transition-transform duration-700" />
                   <Server className="absolute top-1/3 right-1/4 w-20 h-20 text-slate-600 rotate-45 animate-[float_7s_ease-in-out_infinite_1s] group-hover:rotate-90 transition-transform duration-700" />
                   <Cloud className="absolute bottom-1/3 left-1/4 w-28 h-28 text-slate-500 -rotate-12 animate-[float_9s_ease-in-out_infinite_1.5s] group-hover:translate-x-4 transition-transform duration-700" />
                </div>
                
                {/* Binary/Code Pattern Background - Hidden on mobile */}
                <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-1/2 opacity-3 text-[10px] font-mono text-slate-400 leading-tight overflow-hidden pointer-events-none animate-[slideDown_20s_linear_infinite] group-hover:animate-[slideDown_10s_linear_infinite]">
                   <div className="p-4">
                      01001001 01010011 01001111<br/>
                      10101110 11010011 10101010<br/>
                      01110011 01100101 01100011<br/>
                      11001010 10110101 11010111<br/>
                      01110101 01110010 01101001<br/>
                   </div>
                </div>
                
                {/* Dashboard Mockup */}
                <div className="mt-4 lg:mt-auto relative rounded-t-xl overflow-hidden border-t border-l border-r border-blue-200 bg-white shadow-xl translate-y-4 mx-auto w-11/12 transition-all duration-700 group-hover:translate-y-0 group-hover:shadow-2xl">
                    <div className="w-full aspect-[16/10] bg-slate-50 p-4 relative">
                       {/* Sidebar */}
                       <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-[#0561A4] to-[#004080] flex flex-col items-center py-4 gap-4">
                          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 animate-[fadeInScale_0.5s_ease-out_0.1s_both]">
                             <Shield className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors duration-500" />
                          </div>
                          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 animate-[fadeInScale_0.5s_ease-out_0.2s_both]">
                             <Lock className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors duration-500" />
                          </div>
                          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 animate-[fadeInScale_0.5s_ease-out_0.3s_both]">
                             <Server className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors duration-500" />
                          </div>
                       </div>
                       {/* Header */}
                       <div className="absolute left-16 right-0 top-0 h-12 bg-white border-b border-slate-200 flex items-center px-4 animate-[slideInRight_0.6s_ease-out_0.2s_both]">
                          <div className="flex items-center gap-2">
                             <Lock className="w-4 h-4 text-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
                             <span className="text-xs text-slate-600 font-medium">암호화 활성화</span>
                          </div>
                       </div>
                       {/* Content */}
                       <div className="absolute left-16 right-0 top-12 bottom-0 p-4 overflow-hidden">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                             <div className="h-24 bg-blue-50 rounded-lg border border-blue-100 p-3 flex flex-col justify-between transition-all duration-500 group-hover:scale-105 group-hover:shadow-md animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
                                <div className="flex items-center gap-2">
                                   <Shield className="w-4 h-4 text-blue-500" />
                                   <span className="text-[10px] text-slate-600 font-medium">보안 등급</span>
                                </div>
                                <div className="text-xl font-bold text-blue-600">Level 5</div>
                             </div>
                             <div className="h-24 bg-cyan-50 rounded-lg border border-cyan-100 p-3 flex flex-col justify-between transition-all duration-500 group-hover:scale-105 group-hover:shadow-md animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
                                <div className="flex items-center gap-2">
                                   <Lock className="w-4 h-4 text-cyan-500" />
                                   <span className="text-[10px] text-slate-600 font-medium">암호화 상태</span>
                                </div>
                                <div className="text-xl font-bold text-cyan-600">AES-256</div>
                             </div>
                          </div>
                          <div className="h-full bg-white rounded-lg border border-slate-200 p-3 animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
                             <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] text-slate-500 font-medium">서버 암호화 로그</span>
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                             </div>
                             <div className="space-y-1">
                                {[1,2,3].map((i) => (
                                   <div key={i} className="flex items-center gap-2 text-[9px] text-slate-400 animate-[fadeInLeft_0.4s_ease-out_both]" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                                      <Lock className="w-3 h-3 text-green-500" />
                                      <span>데이터 암호화 완료</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                </div>
             </div>

             {/* Card 2 */}
             <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 pb-0 relative overflow-hidden h-auto lg:min-h-[450px] flex flex-col group">
                <div className="relative z-10 mb-1 md:mb-8 pr-16 md:pr-20">
                   <p className="text-xl md:text-2xl font-bold text-slate-800 leading-snug">
                      업무로 생성된 모든 증적 데이터에 대한 <br className="hidden md:block"/>
                      히스토리도 함께 관리합니다.
                   </p>
                </div>
                 <div className="absolute top-6 md:top-8 right-6 md:right-8 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                   <ThreeDIcon type="management" className="w-24 h-24 md:w-28 md:h-28" noGlow />
                </div>
                
                {/* History Background Elements - Hidden on mobile */}
                <div className="hidden lg:block absolute inset-0 opacity-5 pointer-events-none">
                   <History className="absolute top-20 left-12 w-24 h-24 text-violet-600 rotate-12 animate-[float_6s_ease-in-out_infinite] group-hover:animate-[spin_4s_linear_infinite]" />
                   <FileCheck className="absolute bottom-32 right-16 w-32 h-32 text-purple-600 -rotate-6 animate-[float_8s_ease-in-out_infinite_0.5s] group-hover:scale-110 transition-transform duration-700" />
                   <FolderUp className="absolute top-1/3 right-1/4 w-20 h-20 text-violet-500 rotate-45 animate-[float_7s_ease-in-out_infinite_1s] group-hover:translate-y-[-8px] transition-transform duration-700" />
                   <Server className="absolute bottom-1/3 left-1/4 w-28 h-28 text-slate-500 -rotate-12 animate-[float_9s_ease-in-out_infinite_1.5s] group-hover:rotate-12 transition-transform duration-700" />
                </div>
                
                {/* Version/Timeline Pattern Background - Hidden on mobile */}
                <div className="hidden lg:block absolute bottom-16 left-8 opacity-5 text-[10px] font-mono text-slate-400 leading-tight overflow-hidden pointer-events-none animate-[fadeIn_2s_ease-in-out_infinite_alternate]">
                   <div className="space-y-1">
                      <div>v2.3.1 → v2.3.2</div>
                      <div>v2.3.0 → v2.3.1</div>
                      <div>v2.2.8 → v2.3.0</div>
                      <div>v2.2.7 → v2.2.8</div>
                   </div>
                </div>
                
                {/* Dashboard Mockup */}
                 <div className="mt-4 lg:mt-auto relative rounded-t-xl overflow-hidden border-t border-l border-r border-violet-200 bg-white shadow-xl translate-y-4 mx-auto w-11/12 transition-all duration-700 group-hover:translate-y-0 group-hover:shadow-2xl">
                    <div className="w-full aspect-[16/10] bg-slate-50 p-4 relative">
                       {/* Sidebar */}
                       <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-b from-[#6B46C1] to-[#553C9A] flex flex-col items-center py-4 gap-4">
                          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 animate-[fadeInScale_0.5s_ease-out_0.1s_both]">
                             <History className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors duration-500" />
                          </div>
                          <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110 animate-[fadeInScale_0.5s_ease-out_0.2s_both]">
                             <FileCheck className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors duration-500" />
                          </div>
                       </div>
                       {/* Header */}
                       <div className="absolute left-16 right-0 top-0 h-12 bg-white border-b border-slate-200 flex items-center px-4 animate-[slideInRight_0.6s_ease-out_0.2s_both]">
                          <div className="flex items-center gap-2">
                             <History className="w-4 h-4 text-violet-500 animate-[spin_3s_linear_infinite]" />
                             <span className="text-xs text-slate-600 font-medium">변경 이력 추적 중</span>
                          </div>
                       </div>
                       {/* Content */}
                       <div className="absolute left-16 right-0 top-12 bottom-0 p-4 overflow-hidden bg-white">
                          <div className="space-y-2">
                             {[
                               { time: '10:24', action: '보고서 #1284 수정', user: '김철수', status: 'success' },
                               { time: '09:15', action: '규정 업데이트 확인', user: '이영희', status: 'success' },
                               { time: '08:42', action: '감사 문서 생성', user: '박지민', status: 'success' },
                               { time: '08:10', action: '데이터 백업 완료', user: 'System', status: 'info' },
                               { time: '07:55', action: '월간 보고서 승인', user: '최관리', status: 'success' }
                             ].map((item, i) => (
                               <div key={i} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded border border-transparent hover:border-slate-100 transition-all duration-300 animate-[fadeInLeft_0.4s_ease-out_both]" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                                  <div className="flex items-center gap-3 flex-1">
                                     <div className="text-[9px] text-slate-400 font-mono w-8">{item.time}</div>
                                     <div className={`w-1.5 h-1.5 rounded-full ${item.status === 'success' ? 'bg-violet-400' : 'bg-purple-400'} animate-[ping_2s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 0.2}s` }} />
                                     <div className="text-[10px] text-slate-600 font-medium">{item.action}</div>
                                  </div>
                                  <div className="flex gap-2 items-center">
                                     <div className={`w-2 h-2 rounded-full ${item.status === 'success' ? 'bg-green-400' : 'bg-violet-400'} transition-all duration-500 group-hover:scale-125`} />
                                     <div className="text-[9px] text-slate-400">{item.user}</div>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                </div>
             </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* ISO 27001 */}
             <div className="bg-[#2C2F36] rounded-2xl p-8 text-white h-full flex flex-col hover:bg-[#374151] transition-colors">
                <div className="flex justify-between items-start mb-6">
                   <span className="text-xl font-bold tracking-wider">ISO 27001</span>
                   <div className="w-12 h-12 flex items-center justify-center">
                     <CertifiedLogo1Pc />
                   </div>
                </div>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">국제표준 정보보호 인증으로, 정보보호 분야에서 가장 권위있는 인증</p>
                <p className="text-xs text-gray-500 mt-auto pt-4 border-t border-gray-700">(정보보호정책, 운영, 접근통제 등)</p>
             </div>

             {/* ISO 27701 */}
             <div className="bg-[#2C2F36] rounded-2xl p-8 text-white h-full flex flex-col hover:bg-[#374151] transition-colors">
                <div className="flex justify-between items-start mb-6">
                   <span className="text-xl font-bold tracking-wider">ISO 27701</span>
                   <div className="w-12 h-12 flex items-center justify-center">
                     <CertifiedLogo2Pc />
                   </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">국제표준 개인정보보호 관리체계 인증으로, 개인정보보호 분야에서 가장 권위있는 인증</p>
             </div>

             {/* AWS */}
             <div className="bg-[#2C2F36] rounded-2xl p-8 text-white h-full flex flex-col hover:bg-[#374151] transition-colors">
                <div className="flex justify-between items-start mb-6">
                   <span className="text-xl font-bold tracking-wider">AWS</span>
                   <div className="w-12 h-12 flex items-center justify-center">
                     <CertifiedLogo3Pc />
                   </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">AWS(Amazon Web Services)에서 제공하는 보안 정책 적용</p>
             </div>

             {/* PaloAlto */}
             <div className="bg-[#2C2F36] rounded-2xl p-8 text-white h-full flex flex-col hover:bg-[#374151] transition-colors">
                 <div className="flex justify-between items-start mb-6">
                   <span className="text-xl font-bold tracking-wider">PaloAlto</span>
                   <div className="w-12 h-12 flex items-center justify-center">
                     <CertifiedLogo4Pc />
                   </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">Palo Alto Networks의 보안 솔루션 적용</p>
             </div>
          </div>
       </div>
    </section>
  )
}