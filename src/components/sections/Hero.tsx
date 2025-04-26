
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlitchText } from '../GlitchText';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
      
      tl.to(headingRef.current, {
        y: -100,
        opacity: 0.4,
        ease: 'power2.inOut',
      }, 0);
      
      tl.to(subheadingRef.current, {
        y: -50,
        opacity: 0.2,
        ease: 'power2.inOut',
      }, 0);
      
      // Initial animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 2.5
      });
      
      gsap.from(subheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 2.8
      });
      
      gsap.from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 3.1
      });
      
    }, heroRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={heroRef} 
      className="h-screen w-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto text-center z-10 pt-20">
        <h1 
          ref={headingRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient mb-4 relative"
        >
          <span className="block">
            <GlitchText text="CREATIVE" className="text-glow" />
          </span>
          <span className="block mt-2">
            <span className="text-neon-purple neon-glow-purple">PORTFOLIO</span>{" "}
            <GlitchText text="2025" className="text-glow" />
          </span>
        </h1>
        
        <p 
          ref={subheadingRef}
          className="text-xl md:text-2xl max-w-3xl mx-auto text-white/70 mt-6"
        >
          Full-stack developer crafting immersive digital experiences with cutting-edge technology
        </p>
        
        <div ref={ctaRef} className="mt-12">
          <button 
            className="bg-neon-purple/20 hover:bg-neon-purple/30 text-white py-4 px-8 rounded-full 
            border border-neon-purple transition-all duration-300 hover:scale-105 neon-glow-purple 
            font-medium tracking-wider"
            data-cursor-hover
          >
            EXPLORE MY WORK
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 mb-2 text-sm">SCROLL TO DISCOVER</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
