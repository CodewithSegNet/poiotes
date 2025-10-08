import { Button } from './ui/button';
import { ArrowRight, Code, Rocket, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Enhanced Grid/Knit Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/20">
        {/* Base grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Diagonal crosshatch overlay */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Subtle knit-like texture */}
        <div 
          className="absolute inset-0 opacity-6"
          style={{
            backgroundImage: `
              radial-gradient(circle at 0% 50%, rgba(255,255,255,0.03) 50%, transparent 50%),
              radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 50%, transparent 50%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        />
        
        {/* Animated mouse follower - hidden on mobile for performance */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-300 hidden sm:block"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 25%, transparent 50%)`
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300/20 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-yellow-300/25 rounded-full animate-pulse delay-500" />
          <div className="absolute top-1/6 right-1/2 w-1 h-1 bg-primary/20 rounded-full animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/15 rounded-full animate-pulse delay-300" />
        </div>
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Icons */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 opacity-60">
            <Code className="size-5 sm:size-6 text-primary" />
            <Rocket className="size-5 sm:size-6 text-primary" />
            <Zap className="size-5 sm:size-6 text-primary" />
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4">
              Build <span className="text-yellow-300">Software</span>
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              That <span className="text-primary">Scales</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            We craft innovative software solutions that improve your business operations 
            and drive sustainable growth. Let's transform your ideas into scalable reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-yellow-300/10 backdrop-blur-sm border border-yellow-300/20 hover:bg-yellow-300/20 hover:border-yellow-300/30 text-yellow-300 hover:text-yellow-200 shadow-lg hover:shadow-yellow-300/20 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 size-4 sm:size-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-sm sm:max-w-md mx-auto">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '5+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl text-primary mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}