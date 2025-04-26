
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeScene } from '@/components/ThreeScene';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MagneticElement } from '@/components/MagneticElement';
import { GlitchText } from '@/components/GlitchText';
import { CtaBanner } from '@/components/sections/CtaBanner';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const funFactsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline items
      gsap.from(journeyRef.current?.querySelectorAll('.timeline-item') || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: journeyRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
      
      // Animate skills
      gsap.from(skillsRef.current?.querySelectorAll('.skill-item') || [], {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top bottom-=120',
          toggleActions: 'play none none reverse',
        }
      });
      
      // Animate fun facts
      gsap.from(funFactsRef.current?.querySelectorAll('.fun-fact') || [], {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: funFactsRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  const journeySteps = [
    {
      year: "2018",
      title: "Started Freelancing",
      description: "Began taking on small web projects while in college."
    },
    {
      year: "2019",
      title: "UI/UX Designer at TechCorp",
      description: "Joined a startup focusing on user interface design for mobile apps."
    },
    {
      year: "2020",
      title: "Lead Developer at DigitalWave",
      description: "Promoted to lead a team of front-end developers on client projects."
    },
    {
      year: "2022",
      title: "Founded My Studio",
      description: "Started my own web design studio focusing on high-end client work."
    },
    {
      year: "Present",
      title: "Independent Developer & Designer",
      description: "Working with select clients to build exceptional digital experiences."
    }
  ];
  
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", 
    "Tailwind CSS", "Figma", "Webflow", "Three.js", "GSAP", "Framer Motion"
  ];
  
  const funFacts = [
    "I've worked with clients from over 15 different countries",
    "I built my first website at age 14 (it was terrible)",
    "When I'm not coding, you'll find me rock climbing or playing piano"
  ];
  
  return (
    <div className="min-h-screen w-full bg-background text-white">
      <ThreeScene />
      <Navbar />
      
      <main className="pt-24">
        {/* Hero section */}
        <section className="py-20 md:py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-neon-purple uppercase tracking-widest text-sm font-medium">About Me</span>
                <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
                  <GlitchText text="Hi, I'm Akshay" className="text-glow" />
                </h1>
                
                <div className="space-y-4 text-white/70">
                  <p>
                    I'm a freelance web designer and developer with a passion for creating beautiful, 
                    functional websites and applications that help businesses grow online.
                  </p>
                  <p>
                    With over 5 years of experience working with startups, agencies, and established 
                    companies, I bring both technical expertise and creative vision to every project.
                  </p>
                  <p>
                    I believe in creating websites that not only look stunning but also deliver real results — 
                    whether that's more leads, sales, or engagement.
                  </p>
                </div>
                
                <div className="mt-8 flex items-center space-x-6">
                  <MagneticElement>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <span className="text-xl">in</span>
                    </a>
                  </MagneticElement>
                  
                  <MagneticElement>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                      aria-label="Twitter"
                    >
                      <span className="text-xl">tw</span>
                    </a>
                  </MagneticElement>
                  
                  <MagneticElement>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <span className="text-xl">gh</span>
                    </a>
                  </MagneticElement>
                </div>
              </div>
              
              <div className="glass rounded-2xl overflow-hidden h-[500px] relative">
                {/* Replace with actual image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=1000)"}}
                ></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Journey section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-neon-blue uppercase tracking-widest text-sm font-medium">Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">My Journey</h2>
              <p className="text-white/70 max-w-xl mx-auto">The path that led me to where I am today.</p>
            </div>
            
            <div ref={journeyRef} className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:translate-x-[-2px]"></div>
              
              {journeySteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`timeline-item relative mb-16 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-0 md:mr-auto' : 'md:pl-16 md:ml-auto md:mr-0'
                  } ml-12 md:ml-0 md:w-[calc(50%-16px)]`}
                >
                  {/* Year bubble */}
                  <div className="absolute top-0 left-[-34px] md:left-auto md:right-[-34px] md:translate-x-[50%] w-7 h-7 rounded-full border-2 border-neon-purple flex items-center justify-center">
                    <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <span className="block text-neon-purple text-lg font-bold mb-2">{step.year}</span>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Skills section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-neon-purple uppercase tracking-widest text-sm font-medium">Expertise</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Skills & Tools</h2>
              <p className="text-white/70 max-w-xl mx-auto">Technologies and skills I work with.</p>
            </div>
            
            <div ref={skillsRef} className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <MagneticElement key={index} strength={0.1}>
                  <div className="skill-item glass px-6 py-4 rounded-full text-white/80 hover:text-white transition-colors">
                    {skill}
                  </div>
                </MagneticElement>
              ))}
            </div>
          </div>
        </section>
        
        {/* Fun facts */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-neon-blue uppercase tracking-widest text-sm font-medium">Personal</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Fun Facts</h2>
              <p className="text-white/70 max-w-xl mx-auto">A few interesting things about me.</p>
            </div>
            
            <div ref={funFactsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {funFacts.map((fact, index) => (
                <div key={index} className="fun-fact glass p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4 text-neon-purple">0{index + 1}</div>
                  <p className="text-white/80">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CtaBanner 
          heading="Let's create something amazing together"
          ctaText="Get in Touch"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
