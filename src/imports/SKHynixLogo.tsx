import skHynixLogo from "figma:asset/f3460e794ebbd4c6104f0d7d9941392955a14ad1.png";

export default function SKHynixLogo() {
  return (
    <div className="relative size-full flex items-center justify-center">
      <img 
        src={skHynixLogo} 
        alt="SK hynix" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
