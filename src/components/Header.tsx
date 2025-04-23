
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useWindowScroll } from 'react-use';
import { MagneticElement } from './MagneticElement';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y } = useWindowScroll();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 2.5,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          y > 50 ? 'py-4 neo-blur' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gradient">
            <span className="text-neon-purple neon-glow-purple">FUTURE</span>
            <span className="text-white">TECH</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <MagneticElement key={item.label} strength={0.2}>
                <a
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </MagneticElement>
            ))}

            <MagneticElement>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2 text-white transition-colors">
                Let's talk
              </button>
            </MagneticElement>
          </nav>

          <button
            className="md:hidden text-white flex flex-col space-y-1.5 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="space-y-8 text-center">
          {navItems.map((item) => (
            <div key={item.label} className="block">
              <a
                href={item.href}
                className="text-2xl font-medium text-white"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </div>
          ))}

          <div className="pt-8">
            <button
              className="bg-neon-purple/20 hover:bg-neon-purple/30 text-white py-3 px-8 rounded-full 
              border border-neon-purple transition-all neon-glow-purple font-medium tracking-wider"
              onClick={toggleMenu}
            >
              Let's talk
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};
