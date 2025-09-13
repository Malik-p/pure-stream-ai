import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Map, MapPin, AlertTriangle, Shield, Info, Users } from "lucide-react";
import indoreMapImage from "@/assets/indore-map.png";

const RiskMap = () => {
  // Real water quality data from final_data_loc.pdf dataset
  const indoreAreas = [
    {
      id: 1,
      area: "Navlakkha",
      city: "Indore",
      riskLevel: "high",
      reports: 23,
      avgPurity: 48.95,
      pH: 7.2,
      hardness: 300,
      solids: 475.5,
      turbidity: 0.8,
      lastUpdate: "2 hours ago",
      coordinates: [22.698930, 75.877483],
      population: "~15,000 residents",
      description: "Bad water quality with high conductivity (781.7 μMhos/cm) and low dissolved oxygen (1.5 mg/L)"
    },
    {
      id: 2,
      area: "Usha Phatak",
      city: "Indore", 
      riskLevel: "medium",
      reports: 18,
      avgPurity: 50.25,
      pH: 7.3,
      hardness: 356,
      solids: 847,
      turbidity: 0.65,
      lastUpdate: "1.5 hours ago",
      coordinates: [22.723854, 75.862579],
      population: "~20,000 residents",
      description: "Medium quality water with elevated TDS (847 mg/L) and conductivity (1263.6 μMhos/cm)"
    },
    {
      id: 3,
      area: "Juni Indore",
      city: "Indore",
      riskLevel: "medium", 
      reports: 22,
      avgPurity: 50.26,
      pH: 7.2,
      hardness: 260,
      solids: 796.5,
      turbidity: 0.95,
      lastUpdate: "3 hours ago",
      coordinates: [22.709614, 75.861852],
      population: "~35,000 residents",
      description: "Medium quality with high alkalinity (552 mg/L) and elevated nitrate levels (9.77 mg/L)"
    },
    {
      id: 4,
      area: "Shankar Bagh",
      city: "Indore",
      riskLevel: "high",
      reports: 42,
      avgPurity: 47.07,
      pH: 7.35,
      hardness: 592,
      solids: 807,
      turbidity: 0.75,
      lastUpdate: "45 minutes ago",
      coordinates: [22.733257, 75.851208],
      population: "~25,000 residents",
      description: "Bad quality with very high hardness (592 mg/L) and elevated coliform count (42 MPN/100mL)"
    },
    {
      id: 5,
      area: "Sadar Bajar",
      city: "Indore", 
      riskLevel: "high",
      reports: 41,
      avgPurity: 44.79,
      pH: 7.5,
      hardness: 512,
      solids: 856,
      turbidity: 2.85,
      lastUpdate: "1 hour ago",
      coordinates: [22.725203, 75.852679],
      population: "~40,000 residents",
      description: "Bad quality with very high turbidity (2.85 NTU) and elevated TDS (856 mg/L)"
    },
    {
      id: 6,
      area: "Niranjanpur",
      city: "Indore",
      riskLevel: "high",
      reports: 38,
      avgPurity: 47.16,
      pH: 7.3,
      hardness: 428,
      solids: 1149.5,
      turbidity: 0.5,
      lastUpdate: "2.5 hours ago",
      coordinates: [22.776728, 75.890502],
      population: "~30,000 residents", 
      description: "Bad quality with very high TDS (1149.5 mg/L) and elevated chloride levels (194 mg/L)"
    },
    {
      id: 7,
      area: "Dhar Road",
      city: "Indore",
      riskLevel: "high",
      reports: 15,
      avgPurity: 46.98,
      pH: 7.35,
      hardness: 450,
      solids: 873,
      turbidity: 0.75,
      lastUpdate: "4 hours ago",
      coordinates: [22.708749, 75.829324],
      population: "~18,000 residents",
      description: "Bad quality with high chloride (241 mg/L) and elevated sulfate levels (229.9 mg/L)" 
    },
    {
      id: 8,
      area: "Race Course Road",
      city: "Indore",
      riskLevel: "high",
      reports: 17,
      avgPurity: 47.39,
      pH: 7.35,
      hardness: 394,
      solids: 878,
      turbidity: 1.4,
      lastUpdate: "3.5 hours ago",
      coordinates: [22.728295, 75.878791],
      population: "~28,000 residents",
      description: "Bad quality with high conductivity (1493.15 μMhos/cm) and low dissolved oxygen (0.6 mg/L)"
    },
    {
      id: 9,
      area: "Nipaniya",
      city: "Indore",
      riskLevel: "high", 
      reports: 23,
      avgPurity: 47.43,
      pH: 7.2,
      hardness: 380,
      solids: 1182,
      turbidity: 0.68,
      lastUpdate: "5 hours ago",
      coordinates: [22.763709, 75.905528],
      population: "~32,000 residents",
      description: "Bad quality with very high TDS (1182 mg/L) and elevated iron contamination (0.031 mg/L)"
    },
    {
      id: 10,
      area: "Airport Area",
      city: "Indore",
      riskLevel: "high",
      reports: 15,
      avgPurity: 47.49,
      pH: 7.4,
      hardness: 520,
      solids: 963,
      turbidity: 0.21,
      lastUpdate: "6 hours ago",
      coordinates: [22.729162, 75.804687],
      population: "~12,000 residents",
      description: "Bad quality with high hardness (520 mg/L) and elevated nitrate levels (10.42 mg/L)"
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
                  
                  {/* Precise coordinate-based markers for groundwater sampling locations */}
                  <div className="absolute inset-0">
                    {indoreAreas.map((area) => {
                      const riskColor = area.riskLevel === 'high' ? 'bg-red-500' : 
                                       area.riskLevel === 'medium' ? 'bg-yellow-500' : 'bg-green-500';
                      
                      // Convert actual GPS coordinates to map position 
                      // Map bounds: approximately 22.65-22.82 lat, 75.78-75.92 lng
                      const latPercent = ((area.coordinates[0] - 22.65) / (22.82 - 22.65)) * 100;
                      const lngPercent = ((area.coordinates[1] - 75.78) / (75.92 - 75.78)) * 100;
                      
                      // Clamp values to ensure markers stay within map bounds
                      const topPos = Math.max(0, Math.min(100, 100 - latPercent));
                      const leftPos = Math.max(0, Math.min(100, lngPercent));
                      
                      return (
                        <div
                          key={area.id}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                          style={{ 
                            top: `${topPos}%`, 
                            left: `${leftPos}%` 
                          }}
                        >
                          {/* Water Quality Marker with purity-based colors */}
                          <div className={`w-5 h-5 rounded-full ${riskColor} border-2 border-white shadow-lg hover:scale-125 transition-all duration-200`}>
                            <div className={`w-7 h-7 rounded-full ${riskColor.replace('bg-', 'bg-').replace('-500', '-300/30')} absolute -top-1 -left-1 animate-pulse`}></div>
                          </div>
                          
                          {/* Enhanced Tooltip with real data */}
                          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                            <div className="bg-background/95 backdrop-blur-sm border border-border/20 rounded-lg p-3 shadow-xl min-w-72">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold text-sm">{area.area}</span>
                                <Badge variant={getRiskBadgeVariant(area.riskLevel)} className="text-xs">
                                  {area.riskLevel.toUpperCase()}
                                </Badge>
                              </div>
                              <div className="space-y-1 text-xs text-muted-foreground">
                                <div className="flex justify-between">
                                  <span>WQI Score:</span>
                                  <span className={getRiskColor(area.riskLevel)}>{area.avgPurity.toFixed(1)}</span>
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
                                  <span>Hardness:</span>
                                  <span>{area.hardness} mg/L</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Turbidity:</span>
                                  <span>{area.turbidity} NTU</span>
                                </div>
                                <div className="text-xs mt-2 p-2 bg-muted/50 rounded">
                                  <strong>Sample:</strong> GW-{area.id + 10} • {area.description}
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

        {/* Quick Stats - Updated based on real data */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">0</div>
              <div className="text-sm text-muted-foreground">Safe Areas</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">2</div>
              <div className="text-sm text-muted-foreground">Medium Risk Areas</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-destructive">8</div>
              <div className="text-sm text-muted-foreground">High Risk Areas</div>
            </CardContent>
          </Card>
          <Card className="card-hover glass-effect">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold gradient-text">254</div>
              <div className="text-sm text-muted-foreground">Total Samples</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RiskMap;
