
import { useEffect, useRef, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
}

export const GlitchText = ({ text, className = '', glitchIntensity = 0.5 }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const glitchRandomly = () => {
      // Random chance to glitch
      if (Math.random() < glitchIntensity * 0.5) {
        setIsGlitching(true);
        
        // Stop glitching after a short time
        setTimeout(() => {
          setIsGlitching(false);
        }, Math.random() * 9000);
      }
    };
    
    // Start random glitching
    intervalRef.current = setInterval(glitchRandomly, 500);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [glitchIntensity]);
  
  return (
    <span 
      className={`inline-block ${isGlitching ? 'animate-glitch' : ''} ${className}`}
      // style={{ 
      //   textShadow: isGlitching ? 
      //     `1px 1px 2px #00FFFF, -1px -2px 2px #FF00FF` : 
      //     'none',
      //   transition: 'text-shadow 0.1s ease'
      // }}
      style={{ 
        textShadow: isGlitching ? 
          `1px 1px 2px #FFFFFF, -1px -2px 2px #FF00FF` : 
          'none',
        transition: 'text-shadow 0.1s ease'
      }}
    >
      {text}
    </span>
  );
};
