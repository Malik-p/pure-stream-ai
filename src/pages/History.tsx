import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { History, Download, Filter, Calendar, TrendingUp, TrendingDown, BarChart3, Droplets } from "lucide-react";

const HistoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRisk, setFilterRisk] = useState("all");

  // Mock historical data
  const mockHistory = [
    {
      id: 1,
      date: "2024-01-15",
      time: "14:30",
      location: "Downtown District",
      ph: 7.2,
      tds: 180,
      purityIndex: 85,
      riskLevel: "low",
      advice: "Water quality is good",
      impurities: ["Chlorine Odor"]
    },
    {
      id: 2,
      date: "2024-01-14",
      time: "09:15",
      location: "Industrial Zone",
      ph: 6.1,
      tds: 650,
      purityIndex: 42,
      riskLevel: "high",
      advice: "pH too acidic, high TDS levels detected",
      impurities: ["Heavy Metals", "Discoloration", "Chemical Taste"]
    },
    {
      id: 3,
      date: "2024-01-13",
      time: "16:45",
      location: "Residential North",
      ph: 8.1,
      tds: 320,
      purityIndex: 67,
      riskLevel: "medium",
      advice: "pH slightly high, consider monitoring",
      impurities: ["Turbidity"]
    },
    {
      id: 4,
      date: "2024-01-12",
      time: "11:20",
      location: "Riverside Area",
      ph: 7.0,
      tds: 120,
      purityIndex: 92,
      riskLevel: "low",
      advice: "Excellent water quality",
      impurities: []
    },
    {
      id: 5,
      date: "2024-01-11",
      time: "13:10",
      location: "Downtown District",
      ph: 5.8,
      tds: 420,
      purityIndex: 58,
      riskLevel: "medium",
      advice: "pH too acidic, requires treatment",
      impurities: ["Foaming", "Chemical Taste"]
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

  const filteredHistory = mockHistory.filter(item => {
    const matchesSearch = item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.advice.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRisk === "all" || item.riskLevel === filterRisk;
    return matchesSearch && matchesFilter;
  });

  const averagePurity = Math.round(mockHistory.reduce((sum, item) => sum + item.purityIndex, 0) / mockHistory.length);
  const totalTests = mockHistory.length;
  const highRiskCount = mockHistory.filter(item => item.riskLevel === "high").length;
  const trend = mockHistory.length >= 2 && mockHistory[0].purityIndex > mockHistory[1].purityIndex ? "up" : "down";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Testing History</h1>
          <p className="text-lg text-muted-foreground">
            Track your water quality submissions and monitor trends over time
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{totalTests}</div>
              <div className="text-sm text-muted-foreground">Total Tests</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Droplets className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{averagePurity}</div>
              <div className="text-sm text-muted-foreground">Avg Purity Index</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              {trend === "up" ? (
                <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
              ) : (
                <TrendingDown className="w-8 h-8 text-warning mx-auto mb-2" />
              )}
              <div className={`text-2xl font-bold ${trend === "up" ? "text-success" : "text-warning"}`}>
                {trend === "up" ? "↗" : "↘"}
              </div>
              <div className="text-sm text-muted-foreground">Recent Trend</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-8 h-8 bg-destructive rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-destructive-foreground font-bold text-sm">!</span>
              </div>
              <div className="text-2xl font-bold text-destructive">{highRiskCount}</div>
              <div className="text-sm text-muted-foreground">High Risk Tests</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filter & Export</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <Input
                  placeholder="Search by location or advice..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-48">
                <Select value={filterRisk} onValueChange={setFilterRisk}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by risk" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Risk Levels</SelectItem>
                    <SelectItem value="low">Low Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export CSV</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* History List */}
        <div className="space-y-4">
          {filteredHistory.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold">{item.date} at {item.time}</span>
                      <Badge variant={getRiskBadgeVariant(item.riskLevel)}>
                        {item.riskLevel.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="text-lg font-medium mb-1">{item.location}</div>
                    <div className="text-sm text-muted-foreground mb-3">{item.advice}</div>
                    
                    {/* Technical Details */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">pH:</span>
                        <span className="ml-2 font-medium">{item.ph}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">TDS:</span>
                        <span className="ml-2 font-medium">{item.tds} ppm</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Purity:</span>
                        <span className={`ml-2 font-medium ${getRiskColor(item.riskLevel)}`}>
                          {item.purityIndex}/100
                        </span>
                      </div>
                    </div>

                    {/* Impurities */}
                    {item.impurities.length > 0 && (
                      <div className="mt-3">
                        <span className="text-sm text-muted-foreground">Impurities detected: </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.impurities.map((impurity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {impurity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm">
                      View Report
                    </Button>
                    <Button variant="outline" size="sm">
                      Retest Location
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredHistory.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <History className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Results Found</h3>
              <p className="text-muted-foreground">
                {searchTerm || filterRisk !== "all" 
                  ? "Try adjusting your filters or search terms"
                  : "Start testing water quality to see your history here"
                }
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;