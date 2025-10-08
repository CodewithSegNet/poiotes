import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Mobile Navigation Toggle - Fixed positioned */}
      <div className="md:hidden fixed top-16 sm:top-20 md:top-24 right-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-background/80 backdrop-blur-md"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Desktop Vertical Navigation */}
      <nav className="hidden md:fixed md:top-20 lg:top-28 md:right-4 lg:right-6 md:z-50 md:flex md:flex-col">
        <div className="bg-background/90 backdrop-blur-md border border-border rounded-lg p-3 lg:p-4 shadow-xl">
          <div className="flex flex-col space-y-3 lg:space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center px-3 lg:px-4 py-2 lg:py-3 rounded-md text-left transition-all duration-200 hover:text-primary group"
              >
                {/* Circle indicator */}
                <div 
                  className={`w-2 h-2 rounded-full mr-2 lg:mr-3 transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-yellow-300' 
                      : 'bg-white/20 group-hover:bg-yellow-300/60'
                  }`}
                />
                <span className={`text-sm lg:text-base transition-colors duration-200 ${
                  activeSection === item.id ? 'text-yellow-300' : 'text-muted-foreground'
                }`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-md">
          <div className="fixed top-16 sm:top-20 md:top-24 right-4 left-4">
            <div className="bg-background border border-border rounded-lg p-4 sm:p-6 shadow-lg">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center px-3 sm:px-4 py-2 sm:py-3 rounded-md text-left transition-all duration-200 hover:text-primary group"
                  >
                    {/* Circle indicator */}
                    <div 
                      className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                        activeSection === item.id 
                          ? 'bg-yellow-300' 
                          : 'bg-white/20 group-hover:bg-yellow-300/60'
                      }`}
                    />
                    <span className={`text-sm sm:text-base transition-colors duration-200 ${
                      activeSection === item.id ? 'text-yellow-300' : 'text-muted-foreground'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}