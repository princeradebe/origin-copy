"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TriangleAlert as AlertTriangle, Shield, TrendingUp, FileText, Plus, Search, ListFilter as Filter, Download, Eye, CreditCard as Edit, Trash2, Calendar, User, Target } from "lucide-react";
import { RiskRegister } from "@/components/risk-management/risk-register";
import { RiskAssessmentForm } from "@/components/risk-management/risk-assessment-form";
import { RiskAnalytics } from "@/components/risk-management/risk-analytics";
import { RiskDetails } from "@/components/risk-management/risk-details";

export function RiskManagementDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAssessmentForm, setShowAssessmentForm] = useState(false);
  const [selectedRisk, setSelectedRisk] = useState<string | null>(null);

  const riskStats = [
    {
      title: "Total Risks",
      value: "156",
      change: "+8 this month",
      icon: AlertTriangle,
      color: "blue",
    },
    {
      title: "Critical Risks",
      value: "12",
      change: "+3 from last month",
      icon: AlertTriangle,
      color: "red",
    },
    {
      title: "Mitigated This Quarter",
      value: "24",
      change: "+12 vs. last quarter",
      icon: Shield,
      color: "green",
    },
    {
      title: "Risk Score",
      value: "7.2",
      change: "-0.3 vs. last month",
      icon: TrendingUp,
      color: "purple",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "assessment",
      title: "New cybersecurity risk assessment created",
      user: "Sarah Johnson",
      time: "2 hours ago",
      severity: "high",
    },
    {
      id: 2,
      type: "mitigation",
      title: "Data backup risk mitigation completed",
      user: "Michael Chen",
      time: "4 hours ago",
      severity: "medium",
    },
    {
      id: 3,
      type: "review",
      title: "Quarterly risk review completed",
      user: "Emma Davis",
      time: "1 day ago",
      severity: "low",
    },
    {
      id: 4,
      type: "escalation",
      title: "Supply chain risk escalated to executive team",
      user: "David Wilson",
      time: "2 days ago",
      severity: "critical",
    },
  ];

  if (selectedRisk) {
    return (
      <RiskDetails 
        riskId={selectedRisk} 
        onBack={() => setSelectedRisk(null)}
        onEdit={() => setShowAssessmentForm(true)}
      />
    );
  }

  if (showAssessmentForm) {
    return (
      <RiskAssessmentForm 
        onClose={() => setShowAssessmentForm(false)}
        onSave={() => {
          setShowAssessmentForm(false);
          // Refresh data
        }}
      />
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Risk Management</h1>
          <p className="text-muted-foreground">
            Identify, assess, and mitigate organizational risks
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button onClick={() => setShowAssessmentForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Risk Assessment
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {riskStats.map((stat) => (
          <Card key={stat.title} className={`border-l-4 ${
            stat.color === "red" ? "border-l-red-500" :
            stat.color === "green" ? "border-l-green-500" :
            stat.color === "blue" ? "border-l-blue-500" :
            "border-l-purple-500"
          }`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${
                stat.color === "red" ? "text-red-500" :
                stat.color === "green" ? "text-green-500" :
                stat.color === "blue" ? "text-blue-500" :
                "text-purple-500"
              }`} />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${
                stat.color === "red" ? "text-red-600" :
                stat.color === "green" ? "text-green-600" :
                stat.color === "blue" ? "text-blue-600" :
                "text-purple-600"
              }`}>
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="register">Risk Register</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Risk Heatmap */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Risk Heat Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-1 mb-4">
                  <div className="text-xs text-center font-medium">Impact</div>
                  <div className="text-xs text-center">Very Low</div>
                  <div className="text-xs text-center">Low</div>
                  <div className="text-xs text-center">Medium</div>
                  <div className="text-xs text-center">High</div>
                  
                  <div className="text-xs font-medium">Very High</div>
                  <div className="h-8 bg-yellow-200 border flex items-center justify-center text-xs">2</div>
                  <div className="h-8 bg-orange-300 border flex items-center justify-center text-xs">4</div>
                  <div className="h-8 bg-red-400 border flex items-center justify-center text-xs">6</div>
                  <div className="h-8 bg-red-600 border flex items-center justify-center text-xs text-white">3</div>
                  
                  <div className="text-xs font-medium">High</div>
                  <div className="h-8 bg-green-200 border flex items-center justify-center text-xs">8</div>
                  <div className="h-8 bg-yellow-300 border flex items-center justify-center text-xs">12</div>
                  <div className="h-8 bg-orange-400 border flex items-center justify-center text-xs">15</div>
                  <div className="h-8 bg-red-500 border flex items-center justify-center text-xs text-white">9</div>
                  
                  <div className="text-xs font-medium">Medium</div>
                  <div className="h-8 bg-green-100 border flex items-center justify-center text-xs">15</div>
                  <div className="h-8 bg-green-300 border flex items-center justify-center text-xs">18</div>
                  <div className="h-8 bg-yellow-400 border flex items-center justify-center text-xs">22</div>
                  <div className="h-8 bg-orange-500 border flex items-center justify-center text-xs text-white">8</div>
                  
                  <div className="text-xs font-medium">Low</div>
                  <div className="h-8 bg-green-100 border flex items-center justify-center text-xs">12</div>
                  <div className="h-8 bg-green-200 border flex items-center justify-center text-xs">8</div>
                  <div className="h-8 bg-green-400 border flex items-center justify-center text-xs">6</div>
                  <div className="h-8 bg-yellow-500 border flex items-center justify-center text-xs">4</div>
                  
                  <div className="text-xs font-medium">Very Low</div>
                  <div className="h-8 bg-green-100 border flex items-center justify-center text-xs">5</div>
                  <div className="h-8 bg-green-100 border flex items-center justify-center text-xs">3</div>
                  <div className="h-8 bg-green-200 border flex items-center justify-center text-xs">2</div>
                  <div className="h-8 bg-green-300 border flex items-center justify-center text-xs">1</div>
                </div>
                <div className="text-center text-xs text-muted-foreground">
                  Probability →
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Risk Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`rounded-full p-1 ${
                        activity.severity === "critical" ? "bg-red-100 text-red-600" :
                        activity.severity === "high" ? "bg-orange-100 text-orange-600" :
                        activity.severity === "medium" ? "bg-yellow-100 text-yellow-600" :
                        "bg-green-100 text-green-600"
                      }`}>
                        <AlertTriangle className="h-3 w-3" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{activity.user}</span>
                          <span>•</span>
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Categories Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Risk Categories Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { category: "Cybersecurity", total: 28, critical: 8, color: "red" },
                  { category: "Operational", total: 42, critical: 3, color: "orange" },
                  { category: "Financial", total: 24, critical: 1, color: "yellow" },
                  { category: "Regulatory", total: 18, critical: 0, color: "blue" },
                  { category: "Strategic", total: 31, critical: 0, color: "purple" },
                  { category: "Reputational", total: 13, critical: 0, color: "green" },
                ].map((category) => (
                  <div key={category.category} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{category.category}</h4>
                      <Badge variant="outline">{category.total} risks</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Critical</span>
                        <span className="font-medium text-red-600">{category.critical}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Non-Critical</span>
                        <span className="font-medium">{category.total - category.critical}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-red-500 rounded-full"
                          style={{ width: `${(category.critical / category.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="register">
          <RiskRegister onSelectRisk={setSelectedRisk} />
        </TabsContent>

        <TabsContent value="analytics">
          <RiskAnalytics />
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Generate Risk Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Executive Risk Summary", description: "High-level overview for leadership", icon: FileText },
                  { title: "Detailed Risk Register", description: "Complete list of all identified risks", icon: AlertTriangle },
                  { title: "Risk Treatment Plan", description: "Mitigation strategies and timelines", icon: Shield },
                  { title: "Risk Trend Analysis", description: "Historical risk data and projections", icon: TrendingUp },
                ].map((report) => (
                  <div key={report.title} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <report.icon className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{report.title}</h4>
                        <p className="text-sm text-muted-foreground">{report.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Generate
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scheduled Reports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Monthly Risk Dashboard", frequency: "Monthly", nextRun: "Feb 1, 2025", recipients: 5 },
                  { title: "Quarterly Board Report", frequency: "Quarterly", nextRun: "Apr 1, 2025", recipients: 8 },
                  { title: "Annual Risk Assessment", frequency: "Annually", nextRun: "Jan 1, 2026", recipients: 12 },
                ].map((schedule) => (
                  <div key={schedule.title} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{schedule.title}</h4>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium">Frequency:</span>
                        <br />{schedule.frequency}
                      </div>
                      <div>
                        <span className="font-medium">Next Run:</span>
                        <br />{schedule.nextRun}
                      </div>
                      <div>
                        <span className="font-medium">Recipients:</span>
                        <br />{schedule.recipients} people
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}