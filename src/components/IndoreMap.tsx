import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, MapPin, AlertTriangle } from "lucide-react";

const IndoreMap = () => {
  const waterBodies = [
    {
      id: 1,
      name: "Khan River",
      type: "River",
      quality: 42,
      status: "high",
      location: "Central Indore",
      description: "Main river passing through Indore city center"
    },
    {
      id: 2,
      name: "Saraswati River",
      type: "River", 
      quality: 38,
      status: "high",
      location: "North Indore",
      description: "Tributary of Khan River, heavily polluted"
    },
    {
      id: 3,
      name: "Yashwant Sagar",
      type: "Lake",
      quality: 65,
      status: "medium",
      location: "South Indore",
      description: "Artificial lake and water reservoir"
    },
    {
      id: 4,
      name: "Sirpur Lake",
      type: "Lake",
      quality: 58,
      status: "medium",
      location: "West Indore",
      description: "Natural lake with industrial discharge concerns"
    },
    {
      id: 5,
      name: "Bilawali Tank",
      type: "Tank",
      quality: 72,
      status: "low",
      location: "East Indore",
      description: "Traditional water tank with better quality"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "low": return "text-success";
      case "medium": return "text-warning";
      case "high": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "low": return "default";
      case "medium": return "secondary";
      case "high": return "destructive";
      default: return "outline";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "low": return "Safe";
      case "medium": return "Caution";
      case "high": return "High Risk";
      default: return "Unknown";
    }
  };

  return (
    <Card className="card-hover glass-effect">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Droplets className="w-5 h-5 text-primary" />
          <span>Indore Water Bodies Quality Index</span>
        </CardTitle>
        <CardDescription>
          Real-time water quality monitoring of major water bodies in Indore
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Simplified Map Visualization */}
          <div className="aspect-video bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg border-2 border-primary/20 p-6 relative overflow-hidden">
            {/* City outline representation */}
            <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg"></div>
            
            {/* Water bodies positioned across the map */}
            <div className="absolute top-6 left-8">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-destructive ml-1">Khan River</span>
            </div>
            
            <div className="absolute top-4 right-12">
              <div className="w-3 h-3 bg-destructive rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-destructive ml-1">Saraswati</span>
            </div>
            
            <div className="absolute bottom-8 left-6">
              <div className="w-4 h-4 bg-warning rounded-full"></div>
              <span className="text-xs font-medium text-warning ml-1">Yashwant Sagar</span>
            </div>
            
            <div className="absolute bottom-6 right-8">
              <div className="w-4 h-4 bg-warning rounded-full"></div>
              <span className="text-xs font-medium text-warning ml-1">Sirpur Lake</span>
            </div>
            
            <div className="absolute top-1/2 right-4">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-xs font-medium text-success ml-1">Bilawali Tank</span>
            </div>
            
            {/* Center city label */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg px-3 py-2 border">
                <div className="text-sm font-bold text-center">INDORE CITY</div>
                <div className="text-xs text-muted-foreground text-center">Water Quality Map</div>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center space-x-6 mt-4 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span>Safe (70-100)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span>Caution (40-69)</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <span>High Risk (0-39)</span>
            </div>
          </div>
        </div>
        
        {/* Water Bodies List */}
        <div className="mt-6 space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Water Bodies Details</h4>
          {waterBodies.map((body) => (
            <div key={body.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <MapPin className={`w-4 h-4 ${getStatusColor(body.status)}`} />
                <div>
                  <div className="font-medium">{body.name}</div>
                  <div className="text-xs text-muted-foreground">{body.location} • {body.type}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <div className={`font-bold ${getStatusColor(body.status)}`}>
                    {body.quality}/100
                  </div>
                  <Badge variant={getStatusBadge(body.status)} className="text-xs">
                    {getStatusText(body.status)}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary Stats */}
        <div className="mt-4 p-4 bg-gradient-secondary rounded-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-success">1</div>
              <div className="text-xs text-muted-foreground">Safe Bodies</div>
            </div>
            <div>
              <div className="text-lg font-bold text-warning">2</div>
              <div className="text-xs text-muted-foreground">Need Attention</div>
            </div>
            <div>
              <div className="text-lg font-bold text-destructive">2</div>
              <div className="text-xs text-muted-foreground">High Risk</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndoreMap;