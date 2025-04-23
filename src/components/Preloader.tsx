
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const tl = gsap.timeline();
      
      tl.to('.loader', {
        duration: 0.8,
        opacity: 0,
        y: -20,
        ease: 'power2.inOut',
      })
      .to('.preloader', {
        duration: 1.2,
        y: '-100%',
        ease: 'power4.inOut',
        onComplete: () => {
          setLoading(false);
          document.body.style.overflow = 'auto';
        }
      });
    }, 2000);
    
    // Prevent scrolling during preload
    document.body.style.overflow = 'hidden';
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loading) return null;
  
  return (
    <div className="preloader">
      <div className="loader">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
    </div>
  );
};
