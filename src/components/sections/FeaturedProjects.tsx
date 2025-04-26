
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticElement } from '@/components/MagneticElement';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      title: "Conturbo.AI - An AI Tech Influener Helper",
      category: "Web Development",
      image: "https://i.ibb.co/hxvj8gmX/Screenshot-2025-04-13-220853.png",
      result: "+150% increase in conversion rate performace in the website.",
      url: "/portfolio/"
    },
    {
      title: "BloomFit.AI - An All-in-One AI Fitness and Health Web App",
      category: "UI/UX Design",
      image: "https://i.ibb.co/KcJLpb7v/Screenshot-2025-04-16-213453.png",
      result: "Helped secure hundreds of thousands new fitness enthusiasts.",
      url: "/portfolio/"
    },
    {
      title: "SnapReview.AI - An AI Platform for generating testimonials for clients",
      category: "Web App Design",
      image: "https://i.ibb.co/hFCFybHN/Screenshot-2025-04-19-105433.png",
      result: "Streamlined user experience by 35% and helped 15 major companies.",
      url: "/portfolio/"
    }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
      
      gsap.from(projectsRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-transparent to-black/40">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center md:text-left">
          <span className="text-neon-purple uppercase tracking-widest text-sm font-medium">Showcase</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Projects</h2>
          <p className="text-white/70 max-w-xl md:mx-0 mx-auto">
            Selected works that showcase my approach to design and development challenges.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <MagneticElement key={index} strength={0.1} className="group">
              <Link to={project.url} className="block h-full">
                <div className="glass rounded-xl overflow-hidden h-full transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-lg group-hover:shadow-neon-purple/20">
                  <div className="h-64 overflow-hidden relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-neon-blue/80 text-sm font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-neon-purple transition-colors">{project.title}</h3>
                    <p className="text-white/60 text-sm">{project.result}</p>
                  </div>
                </div>
              </Link>
            </MagneticElement>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <MagneticElement>
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium group"
            >
              View All Projects
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </MagneticElement>
        </div>
      </div>
    </section>
  );
};
