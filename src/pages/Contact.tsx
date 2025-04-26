
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeScene } from '@/components/ThreeScene';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MagneticElement } from '@/components/MagneticElement';
import { GlitchText } from '@/components/GlitchText';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kadali-akshay-800703300/",
      iconUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SL2Gf-U_ixigPGDa-r4JQwHaHa%26pid%3DApi&f=1&ipt=f4c5d58dbaf98892e492659e5b7909cf74d78e2c23b7b3e84cceab5e4fe2fd42&ipo=images",
      color: "bg-[#0077B5]/20 border-[#0077B5]"
    },
    {
      name: "Twitter",
      url: "https://x.com/AkshayKeerth",
      iconUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._QMmlGy3ld9UFQTIXLGotwAAAA%26pid%3DApi&f=1&ipt=8ebf8972e7eee6aa878634662f724f92796e195bb0d19a2274426a54e08fe709&ipo=images",
      color: "bg-[#1DA1F2]/20 border-[#1DA1F2]"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/kadali.sravanthi.3",
      iconUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tkUWV6h-KefH5AGFoSqtMgHaHa%26pid%3DApi&f=1&ipt=74653d12f0de27ebc26c8819c85c36d0c81ed68dad8e522d882e082f40d7f2cc&ipo=images",
      color: "bg-[#1877F3]/20 border-[#1877F3]"
    }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and text
      gsap.from(contentRef.current?.querySelectorAll('h1, p') || [], {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });
      
      // Animate form fields
      gsap.from(formRef.current?.querySelectorAll('.form-field') || [], {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power3.out',
        delay: 1,
      });
      
      // Animate social links
      gsap.from('.social-link', {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)',
        delay: 1.2,
      });
    });
    
    return () => ctx.revert();
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    };

    try {
        await emailjs.send(
            'service_0bb56lp',
            'template_0zw9otc',
            data,
            'JWW66zQBHjOSHocnT'
        );
        toast({
            title: "Message sent!",
            description: "I'll get back to you as soon as possible.",
            style: {
                background: 'rgba(255, 255, 255, 0.8)', // Soft blurry background
                backdropFilter: 'blur(10px)', // Apply blur effect
                color: '#000', // Text color for better visibility
            }
        });
        formRef.current.reset();
    } catch (error) {
        console.error('Failed to send email', error);
    } finally {
        setIsSubmitting(false);
    }
};
  
  return (
    <div className="min-h-screen w-full bg-background text-white">
      <ThreeScene />
      <Navbar />
      
      <main className="pt-24">
        <section ref={sectionRef} className="py-20 md:py-32 px-6 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div ref={contentRef}>
                <span className="text-neon-purple uppercase tracking-widest text-sm font-medium">Get in touch</span>
                <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-6 leading-tight">
                  <GlitchText text="Let's Build Your Next Big Thing" className="text-glow" />
                </h1>
                <p className="text-xl text-white/70 mb-12">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                
                {/* Contact details */}
                <div className="space-y-6 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a href="mailto:hello@yoursite.com" className="text-neon-purple hover:text-neon-purple/80 transition-colors">
                      akshay.keerth.kadali@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">Location</h3>
                    <p className="text-white/70">Karnataka, India</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((link, index) => (
                      <MagneticElement key={index} strength={0.3}>
                        <a
                          href={link.url}
                          className={`social-link w-12 h-12 rounded-full ${link.color} border flex items-center justify-center text-white hover:scale-110 transition-transform`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={link.name}
                        >
                          <img
                            src={link.iconUrl}
                            alt={link.name}
                            className="w-6 h-6 object-contain"
                          />
                        </a>
                      </MagneticElement>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="glass rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-field">
                    <label className="block text-white/80 mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 
                      focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors rounded-[15px]"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="block text-white/80 mb-2" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors rounded-[15px]"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="block text-white/80 mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors rounded-[15px]"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="block text-white/80 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-colors rounded-[15px]"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <div className="form-field">
                    <MagneticElement strength={0.2}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-neon-purple/20 hover:bg-neon-purple/30 border border-neon-purple text-white font-bold py-3 transition-all duration-300 transition-colors rounded-[15px]"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </MagneticElement>
                  </div>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-white/50 text-sm">
                    Or book a free consultation call
                  </p>
                  <MagneticElement strength={0.1}>
                    <a
                      href="https://calendly.com/akshay-keerth-kadali"
                      className="text-neon-blue hover:text-neon-blue/80 transition-colors inline-flex items-center gap-1 mt-2"
                    >
                      Schedule a Call
                      <span className="inline-block">→</span>
                    </a>
                  </MagneticElement>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map or additional content section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Need answers fast?</h2>
            <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6 text-left">
                {[
                  {
                    q: "How quickly can we start working together?",
                    a: "I typically can start new projects within 2 weeks of our initial conversation, depending on my current workload."
                  },
                  {
                    q: "What information do you need to provide a quote?",
                    a: "To provide an accurate quote, I'll need to know your project goals, scope, timeline, and any specific features or functionality required."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-6">
                    <h4 className="font-medium mb-2">{faq.q}</h4>
                    <p className="text-white/70">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
