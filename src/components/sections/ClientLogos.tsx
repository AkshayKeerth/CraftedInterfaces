
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ClientLogos = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
      
      gsap.from(logosRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: logosRef.current,
          start: 'top bottom-=80',
          toggleActions: 'play none none reverse',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-2xl font-medium text-center text-white/70 mb-12">
          Trusted by
        </h2>
        
        <div ref={logosRef} className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Replace with actual client logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-24 h-12 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="text-white/40 font-semibold">LOGO {i}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
