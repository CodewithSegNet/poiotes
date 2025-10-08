import { Card } from './ui/card';
import { Button } from './ui/button';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Cog, 
  BarChart3,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function ServicesSection() {

  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with the latest technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Solutions', 'Content Management Systems']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
      features: ['iOS & Android Apps', 'React Native', 'Cross-platform Solutions', 'App Store Optimization']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services that grow with your business needs and ensure reliability.',
      features: ['AWS & Azure', 'Microservices Architecture', 'DevOps & CI/CD', 'Auto-scaling Solutions']
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Robust backend architectures that handle complex business logic and ensure data integrity.',
      features: ['RESTful APIs', 'Database Design', 'Authentication Systems', 'Real-time Features']
    },
    {
      icon: Cog,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business requirements and workflows.',
      features: ['Business Automation', 'Workflow Optimization', 'Integration Solutions', 'Legacy Modernization']
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      description: 'Data-driven insights and business intelligence tools to help you make informed decisions.',
      features: ['Data Visualization', 'Reporting Dashboards', 'Predictive Analytics', 'Performance Monitoring']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div>
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Our <span className="text-yellow-300">Services</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                From concept to deployment, we offer comprehensive software development 
                services that cover every aspect of your digital transformation journey.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {services.map((service, index) => (
                <div key={index}>
                  <Card className="relative p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-300/30 transition-all duration-300 hover:scale-[1.01] group shadow-2xl hover:shadow-yellow-300/10 overflow-hidden h-full">
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                    
                    {/* Top highlight line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    {/* Left highlight line */}
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-yellow-300/10 backdrop-blur-sm rounded-xl mb-4 sm:mb-6 group-hover:bg-yellow-300/20 transition-all duration-150 border border-yellow-300/20 group-hover:border-yellow-300/30">
                        <service.icon className="size-6 sm:size-8 text-yellow-300 group-hover:scale-105 transition-transform duration-150" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 group-hover:text-yellow-300 transition-colors duration-150">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-150">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className="flex items-center text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-150"
                          >
                            <CheckCircle className="size-3 sm:size-4 text-yellow-300 mr-2 flex-shrink-0 group-hover:text-yellow-300 transition-colors duration-150" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Subtle hover glow */}
                    <div className="absolute inset-0 bg-yellow-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </Card>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="relative text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30"></div>
              
              {/* Top highlight line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Ready to <span className="text-yellow-300">Transform</span> Your Business?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                  Let's discuss how our expertise can help you build software solutions 
                  that drive growth and create lasting value for your business.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="group w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-yellow-300/10 backdrop-blur-sm border border-yellow-300/20 hover:bg-yellow-300/20 hover:border-yellow-300/30 text-yellow-300 hover:text-yellow-200 shadow-lg hover:shadow-yellow-300/20 transition-all duration-150"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 size-4 sm:size-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}