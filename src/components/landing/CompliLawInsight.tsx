import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { insightPosts } from "../../data/insightData";

export function CompliLawInsight() {
  // 메인페이지에는 최신 3개만 표시
  const latestInsights = insightPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[rgba(5,97,164,0.1)] text-[#0561A4] px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 fill-[#0561A4]" />
            <span className="text-sm font-medium">Insight</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#001B3D] mb-4 font-bold">
            CompliLaw Insight
          </h2>
          <p className="text-slate-600 text-lg">
            최신 ESG 및 컴플라이언스 트렌드를 확인하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestInsights.map((insight, index) => (
            <motion.article
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link to={`/insight/${insight.id}`}>
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-300 group-hover:border-slate-400 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                    <ImageWithFallback
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Dim Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-5 left-5 ${insight.badgeColor} backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg`}>
                      {insight.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    {/* Date & Read Time */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                      <span className="font-medium">{insight.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#001B3D] mb-3 leading-tight group-hover:text-[#0561A4] transition-colors duration-300 line-clamp-2 min-h-[56px]">
                      {insight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed line-clamp-2 mb-5 text-[15px]">
                      {insight.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-[#001B3D] group-hover:text-[#0561A4] transition-colors duration-300 font-medium">
                      <span className="text-sm">자세히 보기</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}