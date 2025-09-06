import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Map, MapPin, AlertTriangle, Shield, Info, Users } from "lucide-react";

const RiskMap = () => {
  // Mock data for the map zones
  const mockZones = [
    {
      id: 1,
      area: "Downtown District",
      riskLevel: "low",
      reports: 12,
      avgPurity: 85,
      lastUpdate: "2 hours ago",
      coordinates: [28.6139, 77.2090]
    },
    {
      id: 2,
      area: "Industrial Zone",
      riskLevel: "high",
      reports: 45,
      avgPurity: 42,
      lastUpdate: "30 minutes ago",
      coordinates: [28.7041, 77.1025]
    },
    {
      id: 3,
      area: "Residential North",
      riskLevel: "medium",
      reports: 28,
      avgPurity: 67,
      lastUpdate: "1 hour ago",
      coordinates: [28.7041, 77.2125]
    },
    {
      id: 4,
      area: "Riverside Area",
      riskLevel: "low",
      reports: 8,
      avgPurity: 78,
      lastUpdate: "45 minutes ago",
      coordinates: [28.5355, 77.3910]
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
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Interactive Risk Map</h1>
          <p className="text-lg text-muted-foreground">
            Real-time water quality monitoring across different zones and regions
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="w-5 h-5" />
                  <span>Regional Water Quality Map</span>
                </CardTitle>
                <CardDescription>
                  Click on zones to view detailed water quality reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-gradient-secondary rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-16 h-16 text-primary/50 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                      Interactive Map Integration
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Would display real-time water quality zones using Mapbox or Leaflet.js
                      with colored regions based on safety levels.
                    </p>
                    <Button variant="outline" className="mt-4">
                      Connect Map Service
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Zone List */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Active Zones</span>
                </CardTitle>
                <CardDescription>
                  Current water quality status by region
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockZones.map((zone) => (
                  <div
                    key={zone.id}
                    className={`p-4 rounded-lg border cursor-pointer hover:shadow-md transition-all ${getRiskBgColor(zone.riskLevel)}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{zone.area}</h4>
                      <Badge variant={getRiskBadgeVariant(zone.riskLevel)}>
                        {zone.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Purity Index:</span>
                        <span className={`font-medium ${getRiskColor(zone.riskLevel)}`}>
                          {zone.avgPurity}/100
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reports:</span>
                        <span className="font-medium">{zone.reports}</span>
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
          <Card>
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">2</div>
              <div className="text-sm text-muted-foreground">Safe Zones</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">1</div>
              <div className="text-sm text-muted-foreground">Caution Zones</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-destructive">1</div>
              <div className="text-sm text-muted-foreground">High Risk Zones</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">93</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;