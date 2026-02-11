export interface InsightPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
  badgeColor?: string;
  content?: {
    intro: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
    quote: string;
    quoteAuthor: string;
    conclusion: string;
    relatedResources: string[];
  };
}

export const insightPosts: InsightPost[] = [
  {
    id: 1,
    title: "2026년 ESG 공시 의무화, 기업이 준비해야 할 3가지",
    excerpt: "새로운 ESG 공시 규정이 시행됨에 따라 기업들은 체계적인 데이터 관리와 투명한 보고 체계 구축이 필수입니다.",
    category: "ESG",
    image: "https://images.unsplash.com/photo-1638699532230-1c7676c2a708?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdXN0YWluYWJpbGl0eSUyMEVTR3xlbnwxfHx8fDE3NzAzNjUzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2026.02.01",
    readTime: "5분",
    author: {
      name: "김준수 컨설턴트",
      role: "ESG 공시 전문가",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-emerald-500/90",
    featured: true,
    content: {
      intro: "올해부터 본격 시행되는 ESG 공시 의무화에 대응하기 위한 체크리스트와 실전 가이드를 제공합니다. 기업들은 이제 환경, 사회, 지배구조에 대한 투명한 정보 공개가 필수가 되었으며, 이에 따른 체계적인 준비가 필요합니다.",
      sections: [
        {
          title: "ESG 공시 의무화의 배경과 필요성",
          content: "ESG(Environmental, Social, and Governance) 공시 의무화는 기업의 지속가능성과 투명성을 강화하기 위한 글로벌 추세입니다. 투자자들은 재무정보뿐만 아니라 기업의 ESG 성과를 중요한 투자 판단 기준으로 삼고 있으며, 이에 따라 각국 정부와 규제 기관들은 ESG 공시를 의무화하는 방향으로 나아가고 있습니다.\n\n특히 EU의 CSRD(Corporate Sustainability Reporting Directive)와 미국 SEC의 기후 공시 규정 등이 도입되면서, 글로벌 기업들은 물론 이들과 거래하는 국내 기업들도 ESG 공시에 적극 대응해야 하는 상황입니다."
        },
        {
          title: "주요 공시 프레임워크 이해하기",
          content: "ESG 공시를 위해서는 다양한 국제 표준과 프레임워크를 이해해야 합니다. 대표적으로 GRI(Global Reporting Initiative), SASB(Sustainability Accounting Standards Board), TCFD(Task Force on Climate-related Financial Disclosures) 등이 있으며, 최근에는 ISSB(International Sustainability Standards Board)가 통합 기준을 제시하고 있습니다.\n\n각 프레임워크는 고유한 특징과 요구사항을 가지고 있으므로, 기업은 자사의 산업 특성과 이해관계자의 요구를 고려하여 적절한 프레임워크를 선택하거나 조합해야 합니다."
        },
        {
          title: "데이터 수집 및 관리 체계 구축",
          content: "효과적인 ESG 공시를 위해서는 체계적인 데이터 수집과 관리 시스템이 필수입니다. 환경 데이터(에너지 사용량, 온실가스 배출량, 폐기물 발생량 등), 사회 데이터(임직원 다양성, 산업재해율, 지역사회 기여 등), 지배구조 데이터(이사회 구성, 윤리경영 현황 등)를 정기적으로 수집하고 검증하는 프로세스를 구축해야 합니다.\n\nCompliLaw와 같은 전문 플랫폼을 활용하면 데이터 수집부터 분석, 보고서 작성까지 통합 관리가 가능하여 업무 효율성을 크게 높일 수 있습니다."
        }
      ],
      quote: "ESG 공시는 기업의 투명성을 높이고 이해관계자의 신뢰를 구축하는 핵심 도구입니다. 체계적인 준비와 진정성 있는 실행이 성공의 열쇠입니다.",
      quoteAuthor: "김준수 컨설턴트, CompliLaw ESG 팀",
      conclusion: "ESG 공시 의무화는 도전이자 기회입니다. 단순히 규제 준수를 넘어서, 이를 기업의 지속가능경영 전략을 재점검하고 강화하는 계기로 삼아야 합니다. CompliLaw는 여러분의 ESG 공시 여정을 처음부터 끝까지 함께합니다.",
      relatedResources: [
        "ESG 공시 체크리스트 다운로드",
        "ISSB 기준 상세 가이드",
        "ESG 데이터 관리 솔루션 소개"
      ]
    }
  },
  {
    id: 2,
    title: "AI 기반 컴플라이언스 관리로 리스크 95% 감소",
    excerpt: "최신 인공지능 기술을 활용한 실시간 규정 모니터링으로 기업의 법적 리스크를 사전에 예방할 수 있습니다.",
    category: "컴플라이언스",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhdGF8ZW58MXx8fHwxNzcwMjg0NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2026.01.28",
    readTime: "4분",
    author: {
      name: "이승희 CTO",
      role: "기술 혁신 담당",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-[#001B3D]/90",
    content: {
      intro: "인공지능을 활용한 실시간 리스크 모니터링 시스템 도입 사례와 성과를 공유합니다. 기술의 발전으로 기업들은 더욱 효율적으로 컴플라이언스를 관리할 수 있게 되었습니다.",
      sections: [
        {
          title: "AI 기반 컴플라이언스의 필요성",
          content: "현대 기업들은 복잡하고 빠르게 변화하는 규제 환경에 대응해야 합니다. 전통적인 수동 방식으로는 모든 규정 변화를 실시간으로 추적하고 대응하기 어렵습니다. AI 기술은 이러한 문제를 해결하는 혁신적인 솔루션입니다."
        },
        {
          title: "실시간 규정 모니터링 시스템",
          content: "AI는 전 세계의 규제 변화를 24시간 모니터링하고, 기업에 영향을 미칠 수 있는 변화를 즉시 감지합니다. 자연어 처리(NLP) 기술을 통해 법률 문서를 분석하고, 기업의 업무 프로세스와 연관성을 자동으로 파악합니다."
        },
        {
          title: "예측 분석과 리스크 평가",
          content: "머신러닝 알고리즘은 과거 데이터를 학습하여 잠재적 리스크를 예측합니다. 이를 통해 기업은 문제가 발생하기 전에 선제적으로 대응할 수 있습니다."
        }
      ],
      quote: "AI는 단순히 업무를 자동화하는 것을 넘어, 기업이 리스크를 예측하고 전략적으로 대응할 수 있게 합니다.",
      quoteAuthor: "이승희 CTO, CompliLaw",
      conclusion: "AI 기반 컴플라이언스 관리는 더 이상 선택이 아닌 필수입니다. CompliLaw의 AI 솔루션으로 귀사의 컴플라이언스 효율을 획기적으로 향상시키세요.",
      relatedResources: [
        "AI 컴플라이언스 솔루션 데모 신청",
        "리스크 평가 자동화 가이드",
        "고객 성공 사례집"
      ]
    }
  },
  {
    id: 3,
    title: "글로벌 기업의 지속가능경영 전략 사례 분석",
    excerpt: "세계 선도 기업들의 ESG 경영 사례를 통해 배우는 효과적인 지속가능경영 전략과 실행 방안을 소개합니다.",
    category: "트렌드",
    image: "https://images.unsplash.com/photo-1585861782057-86b3a48b87ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbXBsaWFuY2UlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzcwMzY1MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "2026.01.25",
    readTime: "6분",
    author: {
      name: "최영철 전문가",
      role: "ESG 컨설팅 리드",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-[#FF5812]/90",
    content: {
      intro: "글로벌 리딩 기업들이 실천하고 있는 지속가능경영 전략을 분석하고, 이를 통해 한국 기업들이 배울 수 있는 인사이트를 제공합니다.",
      sections: [
        {
          title: "지속가능경영의 글로벌 트렌드",
          content: "세계적인 기업들은 ESG를 단순한 CSR 활동이 아닌 핵심 경영 전략으로 통합하고 있습니다. 이들은 지속가능성을 비즈니스 모델의 중심에 두고, 장기적인 가치 창출을 추구합니다."
        },
        {
          title: "선도 기업 사례: Apple의 탄소 중립 전략",
          content: "Apple은 2030년까지 전체 공급망과 제품 생애주기에서 탄소 중립을 달성하겠다는 목표를 세웠습니다. 재생 에너지 사용 확대, 재활용 소재 활용, 제품 설계 혁신 등 다각도의 접근을 통해 이 목표를 실현하고 있습니다."
        },
        {
          title: "한국 기업을 위한 시사점",
          content: "글로벌 선도 기업들의 사례에서 배울 수 있는 핵심은 최고 경영진의 강력한 의지, 구체적이고 측정 가능한 목표 설정, 그리고 투명한 공시입니다. 이러한 요소들이 결합될 때 진정한 지속가능경영이 가능합니다."
        }
      ],
      quote: "지속가능경영은 비용이 아닌 투자입니다. 장기적 관점에서 기업 가치를 높이고 경쟁력을 강화하는 핵심 전략입니다.",
      quoteAuthor: "최영철 전문가, CompliLaw ESG 팀",
      conclusion: "글로벌 기업들의 모범 사례를 벤치마킹하고, 자사의 상황에 맞게 적용하는 것이 중요합니다. CompliLaw는 여러분의 지속가능경영 여정에 최적화된 솔루션을 제공합니다.",
      relatedResources: [
        "글로벌 ESG 트렌드 리포트",
        "지속가능경영 로드맵 템플릿",
        "ESG 전략 수립 가이드"
      ]
    }
  },
  {
    id: 4,
    title: "중대재해처벌법 개정안 주요 변경사항 총정리",
    excerpt: "최근 발표된 중대재해처벌법 개정안의 핵심 내용과 기업의 대응 방안을 살펴봅니다.",
    category: "컴플라이언스",
    image: "https://images.unsplash.com/photo-1582489852031-9a1ad48ed893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "2026.01.23",
    readTime: "7분",
    author: {
      name: "박민지 변호사",
      role: "법무 자문 전문가",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-[#001B3D]/90"
  },
  {
    id: 5,
    title: "탄소배출량 관리의 새로운 패러다임, Scope 3 측정 가이드",
    excerpt: "공급망 전체의 탄소발자국을 정확하게 측정하고 관리하는 방법을 단계별로 안내합니다.",
    category: "탄소관리",
    image: "https://images.unsplash.com/photo-1641941672934-9e33a79ec482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "2026.01.20",
    readTime: "8분",
    author: {
      name: "김환경 전문가",
      role: "탄소중립 컨설턴트",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-emerald-500/90"
  },
  {
    id: 6,
    title: "ISO 27001 인증 준비부터 취득까지, 실전 로드맵",
    excerpt: "정보보호 관리체계 인증을 위한 단계별 준비 과정과 체크포인트를 상세히 설명합니다.",
    category: "ISO 인증",
    image: "https://images.unsplash.com/photo-1585861782057-86b3a48b87ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "2026.01.18",
    readTime: "10분",
    author: {
      name: "정수민 심사원",
      role: "ISO 인증 전문가",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-[#FF5812]/90"
  },
  {
    id: 7,
    title: "글로벌 공급망 ESG 리스크 진단 체크리스트",
    excerpt: "협력사의 ESG 리스크를 효과적으로 진단하고 관리하기 위한 실무 체크리스트를 제공합니다.",
    category: "공급망 관리",
    image: "https://images.unsplash.com/photo-1769739576456-0aefcff3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "2026.01.15",
    readTime: "6분",
    author: {
      name: "강민호 컨설턴트",
      role: "공급망 관리 전문가",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-[#0561A4]/90"
  },
  {
    id: 8,
    title: "GRC 플랫폼 도입으로 리스크 관리 비용 40% 절감",
    excerpt: "통합 거버넌스·리스크·컴플라이언스 시스템 도입 사례와 ROI 분석을 공유합니다.",
    category: "사례 연구",
    image: "https://images.unsplash.com/photo-1710797213431-c89129979ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "2026.01.12",
    readTime: "9분",
    author: {
      name: "윤서진 PM",
      role: "프로젝트 매니저",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-[#FF5812]/90"
  },
  {
    id: 9,
    title: "2026 산업안전보건법 주요 개정사항과 대응 전략",
    excerpt: "올해 개정된 산업안전보건법의 핵심 내용과 기업의 실무 대응 방안을 정리했습니다.",
    category: "법규 업데이트",
    image: "https://images.unsplash.com/photo-1582489852031-9a1ad48ed893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "2026.01.10",
    readTime: "7분",
    author: {
      name: "홍길동 노무사",
      role: "노무 법률 전문가",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
    },
    badgeColor: "bg-[#001B3D]/90"
  }
];

// 카테고리별 스타일 정의
export const categoryStyles: { [key: string]: { emoji: string; bg: string; text: string; activeBg: string; activeText: string } } = {
  "전체": { 
    emoji: "🔍", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#001B3D]", 
    activeText: "text-white" 
  },
  "ESG": { 
    emoji: "📊", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#0561A4]", 
    activeText: "text-white" 
  },
  "컴플라이언스": { 
    emoji: "⚖️", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#001B3D]", 
    activeText: "text-white" 
  },
  "트렌드": { 
    emoji: "💡", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#FF5812]", 
    activeText: "text-white" 
  },
  "기술 동향": { 
    emoji: "💡", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#FF5812]", 
    activeText: "text-white" 
  },
  "탄소관리": { 
    emoji: "🌱", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#0A7E5A]", 
    activeText: "text-white" 
  },
  "ISO 인증": { 
    emoji: "🏆", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#E0480F]", 
    activeText: "text-white" 
  },
  "공급망 관리": { 
    emoji: "🔗", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#0561A4]", 
    activeText: "text-white" 
  },
  "사례 연구": { 
    emoji: "📈", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#FF5812]", 
    activeText: "text-white" 
  },
  "법규 업데이트": { 
    emoji: "📋", 
    bg: "bg-gray-100", 
    text: "text-gray-700", 
    activeBg: "bg-[#001B3D]", 
    activeText: "text-white" 
  }
};
