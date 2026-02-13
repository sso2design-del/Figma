import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { Menu, X, Building2, FileText, Network, Leaf, Package, ShieldCheck, AlertTriangle, Award, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import LogoSmall from "../../imports/LogoSmall";
import Component02ElementsLogo from "../../imports/02ElementsLogo";

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const esgSubMenu = [
    { name: "ESG 경영", icon: Building2, description: "통합적 ESG 경영 전략 수립" },
    { name: "ESG 공시", icon: FileText, description: "글로벌 공시 기준 대응" },
    { name: "공급망 진단", icon: Network, description: "협력사 ESG 리스크 관리" },
    { name: "탄소배출량 관리", icon: Leaf, description: "Scope 1·2·3 배출량 측정" },
    { name: "PCF 관리", icon: Package, description: "제품 탄소발자국 산정" },
  ];

  const complianceSubMenu = [
    { name: "GRC", icon: ShieldCheck, description: "통합 거버넌스·리스크·컴플라이언스" },
    { name: "중대재해예방", icon: AlertTriangle, description: "중대재해처벌법 대응" },
    { name: "ISO 인증관리", icon: Award, description: "ISO 27001·27701 인증 지원" },
  ];

  const navLinks = [
    { name: "ESG", href: "/esg", hasDropdown: true, subMenu: esgSubMenu, isRoute: true },
    { name: "컴플라이언스", href: "/#compliance", hasDropdown: true, subMenu: complianceSubMenu },
    { name: "이용요금", href: "/#pricing" },
    { name: "문의하기", href: "/#contact", hidden: true },
    { name: "소개자료 요청", href: "/#request", hidden: true },
    { name: "C.Insight", href: "/insight", isRoute: true },
  ];

  const isHashLink = (href: string) => href.startsWith("/#");
  const toHomeHash = (href: string) => ({
    pathname: "/",
    hash: href.slice(1),
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? location.pathname === "/insight" || location.pathname === "/insight-detail" || location.pathname === "/esg"
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-4"
            : "bg-[#001B3D]/80 backdrop-blur-md border-b border-white/10 py-4"
          : location.pathname === "/insight" || location.pathname === "/insight-detail" || location.pathname === "/esg"
          ? "bg-white/80 backdrop-blur-sm py-6"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="w-[126px] h-[26px] relative scale-125 origin-left">
          {(location.pathname.startsWith("/insight") || location.pathname === "/esg") ? <Component02ElementsLogo /> : <LogoSmall />}
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12 px-[-86px] py-[0px]">
          {navLinks.filter(link => !link.hidden).map((link) => (
            <div 
              key={link.name} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                    location.pathname.startsWith("/insight") || location.pathname === "/esg"
                      ? "text-gray-700 hover:text-[#001B3D]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
              ) : isHashLink(link.href) ? (
                <Link
                  to={toHomeHash(link.href)}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                    location.pathname.startsWith("/insight") || location.pathname === "/esg"
                      ? "text-gray-700 hover:text-[#001B3D]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-pointer ${
                    location.pathname.startsWith("/insight") || location.pathname === "/esg"
                      ? "text-gray-700 hover:text-[#001B3D]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </a>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && link.subMenu && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[280px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-3">
                        {link.subMenu.map((item, index) => {
                          const Icon = item.icon;
                          const menuItemClassName = "flex items-start gap-3 p-3 rounded-xl hover:bg-[#F3F6F9] transition-colors group cursor-pointer";
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {link.isRoute ? (
                                <Link to={link.href} className={menuItemClassName}>
                                  <div className="mt-0.5 w-10 h-10 rounded-lg bg-[#F3F6F9] group-hover:bg-[#0561A4] flex items-center justify-center transition-colors flex-shrink-0">
                                    <Icon className="w-5 h-5 text-[#0561A4] group-hover:text-white transition-colors" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-bold text-[#001B3D] mb-0.5">{item.name}</div>
                                    <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
                                  </div>
                                </Link>
                              ) : isHashLink(link.href) ? (
                                <Link to={toHomeHash(link.href)} className={menuItemClassName}>
                                  <div className="mt-0.5 w-10 h-10 rounded-lg bg-[#F3F6F9] group-hover:bg-[#0561A4] flex items-center justify-center transition-colors flex-shrink-0">
                                    <Icon className="w-5 h-5 text-[#0561A4] group-hover:text-white transition-colors" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-bold text-[#001B3D] mb-0.5">{item.name}</div>
                                    <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
                                  </div>
                                </Link>
                              ) : (
                                <a href={link.href} className={menuItemClassName}>
                                  <div className="mt-0.5 w-10 h-10 rounded-lg bg-[#F3F6F9] group-hover:bg-[#0561A4] flex items-center justify-center transition-colors flex-shrink-0">
                                    <Icon className="w-5 h-5 text-[#0561A4] group-hover:text-white transition-colors" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-bold text-[#001B3D] mb-0.5">{item.name}</div>
                                    <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
                                  </div>
                                </a>
                              )}
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="bg-[#FF5812] hover:bg-[#E0480F] text-white rounded-full px-6 font-bold transition-transform hover:scale-105 active:scale-95 border-none"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            도입 문의
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden ${(location.pathname === "/insight" || location.pathname === "/insight-detail" || location.pathname === "/esg") ? "text-gray-700" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#001B3D] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.filter(link => !link.hidden).map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/80 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : isHashLink(link.href) ? (
                  <Link
                    key={link.name}
                    to={toHomeHash(link.href)}
                    className="text-white/80 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/80 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Button 
                className="bg-[#FF5812] hover:bg-[#E0480F] text-white w-full rounded-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                도입 문의
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
