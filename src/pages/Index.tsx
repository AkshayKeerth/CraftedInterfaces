
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeScene } from '@/components/ThreeScene';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { Services } from '@/components/sections/Services';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Footer } from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // to scroll to top on route change
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      ScrollTrigger.clearMatchMedia();
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-background text-white">
      <ThreeScene />
      <Navbar />
      <main className="pt-20"> 
        <Hero 
          headline="Hi, I'm Akshay — I craft stunning, modern websites that convert."
          subheadline="Freelance Web Designer & Developer for agencies, creators, and startups."
          ctaText="Let's Work Together"
        />
        <ClientLogos />
        <Services />
        <FeaturedProjects />
        <Testimonials />
        <CtaBanner 
          heading="Ready to build something amazing?" 
          ctaText="Start a Project"
        />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
