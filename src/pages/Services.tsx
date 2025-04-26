
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeScene } from '@/components/ThreeScene';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MagneticElement } from '@/components/MagneticElement';
import { GlitchText } from '@/components/GlitchText';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      title: "Web Design",
      icon: "🎨",
      description: "Beautiful, responsive websites that engage visitors and drive conversions.",
      details: [
        "Custom website design",
        "E-commerce websites",
        "Landing page design",
        "Design system creation",
        "Website redesigns"
      ]
    },
    {
      title: "Landing Page Design",
      icon: "🚀",
      description: "High-converting landing pages designed to turn visitors into customers.",
      details: [
        "Sales pages",
        "Lead generation pages",
        "Product launch pages",
        "Event registration pages",
        "A/B testing optimization"
      ]
    },
    {
      title: "Website Redesign",
      icon: "✨",
      description: "Transform your outdated website into a modern, high-performing digital asset.",
      details: [
        "UX assessment",
        "Visual refresh",
        "Performance optimization",
        "Responsive adaptation",
        "Analytics implementation"
      ]
    },
    {
      title: "Branding + UI Kits",
      icon: "🎭",
      description: "Cohesive brand identity and UI components to ensure consistency across platforms.",
      details: [
        "Brand style guides",
        "Logo design",
        "UI component libraries",
        "Design system documentation",
        "Brand implementation"
      ]
    },
    {
      title: "Web Development",
      icon: "💻",
      description: "Clean, efficient code that brings designs to life with seamless functionality.",
      details: [
        "Front-end development",
        "React & Next.js development",
        "Animation implementation",
        "CMS integration",
        "Performance optimization"
      ]
    }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate intro section
      gsap.from(introRef.current?.querySelectorAll('h1, p') || [], {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });
      
      // Animate service cards
      gsap.from(servicesRef.current?.querySelectorAll('.service-card') || [], {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-background text-white">
      <ThreeScene />
      <Navbar />
      
      <main className="pt-24">
        {/* Intro section */}
        <section className="py-20 md:py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto" ref={introRef}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-neon-purple uppercase tracking-widest text-sm font-medium">Services</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
                Here's how I help businesses grow online
              </h1>
              <p className="text-xl text-white/70">
                I create exceptional digital experiences that help you connect with your audience, 
                build trust, and drive conversions.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto" ref={servicesRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <MagneticElement key={index} strength={0.1} className="h-full">
                  <div className="service-card bg-[#101014] border border-white/10 rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-neon-purple/20 backdrop-blur-sm">
                    <div className="text-4xl mb-6 bg-gradient-to-br from-neon-purple/20 to-neon-blue/10 p-4 rounded-lg inline-block">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-white/80 mb-6">{service.description}</p>
                    
                    <div className="mt-auto">
                      <h4 className="font-medium mb-3 text-neon-blue">What's included:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-neon-purple mr-2">✓</span>
                            <span className="text-white/80">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </MagneticElement>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom solutions CTA */}
        <section className="py-24 px-6 my-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-transparent -z-10"></div>
          
          {/* Animated orbs in background */}
          <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-neon-blue/20 blur-3xl -z-5 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-neon-purple/10 blur-3xl -z-5 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              <GlitchText text="Need something custom?" className="text-glow" />
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Every business has unique needs. Let's talk about your specific goals and how I can help you achieve them.
            </p>
            
            <MagneticElement strength={0.2}>
              <Link
                to="/contact"
                className="bg-neon-blue/20 hover:bg-neon-blue/30 text-white py-4 px-10 rounded-full 
                border border-neon-blue transition-all duration-300 hover:scale-105 neon-glow-blue 
                font-medium tracking-wider text-lg inline-flex items-center gap-2"
                data-cursor-hover
              >
                Let's Discuss Your Project
                <span className="inline-block">→</span>
              </Link>
            </MagneticElement>
          </div>
        </section>
        
        {/* Process section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-neon-purple uppercase tracking-widest text-sm font-medium">Methodology</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">My Process</h2>
              <p className="text-white/70 max-w-xl mx-auto">
                How we'll work together to bring your vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Discovery", desc: "Understanding your goals, audience, and requirements" },
                { num: "02", title: "Strategy", desc: "Planning the approach and solutions to meet your needs" },
                { num: "03", title: "Design & Build", desc: "Creating and implementing your digital solution" },
                { num: "04", title: "Launch & Support", desc: "Going live and ensuring ongoing success" }
              ].map((step, index) => (
                <MagneticElement key={index} strength={0.1}>
                  <div className="bg-[#101014] border border-white/10 p-6 rounded-xl text-center backdrop-blur-sm">
                    <div className="inline-block w-12 h-12 rounded-full bg-neon-purple/20 border border-neon-purple text-neon-purple flex items-center justify-center text-lg font-bold mb-4">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/70">{step.desc}</p>
                  </div>
                </MagneticElement>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-neon-blue uppercase tracking-widest text-sm font-medium">FAQ</span>
              <h2 className="text-4xl font-bold mt-2 mb-4">Common Questions</h2>
            </div>
            
            <div className="space-y-8">
              {[
                { q: "How long does a typical project take?", a: "Most websites take 4-8 weeks from start to finish, depending on complexity. Landing pages can be completed in 2-3 weeks." },
                { q: "What are your payment terms?", a: "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion." },
                { q: "Do you provide ongoing support?", a: "Yes, I offer maintenance packages to keep your website secure, updated, and performing optimally." },
                { q: "Do you work with clients internationally?", a: "Absolutely! I've worked with clients from around the world and I'm comfortable with remote collaboration." }
              ].map((faq, index) => (
                <div key={index} className="bg-[#101014] border border-white/10 p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.q}</h3>
                  <p className="text-white/80">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
