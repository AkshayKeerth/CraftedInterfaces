
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticElement } from '@/components/MagneticElement';

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "Akshay brought our vision to life with a website that truly represents our brand. The attention to detail and responsiveness throughout the process was exceptional.",
      author: "Sarah Johnson",
      position: "Creative Director, Studio Nova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
    },
    {
      quote: "Working with Akshay was a game-changer for our company. The website he delivered exceeded our expectations and has significantly improved our online presence.",
      author: "Michael Chen",
      position: "Founder, TechVista",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100"
    },
    {
      quote: "The design work Akshay did for us was incredible. He understood our requirements perfectly and delivered a product that our customers love to use.",
      author: "Emma Rodriguez",
      position: "Product Manager, Elevate App",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
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
      
      gsap.from(testimonialsRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top bottom-=80",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <span className="text-neon-blue uppercase tracking-widest text-sm font-medium">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Client Feedback</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            What clients are saying about working with me.
          </p>
        </div>
        
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MagneticElement key={index} strength={0.1}>
              <div className="glass rounded-xl p-6 h-full flex flex-col">
                <div className="mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 20.6667C11.7267 20.6667 13.6667 18.7267 13.6667 16.3333C13.6667 13.94 11.7267 12 9.33333 12C6.94 12 5 13.94 5 16.3333C5 18.7267 6.94 20.6667 9.33333 20.6667Z" fill="#8B5CF6" fillOpacity="0.6" />
                    <path d="M9.33334 22.6667C6.38667 22.6667 0.666672 24.14 0.666672 27.0667V28C0.666672 28.5533 1.11334 29 1.66667 29H17C17.5533 29 18 28.5533 18 28V27.0667C18 24.14 12.28 22.6667 9.33334 22.6667Z" fill="#8B5CF6" fillOpacity="0.6" />
                    <path d="M22.6667 20.6667C25.06 20.6667 27 18.7267 27 16.3333C27 13.94 25.06 12 22.6667 12C20.2733 12 18.3333 13.94 18.3333 16.3333C18.3333 18.7267 20.2733 20.6667 22.6667 20.6667Z" fill="#8B5CF6" fillOpacity="0.6" />
                    <path d="M22.6667 22.6667C19.72 22.6667 14 24.14 14 27.0667V28C14 28.5533 14.4467 29 15 29H30.3333C30.8867 29 31.3333 28.5533 31.3333 28V27.0667C31.3333 24.14 25.6133 22.6667 22.6667 22.6667Z" fill="#8B5CF6" fillOpacity="0.6" />
                  </svg>
                </div>
                <p className="text-white/80 italic mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </MagneticElement>
          ))}
        </div>
      </div>
    </section>
  );
};
