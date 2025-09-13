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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { 
  Upload, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Droplets, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Shield,
  Zap,
  Thermometer,
  Activity,
  Beaker,
  TestTube,
  FileText,
  Download,
  Share2,
  RefreshCw,
  Eye,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Sparkles,
  Heart,
  Skull,
  AlertOctagon,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadData = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState("input");
  const [formData, setFormData] = useState({
    ph: "",
    tds: "",
    turbidity: "",
    temperature: "",
    chlorine: "",
    fluoride: "",
    nitrate: "",
    arsenic: "",
    hardness: "",
    iron: "",
    impurities: [] as string[],
    comment: ""
  });

  // Mock results - in real app this would come from API
  const [results, setResults] = useState({
    purityIndex: 0,
    advice: "",
    riskLevel: "low" as "low" | "medium" | "high",
    priority: "low" as "low" | "medium" | "high" | "critical",
    status: "",
    details: [] as string[],
    criticalIssues: [] as string[],
    warnings: [] as string[],
    improvements: [] as string[],
    solutions: [] as string[],
    parameters: {} as any,
    drinkabilityStatus: "",
    drinkabilityIcon: null as any,
    drinkabilityColor: "",
    safetyLevel: ""
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

  const analyzeWaterQuality = (data: any) => {
    let score = 100;
    const recommendations: string[] = [];
    const criticalIssues: string[] = [];
    const warnings: string[] = [];
    const improvements: string[] = [];
    const solutions: string[] = [];
    
    const ph = parseFloat(data.ph);
    const tds = parseFloat(data.tds);
    const turbidity = parseFloat(data.turbidity) || 0;
    const temperature = parseFloat(data.temperature) || 25;
    const chlorine = parseFloat(data.chlorine) || 0;
    const fluoride = parseFloat(data.fluoride) || 0;
    const nitrate = parseFloat(data.nitrate) || 0;
    const arsenic = parseFloat(data.arsenic) || 0;
    const hardness = parseFloat(data.hardness) || 0;
    const iron = parseFloat(data.iron) || 0;
    
    // pH analysis (WHO standards: 6.5-8.5, optimal: 7.0-7.5)
    if (ph < 6.5 || ph > 8.5) {
      const penalty = Math.min(25, Math.abs(ph - 7.0) * 10);
      score -= penalty;
      if (ph < 5.5 || ph > 9.0) {
        criticalIssues.push(`Extreme pH level (${ph}) - immediate treatment required`);
        solutions.push("For extreme pH levels: Use pH neutralization system with acid injection (for high pH) or soda ash injection (for low pH)");
      } else {
        warnings.push(ph < 6.5 ? `pH too acidic (${ph}) - consider pH balancing` : `pH too alkaline (${ph}) - consider acid neutralization`);
        solutions.push(ph < 6.5 ? 
          "For acidic water: Install a neutralizing filter with calcite or magnesium oxide" : 
          "For alkaline water: Use acid injection system or reverse osmosis with pH adjustment");
      }
    } else if (ph >= 7.0 && ph <= 7.5) {
      improvements.push("Excellent pH level - optimal for drinking water");
    }
    
    // TDS analysis (WHO: <600 mg/L, excellent: <300 mg/L)
    if (tds > 600) {
      const penalty = Math.min(20, (tds - 600) / 30);
      score -= penalty;
      criticalIssues.push(`High TDS (${tds} mg/L) - consider reverse osmosis or distillation`);
      solutions.push("For high TDS: Install reverse osmosis system or distillation unit");
    } else if (tds > 300) {
      const penalty = Math.min(10, (tds - 300) / 50);
      score -= penalty;
      warnings.push(`Moderate TDS (${tds} mg/L) - consider TDS filtration system`);
      solutions.push("For moderate TDS: Use activated carbon filter or consider reverse osmosis for better results");
    } else if (tds < 150) {
      improvements.push("Low TDS - excellent mineral balance");
    }
    // Turbidity analysis (WHO: <1 NTU, acceptable: <5 NTU)
  if (turbidity > 5) {
    const penalty = Math.min(20, (turbidity - 5) * 3);
    score -= penalty;
    criticalIssues.push(`High turbidity (${turbidity} NTU) - use sediment filtration and coagulation`);
    solutions.push("For high turbidity: Install sediment filter (5-10 micron) followed by a finer filter (1-5 micron)");
  } else if (turbidity > 1) {
    const penalty = Math.min(10, (turbidity - 1) * 2);
    score -= penalty;
    warnings.push(`Moderate turbidity (${turbidity} NTU) - consider sediment filtration`);
    solutions.push("For moderate turbidity: Use sediment filter (5-10 micron) or multi-media filter");
  } else if (turbidity < 0.5) {
    improvements.push("Excellent clarity - water is very clear");
  }
  
  // Chlorine analysis (WHO: 0.2-1.0 mg/L)
  if (chlorine < 0.1) {
    score -= 15;
    criticalIssues.push("Insufficient chlorination - high risk of bacterial contamination");
    solutions.push("For insufficient chlorine: Increase disinfection or install UV sterilizer to kill bacteria");
  } else if (chlorine < 0.2) {
    score -= 8;
    warnings.push("Low chlorine levels - consider increasing disinfection");
    solutions.push("For low chlorine: Slightly increase chlorination or use alternative disinfectants");
  } else if (chlorine > 1.0) {
    const penalty = Math.min(15, (chlorine - 1.0) * 10);
    score -= penalty;
    warnings.push(`Over-chlorinated (${chlorine} mg/L) - may cause taste and odor issues`);
    solutions.push("For high chlorine: Install activated carbon filter to remove excess chlorine and improve taste");
  } else {
    improvements.push("Optimal chlorine levels - good disinfection");
  }
    
    // Temperature analysis (optimal: 15-25°C)
    if (temperature > 35) {
      const penalty = Math.min(8, temperature - 35);
      score -= penalty;
      warnings.push(`High temperature (${temperature}°C) - may indicate contamination or storage issues`);
    } else if (temperature < 5) {
      const penalty = Math.min(5, 5 - temperature);
      score -= penalty;
      warnings.push(`Very cold temperature (${temperature}°C) - may affect taste and mineral absorption`);
    }
    
   
    
    // Fluoride analysis (WHO: 0.5-1.5 mg/L)
    if (fluoride > 1.5) {
      const penalty = Math.min(20, (fluoride - 1.5) * 8);
      score -= penalty;
      criticalIssues.push(`Fluoride too high (${fluoride} mg/L) - use defluoridation or alternative water source`);
    } else if (fluoride < 0.5) {
      warnings.push(`Low fluoride (${fluoride} mg/L) - consider dental health supplements`);
    } else {
      improvements.push("Optimal fluoride levels - good for dental health");
    }
    
     // Nitrate analysis (WHO: <50 mg/L, EPA: <10 mg/L)
  if (nitrate > 50) {
    const penalty = Math.min(25, (nitrate - 50) / 2);
    score -= penalty;
    criticalIssues.push(`Dangerous nitrate levels (${nitrate} mg/L) - immediate treatment required, not safe for infants`);
    solutions.push("For high nitrate: Use reverse osmosis system or ion exchange (anion) resin");
  } else if (nitrate > 10) {
    const penalty = Math.min(15, (nitrate - 10) / 5);
    score -= penalty;
    warnings.push(`Elevated nitrate levels (${nitrate} mg/L) - consider reverse osmosis or ion exchange`);
    solutions.push("For elevated nitrate: Install reverse osmosis system or consider distillation");
  } else {
    improvements.push("Safe nitrate levels");
  }
    
      // Arsenic analysis (WHO: <0.01 mg/L)
  if (arsenic > 0.01) {
    score -= 30;
    criticalIssues.push(`Arsenic contamination (${arsenic} mg/L) - immediate treatment required, not safe for consumption`);
    solutions.push("For arsenic contamination: Use specialized arsenic removal media or reverse osmosis system");
  } else if (arsenic > 0.005) {
    score -= 10;
    warnings.push(`Elevated arsenic levels (${arsenic} mg/L) - monitor closely and consider treatment`);
    solutions.push("For elevated arsenic: Install activated alumina filter or iron-based removal system");
  } else {
    improvements.push("Arsenic levels within safe limits");
  }
  
  // Iron analysis (WHO: <0.3 mg/L)
  if (iron > 0.3) {
    const penalty = Math.min(15, (iron - 0.3) * 20);
    score -= penalty;
    warnings.push(`High iron content (${iron} mg/L) - use iron removal filter or oxidation treatment`);
    solutions.push("For high iron: Install iron filter with air injection or chemical oxidation system");
  } else if (iron > 0.1) {
    warnings.push(`Moderate iron levels (${iron} mg/L) - may cause staining`);
    solutions.push("For moderate iron: Use sediment filter or activated carbon filter with iron removal media");
  } else {
    improvements.push("Low iron content - no staining issues");
  }
    
    // Hardness analysis (moderate: 60-120 mg/L, high: >300 mg/L)
    if (hardness > 500) {
      const penalty = Math.min(15, (hardness - 500) / 50);
      score -= penalty;
      warnings.push(`Very hard water (${hardness} mg/L) - consider water softening system`);
    } else if (hardness > 300) {
      const penalty = Math.min(8, (hardness - 300) / 30);
      score -= penalty;
      warnings.push(`Hard water (${hardness} mg/L) - may cause scaling, consider softening`);
    } else if (hardness >= 60 && hardness <= 120) {
      improvements.push("Optimal water hardness - good mineral content");
    }
    
    
    
      // Impurities analysis
  if (data.impurities.length > 0) {
    score -= data.impurities.length * 8;
    warnings.push(`${data.impurities.length} contamination type(s) detected`);
    
    if (data.impurities.includes("Heavy Metals")) {
      criticalIssues.push("Heavy metal contamination - immediate treatment required, consider professional testing");
      score -= 20;
      solutions.push("For heavy metals: Install reverse osmosis system with specialized metal removal media");
    }
    if (data.impurities.includes("Bacteria")) {
      criticalIssues.push("Bacterial contamination - boil water before consumption, disinfect storage containers");
      score -= 25;
      solutions.push("For bacterial contamination: Install UV sterilizer or use chlorine dioxide treatment");
    }
    if (data.impurities.includes("Chemical Taste")) {
      warnings.push("Chemical taste detected - investigate source and consider activated carbon filtration");
      solutions.push("For chemical taste: Install activated carbon filter or reverse osmosis system");
    }
    if (data.impurities.includes("Discoloration")) {
      warnings.push("Water discoloration - check for rust, algae, or sediment issues");
      solutions.push("For discoloration: Use sediment filter followed by activated carbon filter");
    }
    if (data.impurities.includes("Foaming")) {
      warnings.push("Foaming detected - may indicate detergent contamination");
      solutions.push("For foaming: Install activated carbon filter and consider testing for surfactants");
    }
    if (data.impurities.includes("Chlorine Odor")) {
      warnings.push("Strong chlorine odor - may indicate over-chlorination");
      solutions.push("For chlorine odor: Install activated carbon filter to remove chlorine and improve taste");
    }
  }
    
    const finalScore = Math.max(0, Math.round(score * 100) / 100);
    
    let status = "Excellent Quality ✅";
    let riskLevel: "low" | "medium" | "high" = "low";
    let priority: "low" | "medium" | "high" | "critical" = "low";
    
    if (criticalIssues.length > 0) {
      status = "Critical Issues ❌";
      riskLevel = "high";
      priority = "critical";
    } else if (finalScore >= 85) {
      status = "Excellent Quality ✅";
      riskLevel = "low";
      priority = "low";
    } else if (finalScore >= 70) {
      status = "Good Quality ✅";
      riskLevel = "low";
      priority = "low";
    } else if (finalScore >= 50) {
      status = "Needs Treatment ⚠️";
      riskLevel = "medium";
      priority = "medium";
    } else {
      status = "Poor Quality ❌";
      riskLevel = "high";
      priority = "high";
    }
    
    // Generate comprehensive advice and drinkability status
    let advice = "";
    let drinkabilityStatus = "";
    let drinkabilityIcon = null;
    let drinkabilityColor = "";
    let safetyLevel = "";
    
    if (criticalIssues.length > 0) {
      advice = "Immediate action required. Do not consume without treatment.";
      drinkabilityStatus = "NOT SAFE TO DRINK";
      drinkabilityIcon = <Skull className="w-6 h-6" />;
      drinkabilityColor = "text-destructive";
      safetyLevel = "DANGEROUS";
    } else if (finalScore >= 85) {
      advice = "Excellent water quality. Safe for all uses including drinking.";
      drinkabilityStatus = "SAFE TO DRINK";
      drinkabilityIcon = <Heart className="w-6 h-6" />;
      drinkabilityColor = "text-success";
      safetyLevel = "EXCELLENT";
    } else if (finalScore >= 70) {
      advice = "Good water quality. Generally safe for drinking with minor considerations.";
      drinkabilityStatus = "SAFE TO DRINK";
      drinkabilityIcon = <CheckCircle className="w-6 h-6" />;
      drinkabilityColor = "text-success";
      safetyLevel = "GOOD";
    } else if (finalScore >= 50) {
      advice = "Water quality needs improvement. Consider treatment before drinking.";
      drinkabilityStatus = "TREAT BEFORE DRINKING";
      drinkabilityIcon = <AlertTriangle className="w-6 h-6" />;
      drinkabilityColor = "text-warning";
      safetyLevel = "CAUTION";
    } else {
      advice = "Poor water quality. Not recommended for drinking without treatment.";
      drinkabilityStatus = "NOT RECOMMENDED";
      drinkabilityIcon = <AlertOctagon className="w-6 h-6" />;
      drinkabilityColor = "text-destructive";
      safetyLevel = "POOR";
    }
    
    return {
      purityIndex: finalScore,
      status,
      riskLevel,
      priority,
      details: [...criticalIssues, ...warnings, ...improvements],
      advice,
      drinkabilityStatus,
      drinkabilityIcon,
      drinkabilityColor,
      safetyLevel,
      criticalIssues,
      warnings,
      improvements,
      solutions,
      parameters: {
        ph: { value: ph, status: ph >= 6.5 && ph <= 8.5 ? 'good' : ph < 5.5 || ph > 9.0 ? 'critical' : 'warning' },
        tds: { value: tds, status: tds <= 300 ? 'good' : tds <= 600 ? 'warning' : 'critical' },
        turbidity: { value: turbidity, status: turbidity <= 1 ? 'good' : turbidity <= 5 ? 'warning' : 'critical' },
        chlorine: { value: chlorine, status: chlorine >= 0.2 && chlorine <= 1.0 ? 'good' : chlorine < 0.1 ? 'critical' : 'warning' },
        nitrate: { value: nitrate, status: nitrate <= 10 ? 'good' : nitrate <= 50 ? 'warning' : 'critical' },
        arsenic: { value: arsenic, status: arsenic <= 0.005 ? 'good' : arsenic <= 0.01 ? 'warning' : 'critical' }
      }
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced validation
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

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const analysisResults = analyzeWaterQuality(formData);
      
      setResults(analysisResults);
      setShowResults(true);
      setActiveTab("analysis"); // Switch to analysis tab
      
      toast({
        title: "Analysis Complete",
        description: "Advanced water quality analysis completed",
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
      case "critical": return "destructive";
      default: return "outline";
    }
  };

  const getParameterStatusIcon = (status: string) => {
    switch (status) {
      case "good": return <CheckCircle2 className="w-4 h-4 text-success" />;
      case "warning": return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "critical": return <XCircle className="w-4 h-4 text-destructive" />;
      default: return <Info className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getParameterStatusColor = (status: string) => {
    switch (status) {
      case "good": return "text-success";
      case "warning": return "text-warning";
      case "critical": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical": return "text-destructive";
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "critical": return <AlertCircle className="w-4 h-4" />;
      case "high": return <AlertTriangle className="w-4 h-4" />;
      case "medium": return <Clock className="w-4 h-4" />;
      case "low": return <CheckCircle className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  // Chart data generation
  const generatePieChartData = () => {
    const good = Object.values(results.parameters || {}).filter((p: any) => p.status === 'good').length;
    const warning = Object.values(results.parameters || {}).filter((p: any) => p.status === 'warning').length;
    const critical = Object.values(results.parameters || {}).filter((p: any) => p.status === 'critical').length;
    
    return [
      { name: 'Good', value: good, color: '#10b981' },
      { name: 'Warning', value: warning, color: '#f59e0b' },
      { name: 'Critical', value: critical, color: '#ef4444' }
    ];
  };

  const generateBarChartData = () => {
    return Object.entries(results.parameters || {}).map(([key, param]: [string, any]) => ({
      parameter: key.toUpperCase(),
      value: param.value,
      status: param.status
    }));
  };

  const generateQualityTrendData = () => {
    // Mock trend data - in real app this would come from historical data
    return [
      { month: 'Jan', quality: 85 },
      { month: 'Feb', quality: 78 },
      { month: 'Mar', quality: 82 },
      { month: 'Apr', quality: results.purityIndex },
    ];
  };

  const COLORS = {
    good: '#10b981',
    warning: '#f59e0b',
    critical: '#ef4444'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 ">
              <TestTube className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Advanced Water Analysis</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              Water Quality Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Submit your sensor readings for comprehensive AI-powered water quality analysis 
              with detailed recommendations and safety assessments
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="input" className="flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Data Input</span>
              </TabsTrigger>
              <TabsTrigger value="analysis" className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Analysis Results</span>
              </TabsTrigger>
              <TabsTrigger value="recommendations" className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span>Recommendations</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="input" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Upload Form */}
                <Card className="card-hover glass-effect">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-primary-glow/5">
                    <CardTitle className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <Beaker className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xl">Sensor Data Input</span>
                        <p className="text-sm text-muted-foreground font-normal mt-1">
                          Enter your water quality measurements for comprehensive analysis
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-6">
                        {/* Primary Parameters */}
                        <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-lg border border-primary/10">
                          <div className="flex items-center space-x-2 mb-4">
                            <Activity className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold text-primary text-lg">Primary Parameters *</h4>
                            <Badge variant="outline" className="text-xs">Required</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="ph" className="flex items-center space-x-2">
                                <span>pH Value *</span>
                                <Info className="w-3 h-3 text-muted-foreground" />
                              </Label>
                              <Input
                                id="ph"
                                type="number"
                                step="0.01"
                                min="0"
                                max="14"
                                value={formData.ph}
                                onChange={(e) => setFormData(prev => ({ ...prev, ph: e.target.value }))}
                                placeholder="7.0"
                                required
                                className="focus:ring-2 focus:ring-primary/20"
                              />
                              <p className="text-xs text-muted-foreground">Range: 0-14 (Optimal: 6.5-8.5)</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="tds" className="flex items-center space-x-2">
                                <span>TDS (ppm) *</span>
                                <Info className="w-3 h-3 text-muted-foreground" />
                              </Label>
                              <Input
                                id="tds"
                                type="number"
                                min="0"
                                max="2000"
                                value={formData.tds}
                                onChange={(e) => setFormData(prev => ({ ...prev, tds: e.target.value }))}
                                placeholder="150"
                                required
                                className="focus:ring-2 focus:ring-primary/20"
                              />
                              <p className="text-xs text-muted-foreground">Total Dissolved Solids (Good: &lt;300)</p>
                            </div>
                          </div>
                        </div>

                        {/* Physical Parameters */}
                        <div className="bg-gradient-to-r from-secondary/50 to-transparent p-4 rounded-lg border border-secondary/20">
                          <div className="flex items-center space-x-2 mb-4">
                            <Thermometer className="w-5 h-5 text-secondary-foreground" />
                            <h4 className="font-semibold text-secondary-foreground text-lg">Physical Parameters</h4>
                            <Badge variant="secondary" className="text-xs">Optional</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="turbidity">Turbidity (NTU)</Label>
                              <Input
                                id="turbidity"
                                type="number"
                                step="0.1"
                                min="0"
                                max="50"
                                value={formData.turbidity}
                                onChange={(e) => setFormData(prev => ({ ...prev, turbidity: e.target.value }))}
                                placeholder="2.5"
                                className="focus:ring-2 focus:ring-secondary/20"
                              />
                              <p className="text-xs text-muted-foreground">Nephelometric Turbidity Units (Good: &lt;1)</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="temperature">Temperature (°C)</Label>
                              <Input
                                id="temperature"
                                type="number"
                                step="0.1"
                                min="0"
                                max="50"
                                value={formData.temperature}
                                onChange={(e) => setFormData(prev => ({ ...prev, temperature: e.target.value }))}
                                placeholder="25.0"
                                className="focus:ring-2 focus:ring-secondary/20"
                              />
                              <p className="text-xs text-muted-foreground">Water temperature (Optimal: 15-25°C)</p>
                            </div>
                          </div>
                        </div>

                        {/* Chemical Parameters */}
                        <div className="bg-gradient-to-r from-accent/50 to-transparent p-4 rounded-lg border border-accent/20">
                          <div className="flex items-center space-x-2 mb-4">
                            <Beaker className="w-5 h-5 text-accent-foreground" />
                            <h4 className="font-semibold text-accent-foreground text-lg">Chemical Parameters</h4>
                            <Badge variant="outline" className="text-xs">Important</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="chlorine">Chlorine (mg/L)</Label>
                              <Input
                                id="chlorine"
                                type="number"
                                step="0.01"
                                min="0"
                                max="5"
                                value={formData.chlorine}
                                onChange={(e) => setFormData(prev => ({ ...prev, chlorine: e.target.value }))}
                                placeholder="0.5"
                                className="focus:ring-2 focus:ring-accent/20"
                              />
                              <p className="text-xs text-muted-foreground">Free chlorine residual (Optimal: 0.2-1.0)</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="fluoride">Fluoride (mg/L)</Label>
                              <Input
                                id="fluoride"
                                type="number"
                                step="0.01"
                                min="0"
                                max="10"
                                value={formData.fluoride}
                                onChange={(e) => setFormData(prev => ({ ...prev, fluoride: e.target.value }))}
                                placeholder="1.0"
                                className="focus:ring-2 focus:ring-accent/20"
                              />
                              <p className="text-xs text-muted-foreground">Fluoride concentration (Optimal: 0.5-1.5)</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="nitrate">Nitrate (mg/L)</Label>
                              <Input
                                id="nitrate"
                                type="number"
                                step="0.1"
                                min="0"
                                max="200"
                                value={formData.nitrate}
                                onChange={(e) => setFormData(prev => ({ ...prev, nitrate: e.target.value }))}
                                placeholder="10.0"
                                className="focus:ring-2 focus:ring-accent/20"
                              />
                              <p className="text-xs text-muted-foreground">Nitrate as NO₃ (Safe: &lt;10, WHO: &lt;50)</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="hardness">Hardness (mg/L)</Label>
                              <Input
                                id="hardness"
                                type="number"
                                min="0"
                                max="1000"
                                value={formData.hardness}
                                onChange={(e) => setFormData(prev => ({ ...prev, hardness: e.target.value }))}
                                placeholder="150"
                                className="focus:ring-2 focus:ring-accent/20"
                              />
                              <p className="text-xs text-muted-foreground">Total hardness as CaCO₃ (Optimal: 60-120)</p>
                            </div>
                          </div>
                        </div>

                        {/* Heavy Metals */}
                        <div className="bg-gradient-to-r from-destructive/10 to-transparent p-4 rounded-lg border border-destructive/20">
                          <div className="flex items-center space-x-2 mb-4">
                            <Shield className="w-5 h-5 text-destructive" />
                            <h4 className="font-semibold text-destructive text-lg">Heavy Metals & Minerals</h4>
                            <Badge variant="destructive" className="text-xs">Critical</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="arsenic">Arsenic (mg/L)</Label>
                              <Input
                                id="arsenic"
                                type="number"
                                step="0.001"
                                min="0"
                                max="1"
                                value={formData.arsenic}
                                onChange={(e) => setFormData(prev => ({ ...prev, arsenic: e.target.value }))}
                                placeholder="0.005"
                                className="focus:ring-2 focus:ring-destructive/20"
                              />
                              <p className="text-xs text-muted-foreground">Arsenic concentration (WHO: &lt;0.01)</p>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="iron">Iron (mg/L)</Label>
                              <Input
                                id="iron"
                                type="number"
                                step="0.01"
                                min="0"
                                max="5"
                                value={formData.iron}
                                onChange={(e) => setFormData(prev => ({ ...prev, iron: e.target.value }))}
                                placeholder="0.2"
                                className="focus:ring-2 focus:ring-destructive/20"
                              />
                              <p className="text-xs text-muted-foreground">Iron concentration (WHO: &lt;0.3)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gradient-to-r from-muted/50 to-transparent p-4 rounded-lg border border-muted/20">
                          <div className="flex items-center space-x-2 mb-4">
                            <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                            <h4 className="font-semibold text-muted-foreground text-lg">Impurities Detected</h4>
                            <Badge variant="outline" className="text-xs">Check all that apply</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {impurityOptions.map((impurity) => (
                              <div key={impurity} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                                <Checkbox
                                  id={impurity}
                                  checked={formData.impurities.includes(impurity)}
                                  onCheckedChange={(checked) => 
                                    handleImpurityChange(impurity, checked as boolean)
                                  }
                                />
                                <Label htmlFor={impurity} className="text-sm cursor-pointer">{impurity}</Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="comment" className="flex items-center space-x-2">
                            <FileText className="w-4 h-4" />
                            <span>Additional Comments</span>
                          </Label>
                          <Textarea
                            id="comment"
                            value={formData.comment}
                            onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                            placeholder="Any additional observations about the water sample..."
                            rows={3}
                            className="focus:ring-2 focus:ring-primary/20"
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full h-12 text-lg font-semibold scale-on-hover " 
                          disabled={isSubmitting}
                          size="lg"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center space-x-2">
                              <RefreshCw className="w-5 h-5 animate-spin" />
                              <span>Analyzing Water Quality...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Zap className="w-5 h-5" />
                              <span>Analyze Water Quality</span>
                            </div>
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Results */}
                <div className="space-y-6">
                  {isSubmitting && (
                    <Card className="card-hover glass-effect">
                      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-glow/10">
                        <CardTitle className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-pulse">
                            <BarChart3 className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <span className="text-xl">AI Analysis in Progress</span>
                            <p className="text-sm text-muted-foreground font-normal mt-1">
                              Processing your water quality data with advanced algorithms
                            </p>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="text-lg font-semibold mb-2">Analyzing sensor data with AI models...</div>
                            <Progress value={75} className="w-full h-3" />
                            <div className="text-sm text-muted-foreground mt-2">
                              Processing pH levels, TDS readings, and contamination data
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <Activity className="w-6 h-6 text-primary mx-auto mb-2" />
                              <div className="text-sm font-medium">Chemical Analysis</div>
                            </div>
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                              <div className="text-sm font-medium">Safety Assessment</div>
                            </div>
                            <div className="p-3 bg-primary/5 rounded-lg">
                              <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                              <div className="text-sm font-medium">Recommendations</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {!showResults && !isSubmitting && (
                    <Card className="border-dashed card-hover">
                      <CardContent className="py-16 text-center">
                        <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                          <BarChart3 className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Ready for Analysis</h3>
                        <p className="text-muted-foreground max-w-md mx-auto">
                          Submit your water quality data to get comprehensive analysis results, 
                          safety recommendations, and treatment suggestions.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-8">
              {showResults && (
                <div className="space-y-8">
                  {/* Drinkability Status - Prominent Display */}
                  <Card className="card-hover glass-effect border-2">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-glow/10">
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                            {results.drinkabilityIcon}
                          </div>
                          <div>
                            <span className="text-2xl">Drinkability Assessment</span>
                            <p className="text-sm text-muted-foreground font-normal mt-1">
                              Safety evaluation for human consumption
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={getRiskBadgeVariant(results.riskLevel)} className="text-lg px-4 py-2">
                            {results.riskLevel.toUpperCase()} RISK
                          </Badge>
                          <Badge variant="outline" className={`text-lg px-4 py-2 ${getPriorityColor(results.priority)}`}>
                            {getPriorityIcon(results.priority)}
                            <span className="ml-2">{results.safetyLevel}</span>
                          </Badge>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <div className={`text-4xl font-bold ${results.drinkabilityColor} flex items-center justify-center space-x-3`}>
                          {results.drinkabilityIcon}
                          <span>{results.drinkabilityStatus}</span>
                        </div>
                        <div className="text-xl text-muted-foreground">{results.advice}</div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Main Results Card */}
                    <Card className="card-hover glass-effect">
                      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-glow/10">
                        <CardTitle className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <Droplets className="w-5 h-5 text-primary-foreground" />
                          </div>
                          <div>
                            <span className="text-xl">Purity Index</span>
                            <p className="text-sm text-muted-foreground font-normal mt-1">
                              Overall water quality score
                            </p>
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-6">
                        <div className="text-center">
                          <div className={`text-6xl font-bold mb-4 ${getRiskColor(results.riskLevel)}`}>
                            {results.purityIndex}
                          </div>
                          <div className="text-2xl text-muted-foreground mb-4">/ 100</div>
                          <Progress 
                            value={results.purityIndex} 
                            className="w-full h-4 mb-4"
                          />
                          <div className="text-lg font-semibold">{results.status}</div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Parameter Status Pie Chart */}
                    <Card className="card-hover glass-effect">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <BarChart3 className="w-5 h-5 text-primary" />
                          <span>Parameter Distribution</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={generatePieChartData()}
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {generatePieChartData().map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="flex justify-center space-x-4 mt-4">
                          {generatePieChartData().map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                              <span className="text-sm">{item.name} ({item.value})</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Charts Row */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Parameter Values Bar Chart */}
                    <Card className="card-hover glass-effect">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Activity className="w-5 h-5 text-primary" />
                          <span>Parameter Values</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={generateBarChartData()}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="parameter" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="value" fill="#3b82f6" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Quality Trend Line Chart */}
                    <Card className="card-hover glass-effect">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          <span>Quality Trend</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={generateQualityTrendData()}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="month" />
                              <YAxis />
                              <Tooltip />
                              <Line type="monotone" dataKey="quality" stroke="#10b981" strokeWidth={3} />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Parameter Status Details */}
                  <Card className="card-hover glass-effect">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Activity className="w-5 h-5 text-primary" />
                        <span>Detailed Parameter Status</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(results.parameters || {}).map(([key, param]: [string, any]) => (
                          <div key={key} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                            <div className="flex items-center space-x-3">
                              {getParameterStatusIcon(param.status)}
                              <div>
                                <div className="font-medium capitalize">{key}</div>
                                <div className="text-sm text-muted-foreground">{param.value}</div>
                              </div>
                            </div>
                            <Badge variant={param.status === 'good' ? 'default' : param.status === 'warning' ? 'secondary' : 'destructive'}>
                              {param.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-8">
              {showResults && (
                <div className="space-y-6">
                  {/* Drinkability Summary */}
                  <Card className="card-hover glass-effect border-2">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary-glow/10">
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                          {results.drinkabilityIcon}
                        </div>
                        <div>
                          <span className="text-xl">Final Assessment</span>
                          <p className="text-sm text-muted-foreground font-normal mt-1">
                            Overall water safety and drinkability status
                          </p>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <div className={`text-3xl font-bold ${results.drinkabilityColor} flex items-center justify-center space-x-3`}>
                          {results.drinkabilityIcon}
                          <span>{results.drinkabilityStatus}</span>
                        </div>
                        <div className="text-lg text-muted-foreground max-w-2xl mx-auto">
                          {results.advice}
                        </div>
                        <div className="flex justify-center space-x-4">
                          <Badge variant={getRiskBadgeVariant(results.riskLevel)} className="text-lg px-4 py-2">
                            {results.riskLevel.toUpperCase()} RISK
                          </Badge>
                          <Badge variant="outline" className={`text-lg px-4 py-2 ${getPriorityColor(results.priority)}`}>
                            {getPriorityIcon(results.priority)}
                            <span className="ml-2">{results.safetyLevel}</span>
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Critical Issues */}
                  {results.criticalIssues && results.criticalIssues.length > 0 && (
                    <Card className="card-hover border-destructive/20 bg-destructive/5">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-destructive">
                          <AlertCircle className="w-5 h-5" />
                          <span>Critical Issues</span>
                          <Badge variant="destructive">{results.criticalIssues.length}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {results.criticalIssues.map((issue, index) => (
                            <li key={index} className="flex items-start space-x-3 p-3 bg-destructive/10 rounded-lg">
                              <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium">{issue}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {/* Warnings */}
                  {results.warnings && results.warnings.length > 0 && (
                    <Card className="card-hover border-warning/20 bg-warning/5">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-warning">
                          <AlertTriangle className="w-5 h-5" />
                          <span>Warnings</span>
                          <Badge variant="secondary">{results.warnings.length}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {results.warnings.map((warning, index) => (
                            <li key={index} className="flex items-start space-x-3 p-3 bg-warning/10 rounded-lg">
                              <AlertTriangle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{warning}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}
{/* Solutions */}
{results.solutions && results.solutions.length > 0 && (
  <Card className="card-hover border-primary/20 bg-primary/5">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2 text-primary">
        <Sparkles className="w-5 h-5" />
        <span>Recommended Solutions</span>
        <Badge variant="default">{results.solutions.length}</Badge>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="space-y-3">
        {results.solutions.map((solution, index) => (
          <li key={index} className="flex items-start space-x-3 p-3 bg-primary/10 rounded-lg">
            <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{solution}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
)}
                  {/* Improvements */}
                  {results.improvements && results.improvements.length > 0 && (
                    <Card className="card-hover border-success/20 bg-success/5">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2 text-success">
                          <CheckCircle2 className="w-5 h-5" />
                          <span>Positive Aspects</span>
                          <Badge variant="default">{results.improvements.length}</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {results.improvements.map((improvement, index) => (
                            <li key={index} className="flex items-start space-x-3 p-3 bg-success/10 rounded-lg">
                              <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  )}

                  {/* Action Buttons */}
                  <Card className="card-hover glass-effect">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="outline" className="flex-1 h-12" size="lg">
                          <Download className="w-4 h-4 mr-2" />
                          Download Report
                        </Button>
                        <Button variant="outline" className="flex-1 h-12" size="lg">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share Results
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1 h-12" 
                          size="lg"
                          onClick={() => setActiveTab("input")}
                        >
                          <RefreshCw className="w-4 h-4 mr-2" />
                          New Analysis
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UploadData;