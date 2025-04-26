
import { MagneticElement } from './MagneticElement';
import { GlitchText } from './GlitchText';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <GlitchText text="CRAFTED " className="text-neon-purple neon-glow-purple" />
              <GlitchText text="INTERFACES" className="text-neon-purple neon-glow-purple"/>
            </h3>
            <p className="text-white/70 leading-relaxed">
              Pushing the boundaries of digital experiences with cutting-edge technology and visionary design.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors hover:underline">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors hover:underline">About</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors hover:underline">Projects</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors hover:underline">Services</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="/services" className="hover:text-white transition-colors hover:underline">3D Web Experiences</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors hover:underline">Motion Design</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors hover:underline">Interactive Development</a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors hover:underline">Digital Transformation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 flex-grow focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-neon-purple/30 hover:bg-neon-purple/50 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} CraftedInterfaces. All rights reserved.
          </p>
          
          {/* <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Cookies</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
