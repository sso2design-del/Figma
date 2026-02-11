import { Button } from "../ui/button";
import { Download } from "lucide-react";
import backgroundImage from "figma:asset/81e7cdc5c8f47b871afbd2679a5c2ee465fd2d7e.png";

export function BrochureDownload() {
  return (
    <section id="request" className="py-24 bg-[#001B3D] relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-top opacity-10 scale-110" style={{ backgroundImage: `url(${backgroundImage})` }} />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          2026년 ESG 공시 의무화,<br />
          컴플라이로에서 지속가능경영을 시작하세요
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
          상세한 기능 명세와 도입 효과가 담긴 브로슈어를 확인해보세요.
          <br className="hidden md:block" />
          ESG 경영과 컴플라이언스 관리를 위한 최적의 솔루션을 제안합니다.
        </p>
        <Button className="bg-[#FF5812] hover:bg-[#E0480F] text-white text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer !px-8 !py-6">
          <Download className="mr-2 h-5 w-5" />
          브로슈어 다운로드
        </Button>
      </div>
    </section>
  );
}