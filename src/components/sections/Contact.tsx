
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticElement } from '../MagneticElement';
import { GlitchText } from '../GlitchText';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  
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
      
      gsap.from(formRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top bottom-=50',
          toggleActions: 'play none none reverse',
        }
      });
      
      gsap.from(socialRef.current?.children || [], {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: socialRef.current,
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
      id="contact"
      className="py-24 md:py-32 lg:py-40 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-gradient"
        >
          Contact <GlitchText text="Us" className="text-neon-pink neon-glow-pink" />
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form ref={formRef} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white/70 text-sm">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-white/70 text-sm">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-white/70 text-sm">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-white/70 text-sm">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <MagneticElement>
              <button 
                type="submit"
                className="bg-neon-purple/20 hover:bg-neon-purple/30 text-white py-3 px-8 rounded-full 
                border border-neon-purple transition-all duration-300 hover:scale-105 neon-glow-purple 
                font-medium tracking-wider"
              >
                SEND MESSAGE
              </button>
            </MagneticElement>
          </form>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-white/70 leading-relaxed">
                Have a project in mind or want to learn more about our services? 
                We'd love to hear from you. Reach out and let's start creating together.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-center">
                  <span className="w-8 text-neon-blue neon-glow-blue">📧</span>
                  <span>hello@futurebrand.com</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 text-neon-purple neon-glow-purple">📱</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 text-neon-pink neon-glow-pink">📍</span>
                  <span>123 Innovation Drive, Tech City</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div ref={socialRef} className="flex space-x-6">
                <MagneticElement strength={0.3} className="w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white/10 transition-colors">
                  <span className="text-xl">𝕏</span>
                </MagneticElement>
                <MagneticElement strength={0.3} className="w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white/10 transition-colors">
                  <span className="text-xl">𝕀</span>
                </MagneticElement>
                <MagneticElement strength={0.3} className="w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white/10 transition-colors">
                  <span className="text-xl">𝔽</span>
                </MagneticElement>
                <MagneticElement strength={0.3} className="w-12 h-12 flex items-center justify-center glass rounded-full hover:bg-white/10 transition-colors">
                  <span className="text-xl">𝔻</span>
                </MagneticElement>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
