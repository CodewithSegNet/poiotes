import { useState, useEffect, useRef } from 'react';

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth animation
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-all duration-200 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isHovering ? 'scale-125' : 'scale-100'}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Glass-like tilted square design */}
      <div className="relative">
        {/* Main glass square */}
        <div className={`w-6 h-6 backdrop-blur-md bg-yellow-300/20 border border-yellow-300/30 shadow-lg transition-all duration-200 ${
          isHovering ? 'rotate-45 bg-yellow-300/30 border-yellow-300/50' : 'rotate-12'
        }`}>
          {/* Inner glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
          
          {/* Subtle highlight on top edge */}
          <div className="absolute top-0 left-1 right-1 h-px bg-white/40"></div>
          
          {/* Side highlight */}
          <div className="absolute top-1 left-0 bottom-1 w-px bg-white/30"></div>
        </div>
        
        {/* Outer glow effect */}
        <div className={`absolute inset-0 bg-yellow-300/10 blur-md transition-all duration-200 ${
          isHovering ? 'scale-150 bg-yellow-300/20' : 'scale-110'
        }`}></div>
        
        {/* Soft ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className={`bg-yellow-300/10 rounded-full blur-lg transition-all duration-200 ${
            isHovering ? 'w-10 h-10 bg-yellow-300/15' : 'w-8 h-8'
          }`}></div>
        </div>
      </div>
    </div>
  );
}