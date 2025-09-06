import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Upload, Map, BarChart3, Shield, Droplets, Zap, Users } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Water Quality
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                Monitoring Platform
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Submit sensor data, get instant AI predictions, and protect your community 
              with real-time water quality insights and safety alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/upload">Upload Data Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/map">View Risk Map</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Comprehensive Water Quality Monitoring
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform combines sensor data analysis with community reporting 
              to provide accurate, real-time water quality assessments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description, href }) => (
              <Card key={title} className="group hover:shadow-water transition-all duration-300 cursor-pointer">
                <Link to={href}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Communities Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              Real impact through advanced water quality monitoring
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-primary-foreground">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Start Monitoring Water Quality Today
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of communities using AquaScan to ensure safe, clean water for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/upload">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
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