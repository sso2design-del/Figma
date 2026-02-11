import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, Calendar, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { insightPosts, categoryStyles } from "../../data/insightData";

interface InsightListProps {
  onViewInsight: (postId: number) => void;
}

const categories = ["전체", "ESG", "컴플라이언스", "트렌드", "탄소관리", "ISO 인증", "공급망 관리"];

export function InsightList({ onViewInsight }: InsightListProps) {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const featuredPost = insightPosts.find(post => post.featured);
  const regularPosts = insightPosts.filter(post => !post.featured);

  const filteredPosts = activeCategory === "전체" 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory);

  // 카테고리 뱃지 스타일 가져오기 함수
  const getCategoryBadgeStyle = (category: string) => {
    return categoryStyles[category] || categoryStyles["전체"];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[#EDF6FF] rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#0561A4] fill-[#0561A4]" />
              <span className="text-sm font-medium text-[#001B3D]">CompliLaw Insight</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#001B3D] mb-6 leading-tight">
              ESG와 컴플라이언스의<br />
              최신 인사이트
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              업계 전문가들이 전하는 실무 가이드와 최신 동향을 만나보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl overflow-hidden transition-all duration-500 group cursor-pointer"
              onClick={() => onViewInsight(featuredPost.id)}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-2 bg-[#0561A4] text-white px-4 py-2 rounded-full text-sm font-bold">
                      <TrendingUp className="w-4 h-4" />
                      Featured
                    </div>
                  </div>
                </div>
                <div className="px-[32px] py-[32px] bg-[#D4EBFF] flex flex-col justify-center min-h-[400px]">
                  <div className={`inline-flex items-center gap-1.5 ${getCategoryBadgeStyle(featuredPost.category).bg} ${getCategoryBadgeStyle(featuredPost.category).text} px-3 py-1 rounded-full text-xs font-bold mb-2.5 w-fit`}>
                    <span className="text-sm">{getCategoryBadgeStyle(featuredPost.category).emoji}</span>
                    <span>{featuredPost.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#001B3D] mb-2.5 leading-tight group-hover:text-[#0561A4] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-base mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} 소요
                    </div>
                  </div>
                  <Button className="bg-[#0561A4] hover:bg-[#044A85] text-white rounded-full !px-10 h-12 font-bold group/btn w-fit" onClick={(e) => { e.stopPropagation(); onViewInsight(featuredPost.id); }}>
                    자세히 보기 
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
            {categories.map((category) => {
              const style = categoryStyles[category];
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 flex items-center gap-2 ${
                    isActive
                      ? `${style.activeBg} ${style.activeText}`
                      : `${style.bg} ${style.text}`
                  }`}
                >
                  <span className="text-base">{style.emoji}</span>
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => onViewInsight(post.id)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-300 hover:border-[#0561A4] transition-all duration-500 group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-5 left-5">
                    <div className={`${post.badgeColor} backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg`}>
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#001B3D] mb-3 leading-tight group-hover:text-[#0561A4] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <motion.div
                      animate={{ x: hoveredCard === post.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className={`w-4 h-4 transition-colors ${hoveredCard === post.id ? 'text-[#0561A4]' : 'text-gray-400'}`} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              className="border-2 border-[#001B3D] text-[#001B3D] hover:bg-[#001B3D] hover:text-white rounded-full px-8 h-12 font-bold"
            >
              더 많은 인사이트 보기
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-100 border-t border-gray-200">
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