import LogoSmall from "../../imports/LogoSmall";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const familySites = [
    { name: "HUMAX IT Legal Tech", url: "https://www.humaxit.com/" },
    { name: "Law.ai 기업용 통합 법무관리 솔루션", url: "https://www.law365ai.com/" },
    { name: "LawShot 로펌용 법률업무관리 솔루션", url: "https://home.lawshot.co.kr/" }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSiteClick = (url: string) => {
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <footer className="bg-slate-900 py-20 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 w-[126px] h-[26px] relative" style={{ "--fill-0": "#FFFFFF" } as React.CSSProperties}>
                <LogoSmall />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              기업의 지속 가능한 성장을 위한 최고의 파트너. <br />
              CompliLaw와 함께 안전하고 투명한 경영을 시작하세요.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">서비스</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#esg" className="hover:text-[#FF5812] transition-colors">ESG</a></li>
              <li><a href="#compliance" className="hover:text-[#FF5812] transition-colors">컴플라이언스</a></li>
              <li><a href="#insight" className="hover:text-[#FF5812] transition-colors">C.Insight</a></li>
              <li><a href="#pricing" className="hover:text-[#FF5812] transition-colors">이용요금</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">고객지원</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#contact" className="hover:text-[#FF5812] transition-colors">문의하기</a></li>
              <li><a href="#request" className="hover:text-[#FF5812] transition-colors">소개자료 요청</a></li>
              <li><a href="#" className="hover:text-[#FF5812] transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-[#FF5812] transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-slate-500">
            <div>© 2026 CompliLaw Inc. All rights reserved.</div>
            <div className="hidden md:block w-px h-4 bg-slate-700"></div>
            <div className="flex gap-6">
              <span className="hover:text-slate-400 transition-colors cursor-pointer">Blog</span>
              <span className="hover:text-slate-400 transition-colors cursor-pointer">LinkedIn</span>
              <span className="hover:text-slate-400 transition-colors cursor-pointer">Facebook</span>
            </div>
          </div>
          
          {/* Family Site Selector */}
          <div className="relative" ref={dropdownRef}>
            <div
              className="appearance-none bg-slate-800 text-slate-300 text-sm px-4 py-2 pr-10 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer min-w-[160px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              패밀리사이트
            </div>
            <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            {isOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-48 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden">
                {familySites.map((site, index) => (
                  <div
                    key={site.url}
                    className={`px-4 py-3 text-sm text-slate-300 hover:bg-slate-700 hover:text-white cursor-pointer transition-colors ${index !== familySites.length - 1 ? 'border-b border-slate-700' : ''}`}
                    onClick={() => handleSiteClick(site.url)}
                  >
                    {site.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}