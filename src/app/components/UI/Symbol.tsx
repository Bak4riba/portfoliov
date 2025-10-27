'use client';

export default function BatSymbol({ size = 24, className = "" }) {
  return (
    <div className={`${className} inline-flex`}>
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={`w-${size} h-${size}`}
      >
        <path d="M12,2 L1,21 L6,21 L8,14 L16,14 L18,21 L23,21 L12,2 Z M12,10 L12,14 M9,14 L15,14"/>
      </svg>
    </div>
  );
}