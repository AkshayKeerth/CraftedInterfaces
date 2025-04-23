
import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = () => {
      const hoverable = document.querySelectorAll('a, button, [data-cursor-hover]');
      
      hoverable.forEach(element => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleVisibility = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleVisibility);
    
    // Initial scan for hoverable elements
    updateHoverState();

    // Set up mutation observer to detect new hoverable elements
    const observer = new MutationObserver(() => {
      updateHoverState();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleVisibility);
      observer.disconnect();
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    const links = document.querySelectorAll('a, button, [data-cursor-hover]');
    links.forEach(link => {
      link.style.cursor = 'none';
    });
    
    return () => {
      document.body.style.cursor = '';
      links.forEach(link => {
        link.style.cursor = '';
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="cursor-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isClicking ? 0.5 : 1,
        }}
      />
      <div 
        className={`cursor-outline ${isHovering ? 'cursor-hovering' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
          opacity: 0.8
        }}
      />
    </>
  );
};
