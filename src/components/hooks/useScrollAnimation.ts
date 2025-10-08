import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 100
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add a small delay to ensure smooth initial page load
    const initTimer = setTimeout(() => {
      setHasInitialized(true);
    }, delay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animations after initialization
        if (!hasInitialized) return;
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Start observing after initialization
    if (hasInitialized) {
      observer.observe(element);
    }

    return () => {
      clearTimeout(initTimer);
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasInitialized]);

  return { ref: elementRef, isVisible: isVisible && hasInitialized };
}

// Professional Enterprise Animation System
// Inspired by Microsoft, AWS, Google, Apple and other enterprise companies
// Focuses on: Performance, Accessibility, Professional Feel, Subtle Elegance

// Professional easing curves used by enterprise companies
const ENTERPRISE_EASING = {
  // Standard easing for most animations (used by Apple, Microsoft)
  standard: [0.25, 0.1, 0.25, 1],
  // Smooth deceleration (used by Google Material Design)
  decelerate: [0.0, 0.0, 0.2, 1],
  // Smooth acceleration (subtle entry animations)
  accelerate: [0.4, 0.0, 1, 1],
  // Sharp entrance (for important elements)
  sharp: [0.4, 0.0, 0.6, 1],
  // Linear for continuous animations
  linear: [0, 0, 1, 1]
} as const;

// Professional timing scales (enterprise standard)
const TIMING = {
  // Micro-interactions (buttons, toggles)
  micro: 0.15,
  // Standard UI animations 
  standard: 0.3,
  // Complex layout changes
  complex: 0.5,
  // Page transitions
  page: 0.7
} as const;

// Stagger timing for enterprise feel
const STAGGER = {
  tight: 0.05,    // For closely related items
  standard: 0.1,  // For card grids, lists
  relaxed: 0.15   // For major sections
} as const;

// Core professional animation variants
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 24,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const fadeInDown = {
  hidden: {
    opacity: 0,
    y: -24,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -32,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 32,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const slideInUp = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.complex,
      ease: ENTERPRISE_EASING.standard
    }
  }
};

// Professional container variants for staggered animations
export const staggerContainer = {
  hidden: {
    transition: {
      staggerChildren: STAGGER.standard,
      delayChildren: 0
    }
  },
  visible: {
    transition: {
      staggerChildren: STAGGER.standard,
      delayChildren: 0.1
    }
  }
};

export const staggerTightContainer = {
  hidden: {
    transition: {
      staggerChildren: STAGGER.tight,
      delayChildren: 0
    }
  },
  visible: {
    transition: {
      staggerChildren: STAGGER.tight,
      delayChildren: 0.05
    }
  }
};

export const staggerRelaxedContainer = {
  hidden: {
    transition: {
      staggerChildren: STAGGER.relaxed,
      delayChildren: 0
    }
  },
  visible: {
    transition: {
      staggerChildren: STAGGER.relaxed,
      delayChildren: 0.2
    }
  }
};

// Specialized enterprise animations
export const heroAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.complex,
      ease: ENTERPRISE_EASING.standard,
      delay: 0.1
    }
  }
};

export const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const iconAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const textAnimation = {
  hidden: {
    opacity: 0,
    y: 12,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const buttonAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.decelerate
    }
  }
};

export const sectionAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: TIMING.micro,
      ease: ENTERPRISE_EASING.sharp
    }
  },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.complex,
      ease: ENTERPRISE_EASING.standard,
      delay: 0.1
    }
  }
};

// Accessibility-conscious reduced motion variants
export const reducedMotionFadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.standard,
      ease: ENTERPRISE_EASING.linear
    }
  }
};

// Enterprise hover effects for interactive elements
export const hoverScale = {
  scale: 1.02,
  transition: {
    duration: TIMING.micro,
    ease: ENTERPRISE_EASING.standard
  }
};

export const hoverLift = {
  y: -2,
  transition: {
    duration: TIMING.micro,
    ease: ENTERPRISE_EASING.standard
  }
};

// Legacy animation aliases for backward compatibility
export const slideInBottom = fadeInUp;
export const slideInLeft = fadeInLeft;
export const slideInRight = fadeInRight;
export const bounceIn = scaleIn;
export const rotateSlideContainer = staggerContainer;
export const zoomRotate = scaleIn;
export const flipIn = slideInUp;
export const elasticScale = scaleIn;
export const morphSlide = fadeInLeft;
export const wobbleIn = iconAnimation;
export const cascadeContainer = staggerContainer;
export const magneticPull = fadeInDown;
export const liquidFlow = fadeInRight;
export const breatheScale = scaleIn;
export const spiralEntry = slideInUp;
export const wavePulse = textAnimation;
export const quantumContainer = staggerRelaxedContainer;