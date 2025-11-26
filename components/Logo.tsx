import React from 'react';

interface LogoProps {
  className?: string;
  darkBg?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12", darkBg = false }) => {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {/* Icon */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto aspect-square" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top - Green */}
        <g transform="translate(50, 15)">
           <circle cx="0" cy="0" r="10" fill="#8CC63F" />
           <path d="M-15 15 C-15 5 15 5 15 15 L10 25 C10 25 0 20 0 20 C0 20 -10 25 -10 25 Z" fill="#8CC63F" />
        </g>
        
        {/* Right - Blue */}
        <g transform="rotate(90, 50, 50) translate(50, 15)">
           <circle cx="0" cy="0" r="10" fill="#008CCF" />
           <path d="M-15 15 C-15 5 15 5 15 15 L10 25 C10 25 0 20 0 20 C0 20 -10 25 -10 25 Z" fill="#008CCF" />
        </g>
        
        {/* Bottom - Yellow */}
        <g transform="rotate(180, 50, 50) translate(50, 15)">
           <circle cx="0" cy="0" r="10" fill="#FFC700" />
           <path d="M-15 15 C-15 5 15 5 15 15 L10 25 C10 25 0 20 0 20 C0 20 -10 25 -10 25 Z" fill="#FFC700" />
        </g>
        
        {/* Left - Red */}
        <g transform="rotate(270, 50, 50) translate(50, 15)">
           <circle cx="0" cy="0" r="10" fill="#E53935" />
           <path d="M-15 15 C-15 5 15 5 15 15 L10 25 C10 25 0 20 0 20 C0 20 -10 25 -10 25 Z" fill="#E53935" />
        </g>
        
        {/* Connecting curves (abstract) */}
        <circle cx="50" cy="50" r="18" fill="white" fillOpacity="0.0" />
      </svg>
      
      {/* Text */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-display font-bold text-2xl tracking-tight ${darkBg ? 'text-white' : 'text-brand-purple'}`}>
          Vy'a
        </span>
        <span className="font-display font-bold text-xl text-brand-yellow tracking-wide">
          Turismo
        </span>
      </div>
    </div>
  );
};