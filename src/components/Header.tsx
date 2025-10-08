import logo from '../../assets/logo2.png';

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20 sm:h-24 md:h-28 lg:h-32">
          {/* Centered Logo */}
          <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all duration-300"></div>
              <img 
                src={logo} 
                alt="Poietes Logo" 
                className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 object-contain hover:scale-110 transition-all duration-300 filter drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}