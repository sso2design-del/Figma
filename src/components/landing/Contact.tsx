import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001B3D] mb-4">
            도입 문의
          </h2>
          <p className="text-slate-600">
            궁금한 점이 있으신가요? 전문가가 상세하게 안내해 드립니다.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Type Selection */}
            <div className="space-y-4">
              <Label className="text-base font-bold text-[#001B3D]">신청 항목</Label>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="inquiry" />
                  <Label htmlFor="inquiry" className="cursor-pointer text-slate-700 font-normal">도입문의</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="demo" />
                  <Label htmlFor="demo" className="cursor-pointer text-slate-700 font-normal">무료 데모신청</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="material" />
                  <Label htmlFor="material" className="cursor-pointer text-slate-700 font-normal">소개자료 요청</Label>
                </div>
              </div>
            </div>

            {/* Category Selection */}
            <div className="space-y-2">
               <Label className="text-base font-bold text-[#001B3D]">분야 선택</Label>
               <Select>
                <SelectTrigger className="bg-white border-slate-300">
                  <SelectValue placeholder="관심 분야를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="integrated">ESG-컴플라이언스 통합 솔루션</SelectItem>
                  <SelectItem value="esg">ESG 솔루션</SelectItem>
                  <SelectItem value="compliance">컴플라이언스 솔루션</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Company & Name */}
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <Label htmlFor="company" className="font-bold text-[#001B3D]">회사명</Label>
                 <Input id="company" placeholder="회사명을 입력해주세요" className="bg-white border-slate-300" />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="name" className="font-bold text-[#001B3D]">이름/직급(직책)</Label>
                 <Input id="name" placeholder="홍길동 / 팀장" className="bg-white border-slate-300" />
               </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <Label htmlFor="phone" className="font-bold text-[#001B3D]">전화번호</Label>
                 <Input id="phone" placeholder="010-0000-0000" className="bg-white border-slate-300" />
               </div>
               <div className="space-y-2">
                 <Label htmlFor="email" className="font-bold text-[#001B3D]">이메일</Label>
                 <Input id="email" type="email" placeholder="example@company.com" className="bg-white border-slate-300" />
               </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="font-bold text-[#001B3D]">문의 내용</Label>
              <Textarea id="message" placeholder="문의하실 내용을 자유롭게 적어주세요." className="min-h-[150px] bg-white border-slate-300" />
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start space-x-2 pt-2">
              <Checkbox id="privacy" className="mt-0.5" />
              <Label htmlFor="privacy" className="cursor-pointer text-slate-700 font-normal leading-relaxed">
                개인정보 수집 및 이용에 동의합니다. (
                <a 
                  href="/privacy-policy" 
                  className="text-[#FF5812] hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    // 실제로는 개인정보 처리방침 페이지로 이동
                    window.open('/privacy-policy', '_blank');
                  }}
                >
                  보기
                </a>
                )
              </Label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
               <Button className="w-full bg-[#001B3D] hover:bg-[#001B3D]/90 text-white h-14 text-lg font-bold rounded-xl">
                 문의하기
               </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}