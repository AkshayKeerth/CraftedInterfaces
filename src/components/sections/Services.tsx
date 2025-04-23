
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticElement } from '../MagneticElement';
import { GlitchText } from '../GlitchText';
import { Code, Cpu, Globe, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  glowClass: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "3D Web Experiences",
    description: "Immersive three-dimensional experiences that transform how users interact with your brand online.",
    icon: Globe,
    color: "text-neon-blue",
    glowClass: "neon-glow-blue",
  },
  {
    id: 2,
    title: "Motion Design",
    description: "Fluid animations and micro-interactions that add depth and meaningful context to user experiences.",
    icon: Layers,
    color: "text-neon-purple",
    glowClass: "neon-glow-purple",
  },
  {
    id: 3,
    title: "Interactive Development",
    description: "Custom interactive web applications with cutting-edge technologies and optimal performance.",
    icon: Code,
    color: "text-neon-pink",
    glowClass: "neon-glow-pink",
  },
  {
    id: 4,
    title: "Digital Transformation",
    description: "Strategic innovation through emerging technologies like AI, WebGL, and spatial computing.",
    icon: Cpu,
    color: "text-neon-blue",
    glowClass: "neon-glow-blue",
  }
];

export const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  
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
      
      gsap.from(servicesContainerRef.current?.children || [], {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesContainerRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        }
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 lg:py-40 px-6 relative overflow-hidden bg-gradient-to-b from-black/90 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-gradient"
        >
          <GlitchText text="Services" className="text-neon-blue neon-glow-blue" /> We Offer
        </h2>
        
        <div 
          ref={servicesContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <MagneticElement 
              key={service.id} 
              strength={0.1}
              className="glass p-8 md:p-10 rounded-2xl"
            >
              <div className={`inline-block p-4 rounded-xl ${service.color} ${service.glowClass} bg-white/5`}>
                <service.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mt-6">{service.title}</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 inline-block">
                <a 
                  href="#" 
                  className={`${service.color} ${service.glowClass} group flex items-center`}
                  data-cursor-hover
                >
                  <span>Learn more</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </MagneticElement>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24">
        <div className="neo-blur rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">
                Ready to transform your <GlitchText text="digital presence?" className="text-neon-purple neon-glow-purple" />
              </h3>
              <p className="mt-4 text-white/70 max-w-2xl">
                Let's collaborate to create something extraordinary that sets you apart in the digital landscape.
              </p>
            </div>
            
            <MagneticElement>
              <button className="bg-neon-purple/20 hover:bg-neon-purple/30 text-white py-3 px-8 rounded-full 
              border border-neon-purple transition-all duration-300 hover:scale-105 neon-glow-purple 
              font-medium tracking-wider whitespace-nowrap">
                CONTACT US
              </button>
            </MagneticElement>
          </div>
        </div>
      </div>
    </section>
  );
};
