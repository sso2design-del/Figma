import { IconType, ThreeDIcon } from "./ThreeDIcon";

interface SolutionImageProps {
  type: IconType;
  title: string;
  desc: string;
}

export function SolutionImage({ type, title, desc }: SolutionImageProps) {
  // Define image URL based on solution type
  const getImageUrl = () => {
    switch (type) {
      case "management":
        return "https://images.unsplash.com/photo-1513759338966-5de23c844b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBFU0clMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2Nzg0MDc0M3ww&ixlib=rb-4.1.0&q=80&w=1080";
      case "disclosure":
        return "https://images.unsplash.com/photo-1632152053560-2ff69f7981f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRpc2Nsb3N1cmUlMjByZXBvcnRpbmd8ZW58MXx8fHwxNzY3ODQwNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080";
      case "data":
        return "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2Nzc5NTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080";
      case "carbon":
        return "https://images.unsplash.com/photo-1648614154478-1d1d123d0105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzdXN0YWluYWJpbGl0eXxlbnwxfHx8fDE3Njc4NDg0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
      case "supply":
        return "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3Njc3NjgxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080";
      case "compliance":
        return "https://images.unsplash.com/photo-1764795849885-e226e3cabe87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbXBsaWFuY2UlMjBidXNpbmVzc3xlbnwxfHx8fDE3Njc4NDI0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
      case "safety":
        return "https://images.unsplash.com/photo-1738162837329-2f2a2cdebb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBzYWZldHklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2Nzg0MjQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080";
      default:
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2Nzc2MDA4MHww&ixlib=rb-4.1.0&q=80&w=1080";
    }
  };

  return (
    <div className="relative h-96 overflow-hidden rounded-t-3xl">
      {/* Background Image */}
      <img
        src={getImageUrl()}
        alt={title}
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Icon overlay */}
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
          <ThreeDIcon type={type} />
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="inline-block bg-[#FF5812] text-white text-xs font-bold px-4 py-2 rounded-full mb-3">
          상세 정보
        </div>
        <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          {title}
        </h2>
        <p className="text-white/90 text-lg drop-shadow-md max-w-2xl">
          {desc}
        </p>
      </div>
    </div>
  );
}