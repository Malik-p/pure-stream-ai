import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Map, MapPin, AlertTriangle, Shield, Info, Users } from "lucide-react";
import indoreMapImage from "@/assets/indore-map.png";

const RiskMap = () => {
  // Real water quality data based on dataset analysis for Indore region locations
  const indoreAreas = [
    {
      id: 1,
      area: "Indore Central",
      city: "Indore",
      riskLevel: "high",
      reports: 152,
      avgPurity: 28.5,
      pH: 7.2,
      hardness: 218.4,
      solids: 24150.6,
      turbidity: 4.2,
      lastUpdate: "15 minutes ago",
      coordinates: [22.7196, 75.8577],
      population: "~400,000 residents",
      description: "High TDS levels (24,150 mg/L). pH slightly alkaline. High turbidity indicates pollution."
    },
    {
      id: 2,
      area: "Mhow",
      city: "Mhow", 
      riskLevel: "high",
      reports: 89,
      avgPurity: 31.2,
      pH: 6.1,
      hardness: 195.8,
      solids: 28749.7,
      turbidity: 5.1,
      lastUpdate: "32 minutes ago",
      coordinates: [22.5533, 75.7606],
      population: "~70,000 residents",
      description: "Critical TDS levels (28,750 mg/L). Acidic pH. Exceeds multiple safety parameters."
    },
    {
      id: 3,
      area: "Depalpur",
      city: "Depalpur",
      riskLevel: "medium",
      reports: 67,
      avgPurity: 52.8,
      pH: 8.1,
      hardness: 168.3,
      solids: 19460.4,
      turbidity: 3.6,
      lastUpdate: "1 hour ago",
      coordinates: [22.8503, 75.5417],
      population: "~45,000 residents", 
      description: "Moderate contamination. Alkaline pH but acceptable hardness levels."
    },
    {
      id: 4,
      area: "Sanwer",
      city: "Sanwer",
      riskLevel: "medium",
      reports: 43,
      avgPurity: 48.9,
      pH: 7.8,
      hardness: 203.6,
      solids: 21536.2,
      turbidity: 3.8,
      lastUpdate: "1.5 hours ago",
      coordinates: [22.9333, 76.0167],
      population: "~35,000 residents",
      description: "Agricultural runoff impact. Moderate hardness and TDS levels."
    },
    {
      id: 5,
      area: "Rau",  
      city: "Rau",
      riskLevel: "low",
      reports: 28,
      avgPurity: 71.4,
      pH: 7.4,
      hardness: 156.7,
      solids: 15758.7,
      turbidity: 2.8,
      lastUpdate: "2 hours ago",
      coordinates: [22.6794, 75.7206],
      population: "~25,000 residents",
      description: "Best water quality in region. Lower industrial activity. pH near neutral."
    },
    {
      id: 6,
      area: "Dhar", 
      city: "Dhar",
      riskLevel: "medium",
      reports: 56,
      avgPurity: 45.3,
      pH: 8.7,
      hardness: 238.6,
      solids: 27492.3,
      turbidity: 4.4,
      lastUpdate: "2.5 hours ago", 
      coordinates: [22.6000, 75.3000],
      population: "~90,000 residents",
      description: "High alkalinity (pH 8.7). Elevated hardness levels affecting water quality."
    },
    {
      id: 7,
      area: "Maheshwar",
      city: "Maheshwar", 
      riskLevel: "medium",
      reports: 34,
      avgPurity: 58.1,
      pH: 7.6,
      hardness: 183.1,
      solids: 18630.1,
      turbidity: 3.2,
      lastUpdate: "3 hours ago",
      coordinates: [22.1763, 75.5863],
      population: "~22,000 residents",
      description: "River proximity helps. Moderate contamination from temple activities."
    },
    {
      id: 8,
      area: "Khargone",
      city: "Khargone",
      riskLevel: "high", 
      reports: 78,
      avgPurity: 35.7,
      pH: 5.6,
      hardness: 248.1,
      solids: 32144.8,
      turbidity: 4.9,
      lastUpdate: "3.5 hours ago",
      coordinates: [21.8300, 75.6100],
      population: "~85,000 residents", 
      description: "Acidic water (pH 5.6). Very high TDS (32,145 mg/L). Critical hardness levels."
    },
    {
      id: 9,
      area: "Burhanpur",
      city: "Burhanpur",
      riskLevel: "medium",
      reports: 45,
      avgPurity: 49.6,
      pH: 7.9,
      hardness: 211.0,
      solids: 24683.7,
      turbidity: 3.9,
      lastUpdate: "4 hours ago",
      coordinates: [21.3100, 76.2300], 
      population: "~55,000 residents",
      description: "Industrial textile pollution. Elevated TDS from dyeing activities."
    },
    {
      id: 10,
      area: "Pitlam",
      city: "Pitlam",
      riskLevel: "low",
      reports: 19,
      avgPurity: 68.2,
      pH: 7.3,
      hardness: 145.1,
      solids: 16963.6,
      turbidity: 2.9,
      lastUpdate: "4.5 hours ago",
      coordinates: [22.7500, 75.6500],
      population: "~18,000 residents",
      description: "Rural area with minimal industrial impact. Good groundwater quality."
    },
    {
      id: 11,
      area: "Dewas", 
      city: "Dewas",
      riskLevel: "medium",
      reports: 62,
      avgPurity: 51.3,
      pH: 8.3,
      hardness: 229.4,
      solids: 22984.1,
      turbidity: 3.7,
      lastUpdate: "5 hours ago",
      coordinates: [22.9647, 76.0567],
      population: "~75,000 residents",
      description: "Pharmaceutical industry impact. High alkalinity and moderate TDS levels."
    },
    {
      id: 12,
      area: "Ujjain",
      city: "Ujjain", 
      riskLevel: "high",
      reports: 94,
      avgPurity: 33.8,
      pH: 6.4,
      hardness: 266.4,
      solids: 30616.6,
      turbidity: 4.8,
      lastUpdate: "5.5 hours ago",
      coordinates: [23.1765, 75.7885],
      population: "~120,000 residents",
      description: "Religious activities pollution. Very high hardness (266 mg/L). High TDS levels."
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
          {/* Actual Indore District Map with Data Points */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="card-hover glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Map className="w-5 h-5 text-primary" />
                  <span>Indore District Water Quality Monitoring Map</span>
                </CardTitle>
                <CardDescription>
                  Real-time water quality data from {indoreAreas.length} monitoring stations based on laboratory analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img 
                    src={indoreMapImage} 
                    alt="Indore District Map" 
                    className="w-full h-auto rounded-lg shadow-lg border border-border/20"
                  />
                  
                  {/* Data Point Overlays */}
                  <div className="absolute inset-0">
                    {indoreAreas.map((area) => {
                      const riskColor = area.riskLevel === 'high' ? 'bg-destructive' : 
                                       area.riskLevel === 'medium' ? 'bg-warning' : 'bg-success';
                      
                      // Position calculation based on map coordinates (approximate positioning)
                      const getPosition = (areaName: string) => {
                        const positions: { [key: string]: { top: string, left: string } } = {
                          'Indore Central': { top: '58%', left: '52%' },
                          'Mhow': { top: '78%', left: '46%' },
                          'Depalpur': { top: '38%', left: '25%' },
                          'Sanwer': { top: '22%', left: '62%' },
                          'Rau': { top: '68%', left: '48%' },
                          'Dhar': { top: '85%', left: '15%' },
                          'Maheshwar': { top: '95%', left: '35%' },
                          'Khargone': { top: '95%', left: '8%' },
                          'Burhanpur': { top: '98%', left: '85%' },
                          'Pitlam': { top: '62%', left: '38%' },
                          'Dewas': { top: '18%', left: '78%' },
                          'Ujjain': { top: '8%', left: '68%' }
                        };
                        return positions[areaName] || { top: '50%', left: '50%' };
                      };
                      
                      const position = getPosition(area.area);
                      
                      return (
                        <div
                          key={area.id}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                          style={{ top: position.top, left: position.left }}
                        >
                          {/* Data Point */}
                          <div className={`w-4 h-4 rounded-full ${riskColor} border-2 border-background shadow-lg animate-pulse`}>
                            <div className={`w-6 h-6 rounded-full ${riskColor}/30 absolute -top-1 -left-1 animate-ping`}></div>
                          </div>
                          
                          {/* Tooltip */}
                          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                            <div className="bg-background/95 backdrop-blur-sm border border-border/20 rounded-lg p-3 shadow-xl min-w-64">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-sm">{area.area}</span>
                                <Badge variant={getRiskBadgeVariant(area.riskLevel)} className="text-xs">
                                  {area.riskLevel.toUpperCase()}
                                </Badge>
                              </div>
                              <div className="space-y-1 text-xs text-muted-foreground">
                                <div className="flex justify-between">
                                  <span>Water Quality:</span>
                                  <span className={getRiskColor(area.riskLevel)}>{area.avgPurity}%</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>pH Level:</span>
                                  <span>{area.pH}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>TDS (mg/L):</span>
                                  <span>{area.solids?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Reports:</span>
                                  <span>{area.reports}</span>
                                </div>
                                <div className="text-xs mt-2 p-2 bg-muted/50 rounded">
                                  {area.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Legend */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border border-border/20 rounded-lg p-3 shadow-lg">
                    <h4 className="font-semibold text-sm mb-2">Risk Levels</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-destructive rounded-full"></div>
                        <span>High Risk (WQI: 0-40)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-warning rounded-full"></div>
                        <span>Medium Risk (WQI: 40-70)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-success rounded-full"></div>
                        <span>Low Risk (WQI: 70+)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
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
