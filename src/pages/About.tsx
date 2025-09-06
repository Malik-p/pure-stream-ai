import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Info, 
  Brain, 
  Shield, 
  Users, 
  Target, 
  Zap, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Droplets
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning models analyze water quality parameters including pH, TDS, and contamination patterns to provide accurate purity assessments."
    },
    {
      icon: Shield,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring and instant alerts help communities respond quickly to water quality issues and protect public health."
    },
    {
      icon: Globe,
      title: "Community Mapping",
      description: "Interactive maps show water quality zones across regions, enabling better resource allocation and targeted interventions."
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Crowdsourced data from multiple sources creates a comprehensive picture of water quality at local and regional levels."
    }
  ];

  const futureFeatures = [
    "Direct sensor integration via IoT devices",
    "Mobile app for field testing",
    "Gamification and community challenges",
    "Advanced predictive analytics",
    "Integration with municipal water systems",
    "Real-time contamination alerts",
    "Water treatment recommendations",
    "Historical trend analysis and reporting"
  ];

  const techStack = [
    { name: "Computer Vision", description: "Image analysis for visual water quality assessment" },
    { name: "Natural Language Processing", description: "Processing user reports and generating insights" },
    { name: "Data Fusion", description: "Combining multiple data sources for accurate predictions" },
    { name: "Machine Learning", description: "Predictive models for water quality assessment" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Droplets className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">About AquaScan</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Democratizing water quality monitoring through AI technology and community collaboration
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              AquaScan is dedicated to making clean, safe water accessible to everyone by providing 
              advanced AI-powered water quality monitoring tools. We believe that real-time data, 
              community collaboration, and cutting-edge technology can help solve one of humanity's 
              most pressing challenges - ensuring access to clean water for all.
            </p>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5" />
              <span>How Our AI Works</span>
            </CardTitle>
            <CardDescription>
              Advanced technology stack for accurate water quality assessment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {techStack.map(({ name, description }) => (
                <div key={name} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold mb-1">{name}</h4>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-secondary p-6 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Multi-Modal Analysis Process</span>
              </h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Sensor data collection (pH, TDS, contamination levels)</li>
                <li>AI model processing using trained water quality datasets</li>
                <li>Cross-validation with historical data and regional patterns</li>
                <li>Generation of purity index and actionable recommendations</li>
                <li>Real-time mapping and community alert distribution</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Platform Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5" />
              <span>Future Development</span>
            </CardTitle>
            <CardDescription>
              Upcoming features and platform enhancements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {futureFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-accent/50 rounded-lg">
              <p className="text-sm text-accent-foreground">
                <strong>Coming Soon:</strong> We're actively working on sensor integration 
                partnerships and mobile app development. Stay tuned for updates on our roadmap!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Impact & Stats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Community Impact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">25K+</div>
                <div className="text-sm text-muted-foreground">Water Samples</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">97.5%</div>
                <div className="text-sm text-muted-foreground">AI Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">1.2K+</div>
                <div className="text-sm text-muted-foreground">Safety Alerts</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Water Quality Revolution</h2>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Help us build a safer, healthier world by contributing to community-driven 
              water quality monitoring. Every test makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/upload">Start Testing Now</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Link to="/map">Explore Map</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;