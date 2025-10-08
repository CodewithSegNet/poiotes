import { useState } from 'react';
import { Separator } from './ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Github, Linkedin, Twitter, Mail, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfService } from './TermsOfService';
import logo from '../../assets/6018d5b5db18745b2677d5ea328ff26f9da37e93.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const services = [
    'Web Applications',
    'Mobile Development',
    'Cloud Solutions',
    'Custom Software',
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/poietes.ng?igsh=MXM0aHZoNGdqanE1ZA==', label: 'Instagram' },
    { icon: Facebook, href: 'https://web.facebook.com/share/p/1C8MkwWWbz/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/poietes_ng?s=21&t=0tX_EQzK745Dxkp54q1DPA', label: 'Twitter' },
    { icon: WhatsAppIcon, href: 'https://wa.me/2348077784848', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:Poietesltd@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10 md:py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4 sm:mb-6 flex items-center gap-3">
                <img 
                  src={logo} 
                  alt="Poietes Logo" 
                  className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 object-contain"
                />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md leading-relaxed">
                Building software solutions that improve business operations and drive 
                sustainable growth. Transform your ideas into scalable reality.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-muted hover:bg-yellow-300/20 hover:text-yellow-300 rounded-lg transition-all duration-150 hover:scale-105"
                    aria-label={social.label}
                  >
                    <social.icon className="size-4 sm:size-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-150"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-3 sm:mb-4 text-base sm:text-lg">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-sm sm:text-base text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <div className="py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Poietes. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <button 
                onClick={() => setShowPrivacyPolicy(true)}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setShowTermsOfService(true)}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacyPolicy} onOpenChange={setShowPrivacyPolicy}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] bg-background/95 backdrop-blur-md border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-yellow-300">Privacy Policy</DialogTitle>
          </DialogHeader>
          <PrivacyPolicy />
        </DialogContent>
      </Dialog>

      {/* Terms of Service Modal */}
      <Dialog open={showTermsOfService} onOpenChange={setShowTermsOfService}>
        <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] bg-background/95 backdrop-blur-md border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-yellow-300">Terms of Service</DialogTitle>
          </DialogHeader>
          <TermsOfService />
        </DialogContent>
      </Dialog>
    </footer>
  );
}