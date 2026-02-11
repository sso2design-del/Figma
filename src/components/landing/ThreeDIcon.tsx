import { motion } from "motion/react";

export type IconType = 
  | "management" 
  | "disclosure" 
  | "report" 
  | "data" 
  | "carbon" 
  | "supply" 
  | "compliance" 
  | "safety"
  | "plan"
  | "execute"
  | "evaluate"
  | "improve";

interface ThreeDIconProps {
  type: IconType;
  className?: string;
  variant?: "orange" | "blue" | "gray" | "grayblue";
  transparent?: boolean;
  noGlow?: boolean;
}

export function ThreeDIcon({ type, className, variant = "orange", transparent = false, noGlow = false }: ThreeDIconProps) {
  // Define unique IDs based on variant to avoid conflict
  const idSuffix = `-${variant}`;
  const matteBodyId = `matteBody${idSuffix}`;
  const matteAccentId = `matteAccent${idSuffix}`;
  const bloomId = `bodyBloom${idSuffix}`;
  const shadowId = `softShadow${idSuffix}`;
  const innerDepthId = `innerDepth${idSuffix}`;
  const highlightId = `highlight${idSuffix}`;
  const orangeAccentId = `orangeAccent${idSuffix}`;

  // Colors based on variant
  const isBlue = variant === "blue";
  const isGray = variant === "gray";
  const isGrayBlue = variant === "grayblue";
  
  // Glow Color behind - gray for gray variant, primary for others
  const glowColor = isGray ? "#64748B" : "#0561A4"; 
  const glowOpacity = noGlow ? 0 : 0.3;

  return (
    <div className={`relative w-28 h-28 ${className}`}>
       {/* 1. Colored Glow Behind (Ambient) */}
       <motion.div 
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[20px] rounded-full z-0" 
         style={{ backgroundColor: glowColor, opacity: glowOpacity }}
         animate={{ scale: [0.8, 1, 0.8], opacity: [glowOpacity - 0.1, glowOpacity + 0.1, glowOpacity - 0.1] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       />
       
       <motion.svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="relative z-10 w-full h-full overflow-visible"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       >
         <defs>
            {/* --- GLASS MATERIAL GRADIENTS --- */}

            {/* 1. Glass Body - Conditional based on variant */}
            <linearGradient id={matteBodyId} x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                {isGray ? (
                  <>
                    <stop offset="0%" stopColor="#64748B" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#475569" stopOpacity="0.9" />
                  </>
                ) : isGrayBlue ? (
                  <>
                    <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.9" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#0879C9" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#0561A4" stopOpacity="0.9" />
                  </>
                )}
            </linearGradient>

            {/* 2. Glass Accent - Conditional based on variant */}
            <radialGradient id={matteAccentId} cx="0.3" cy="0.3" r="1">
                {isGray ? (
                  <>
                    <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#64748B" stopOpacity="0.95" />
                  </>
                ) : isGrayBlue ? (
                  <>
                    <stop offset="0%" stopColor="#3B9DD9" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0561A4" stopOpacity="0.95" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#3B9DD9" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0671BF" stopOpacity="0.95" />
                  </>
                )}
            </radialGradient>

            {/* 2.5. Orange/Gray/Blue Accent - Conditional based on variant */}
            <radialGradient id={orangeAccentId} cx="0.3" cy="0.3" r="1">
                {isGray ? (
                  <>
                    <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#64748B" stopOpacity="0.7" />
                  </>
                ) : isGrayBlue ? (
                  <>
                    <stop offset="0%" stopColor="#0879C9" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0561A4" stopOpacity="0.8" />
                  </>
                ) : (
                  <>
                    <stop offset="0%" stopColor="#FF8E61" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FF5812" stopOpacity="0.8" />
                  </>
                )}
            </radialGradient>

            {/* 2.6. Enhanced White Highlight Gradient */}
            <radialGradient id={highlightId} cx="0.3" cy="0.2" r="0.8">
                <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                <stop offset="50%" stopColor="white" stopOpacity="0.4" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            {/* 3. Inner Glow/Bloom Filter */}
            <filter id={bloomId}>
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                <feComposite in="blur" in2="SourceGraphic" operator="out" result="bloom" />
                <feComposite in="bloom" in2="SourceGraphic" operator="arithmetic" k2="1" k3="1" />
            </filter>

            {/* 4. Soft Drop Shadow */}
            <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0561A4" floodOpacity="0.3" />
            </filter>
            
            {/* 5. Inner Depth (Ambient Occlusion) */}
            <filter id={innerDepthId}>
                 <feOffset dx="1" dy="2" />
                 <feGaussianBlur stdDeviation="2" result="offset-blur" />
                 <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                 <feFlood floodColor="black" floodOpacity="0.15" result="color" />
                 <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                 <feComposite operator="over" in="shadow" in2="SourceGraphic" />
            </filter>
         </defs>

         {/* Render Shape based on type */}
         {getPaths(type, variant, matteBodyId, matteAccentId, shadowId, innerDepthId, transparent, highlightId, orangeAccentId)}
       </motion.svg>
    </div>
  )
}

function getPaths(
    type: IconType, 
    variant: "orange" | "blue" | "gray" | "grayblue", 
    bodyId: string, 
    accentId: string, 
    shadowId: string, 
    innerId: string,
    transparent: boolean,
    highlightId: string,
    orangeAccentId: string
) {
  const isBlue = variant === "blue";
  const isGray = variant === "gray";
  const isGrayBlue = variant === "grayblue";

  // Base Styles with Glass Material
  const matteStyle = { 
      fill: `url(#${bodyId})`, 
      filter: isGrayBlue ? undefined : `url(#${shadowId})`,
      fillOpacity: transparent ? 0.5 : 1
  };

  // Inner details color - White/Light for glass effect
  const innerFill = "rgba(255, 255, 255, 0.4)";
  const highlightFill = "rgba(255, 255, 255, 0.6)";

  const innerStyle = {
      fill: innerFill,
      filter: `url(#${innerId})`,
      fillOpacity: transparent ? 0.6 : 1
  }
  
  // Accent Glow Color
  const glowColor = "rgba(59, 130, 246, 0.6)";

  const accentStyle = { 
      fill: `url(#${accentId})`,
      filter: `drop-shadow(0px 0px 8px ${glowColor})`
  };

  // Common center coordinate for all icons
  const cx = 60;
  const cy = 60;

  switch (type) {
    case "management": // Rounded Cube
      return (
        <g transform={`translate(${cx-30},${cy-35})`}>
           <rect x="0" y="10" width="60" height="50" rx="12" {...matteStyle} />
           {/* Enhanced White Highlight */}
           <ellipse cx="30" cy="18" rx="25" ry="12" fill={`url(#${highlightId})`} />
           <path d="M0 22 C0 15 5 10 12 10 H48 C55 10 60 15 60 22 V30 H0 V22 Z" fill={highlightFill} fillOpacity="0.5" />
           <circle cx="30" cy="10" r="12" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 0px 12px rgba(255, 88, 18, 0.6))`} />
           <circle cx="30" cy="10" r="12" stroke="white" strokeWidth="2" strokeOpacity="0.4" fill="none"/>
        </g>
      );

    case "disclosure": // Modern Megaphone
      return (
        <g transform={`translate(${cx},${cy})`}>
             <g transform="translate(-30, -30) rotate(-15 30 30)">
                <path d="M15 20 L45 10 L60 0 V60 L45 50 L15 40 V20 Z" {...matteStyle} />
                {/* Enhanced White Highlight */}
                <ellipse cx="37" cy="15" rx="15" ry="10" fill={`url(#${highlightId})`} transform="rotate(-15 37 15)" />
                <ellipse cx="15" cy="30" rx="5" ry="10" fill={innerFill} fillOpacity="0.7" />
                <path d="M35 40 Q35 55 25 55" stroke={`url(#${orangeAccentId})`} strokeWidth="8" strokeLinecap="round" fill="none" filter="drop-shadow(0px 2px 10px rgba(255, 88, 18, 0.5))" />
             </g>
        </g>
      );

    case "report": // Floating Doc
      return (
        <g transform={`translate(${cx-25},${cy-35})`}>
            <rect x="0" y="0" width="50" height="70" rx="8" {...matteStyle} transform="rotate(-5 25 35)" />
            {/* Enhanced White Highlight */}
            <ellipse cx="25" cy="20" rx="20" ry="15" fill={`url(#${highlightId})`} transform="rotate(-5 25 35)" />
            
            {/* Inner Lines - White for glass effect */}
            <rect x="10" y="15" width="30" height="4" rx="2" fill="white" fillOpacity="0.7" transform="rotate(-5 25 35)" />
            <rect x="10" y="25" width="20" height="4" rx="2" fill="white" fillOpacity="0.7" transform="rotate(-5 25 35)" />
            <rect x="10" y="35" width="25" height="4" rx="2" fill="white" fillOpacity="0.7" transform="rotate(-5 25 35)" />

            <circle cx="45" cy="10" r="8" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 0px 10px rgba(255, 88, 18, 0.5))`} transform="rotate(-5 25 35)" />
        </g>
      );

    case "data": // Stacked Database
      return (
        <g transform={`translate(${cx-30},${cy-35})`}>
           <path d="M0 50 C0 45 60 45 60 50 V60 C60 65 0 65 0 60 Z" {...matteStyle} />
           <ellipse cx="30" cy="50" rx="30" ry="5" fill={innerFill} fillOpacity="0.7" />

           <path d="M0 30 C0 25 60 25 60 30 V40 C60 45 0 45 0 40 Z" {...matteStyle} />
           <ellipse cx="30" cy="30" rx="30" ry="5" fill={innerFill} fillOpacity="0.7" />
           
           <path d="M0 10 C0 5 60 5 60 10 V20 C60 25 0 25 0 20 Z" {...matteStyle} />
           {/* Enhanced White Highlight */}
           <ellipse cx="30" cy="12" rx="25" ry="3" fill={`url(#${highlightId})`} />
           <ellipse cx="30" cy="10" rx="30" ry="5" fill={highlightFill} fillOpacity="0.7" />
           
           <circle cx="50" cy="15" r="6" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 0px 10px rgba(255, 88, 18, 0.5))`} />
        </g>
      );

    case "carbon": // Abstract Leaf
      return (
        <g transform={`translate(${cx-30},${cy-30})`}>
            <path d="M30 0 C60 0 60 30 60 60 C30 60 0 60 0 30 C0 0 30 0 30 0 Z" {...matteStyle} />
            {/* Enhanced White Highlight */}
            <ellipse cx="35" cy="18" rx="18" ry="12" fill={`url(#${highlightId})`} />
            <path d="M30 0 C60 0 60 30 60 60 C30 60 0 60 0 30 C0 0 30 0 30 0 Z" fill={`url(#${bodyId})`} fillOpacity="0.4" transform="scale(0.8) translate(7,7)" />
            <circle cx="45" cy="45" r="10" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 0px 10px rgba(255, 88, 18, 0.5))`} />
        </g>
      );

    case "supply": // Connection Nodes
      const lineColor = "rgba(255, 255, 255, 0.5)"; 
      return (
        <g transform={`translate(${cx-30},${cy-30})`}>
            <line x1="10" y1="50" x2="30" y2="30" stroke={lineColor} strokeWidth="4" strokeLinecap="round" opacity={transparent ? 0.6 : 1} />
            <line x1="50" y1="50" x2="30" y2="30" stroke={lineColor} strokeWidth="4" strokeLinecap="round" opacity={transparent ? 0.6 : 1} />

            <circle cx="10" cy="50" r="10" {...matteStyle} />
            <ellipse cx="10" cy="48" rx="6" ry="4" fill={`url(#${highlightId})`} />
            
            <circle cx="50" cy="50" r="10" {...matteStyle} />
            <ellipse cx="50" cy="48" rx="6" ry="4" fill={`url(#${highlightId})`} />
            
            <circle cx="30" cy="25" r="14" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 0px 12px rgba(255, 88, 18, 0.6))`} />
            <ellipse cx="30" cy="20" rx="9" ry="6" fill={`url(#${highlightId})`} />
        </g>
      );

    case "compliance": // Shield with Check
      const checkStroke = "white";
      const checkFilter = `drop-shadow(0px 2px 4px ${glowColor})`;
      
      return (
        <g transform={`translate(${cx-30},${cy-35})`}>
             <path d="M30 0 C50 0 60 20 60 35 C60 55 30 70 30 70 C30 70 0 55 0 35 C0 20 10 0 30 0 Z" {...matteStyle} />
             {/* Enhanced White Highlight */}
             <ellipse cx="30" cy="15" rx="20" ry="12" fill={`url(#${highlightId})`} />
             <path d="M30 10 C45 10 50 25 50 35 C50 50 30 60 30 60 C30 60 10 50 10 35 C10 25 15 10 30 10 Z" fill={innerFill} fillOpacity="0.6" />
             <path d="M20 35 L28 43 L42 27" stroke={checkStroke} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter={checkFilter} />
        </g>
      );

    case "safety": // Safety Helmet/Dome
      return (
        <g transform={`translate(${cx-30},${cy-30})`}>
            <path d="M0 35 C0 10 15 0 30 0 C45 0 60 10 60 35" {...matteStyle} />
            {/* Enhanced White Highlight */}
            <ellipse cx="30" cy="15" rx="20" ry="10" fill={`url(#${highlightId})`} />
            <path d="M-5 35 H65 L60 45 H0 L-5 35 Z" fill={innerFill} fillOpacity="0.7" />
            <rect x="24" y="15" width="12" height="12" rx="3" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 0px 10px rgba(255, 88, 18, 0.5))`} />
        </g>
      );

    case "plan": // Modern Document with Checklist
      return (
        <g transform={`translate(${cx-28},${cy-32})`}>
            {/* Document Shadow Layer */}
            <rect x="2" y="12" width="52" height="60" rx="8" fill="black" fillOpacity="0.1" />
            
            {/* Main Document */}
            <rect x="0" y="10" width="52" height="60" rx="8" {...matteStyle} />
            {/* Enhanced White Highlight */}
            <ellipse cx="26" cy="25" rx="22" ry="15" fill={`url(#${highlightId})`} />
            
            {/* Top Colored Strip */}
            <rect x="0" y="10" width="52" height="16" rx="8" fill={`url(#${orangeAccentId})`} />
            <rect x="0" y="18" width="52" height="8" rx="0" fill={`url(#${orangeAccentId})`} />
            
            {/* Document Icon on Top */}
            <circle cx="26" cy="18" r="6" fill="white" fillOpacity="0.4" />
            <path d="M23 16 L25 18 L29 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Checklist Items with Modern Style */}
            <g transform="translate(10, 34)">
              {/* Item 1 - Checked */}
              <circle cx="4" cy="4" r="4" fill={`url(#${accentId})`} />
              <path d="M2.5 4 L3.5 5 L5.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="12" y="2" width="24" height="4" rx="2" fill={innerFill} fillOpacity="0.6" />
              
              {/* Item 2 - Unchecked */}
              <circle cx="4" cy="16" r="4" stroke={innerFill} strokeWidth="1.5" fill="none" />
              <rect x="12" y="14" width="20" height="4" rx="2" fill={innerFill} fillOpacity="0.5" />
              
              {/* Item 3 - Unchecked */}
              <circle cx="4" cy="28" r="4" stroke={innerFill} strokeWidth="1.5" fill="none" />
              <rect x="12" y="26" width="22" height="4" rx="2" fill={innerFill} fillOpacity="0.5" />
            </g>
        </g>
      );

    case "execute": // Modern Rocket
      return (
        <g transform={`translate(${cx},${cy-5})`}>
            {/* Rocket Body */}
            <ellipse cx="0" cy="-5" rx="16" ry="24" {...matteStyle} />
            {/* Enhanced White Highlight */}
            <ellipse cx="0" cy="-12" rx="12" ry="10" fill={`url(#${highlightId})`} />
            
            {/* Rocket Nose/Top */}
            <path d="M-12 -29 Q0 -38 12 -29 L12 -20 L-12 -20 Z" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 2px 10px rgba(255, 88, 18, 0.6))`} />
            
            {/* Window */}
            <circle cx="0" cy="-12" r="6" fill={innerFill} fillOpacity="0.5" />
            <circle cx="0" cy="-12" r="4" fill="white" fillOpacity="0.5" />
            
            {/* Side Fins */}
            <path d="M-16 8 L-22 18 L-16 14 Z" fill={innerFill} fillOpacity="0.8" />
            <path d="M16 8 L22 18 L16 14 Z" fill={innerFill} fillOpacity="0.8" />
            
            {/* Rocket Flame */}
            <ellipse cx="0" cy="20" rx="10" ry="8" fill={`url(#${orangeAccentId})`} fillOpacity="0.7" />
            <ellipse cx="0" cy="22" rx="6" ry="6" fill="#FFB800" fillOpacity="0.6" />
            <ellipse cx="0" cy="24" rx="3" ry="4" fill="white" fillOpacity="0.5" />
            
            {/* Decorative Lines */}
            <line x1="-8" y1="0" x2="-8" y2="8" stroke={innerFill} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <line x1="8" y1="0" x2="8" y2="8" stroke={innerFill} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        </g>
      );

    case "evaluate": // Modern Analytics Dashboard
      return (
        <g transform={`translate(${cx-28},${cy-28})`}>
            {/* Dashboard Background */}
            <rect x="0" y="0" width="56" height="56" rx="8" {...matteStyle} />
            {/* Enhanced White Highlight */}
            <ellipse cx="28" cy="18" rx="24" ry="14" fill={`url(#${highlightId})`} />
            
            {/* Top Bar with Accent */}
            <rect x="0" y="0" width="56" height="12" rx="8" fill={`url(#${orangeAccentId})`} />
            <rect x="0" y="8" width="56" height="4" rx="0" fill={`url(#${orangeAccentId})`} />
            
            {/* Dashboard Dots */}
            <circle cx="10" cy="6" r="2" fill="white" fillOpacity="0.7" />
            <circle cx="18" cy="6" r="2" fill="white" fillOpacity="0.5" />
            <circle cx="26" cy="6" r="2" fill="white" fillOpacity="0.5" />
            
            {/* Modern Chart Bars */}
            <g transform="translate(8, 20)">
              {/* Bar 1 */}
              <rect x="0" y="16" width="8" height="16" rx="4" fill={innerFill} fillOpacity="0.5" />
              <rect x="0" y="16" width="8" height="6" rx="4" fill={innerFill} fillOpacity="0.8" />
              
              {/* Bar 2 */}
              <rect x="12" y="8" width="8" height="24" rx="4" fill={innerFill} fillOpacity="0.6" />
              <rect x="12" y="8" width="8" height="8" rx="4" fill={`url(#${accentId})`} fillOpacity="0.8" />
              
              {/* Bar 3 */}
              <rect x="24" y="4" width="8" height="28" rx="4" fill={innerFill} fillOpacity="0.7" />
              <rect x="24" y="4" width="8" height="10" rx="4" fill={`url(#${accentId})`} />
              
              {/* Bar 4 */}
              <rect x="32" y="12" width="8" height="20" rx="4" fill={innerFill} fillOpacity="0.5" />
              <rect x="32" y="12" width="8" height="7" rx="4" fill={innerFill} fillOpacity="0.8" />
            </g>
            
            {/* Trend Line */}
            <path 
              d="M12 38 L20 32 L28 28 L36 30" 
              stroke={`url(#${orangeAccentId})`} 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              fill="none"
              filter={`drop-shadow(0px 1px 6px rgba(255, 88, 18, 0.5))`}
            />
        </g>
      );

    case "improve": // Modern Upgrade Arrow
      return (
        <g transform={`translate(${cx},${cy})`}>
            {/* Circular Background */}
            <circle cx="0" cy="0" r="28" {...matteStyle} />
            {/* Enhanced White Highlight */}
            <ellipse cx="0" cy="-8" rx="20" ry="14" fill={`url(#${highlightId})`} />
            <circle cx="0" cy="0" r="22" fill={innerFill} fillOpacity="0.4" />
            
            {/* Upward Arrow */}
            <g transform="translate(0, 2)">
              {/* Arrow Shaft */}
              <rect x="-4" y="-8" width="8" height="24" rx="4" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 2px 10px rgba(255, 88, 18, 0.6))`} />
              
              {/* Arrow Head */}
              <path d="M0 -18 L-12 -6 L-6 -6 L-6 -2 L6 -2 L6 -6 L12 -6 Z" fill={`url(#${orangeAccentId})`} filter={`drop-shadow(0px 2px 10px rgba(255, 88, 18, 0.6))`} />
              
              {/* Decorative Curves */}
              <path 
                d="M-16 8 Q-18 -2 -12 -8" 
                stroke={innerFill} 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                fill="none"
                opacity="0.6"
              />
              <path 
                d="M16 8 Q18 -2 12 -8" 
                stroke={innerFill} 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                fill="none"
                opacity="0.6"
              />
            </g>
            
            {/* Bottom Accent Circle */}
            <circle cx="0" cy="16" r="4" fill={`url(#${accentId})`} fillOpacity="0.6" />
        </g>
      );

    default:
      return <circle cx="60" cy="60" r="30" {...matteStyle} />;
  }
}