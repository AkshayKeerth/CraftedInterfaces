
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
          Clients have come looking for this kind of service from across some of the most popular companies in the world.
        </h2>
        
        <div ref={logosRef} className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Actual client logos */}
          {[
            "https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png",
            "https://i.postimg.cc/DzHYdSjy/FACEBOOK-LOGOemovebg-preview.png",
            "https://logo-base.com/logo/amazon-logo.png",
            "https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.u2QHRj345eWm2XuWsMCD5gHaBa%26pid%3DApi&f=1&ipt=025bf52e86c436852d11a2debe4e5def70c1744fc35e8b6e4658359902ddea1f&ipo=images"
          ].map((src, i) => (
            <div key={i} className="w-24 h-12 bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <img src={src} alt={`Client logo ${i + 1}`} className="max-h-10 max-w-[80px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
