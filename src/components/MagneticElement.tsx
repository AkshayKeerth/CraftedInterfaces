
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticElement = React.forwardRef<HTMLDivElement, MagneticElementProps>(({ 
  children, 
  className = '', 
  strength = 0.3 
}, ref) => {
  const magneticRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const element = ref ? (ref as React.RefObject<HTMLDivElement>).current : magneticRef.current;
    if (!element) return;
    
    let bounds: DOMRect;
    
    const handleMouseEnter = () => {
      setIsHovering(true);
      bounds = element.getBoundingClientRect();
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      
      const { clientX, clientY } = e;
      const x = clientX - bounds.left - bounds.width / 2;
      const y = clientY - bounds.top - bounds.height / 2;
      
      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.6,
        ease: 'power3.out'
      });
    };
    
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovering, strength, ref]);
  
  return (
    <div ref={ref || magneticRef} className={`magnetic ${className}`} data-cursor-hover>
      {children}
    </div>
  );
});

MagneticElement.displayName = 'MagneticElement';
