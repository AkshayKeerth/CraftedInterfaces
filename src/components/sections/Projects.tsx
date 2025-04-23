
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticElement } from '../MagneticElement';
import { GlitchText } from '../GlitchText';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Neuroverse",
    category: "AI Experience",
    description: "An immersive AI-powered neural interface that responds to thought patterns.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23151515'/%3E%3Ccircle cx='400' cy='300' r='150' fill='none' stroke='%238B5CF6' stroke-width='2' opacity='0.7'/%3E%3Cpath d='M250 300 C250 200, 350 100, 450 300 S650 400, 550 300' stroke='%2300FFFF' stroke-width='3' fill='none'/%3E%3Cpath d='M250 350 C250 250, 350 150, 450 350 S650 450, 550 350' stroke='%23FF00FF' stroke-width='2' fill='none' opacity='0.5'/%3E%3C/svg%3E"
  },
  {
    id: 2,
    title: "Quantum UI",
    category: "Design System",
    description: "Next-generation UI components leveraging quantum computing principles.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23151515'/%3E%3Crect x='200' y='200' width='400' height='200' fill='none' stroke='%2300FFFF' stroke-width='2'/%3E%3Ccircle cx='400' cy='300' r='100' fill='none' stroke='%23FF00FF' stroke-width='2' opacity='0.7'/%3E%3Crect x='300' y='250' width='200' height='100' fill='none' stroke='%238B5CF6' stroke-width='3'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    title: "Synthwave",
    category: "Audio Visualization",
    description: "Real-time 3D audio visualizer with retro-futuristic aesthetics.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23151515'/%3E%3Cpath d='M0 400 L800 400' stroke='%23FF00FF' stroke-width='2' opacity='0.5'/%3E%3Cpath d='M0 350 L800 350' stroke='%238B5CF6' stroke-width='2' opacity='0.6'/%3E%3Cpath d='M0 300 L800 300' stroke='%2300FFFF' stroke-width='2' opacity='0.7'/%3E%3Cpath d='M0 250 L800 250' stroke='%23FF00FF' stroke-width='2' opacity='0.8'/%3E%3Cpath d='M0 200 L800 200' stroke='%238B5CF6' stroke-width='2' opacity='0.9'/%3E%3C/svg%3E"
  },
  {
    id: 4,
    title: "HoloSuite",
    category: "Mixed Reality",
    description: "Holographic workspace platform for immersive collaboration.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23151515'/%3E%3Ccircle cx='300' cy='300' r='100' fill='none' stroke='%238B5CF6' stroke-width='2'/%3E%3Ccircle cx='500' cy='300' r='100' fill='none' stroke='%2300FFFF' stroke-width='2'/%3E%3Ccircle cx='400' cy='200' r='100' fill='none' stroke='%23FF00FF' stroke-width='2'/%3E%3Ccircle cx='400' cy='400' r='100' fill='none' stroke='%238B5CF6' stroke-width='2'/%3E%3C/svg%3E"
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
      
      projectRefs.current.forEach((project, index) => {
        gsap.from(project, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: project,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse',
          }
        });
      });
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  const setProjectRef = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };
  
  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 lg:py-40 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-gradient"
        >
          Featured <GlitchText text="Projects" className="text-neon-pink neon-glow-pink" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <MagneticElement 
              key={project.id} 
              strength={0.03} 
              className="relative overflow-hidden rounded-2xl group"
              ref={(el) => setProjectRef(el, index)}
            >
              <div 
                className="h-[450px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-sm text-neon-blue font-medium tracking-wider neon-glow-blue">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
                  <p className="mt-2 text-white/70">{project.description}</p>
                  
                  <div className="mt-6">
                    <button className="text-white bg-white/10 hover:bg-white/20 py-2 px-5 rounded-full text-sm transition-colors duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full border border-white/10 rounded-2xl pointer-events-none"></div>
            </MagneticElement>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <MagneticElement>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 transition-colors duration-300">
              View All Projects
            </button>
          </MagneticElement>
        </div>
      </div>
    </section>
  );
};
