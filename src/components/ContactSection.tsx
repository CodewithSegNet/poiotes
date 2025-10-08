import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog';
import { Mail, Phone, MapPin, Send, ArrowRight, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

export function ContactSection() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [pendingEmailData, setPendingEmailData] = useState<{
    subject: string;
    body: string;
    mailtoLink: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct email content
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `Hello Poietes Team,

I'm interested in discussing a potential project with you.

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not specified'}

Project Details:
${formData.message}

Best regards,
${formData.name}`;

    // Create mailto link
    const mailtoLink = `mailto:Poietesltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Simulate form processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store email data and show permission dialog
    setPendingEmailData({ subject, body, mailtoLink });
    setShowEmailDialog(true);
    setIsSubmitting(false);
  };

  const handleEmailConfirm = () => {
    if (pendingEmailData) {
      // Create and trigger anchor element click
      const link = document.createElement('a');
      link.href = pendingEmailData.mailtoLink;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Opening your email client to send the message to Poietes!');
      setFormData({ name: '', email: '', company: '', message: '' });
    }
    setShowEmailDialog(false);
    setPendingEmailData(null);
  };

  const handleEmailCancel = () => {
    setShowEmailDialog(false);
    setPendingEmailData(null);
    toast.info('Message not sent. You can try again or contact us directly.');
  };

  const contactCards = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Poietesltd@gmail.com',
      href: 'mailto:Poietesltd@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 807 778 4848',
      href: 'tel:+2348077784848'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'FCT Abuja, Nigeria',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div>
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Let's Start <span className="text-yellow-300">Building</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
                Ready to transform your ideas into powerful software? Let's discuss your project and explore the possibilities together.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className={index === 2 ? 'sm:col-span-2 md:col-span-1' : ''}
                >
                  <Card className="relative p-4 sm:p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-300/30 transition-all duration-150 group shadow-lg hover:shadow-yellow-300/10 overflow-hidden">
                    {/* Glass effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-yellow-300/10 backdrop-blur-sm rounded-full mb-3 sm:mb-4 group-hover:bg-yellow-300/20 transition-all duration-150 border border-yellow-300/20 group-hover:border-yellow-300/30">
                        <card.icon className="size-5 sm:size-6 text-yellow-300" />
                      </div>
                      <h4 className="mb-2 text-sm sm:text-base group-hover:text-yellow-300 transition-colors duration-150">{card.title}</h4>
                      {card.href ? (
                        <a 
                          href={card.href}
                          className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-150 hover:text-yellow-300 cursor-pointer break-all"
                        >
                          {card.value}
                        </a>
                      ) : (
                        <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-150">{card.value}</p>
                      )}
                    </div>
                    
                    <div className="absolute inset-0 bg-yellow-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                  </Card>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div>
              <Card className="relative p-8 md:p-10 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                {/* Glass reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30"></div>
                
                {/* Top highlight line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl mb-3">Ready to Get Started?</h3>
                    <p className="text-muted-foreground">Tell us about your project and we'll get back to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-yellow-300">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="h-12 bg-white/5 backdrop-blur-sm border border-white/20 hover:border-yellow-300/30 focus:border-yellow-300/50 transition-all duration-150 placeholder:text-muted-foreground/60"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-yellow-300">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                          className="h-12 bg-white/5 backdrop-blur-sm border border-white/20 hover:border-yellow-300/30 focus:border-yellow-300/50 transition-all duration-150 placeholder:text-muted-foreground/60"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company or organization"
                        className="h-12 bg-white/5 backdrop-blur-sm border border-white/20 hover:border-yellow-300/30 focus:border-yellow-300/50 transition-all duration-150 placeholder:text-muted-foreground/60"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-yellow-300">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, timeline, budget, and how we can help bring your vision to life..."
                        rows={5}
                        required
                        className="bg-white/5 backdrop-blur-sm border border-white/20 hover:border-yellow-300/30 focus:border-yellow-300/50 transition-all duration-150 resize-none placeholder:text-muted-foreground/60"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 group bg-yellow-300/10 backdrop-blur-sm border border-yellow-300/20 hover:bg-yellow-300/20 hover:border-yellow-300/30 text-yellow-300 hover:text-yellow-200 shadow-lg hover:shadow-yellow-300/20 transition-all duration-150"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full w-5 h-5 border-2 border-current border-t-transparent mr-3" />
                            Sending your message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="ml-3 size-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Email Permission Dialog */}
        <AlertDialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
          <AlertDialogContent className="bg-background/95 backdrop-blur-md border border-white/10">
            <AlertDialogHeader>
              <AlertDialogTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-300/10 backdrop-blur-sm rounded-full border border-yellow-300/20">
                  <ExternalLink className="size-6 text-yellow-300" />
                </div>
                Open Email?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-muted-foreground leading-relaxed">
                We'll open your default email (Gmail, Outlook, etc.) with a pre-filled message to{' '}
                <span className="text-yellow-300 font-medium">Poietesltd@gmail.com</span>. 
                <br /><br />
                Your message includes:
                <br />• Your contact information
                <br />• Project details you provided
                <br />• A professional greeting to our team
                <br /><br />
                You'll be able to review and edit the message before sending.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleEmailCancel} className="bg-muted/50 hover:bg-muted/70">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleEmailConfirm}
                className="bg-yellow-300/10 hover:bg-yellow-300/20 text-yellow-300 hover:text-yellow-200 border border-yellow-300/20 hover:border-yellow-300/30"
              >
                <Mail className="size-4 mr-2" />
                Open Email
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
}