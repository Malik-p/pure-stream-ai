import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Upload, Map, BarChart3, Shield, Droplets, Zap, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-water-quality.jpg";

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload Sensor Data",
      description: "Submit pH, TDS, and contamination data for instant AI analysis",
      href: "/upload",
    },
    {
      icon: Map,
      title: "Interactive Risk Map",
      description: "View real-time water quality zones across your region",
      href: "/map",
    },
    {
      icon: BarChart3,
      title: "Track History",
      description: "Monitor trends and improvements in water quality over time",
      href: "/history",
    },
  ];

  const stats = [
    { label: "Water Samples Analyzed", value: "25,000+", icon: Droplets },
    { label: "AI Accuracy Rate", value: "97.5%", icon: Zap },
    { label: "Communities Served", value: "150+", icon: Users },
    { label: "Safety Alerts Sent", value: "1,200+", icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Particles */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Floating Particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating-element">
          <div className="w-16 h-16 bg-primary-glow/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 floating-element">
          <div className="w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-20 left-20 floating-element">
          <div className="w-20 h-20 bg-primary-glow/30 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="fade-in-up">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 pulse-glow">
                <Sparkles className="w-4 h-4 text-primary-glow" />
                <span className="text-sm font-medium">AI-Powered Water Monitoring</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight fade-in-up fade-in-up-delay-1">
              Revolutionary Water Quality
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent shimmer">
                Monitoring Platform
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto fade-in-up fade-in-up-delay-2">
              Submit sensor data, get instant AI predictions, and protect your community 
              with real-time water quality insights and safety alerts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up fade-in-up-delay-3">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 scale-on-hover pulse-glow">
                <Link to="/upload">Upload Data Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 scale-on-hover">
                <Link to="/map">View Risk Map</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 shimmer opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text fade-in-up">
              Comprehensive Water Quality Monitoring
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up fade-in-up-delay-1">
              Our AI-powered platform combines sensor data analysis with community reporting 
              to provide accurate, real-time water quality assessments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description, href }, index) => (
              <Card key={title} className={`group hover:shadow-glow transition-all duration-500 cursor-pointer border-primary/20 hover:border-primary/40 card-hover fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                <Link to={href}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 pulse-glow">
                      <Icon className="w-8 h-8 text-primary-foreground rotate-slow" />
                    </div>
                    <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base group-hover:text-foreground transition-colors duration-300">
                      {description}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text fade-in-up">
              Trusted by Communities Worldwide
            </h2>
            <p className="text-lg text-muted-foreground fade-in-up fade-in-up-delay-1">
              Real impact through advanced water quality monitoring
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ label, value, icon: Icon }, index) => (
              <div key={label} className={`text-center group cursor-pointer fade-in-up`} style={{animationDelay: `${index * 0.15}s`}}>
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:pulse-glow transition-all duration-300 bounceGentle">
                  <Icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300">{value}</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="floating-element absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="floating-element absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="floating-element absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 fade-in-up">
              Start Monitoring Water Quality Today
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 fade-in-up fade-in-up-delay-1">
              Join thousands of communities using AquaScan to ensure safe, clean water for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up fade-in-up-delay-2">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 scale-on-hover pulse-glow">
                <Link to="/upload">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 scale-on-hover">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;