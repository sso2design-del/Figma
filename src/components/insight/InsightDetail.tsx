import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { insightPosts, categoryStyles } from "../../data/insightData";
import { toast } from "sonner@2.0.3";

interface InsightDetailProps {
  postId: number;
  onBack: () => void;
}

export function InsightDetail({ postId, onBack }: InsightDetailProps) {
  // postId로 해당 포스트 찾기
  const postData = insightPosts.find(post => post.id === postId);

  // 포스트를 찾지 못한 경우
  if (!postData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#001B3D] mb-4">포스트를 찾을 수 없습니다</h2>
          <Button onClick={onBack} className="bg-[#0561A4] text-white">
            목록으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  // content가 없는 경우 기본 메시지 표시
  const hasFullContent = postData.content && postData.content.sections && postData.content.sections.length > 0;

  const categoryStyle = categoryStyles[postData.category] || categoryStyles["전체"];

  // Share 버튼 핸들러
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("링크가 클립보드에 복사되었습니다");
    } catch (err) {
      toast.error("링크 복사에 실패했습니다");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#EDF6FF] text-[#0561A4] px-4 py-2 rounded-full text-sm font-bold mb-6">
              <span>{categoryStyle.emoji}</span>
              <span>{postData.category}</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#001B3D] mb-6 leading-tight"
          >
            {postData.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 leading-relaxed"
          >
            {postData.excerpt}
          </motion.p>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={postData.author.avatar}
                alt={postData.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-[#001B3D]">{postData.author.name}</div>
                <div className="text-sm text-gray-500">{postData.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {postData.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {postData.readTime} 읽기
              </div>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors" 
                onClick={handleShare}
                aria-label="링크 공유"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="container mx-auto px-6 max-w-5xl mb-16"
        >
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <img
              src={postData.image}
              alt={postData.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Article Content */}
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {hasFullContent ? (
                <>
                  {/* Introduction */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mb-12"
                  >
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {postData.content!.intro}
                    </p>
                  </motion.div>

                  {/* Sections */}
                  {postData.content!.sections.map((section, index) => (
                    <motion.section
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="mb-12"
                    >
                      <h2 className="text-2xl font-bold text-[#001B3D] mb-4">
                        {section.title}
                      </h2>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </motion.section>
                  ))}

                  {/* Quote Box */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="my-12 border-l-4 border-[#0561A4] bg-[#EDF6FF] p-8 rounded-r-xl"
                  >
                    <p className="text-lg font-medium text-[#001B3D] italic mb-4">
                      "{postData.content!.quote}"
                    </p>
                    <p className="text-sm text-gray-600 font-bold">
                      — {postData.content!.quoteAuthor}
                    </p>
                  </motion.div>

                  {/* Conclusion */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="mb-12"
                  >
                    <h2 className="text-2xl font-bold text-[#001B3D] mb-4">
                      마치며
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {postData.content!.conclusion}
                    </p>
                  </motion.div>

                  {/* Related Resources */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
                  >
                    <h3 className="text-xl font-bold text-[#001B3D] mb-4">
                      관련 리소스
                    </h3>
                    <ul className="space-y-3">
                      {postData.content!.relatedResources.map((resource, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="text-[#0561A4] hover:text-[#044A85] font-medium flex items-center gap-2 transition-colors"
                          >
                            <span>→</span>
                            <span>{resource}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-12"
                >
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {postData.excerpt}
                  </p>
                  <div className="bg-blue-50 border-l-4 border-[#0561A4] p-6 rounded-r-xl">
                    <p className="text-gray-700">
                      이 콘텐츠의 전체 내용은 곧 공개될 예정입니다. CompliLaw의 다양한 인사이트를 통해 ESG와 컴플라이언스 관련 최신 정보를 확인하세요.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >
                <h3 className="font-bold text-[#001B3D] mb-4">이 글을 쓴 사람</h3>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={postData.author.avatar}
                    alt={postData.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#001B3D]">{postData.author.name}</div>
                    <div className="text-sm text-gray-600">{postData.author.role}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  {postData.category} 분야에서 풍부한 경험을 가진 전문가입니다. 
                  다수의 기업들의 전략 수립과 이행을 지원했습니다.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{postData.readTime} 읽기</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{postData.date} 발행</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-6 bg-gradient-to-br from-[#001B3D] to-[#0561A4] rounded-2xl p-6 text-white"
              >
                <h3 className="font-bold mb-3">ESG 컴플라이언스, 어렵지 않습니다</h3>
                <p className="text-sm text-blue-100 mb-4">
                  CompliLaw와 함께 체계적으로 준비하세요
                </p>
                <Button className="w-full bg-[#FF5812] hover:bg-[#E04A0A] text-white rounded-full font-bold">
                  무료 상담 신청
                </Button>
              </motion.div>
            </aside>
          </div>

          {/* Back to List Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 text-[#001B3D] hover:text-[#0561A4] transition-colors font-medium px-6 py-3 rounded-full border-2 border-gray-300 hover:border-[#0561A4] bg-white"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>목록으로 돌아가기</span>
            </button>
          </motion.div>
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#EDF6FF] border-t border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left - Text Section */}
                <div className="flex flex-col justify-center p-10 md:p-14 bg-gray-50">
                  <div className="text-sm font-bold text-[#0561A4] mb-4 tracking-wider uppercase">
                    뉴스레터
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-[#001B3D]">
                    CompliLaw의<br />
                    최신 소식을 받아보세요
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed">
                    ESG와 컴플라이언스의 최신 인사이트와 업데이트를 이메일로 전해드립니다.
                  </p>
                </div>

                {/* Right - Form Section */}
                <div className="bg-white flex flex-col justify-center p-10 md:p-14 border-l border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-700 text-sm font-medium mb-2 block">
                        이름 <span className="text-[#0561A4]">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full px-5 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#0561A4] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 text-sm font-medium mb-2 block">
                        이메일 주소 <span className="text-[#0561A4]">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full px-5 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#0561A4] focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700 text-sm font-medium mb-2 block">
                        받고 싶은 소식 <span className="text-[#0561A4]">*</span>
                      </label>
                      <select
                        className="w-full px-5 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 text-gray-900 text-sm focus:outline-none focus:border-[#0561A4] focus:bg-white transition-colors"
                      >
                        <option value="">선택해주세요</option>
                        <option value="ESG">ESG</option>
                        <option value="컴플라이언스">컴플라이언스</option>
                        <option value="트렌드">트렌드</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>
                    <Button className="w-full bg-[#0561A4] hover:bg-[#044A85] text-white rounded-lg font-bold h-12 mt-2 transition-colors">
                      구독하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}