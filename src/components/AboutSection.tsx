import { Card } from './ui/card';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export function AboutSection() {

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We focus on building software solutions that directly address your business challenges and drive measurable results.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work closely with your team to understand your vision and ensure our solutions align with your goals.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'We leverage cutting-edge technologies and best practices to create scalable, future-proof solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of code quality, performance, and user experience in every project.'
    }
  ];

  const stats = [
    { value: '100%', label: 'On-Time Delivery' },
    { value: '24/7', label: 'Support Available' },
    { value: '50+', label: 'Happy Clients' },
    { value: '∞', label: 'Possibilities' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div>
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                About <span className="text-yellow-300">Poietes</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                We are a passionate team of software developers dedicated to creating solutions 
                that transform businesses and unlock their full potential for growth.
              </p>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl">
                  Empowering Businesses Through <span className="text-yellow-300">Technology</span>
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  At Poietes, we believe that great software should do more than just function—it should 
                  elevate your business to new heights. Our approach combines technical expertise with 
                  deep business understanding to deliver solutions that not only meet your current needs 
                  but also scale with your future ambitions.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  From startups looking to disrupt markets to established enterprises seeking digital 
                  transformation, we partner with businesses across industries to turn their vision 
                  into reality through the power of well-crafted software.
                </p>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={index % 2 === 1 ? 'mt-4 sm:mt-8' : ''}
                    >
                      <Card className="relative p-4 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-300/30 transition-all duration-300 group shadow-lg hover:shadow-yellow-300/10 overflow-hidden">
                        {/* Glass reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                        
                        {/* Top highlight line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        
                        {/* Left highlight line */}
                        <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="text-xl sm:text-2xl md:text-3xl text-yellow-300 mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-150">{stat.value}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-150">{stat.label}</div>
                        </div>
                        
                        {/* Subtle hover glow */}
                        <div className="absolute inset-0 bg-yellow-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div key={index}>
                  <Card className="relative p-4 sm:p-6 text-center bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-300/30 transition-all duration-300 group shadow-lg hover:shadow-yellow-300/10 overflow-hidden h-full">
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                    
                    {/* Top highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    {/* Left highlight line */}
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-yellow-300/10 backdrop-blur-sm rounded-lg mb-3 sm:mb-4 group-hover:bg-yellow-300/20 transition-all duration-150 border border-yellow-300/20 group-hover:border-yellow-300/30">
                        <value.icon className="size-5 sm:size-6 text-yellow-300 group-hover:scale-110 transition-transform duration-150" />
                      </div>
                      <h4 className="mb-2 sm:mb-3 text-base sm:text-lg group-hover:text-yellow-300 transition-colors duration-150">{value.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-150">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 bg-yellow-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}