
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeScene } from '@/components/ThreeScene';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MagneticElement } from '@/components/MagneticElement';
import { GlitchText } from '@/components/GlitchText';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  url: string;
  featured?: boolean;
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>("all");
  const projectsRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  
  const projects: Project[] = [
    {
      id: "ai-aider",
      title: "Conturbo.AI - An AI Tech Influener Helper",
      category: "Web Development",
      image: "https://i.ibb.co/hxvj8gmX/Screenshot-2025-04-13-220853.png",
      description: "+150% increase in conversion rate performace in the website.",
      url: "https://conturbo.lovable.app",
      featured: true
    },
    {
      id: "health and fitness",
      title: "BloomFit.AI - An All-in-One AI Fitness and Health Web App",
      category: "UI/UX Design",
      image: "https://i.ibb.co/KcJLpb7v/Screenshot-2025-04-16-213453.png",
      description: "Helped secure hundreds of thousands new fitness enthusiasts.",
      url: "https://bloom-life-tracker.lovable.app/",
      featured: true
    },
    {
      id: "AI testimonials gen",
      title: "SnapReview.AI - An AI Platform for generating testimonials for clients",
      category: "Web App",
      image: "https://i.ibb.co/hFCFybHN/Screenshot-2025-04-19-105433.png",
      description: "Streamlined user experience by 35% and helped 15 major companies.",
      url: "https://preview--snapreview-ai-mockup.lovable.app/",
      featured: true
    },
    {
      id: "restaurant",
      title: "Nancy's Restaurant Landing Page",
      category: "Web Design",
      image: "https://i.ibb.co/CpJ6ph0r/Screenshot-2025-04-26-183735.png",
      description: "Appetizing design with online reservation system and menu showcase.",
      url: "https://preview--nancyshustle.lovable.app/"
    },
    {
      id: "fitness",
      title: "KineticLife.AI Fitness App",
      category: "Web Development",
      image: "https://i.ibb.co/1YcnqVrV/Screenshot-2025-04-26-184205.png",
      description: "Membership portal with class scheduling, progress tracking, and community features.",
      url: "https://preview--kinetic-life-tracker.lovable.app/"
    },
    {
      id: "email organizer",
      title: "FlowReply.AI - An AI-powered Email Organizer Assistant",
      category: "UI/UX Design",
      image: "https://i.ibb.co/GfRb45Q1/Screenshot-2025-04-26-184702.png",
      description: "Let AI organize, summarize, and reply to your emails. Reclaim 10+ hours every week with intelligent email automation.",
      url: "https://preview--flowreply-zen-landing.lovable.app/"
    }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = ["all", ...new Set(projects.map(project => project.category))];
  
  useEffect(() => {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Animate filters
      gsap.from(filtersRef.current?.children || [], {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.5
      });
      
      // Set up ScrollTrigger for projects
      const animateProjects = () => {
        // Clear any existing animations first
        if (projectsRef.current) {
          const projectItems = projectsRef.current.querySelectorAll('.project-card');
          
          gsap.fromTo(projectItems, 
            { y: 50, opacity: 0 }, 
            { 
              y: 0, 
              opacity: 1, 
              duration: 0.7, 
              stagger: 0.15, 
              ease: 'power3.out',
            }
          );
        }
      };
      
      animateProjects();
      
      // Re-run animation when filter changes
      return () => {
        if (projectsRef.current) {
          gsap.set(projectsRef.current.querySelectorAll('.project-card'), { 
            clearProps: 'all' 
          });
        }
      };
    });

    return () => ctx.revert();
  }, [filter]);
  
  return (
    <div className="min-h-screen w-full bg-background text-white">
      <ThreeScene />
      <Navbar />
      
      <main className="pt-24">
        {/* Portfolio header */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-neon-purple uppercase tracking-widest text-sm font-medium">Portfolio</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
                <GlitchText text="My Work" className="text-glow" />
              </h1>
              <p className="text-xl text-white/70 mb-12">
                A selection of my favorite projects that showcase my design and development expertise.
              </p>
              
              {/* Category filters */}
              <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, index) => (
                  <MagneticElement key={category} strength={0.1}>
                    <button
                      className={`px-6 py-2 rounded-full transition-all ${
                        filter === category
                          ? 'bg-neon-purple/30 text-white border border-neon-purple'
                          : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
                      }`}
                      onClick={() => setFilter(category)}
                    >
                      {category === 'all' ? 'All Work' : category}
                    </button>
                  </MagneticElement>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects grid */}
        <section className="py-12 px-6 bg-gradient-to-b from-transparent to-black/40">
          <div className="max-w-7xl mx-auto">
            <div 
              ref={projectsRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <MagneticElement key={project.id} strength={0.1} className="group">
                  <a href={project.url} className="project-card block h-full">
                    <div className="glass rounded-xl overflow-hidden h-full transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-lg group-hover:shadow-neon-purple/20">
                      <div className="h-64 overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                          style={{ backgroundImage: `url(${project.image})` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-neon-purple/70 text-white text-xs py-1 px-3 rounded-full">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="text-neon-blue/80 text-sm font-medium mb-2">{project.category}</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-neon-purple transition-colors">{project.title}</h3>
                        <p className="text-white/60">{project.description}</p>
                      </div>
                    </div>
                  </a>
                </MagneticElement>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold mb-4">No projects found</h3>
                <p className="text-white/70">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Process section */}
        <section className="py-24 px-6 my-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-neon-blue uppercase tracking-widest text-sm font-medium">Process</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">How I Work</h2>
              <p className="text-white/70 max-w-xl mx-auto">
                My approach to creating successful digital products.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  title: "Research & Strategy",
                  desc: "Every project begins with understanding your goals, audience, and market positioning. I dive deep into research to ensure the final product resonates with your users.",
                  num: "01"
                },
                {
                  title: "Design & Prototyping",
                  desc: "I create wireframes and visual designs that bring your vision to life. Interactive prototypes ensure we're aligned before moving to development.",
                  num: "02"
                },
                {
                  title: "Development & Testing",
                  desc: "Clean, optimized code brings the designs to life. Rigorous testing ensures everything works flawlessly across all devices and browsers.",
                  num: "03"
                },
                {
                  title: "Launch & Optimization",
                  desc: "After launch, I analyze performance data and user feedback to make continuous improvements to your digital product.",
                  num: "04"
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-8">
                  <div className="w-16 h-16 rounded-full bg-neon-purple/20 border border-neon-purple text-neon-purple flex items-center justify-center text-xl font-bold shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-transparent -z-10"></div>
          
          {/* Animated orbs in background */}
          <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-neon-purple/20 blur-3xl -z-5 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-neon-blue/10 blur-3xl -z-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              <GlitchText text="Let's build something amazing together" className="text-glow" />
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Ready to take your online presence to the next level? Let's discuss your project.
            </p>
            
            <MagneticElement strength={0.2}>
              <a
                href="/contact"
                className="bg-neon-purple/20 hover:bg-neon-purple/30 text-white py-4 px-10 rounded-full 
                border border-neon-purple transition-all duration-300 hover:scale-105 neon-glow-purple 
                font-medium tracking-wider text-lg inline-flex items-center gap-2"
                data-cursor-hover
              >
                Start a Project
                <span className="inline-block">→</span>
              </a>
            </MagneticElement>
          </div>
        </section>
      </main>
      
       {/* <Footer /> */}
    </div>
  );
};

export default Portfolio;
