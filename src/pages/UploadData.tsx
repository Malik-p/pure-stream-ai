import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Droplets, 
  BarChart3,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadData = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    ph: "",
    tds: "",
    impurities: [] as string[],
    comment: ""
  });

  // Mock results - in real app this would come from API
  const [results, setResults] = useState({
    purityIndex: 0,
    advice: "",
    riskLevel: "low" as "low" | "medium" | "high",
    details: [] as string[]
  });

  const impurityOptions = [
    "Heavy Metals",
    "Foaming",
    "Discoloration",
    "Chlorine Odor",
    "Turbidity",
    "Bacteria",
    "Chemical Taste",
    "Suspended Particles"
  ];

  const handleImpurityChange = (impurity: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        impurities: [...prev.impurities, impurity]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        impurities: prev.impurities.filter(i => i !== impurity)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.ph || !formData.tds) {
      toast({
        title: "Validation Error",
        description: "Please fill in pH and TDS values",
        variant: "destructive"
      });
      return;
    }

    const ph = parseFloat(formData.ph);
    const tds = parseFloat(formData.tds);

    if (ph < 0 || ph > 14) {
      toast({
        title: "Invalid pH Value",
        description: "pH must be between 0 and 14",
        variant: "destructive"
      });
      return;
    }

    if (tds < 0 || tds > 2000) {
      toast({
        title: "Invalid TDS Value",
        description: "TDS must be between 0 and 2000 ppm",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Mock API call with AI analysis
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate mock results based on input
      let purityIndex = 100;
      let advice = "Water quality is excellent!";
      let riskLevel: "low" | "medium" | "high" = "low";
      const details: string[] = [];

      // pH analysis
      if (ph < 6.5 || ph > 8.5) {
        purityIndex -= 20;
        advice = "pH levels are outside optimal range";
        riskLevel = ph < 6.0 || ph > 9.0 ? "high" : "medium";
        details.push(ph < 6.5 ? "pH too acidic - consider pH balancing" : "pH too alkaline - consider acid neutralization");
      }

      // TDS analysis
      if (tds > 500) {
        purityIndex -= 25;
        advice = "High Total Dissolved Solids detected";
        riskLevel = tds > 1000 ? "high" : "medium";
        details.push("Consider using TDS filtration system");
      }

      // Impurities analysis
      if (formData.impurities.length > 0) {
        purityIndex -= formData.impurities.length * 10;
        riskLevel = formData.impurities.length > 2 ? "high" : "medium";
        details.push(`${formData.impurities.length} contamination type(s) detected`);
        
        if (formData.impurities.includes("Heavy Metals")) {
          details.push("Heavy metal contamination requires immediate attention");
          riskLevel = "high";
        }
        if (formData.impurities.includes("Bacteria")) {
          details.push("Bacterial contamination - boil water before consumption");
          riskLevel = "high";
        }
      }

      purityIndex = Math.max(0, purityIndex);

      setResults({
        purityIndex,
        advice: purityIndex > 80 ? "Water quality is good" : purityIndex > 60 ? "Water quality needs attention" : "Water quality is poor - take immediate action",
        riskLevel,
        details
      });

      setShowResults(true);
      toast({
        title: "Analysis Complete",
        description: "AI has analyzed your water quality data",
      });

    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Upload Water Quality Data</h1>
          <p className="text-lg text-muted-foreground">
            Submit your sensor readings for instant AI-powered water quality analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Sensor Data Input</span>
              </CardTitle>
              <CardDescription>
                Enter your water quality measurements for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ph">pH Value *</Label>
                    <Input
                      id="ph"
                      type="number"
                      step="0.1"
                      min="0"
                      max="14"
                      value={formData.ph}
                      onChange={(e) => setFormData(prev => ({ ...prev, ph: e.target.value }))}
                      placeholder="7.0"
                      required
                    />
                    <p className="text-xs text-muted-foreground">Range: 0-14</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tds">TDS (ppm) *</Label>
                    <Input
                      id="tds"
                      type="number"
                      min="0"
                      max="2000"
                      value={formData.tds}
                      onChange={(e) => setFormData(prev => ({ ...prev, tds: e.target.value }))}
                      placeholder="150"
                      required
                    />
                    <p className="text-xs text-muted-foreground">Total Dissolved Solids</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Impurities Detected</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {impurityOptions.map((impurity) => (
                      <div key={impurity} className="flex items-center space-x-2">
                        <Checkbox
                          id={impurity}
                          checked={formData.impurities.includes(impurity)}
                          onCheckedChange={(checked) => 
                            handleImpurityChange(impurity, checked as boolean)
                          }
                        />
                        <Label htmlFor={impurity} className="text-sm">{impurity}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Additional Comments</Label>
                  <Textarea
                    id="comment"
                    value={formData.comment}
                    onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="Any additional observations about the water sample..."
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? "Analyzing..." : "Analyze Water Quality"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {isSubmitting && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 animate-pulse" />
                    <span>AI Analysis in Progress</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-muted-foreground">
                      Analyzing sensor data with AI models...
                    </div>
                    <Progress value={66} className="w-full" />
                    <div className="text-xs text-muted-foreground">
                      Processing pH levels, TDS readings, and contamination data
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {showResults && !isSubmitting && (
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>Analysis Results</span>
                    </div>
                    <Badge variant={getRiskBadgeVariant(results.riskLevel)}>
                      {results.riskLevel.toUpperCase()} RISK
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Purity Index */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Droplets className="w-6 h-6 text-primary" />
                      <span className="text-lg font-semibold">Purity Index</span>
                    </div>
                    <div className={`text-4xl font-bold ${getRiskColor(results.riskLevel)}`}>
                      {results.purityIndex}/100
                    </div>
                    <Progress 
                      value={results.purityIndex} 
                      className="w-full mt-3"
                    />
                  </div>

                  {/* Advice */}
                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription className="font-medium">
                      {results.advice}
                    </AlertDescription>
                  </Alert>

                  {/* Detailed Recommendations */}
                  {results.details.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Recommendations</span>
                      </h4>
                      <ul className="space-y-1">
                        {results.details.map((detail, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      Save Results
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Share Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {!showResults && !isSubmitting && (
              <Card className="border-dashed">
                <CardContent className="py-12 text-center">
                  <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Submit your data to see AI analysis results here
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadData;