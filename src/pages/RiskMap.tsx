import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Map, MapPin, AlertTriangle, Shield, Info, Users } from "lucide-react";
import IndoreMap from "@/components/IndoreMap";

const RiskMap = () => {
  // Indore and surrounding areas water quality data
  const indoreAreas = [
    {
      id: 1,
      area: "Indore Central",
      city: "Indore",
      riskLevel: "high",
      reports: 45,
      avgPurity: 32,
      lastUpdate: "30 minutes ago",
      coordinates: [22.7196, 75.8577],
      population: "~400,000 residents",
      description: "Groundwater WQI: 25-50 (Poor quality). Industrial contamination concerns."
    },
    {
      id: 2,
      area: "Bilawali Tank Area",
      city: "Indore",
      riskLevel: "medium",
      reports: 28,
      avgPurity: 58,
      lastUpdate: "1 hour ago",
      coordinates: [22.7503, 75.8937],
      population: "~200,000 residents",
      description: "Surface water with seasonal variations. Nitrate levels fluctuate affecting WQI."
    },
    {
      id: 3,
      area: "Indore Industrial Zone",
      city: "Indore",
      riskLevel: "high",
      reports: 52,
      avgPurity: 28,
      lastUpdate: "45 minutes ago",
      coordinates: [22.6708, 75.9063],
      population: "~300,000 residents",
      description: "No proper drainage system. High contamination risk for surface & groundwater."
    },
    {
      id: 4,
      area: "Mhow Tehsil - Sangi Street",
      city: "Mhow",
      riskLevel: "high",
      reports: 18,
      avgPurity: 34,
      lastUpdate: "2 hours ago",
      coordinates: [22.5533, 75.7606],
      population: "~50,000 residents",
      description: "Tap water exceeds permissible limits for multiple physicochemical parameters."
    },
    {
      id: 5,
      area: "Mhow - Raj Mohalla",
      city: "Mhow",
      riskLevel: "medium",
      reports: 15,
      avgPurity: 48,
      lastUpdate: "3 hours ago",
      coordinates: [22.5467, 75.7642],
      population: "~30,000 residents",
      description: "Seasonal study shows bacteriological concerns in tap water supply."
    },
    {
      id: 6,
      area: "Mhow Cantonment Board",
      city: "Mhow",
      riskLevel: "medium",
      reports: 22,
      avgPurity: 55,
      lastUpdate: "4 hours ago",
      coordinates: [22.5589, 75.7544],
      population: "~40,000 residents",
      description: "Military area with better infrastructure but still faces water quality challenges."
    },
    {
      id: 7,
      area: "Depalpur",
      city: "Depalpur",
      riskLevel: "medium",
      reports: 12,
      avgPurity: 61,
      lastUpdate: "5 hours ago",
      coordinates: [22.8503, 75.5417],
      population: "~25,000 residents",
      description: "Agricultural runoff affects groundwater quality in rural areas."
    },
    {
      id: 8,
      area: "Rau",
      city: "Rau",
      riskLevel: "low",
      reports: 8,
      avgPurity: 74,
      lastUpdate: "6 hours ago",
      coordinates: [22.6794, 75.7206],
      population: "~20,000 residents",
      description: "Suburban area with relatively better water quality due to less industrial activity."
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
             Indore & Surrounding Areas Water Quality Map
          </h1>
          <p className="text-lg text-muted-foreground">
            Real-time water quality monitoring across Indore city and its surrounding regions
          </p>
        </div>

        {/* Map Integration Notice */}
{/*         <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Note:</strong> Interactive map integration requires backend setup. 
            This demo shows the data structure and UI components that would be populated by a real mapping service.
          </AlertDescription>
        </Alert> */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Indore Water Bodies Map */}
          <div className="lg:col-span-2 space-y-6">
            <IndoreMap />
            
            {/* Water Quality Trends */}
            <Card className="card-hover glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="w-5 h-5 text-primary" />
                  <span>Water Quality Trends</span>
                </CardTitle>
                <CardDescription>
                  Monthly water quality index changes across major areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="text-2xl font-bold text-destructive">28</div>
                    <div className="text-xs text-muted-foreground">Industrial Zone</div>
                    <div className="text-xs text-destructive">↓ -12 pts</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <div className="text-2xl font-bold text-warning">58</div>
                    <div className="text-xs text-muted-foreground">Bilawali Tank</div>
                    <div className="text-xs text-warning">↑ +5 pts</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <div className="text-2xl font-bold text-destructive">34</div>
                    <div className="text-xs text-muted-foreground">Mhow Tehsil</div>
                    <div className="text-xs text-destructive">↓ -8 pts</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-success/10 border border-success/20">
                    <div className="text-2xl font-bold text-success">74</div>
                    <div className="text-xs text-muted-foreground">Rau Area</div>
                    <div className="text-xs text-success">↑ +3 pts</div>
                  </div>
                </div>
                
                {/* Simple trend visualization */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Industrial Pollution Impact</span>
                    <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-destructive via-warning to-success w-3/4"></div>
                    </div>
                    <span className="text-xs text-destructive">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Seasonal Variation</span>
                    <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-warning to-success w-1/2"></div>
                    </div>
                    <span className="text-xs text-warning">Medium</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Infrastructure Quality</span>
                    <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-destructive via-warning to-success w-1/3"></div>
                    </div>
                    <span className="text-xs text-destructive">Poor</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contamination Sources Flow */}
            <Card className="card-hover glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span>Contamination Sources & Impact Flow</span>
                </CardTitle>
                <CardDescription>
                  How pollution sources affect water quality in Indore
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Flow diagram */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Sources */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-center text-destructive">Pollution Sources</h4>
                      <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                          <div className="font-medium text-sm">Industrial Discharge</div>
                          <div className="text-xs text-muted-foreground">No proper drainage</div>
                        </div>
                        <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 text-center">
                          <div className="font-medium text-sm">Agricultural Runoff</div>
                          <div className="text-xs text-muted-foreground">Pesticides & fertilizers</div>
                        </div>
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                          <div className="font-medium text-sm">Urban Waste</div>
                          <div className="text-xs text-muted-foreground">Sewage & solid waste</div>
                        </div>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="space-y-4 relative">
                      <h4 className="font-semibold text-center text-warning">Impact Areas</h4>
                      <div className="absolute top-8 left-0 right-0 flex justify-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-destructive to-warning"></div>
                      </div>
                      <div className="space-y-3 mt-6">
                        <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 text-center">
                          <div className="font-medium text-sm">Surface Water</div>
                          <div className="text-xs text-muted-foreground">Rivers & Lakes</div>
                        </div>
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                          <div className="font-medium text-sm">Groundwater</div>
                          <div className="text-xs text-muted-foreground">Wells & Aquifers</div>
                        </div>
                        <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 text-center">
                          <div className="font-medium text-sm">Tap Water Supply</div>
                          <div className="text-xs text-muted-foreground">Municipal distribution</div>
                        </div>
                      </div>
                    </div>

                    {/* Health Impact */}
                    <div className="space-y-4 relative">
                      <h4 className="font-semibold text-center text-destructive">Health Impact</h4>
                      <div className="absolute top-8 left-0 right-0 flex justify-center">
                        <div className="w-16 h-0.5 bg-gradient-to-r from-warning to-destructive"></div>
                      </div>
                      <div className="space-y-3 mt-6">
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                          <div className="font-medium text-sm">Waterborne Diseases</div>
                          <div className="text-xs text-muted-foreground">Cholera, Typhoid</div>
                        </div>
                        <div className="p-3 rounded-lg bg-warning/10 border border-warning/20 text-center">
                          <div className="font-medium text-sm">Chemical Exposure</div>
                          <div className="text-xs text-muted-foreground">Heavy metals, toxins</div>
                        </div>
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-center">
                          <div className="font-medium text-sm">Long-term Effects</div>
                          <div className="text-xs text-muted-foreground">Cancer, organ damage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Water Parameters Breakdown */}
            <Card className="card-hover glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>Critical Parameters Analysis</span>
                </CardTitle>
                <CardDescription>
                  Key water quality indicators exceeding safe limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-warning">Physicochemical Parameters</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">pH Level</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-destructive/20 rounded-full overflow-hidden">
                            <div className="h-full bg-destructive w-4/5"></div>
                          </div>
                          <span className="text-xs text-destructive">High</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">TDS (Total Dissolved Solids)</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-warning/20 rounded-full overflow-hidden">
                            <div className="h-full bg-warning w-3/5"></div>
                          </div>
                          <span className="text-xs text-warning">Medium</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">Turbidity</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-destructive/20 rounded-full overflow-hidden">
                            <div className="h-full bg-destructive w-4/5"></div>
                          </div>
                          <span className="text-xs text-destructive">High</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">Hardness</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-warning/20 rounded-full overflow-hidden">
                            <div className="h-full bg-warning w-2/3"></div>
                          </div>
                          <span className="text-xs text-warning">Medium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-destructive">Chemical Contaminants</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">Nitrates</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-destructive/20 rounded-full overflow-hidden">
                            <div className="h-full bg-destructive w-full"></div>
                          </div>
                          <span className="text-xs text-destructive">Critical</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">Heavy Metals</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-warning/20 rounded-full overflow-hidden">
                            <div className="h-full bg-warning w-3/5"></div>
                          </div>
                          <span className="text-xs text-warning">Medium</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">Bacterial Count</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-destructive/20 rounded-full overflow-hidden">
                            <div className="h-full bg-destructive w-4/5"></div>
                          </div>
                          <span className="text-xs text-destructive">High</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-muted/30">
                        <span className="text-sm">Industrial Chemicals</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-destructive/20 rounded-full overflow-hidden">
                            <div className="h-full bg-destructive w-3/4"></div>
                          </div>
                          <span className="text-xs text-destructive">High</span>
                        </div>
                      </div>
                    </div>
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
                  <span>Indore Areas Status</span>
                </CardTitle>
                <CardDescription>
                  Water quality status across Indore and surrounding areas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {indoreAreas.map((area) => (
                  <div
                    key={area.id}
                    className={`p-4 rounded-lg border cursor-pointer hover:shadow-card transition-all duration-300 hover:-translate-y-1 ${getRiskBgColor(area.riskLevel)}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{area.area}</h4>
                        <p className="text-sm text-muted-foreground">{area.city}</p>
                      </div>
                      <Badge variant={getRiskBadgeVariant(area.riskLevel)} className="px-3 py-1">
                        {area.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground italic">{area.description}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">WQI Score:</span>
                        <span className={`font-bold ${getRiskColor(area.riskLevel)}`}>
                          {area.avgPurity}/100
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reports:</span>
                        <span className="font-medium">{area.reports}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Population:</span>
                        <span className="font-medium text-xs">{area.population}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Updated:</span>
                        <span className="font-medium">{area.lastUpdate}</span>
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
              <div className="text-2xl font-bold text-success">1</div>
              <div className="text-sm text-muted-foreground">Safe Areas</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">4</div>
              <div className="text-sm text-muted-foreground">Caution Areas</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-destructive">3</div>
              <div className="text-sm text-muted-foreground">High Risk Areas</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">200</div>
              <div className="text-sm text-muted-foreground">Total Reports</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;
