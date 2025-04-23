
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    
    setLenis(lenisInstance);
    
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenisInstance.destroy();
      setLenis(null);
    };
  }, []);
  
  return lenis;
}
