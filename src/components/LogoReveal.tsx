import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation, heroAnimation, textAnimation, fadeInUp } from './hooks/useScrollAnimation';
import logoImage from '../../assets/logo.png';

function LogoReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // useScrollAnimation likely returns { ref, isVisible } 
  // where ref should be attached to the element you want to observe
  const { ref: animationRef, isVisible } = useScrollAnimation({ 
    threshold: 0.3,
    delay: 400
  }) as { ref: React.RefObject<HTMLHeadingElement>; isVisible: boolean };
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for different elements
  const logoScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1.1, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.3, 1, 1]);
  const logoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -2]);
  
  // Background gradient animation
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 0.8, 0.3]);
  
  // Text reveal animations
  const textY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [50, 20, 0, -20]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0, 1, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background/95 to-muted/20"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-yellow-300/10"
        style={{ opacity: backgroundOpacity }}
      />
      
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #facc15 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, #facc15 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo Container */}
          <motion.div 
            className="relative mb-8 sm:mb-12 flex items-center justify-center"
            style={{ 
              scale: logoScale,
              opacity: logoOpacity,
              rotate: logoRotate
            }}
          >
            {/* Glow Effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-yellow-300/20 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
              style={{ 
                width: '120%', 
                height: '120%',
                left: '-10%',
                top: '-10%'
              }}
            />

            {/* Main Logo */}
            <motion.div 
              className="relative z-10 p-8 sm:p-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <img 
                src={logoImage} 
                alt="Poietes Logo" 
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain mx-auto filter drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(250, 204, 21, 0.3)) drop-shadow(0 0 100px rgba(250, 204, 21, 0.2))'
                }}
              />
            </motion.div>

            {/* Animated Border Elements */}
            <motion.div 
              className="absolute inset-0 rounded-2xl border border-yellow-300/10"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }
              }}
            />
            
            <motion.div 
              className="absolute inset-4 rounded-xl border border-yellow-300/5"
              animate={{
                rotate: [360, 0],
                scale: [1.02, 1, 1.02]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 10, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }
              }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            style={{ 
              y: textY,
              opacity: textOpacity 
            }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              ref={animationRef}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={heroAnimation}
            >
              <span className="bg-gradient-to-r from-foreground via-yellow-300 to-foreground bg-clip-text text-transparent">
                Poietes
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              variants={textAnimation}
            >
              Crafting <span className="text-yellow-300 font-medium">exceptional software</span> that transforms businesses and drives innovation forward.
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div 
              className="flex items-center justify-center mt-12 sm:mt-16"
              variants={fadeInUp}
            >
              <motion.div 
                className="flex flex-col items-center space-y-2 text-muted-foreground/60"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="text-sm tracking-wider uppercase">Discover More</span>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-yellow-300/50 to-transparent" />
                <motion.div 
                  className="w-2 h-2 rounded-full bg-yellow-300/80"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-300/40 rounded-full"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0
        }}
      />
      
      <motion.div 
        className="absolute top-3/4 right-1/3 w-1 h-1 bg-yellow-300/60 rounded-full"
        animate={{
          y: [0, 40, 0],
          x: [0, -15, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div 
        className="absolute bottom-1/3 left-1/6 w-3 h-3 bg-yellow-300/30 rounded-full"
        animate={{
          y: [0, -50, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
      />
    </section>
  );
}

export { LogoReveal };