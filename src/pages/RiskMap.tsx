import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Map, MapPin, AlertTriangle, Shield, Info, Users } from "lucide-react";

const RiskMap = () => {
  // Madhya Pradesh cities water quality data
  const mpZones = [
    {
      id: 1,
      area: "Bhopal Central",
      city: "Bhopal",
      riskLevel: "medium",
      reports: 34,
      avgPurity: 62,
      lastUpdate: "1 hour ago",
      coordinates: [23.2599, 77.4126],
      population: "~500,000 residents"
    },
    {
      id: 2,
      area: "Indore Industrial",
      city: "Indore", 
      riskLevel: "high",
      reports: 52,
      avgPurity: 38,
      lastUpdate: "45 minutes ago",
      coordinates: [22.7196, 75.8577],
      population: "~800,000 residents"
    },
    {
      id: 3,
      area: "Gwalior Fort Area",
      city: "Gwalior",
      riskLevel: "low",
      reports: 18,
      avgPurity: 76,
      lastUpdate: "3 hours ago",
      coordinates: [26.2183, 78.1828],
      population: "~300,000 residents"
    },
    {
      id: 4,
      area: "Ujjain Temple Zone",
      city: "Ujjain",
      riskLevel: "medium",
      reports: 29,
      avgPurity: 58,
      lastUpdate: "2 hours ago",
      coordinates: [23.1765, 75.7885],
      population: "~200,000 residents"
    },
    {
      id: 5,
      area: "Jabalpur Cantonment",
      city: "Jabalpur",
      riskLevel: "low",
      reports: 15,
      avgPurity: 72,
      lastUpdate: "4 hours ago",
      coordinates: [23.1815, 79.9864],
      population: "~350,000 residents"
    },
    {
      id: 6,
      area: "Sagar University Area",
      city: "Sagar",
      riskLevel: "high",
      reports: 41,
      avgPurity: 35,
      lastUpdate: "1.5 hours ago",
      coordinates: [23.8388, 78.7378],
      population: "~150,000 residents"
    },
    {
      id: 7,
      area: "Dewas Agricultural Zone",
      city: "Dewas",
      riskLevel: "medium",
      reports: 22,
      avgPurity: 64,
      lastUpdate: "6 hours ago",
      coordinates: [22.9676, 76.0534],
      population: "~120,000 residents"
    },
    {
      id: 8,
      area: "Ratlam Railway Junction",
      city: "Ratlam",
      riskLevel: "low",
      reports: 12,
      avgPurity: 78,
      lastUpdate: "5 hours ago",
      coordinates: [23.3315, 75.0367],
      population: "~100,000 residents"
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getRiskBadgeVariant = (level: string) => {
    switch (level) {
      case "low": return "default";
      case "medium": return "secondary";
      case "high": return "destructive";
      default: return "outline";
    }
  };

  const getRiskBgColor = (level: string) => {
    switch (level) {
      case "low": return "bg-success/10 border-success/20";
      case "medium": return "bg-warning/10 border-warning/20";
      case "high": return "bg-destructive/10 border-destructive/20";
      default: return "bg-muted/10";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            Madhya Pradesh Water Quality Map
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time water quality monitoring across major cities in Madhya Pradesh
          </p>
        </div>

        {/* Map Integration Notice */}
        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> Interactive map integration requires backend setup. 
            This demo shows the data structure and UI components that would be populated by a real mapping service.
          </AlertDescription>
        </Alert>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
          <Card className="card-hover glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="w-5 h-5 text-primary" />
                <span>Madhya Pradesh Water Quality Map</span>
              </CardTitle>
              <CardDescription>
                Click on cities to view detailed water quality reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video bg-gradient-secondary rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center water-ripple">
                <div className="text-center">
                  <Map className="w-16 h-16 text-primary/70 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold gradient-text mb-2">
                    Interactive MP Cities Map
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md">
                    Real-time monitoring across Bhopal, Indore, Gwalior, Ujjain, Jabalpur, 
                    Sagar, Dewas, and Ratlam with color-coded safety zones.
                  </p>
                  <Button variant="outline" className="mt-4 hover:shadow-glow transition-all duration-300">
                    Connect Map Service
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>

          {/* Zone List */}
          <div className="space-y-4">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>MP Cities Status</span>
                </CardTitle>
                <CardDescription>
                  Current water quality status across major cities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mpZones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`p-4 rounded-lg border cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${getRiskBgColor(zone.riskLevel)}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{zone.area}</h4>
                        <p className="text-sm text-muted-foreground">{zone.city}</p>
                      </div>
                      <Badge variant={getRiskBadgeVariant(zone.riskLevel)} className="px-3 py-1">
                        {zone.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Purity Index:</span>
                        <span className={`font-bold ${getRiskColor(zone.riskLevel)}`}>
                          {zone.avgPurity}/100
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reports:</span>
                        <span className="font-medium">{zone.reports}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Population:</span>
                        <span className="font-medium text-xs">{zone.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Updated:</span>
                        <span className="font-medium">{zone.lastUpdate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Legend */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Risk Level Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-success rounded-full"></div>
                  <div>
                    <div className="font-medium text-success">Low Risk</div>
                    <div className="text-xs text-muted-foreground">Purity Index: 70-100</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-warning rounded-full"></div>
                  <div>
                    <div className="font-medium text-warning">Medium Risk</div>
                    <div className="text-xs text-muted-foreground">Purity Index: 40-69</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-destructive rounded-full"></div>
                  <div>
                    <div className="font-medium text-destructive">High Risk</div>
                    <div className="text-xs text-muted-foreground">Purity Index: 0-39</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">3</div>
              <div className="text-sm text-muted-foreground">Safe Cities</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Caution Cities</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-destructive">2</div>
              <div className="text-sm text-muted-foreground">High Risk Cities</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">233</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;