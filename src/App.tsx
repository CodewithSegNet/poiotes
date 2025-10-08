import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { LogoReveal } from './components/LogoReveal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import favicon from '../assets/ef97fa2143deeaeef7998dc123cce76d82e4e8c8.png';

export default function App() {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    // Add preload class to prevent animation flicker
    document.body.classList.add('preload');
    
    // Ensure dark mode is always active
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize page ready state after a brief delay to ensure smooth loading
    const readyTimer = setTimeout(() => {
      // Remove preload class to enable animations
      document.body.classList.remove('preload');
      setIsPageReady(true);
    }, 300);

    // Update favicon with new logo - enhanced implementation
    const updateFavicon = () => {
      try {
        console.log('Updating favicon with new logo:', favicon);
        
        // Remove existing favicon links more thoroughly
        const existingFavicons = document.querySelectorAll(
          "link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon'], link[rel='apple-touch-icon-precomposed']"
        );
        existingFavicons.forEach(link => {
          console.log('Removing existing favicon:', link.href);
          link.remove();
        });

        // Create main favicon
        const faviconLink = document.createElement('link');
        faviconLink.rel = 'icon';
        faviconLink.type = 'image/png';
        faviconLink.href = favicon;
        
        // Create shortcut icon (fallback for older browsers)
        const shortcutIcon = document.createElement('link');
        shortcutIcon.rel = 'shortcut icon';
        shortcutIcon.type = 'image/png';
        shortcutIcon.href = favicon;
        
        // Create sized icons for better compatibility
        const faviconLink32 = document.createElement('link');
        faviconLink32.rel = 'icon';
        faviconLink32.type = 'image/png';
        faviconLink32.sizes = '32x32';
        faviconLink32.href = favicon;

        const faviconLink16 = document.createElement('link');
        faviconLink16.rel = 'icon';
        faviconLink16.type = 'image/png';
        faviconLink16.sizes = '16x16';
        faviconLink16.href = favicon;

        // Apple touch icon for iOS devices
        const appleTouchIcon = document.createElement('link');
        appleTouchIcon.rel = 'apple-touch-icon';
        appleTouchIcon.sizes = '180x180';
        appleTouchIcon.href = favicon;

        // Add all favicon links to document head
        const faviconLinks = [faviconLink, shortcutIcon, faviconLink32, faviconLink16, appleTouchIcon];
        faviconLinks.forEach(link => {
          document.head.appendChild(link);
          console.log('Added favicon link:', link.rel, link.sizes || 'default');
        });

        // Force favicon refresh
        setTimeout(() => {
          // Create a temporary link to force browser refresh
          const tempLink = document.createElement('link');
          tempLink.rel = 'icon';
          tempLink.href = favicon + '?v=' + Date.now();
          document.head.appendChild(tempLink);
          
          setTimeout(() => {
            tempLink.remove();
          }, 100);
        }, 100);

        console.log('Favicon update completed successfully');
      } catch (error) {
        console.error('Error updating favicon:', error);
      }
    };

    // Update document title as well
    document.title = 'Poietes - Software Development Solutions';

    // Update favicon after a short delay to ensure the page is fully loaded
    setTimeout(updateFavicon, 100);
    
    return () => {
      clearTimeout(readyTimer);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground transition-opacity duration-500 ${isPageReady ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Navigation />
      <main>
        <HeroSection />
        <LogoReveal />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}