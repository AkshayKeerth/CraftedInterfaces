
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticElement } from '../MagneticElement';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
      
      gsap.from(textRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
      
      gsap.from(statContainerRef.current?.children || [], {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statContainerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 lg:py-40 px-6 relative overflow-hidden bg-gradient-to-b from-background to-black/90"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-gradient"
        >
          About <span className="text-neon-blue neon-glow-blue">Us</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={textRef} className="space-y-6">
            <p className="text-xl text-white/80">
              We are a future-focused digital studio specializing in creating immersive experiences 
              that blend cutting-edge technology with artistic vision.
            </p>
            
            <p className="text-lg text-white/70">
              Our team of visionary designers, developers, and creative technologists work at the 
              intersection of art and technology, crafting digital solutions that push boundaries 
              and redefine possibilities.
            </p>
            
            <p className="text-lg text-white/70">
              With expertise in interactive 3D, advanced animations, and emerging technologies,
              we deliver projects that don't just meet expectations—they transcend them.
            </p>
            
            <MagneticElement strength={0.2} className="inline-block mt-8">
              <button 
                className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 
                rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Learn More
              </button>
            </MagneticElement>
          </div>
          
          <div ref={statContainerRef} className="grid grid-cols-2 gap-8">
            <MagneticElement strength={0.15} className="glass p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-2 text-neon-purple neon-glow-purple">10+</div>
              <div className="text-lg text-white/70">Years Experience</div>
            </MagneticElement>
            
            <MagneticElement strength={0.15} className="glass p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-2 text-neon-blue neon-glow-blue">150+</div>
              <div className="text-lg text-white/70">Projects Delivered</div>
            </MagneticElement>
            
            <MagneticElement strength={0.15} className="glass p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-2 text-neon-pink neon-glow-pink">40+</div>
              <div className="text-lg text-white/70">Team Members</div>
            </MagneticElement>
            
            <MagneticElement strength={0.15} className="glass p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-2 text-neon-purple neon-glow-purple">25+</div>
              <div className="text-lg text-white/70">Awards Won</div>
            </MagneticElement>
          </div>
        </div>
      </div>
    </section>
  );
};
