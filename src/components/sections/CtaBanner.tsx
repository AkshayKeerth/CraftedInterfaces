
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticElement } from '@/components/MagneticElement';
import { Link } from 'react-router-dom';
import { GlitchText } from '../GlitchText';

gsap.registerPlugin(ScrollTrigger);

interface CtaBannerProps {
  heading: string;
  ctaText: string;
}

export const CtaBanner = ({ heading, ctaText }: CtaBannerProps) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top bottom-=150',
          toggleActions: 'play none none reverse'
        }
      });
    }, bannerRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={bannerRef} className="my-20 py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-transparent -z-10"></div>
      
      {/* Animated orbs in background */}
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-neon-purple/20 blur-3xl -z-5 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-neon-blue/10 blur-3xl -z-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto" ref={contentRef}>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <GlitchText text={heading} className="text-glow" />
          </h2>
          
          <MagneticElement strength={0.2}>
            <Link
              to="/contact"
              className="bg-neon-purple/20 hover:bg-neon-purple/30 text-white py-4 px-10 rounded-full 
              border border-neon-purple transition-all duration-300 hover:scale-105 neon-glow-purple 
              font-medium tracking-wider text-lg inline-flex items-center gap-2"
              data-cursor-hover
            >
              {ctaText}
              <span className="inline-block">→</span>
            </Link>
          </MagneticElement>
        </div>
      </div>
    </section>
  );
};
