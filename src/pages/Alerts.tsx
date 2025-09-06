import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  AlertTriangle, 
  Bell, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Settings,
  CheckCircle,
  XCircle,
  Info
} from "lucide-react";

const Alerts = () => {
  const [notifications, setNotifications] = useState({
    highRisk: true,
    mediumRisk: false,
    newReports: true,
    systemUpdates: false
  });

  // Mock alert data
  const activeAlerts = [
    {
      id: 1,
      type: "critical",
      title: "Unsafe Water Cluster - Industrial Zone",
      description: "15 high-risk reports received in the last 6 hours",
      location: "Industrial Zone, Sector 12",
      reportCount: 15,
      avgPurity: 28,
      timestamp: "2 hours ago",
      trend: "worsening",
      affectedPopulation: "~5,000 residents"
    },
    {
      id: 2,
      type: "warning",
      title: "Elevated TDS Levels Detected",
      description: "Multiple reports showing TDS above safe limits",
      location: "Downtown District, Block A",
      reportCount: 8,
      avgPurity: 52,
      timestamp: "5 hours ago",
      trend: "stable",
      affectedPopulation: "~2,000 residents"
    },
    {
      id: 3,
      type: "info",
      title: "pH Fluctuation Pattern",
      description: "Unusual pH variations detected in morning samples",
      location: "Riverside Area, Zone 3",
      reportCount: 6,
      avgPurity: 71,
      timestamp: "1 day ago",
      trend: "improving",
      affectedPopulation: "~800 residents"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "New high-risk alert generated",
      location: "Industrial Zone",
      timestamp: "2 hours ago",
      type: "alert"
    },
    {
      id: 2,
      action: "Alert resolved - pH levels normalized",
      location: "Residential North",
      timestamp: "6 hours ago",
      type: "resolved"
    },
    {
      id: 3,
      action: "Community notification sent",
      location: "Downtown District",
      timestamp: "8 hours ago",
      type: "notification"
    },
    {
      id: 4,
      action: "Weekly water quality summary published",
      location: "All regions",
      timestamp: "1 day ago",
      type: "info"
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical": return <AlertTriangle className="w-5 h-5 text-destructive" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "info": return <Info className="w-5 h-5 text-primary" />;
      default: return <Bell className="w-5 h-5" />;
    }
  };

  const getAlertBadgeVariant = (type: string) => {
    switch (type) {
      case "critical": return "destructive";
      case "warning": return "secondary";
      case "info": return "default";
      default: return "outline";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "alert": return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "resolved": return <CheckCircle className="w-4 h-4 text-success" />;
      case "notification": return <Bell className="w-4 h-4 text-primary" />;
      case "info": return <Info className="w-4 h-4 text-muted-foreground" />;
      default: return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Water Quality Alerts</h1>
          <p className="text-lg text-muted-foreground">
            Real-time monitoring and notifications for water quality issues in your region
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Alerts */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Active Alerts</span>
                  <Badge variant="destructive">{activeAlerts.filter(a => a.type === "critical").length}</Badge>
                </CardTitle>
                <CardDescription>
                  Current water quality concerns requiring attention
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-lg border-l-4 ${
                      alert.type === "critical" 
                        ? "border-l-destructive bg-destructive/5" 
                        : alert.type === "warning"
                        ? "border-l-warning bg-warning/5"
                        : "border-l-primary bg-primary/5"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        {getAlertIcon(alert.type)}
                        <div>
                          <h3 className="font-semibold text-lg">{alert.title}</h3>
                          <p className="text-sm text-muted-foreground">{alert.description}</p>
                        </div>
                      </div>
                      <Badge variant={getAlertBadgeVariant(alert.type)}>
                        {alert.type.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                          <MapPin className="w-3 h-3" />
                          <span>Location</span>
                        </div>
                        <div className="font-medium">{alert.location}</div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                          <Users className="w-3 h-3" />
                          <span>Affected</span>
                        </div>
                        <div className="font-medium">{alert.affectedPopulation}</div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>Reports</span>
                        </div>
                        <div className="font-medium">{alert.reportCount}</div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                          <Clock className="w-3 h-3" />
                          <span>Updated</span>
                        </div>
                        <div className="font-medium">{alert.timestamp}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Purity Index: </span>
                          <span className={`font-bold ${
                            alert.avgPurity < 40 ? "text-destructive" : 
                            alert.avgPurity < 70 ? "text-warning" : "text-success"
                          }`}>
                            {alert.avgPurity}/100
                          </span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Trend: </span>
                          <span className={`font-medium ${
                            alert.trend === "worsening" ? "text-destructive" :
                            alert.trend === "improving" ? "text-success" : "text-warning"
                          }`}>
                            {alert.trend}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">
                          Take Action
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>
                  Latest alerts and system notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3 py-2">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">
                        {activity.location} • {activity.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Settings & Configuration */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Alert Settings</span>
                </CardTitle>
                <CardDescription>
                  Configure your notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="high-risk" className="text-sm font-medium">
                      High Risk Alerts
                    </Label>
                    <Switch
                      id="high-risk"
                      checked={notifications.highRisk}
                      onCheckedChange={(checked) =>
                        setNotifications(prev => ({ ...prev, highRisk: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="medium-risk" className="text-sm font-medium">
                      Medium Risk Alerts
                    </Label>
                    <Switch
                      id="medium-risk"
                      checked={notifications.mediumRisk}
                      onCheckedChange={(checked) =>
                        setNotifications(prev => ({ ...prev, mediumRisk: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-reports" className="text-sm font-medium">
                      New Reports
                    </Label>
                    <Switch
                      id="new-reports"
                      checked={notifications.newReports}
                      onCheckedChange={(checked) =>
                        setNotifications(prev => ({ ...prev, newReports: checked }))
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system-updates" className="text-sm font-medium">
                      System Updates
                    </Label>
                    <Switch
                      id="system-updates"
                      checked={notifications.systemUpdates}
                      onCheckedChange={(checked) =>
                        setNotifications(prev => ({ ...prev, systemUpdates: checked }))
                      }
                    />
                  </div>
                </div>
                <Button className="w-full">Save Preferences</Button>
              </CardContent>
            </Card>

            {/* Alert Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Statistics</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-destructive">12</div>
                    <div className="text-xs text-muted-foreground">Critical Alerts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning">28</div>
                    <div className="text-xs text-muted-foreground">Warnings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">45</div>
                    <div className="text-xs text-muted-foreground">Resolved</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2.1h</div>
                    <div className="text-xs text-muted-foreground">Avg Response</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Emergency:</strong> For immediate water contamination concerns, 
                contact your local water authority or emergency services.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;