"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Shield,
  FileCheck,
  FileText,
  TrendingUp,
  Users,
  Activity,
  Bell,
  ChevronRight,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Target,
  Building2,
} from "lucide-react";
import { RiskChart } from "@/components/charts/risk-chart";
import { ComplianceChart } from "@/components/charts/compliance-chart";
import { AuditChart } from "@/components/charts/audit-chart";
import { IncidentChart } from "@/components/charts/incident-chart";

export function GrcDashboard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-video rounded-xl bg-muted/50 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-6">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">GRC Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your governance, risk, and compliance posture in real-time
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Risks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-xs text-muted-foreground">
              +3 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">87%</div>
            <p className="text-xs text-muted-foreground">
              +5% from last quarter
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open Audits</CardTitle>
            <FileCheck className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">8</div>
            <p className="text-xs text-muted-foreground">
              2 due this week
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Policy Updates</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">24</div>
            <p className="text-xs text-muted-foreground">
              Pending approval
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="risks">Risks</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="audits">Audits</TabsTrigger>
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {/* Risk Heatmap */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Risk Assessment Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <RiskChart />
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "High-risk vulnerability detected",
                      time: "2 hours ago",
                      type: "risk",
                      severity: "high",
                    },
                    {
                      title: "Compliance report submitted",
                      time: "4 hours ago",
                      type: "compliance",
                      severity: "low",
                    },
                    {
                      title: "Policy update approved",
                      time: "6 hours ago",
                      type: "policy",
                      severity: "medium",
                    },
                    {
                      title: "Security audit completed",
                      time: "1 day ago",
                      type: "audit",
                      severity: "low",
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`rounded-full p-2 ${
                        activity.severity === "high" 
                          ? "bg-red-100 text-red-600" 
                          : activity.severity === "medium"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-green-100 text-green-600"
                      }`}>
                        <Activity className="h-3 w-3" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {activity.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Overview Widgets */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Stakeholders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Board Members</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Risk Owners</span>
                    <span className="text-sm font-medium">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Auditors</span>
                    <span className="text-sm font-medium">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Compliance Officers</span>
                    <span className="text-sm font-medium">6</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Alerts & Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="destructive">Critical</Badge>
                    <span className="text-sm">3 active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
                    <span className="text-sm">7 active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Info</Badge>
                    <span className="text-sm">12 active</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Key Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Mitigation</span>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-16 bg-muted rounded">
                        <div className="h-2 w-12 bg-green-500 rounded"></div>
                      </div>
                      <span className="text-xs">75%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Compliance Goals</span>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-16 bg-muted rounded">
                        <div className="h-2 w-14 bg-blue-500 rounded"></div>
                      </div>
                      <span className="text-xs">87%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Audit Readiness</span>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-16 bg-muted rounded">
                        <div className="h-2 w-10 bg-yellow-500 rounded"></div>
                      </div>
                      <span className="text-xs">62%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risks" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Risk Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <RiskChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Top Risk Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Cybersecurity", level: "High", count: 8, color: "red" },
                    { name: "Operational", level: "Medium", count: 15, color: "yellow" },
                    { name: "Financial", level: "Low", count: 6, color: "green" },
                    { name: "Regulatory", level: "High", count: 4, color: "red" },
                    { name: "Strategic", level: "Medium", count: 9, color: "yellow" },
                  ].map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          risk.color === "red" ? "bg-red-500" :
                          risk.color === "yellow" ? "bg-yellow-500" :
                          "bg-green-500"
                        }`} />
                        <div>
                          <p className="font-medium">{risk.name}</p>
                          <p className="text-sm text-muted-foreground">{risk.count} risks</p>
                        </div>
                      </div>
                      <Badge variant={risk.level === "High" ? "destructive" : risk.level === "Medium" ? "secondary" : "default"}>
                        {risk.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <ComplianceChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "SOX", status: "Compliant", score: 95 },
                    { name: "GDPR", status: "Compliant", score: 88 },
                    { name: "ISO 27001", status: "In Progress", score: 76 },
                    { name: "HIPAA", status: "Compliant", score: 92 },
                    { name: "PCI DSS", status: "Review Needed", score: 65 },
                  ].map((framework, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {framework.status === "Compliant" ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : framework.status === "In Progress" ? (
                            <Clock className="h-4 w-4 text-yellow-500" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-red-500" />
                          )}
                          <span className="font-medium">{framework.name}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{framework.score}%</div>
                        <div className="text-sm text-muted-foreground">{framework.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audits" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Audit Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <AuditChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Annual Financial Audit",
                      auditor: "External Auditor Inc.",
                      date: "2025-02-15",
                      status: "Scheduled",
                      type: "Financial"
                    },
                    {
                      title: "IT Security Review",
                      auditor: "Internal Audit Team",
                      date: "2025-02-28",
                      status: "Preparing",
                      type: "Security"
                    },
                    {
                      title: "Compliance Assessment",
                      auditor: "Compliance Partners",
                      date: "2025-03-10",
                      status: "Planning",
                      type: "Compliance"
                    },
                  ].map((audit, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{audit.title}</h4>
                        <Badge variant="outline">{audit.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{audit.auditor}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{audit.date}</span>
                        </div>
                        <Badge variant="secondary">{audit.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="incidents" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Incident Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <IncidentChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "INC-001",
                      title: "Data Privacy Breach",
                      severity: "Critical",
                      status: "Under Investigation",
                      reportedDate: "2025-01-20",
                    },
                    {
                      id: "INC-002",
                      title: "Unauthorized Access Attempt",
                      severity: "High",
                      status: "Resolved",
                      reportedDate: "2025-01-18",
                    },
                    {
                      id: "INC-003",
                      title: "Policy Violation",
                      severity: "Medium",
                      status: "In Progress",
                      reportedDate: "2025-01-16",
                    },
                  ].map((incident, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-medium">{incident.title}</h4>
                          <p className="text-sm text-muted-foreground">{incident.id}</p>
                        </div>
                        <Badge variant={
                          incident.severity === "Critical" ? "destructive" :
                          incident.severity === "High" ? "secondary" :
                          "outline"
                        }>
                          {incident.severity}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{incident.reportedDate}</span>
                        <Badge variant="outline">{incident.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Action Items Requiring Attention
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Review High-Risk Assessments",
                description: "12 risk assessments require immediate review",
                priority: "High",
                dueDate: "Tomorrow",
                icon: AlertTriangle,
              },
              {
                title: "Complete Compliance Training",
                description: "Annual compliance training due for 45 employees",
                priority: "Medium",
                dueDate: "This Week",
                icon: Users,
              },
              {
                title: "Update Security Policies",
                description: "3 security policies need updates per new regulations",
                priority: "Medium",
                dueDate: "Next Week",
                icon: FileText,
              },
              {
                title: "Schedule Board Review",
                description: "Quarterly governance review meeting needed",
                priority: "Low",
                dueDate: "This Month",
                icon: Calendar,
              },
              {
                title: "Vendor Risk Assessment",
                description: "5 new vendors pending security evaluation",
                priority: "Medium",
                dueDate: "2 Weeks",
                icon: Eye,
              },
              {
                title: "Audit Documentation",
                description: "Prepare materials for upcoming external audit",
                priority: "High",
                dueDate: "3 Days",
                icon: FileCheck,
              },
            ].map((item, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`rounded p-2 ${
                    item.priority === "High" ? "bg-red-100 text-red-600" :
                    item.priority === "Medium" ? "bg-yellow-100 text-yellow-600" :
                    "bg-blue-100 text-blue-600"
                  }`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant={
                        item.priority === "High" ? "destructive" :
                        item.priority === "Medium" ? "secondary" :
                        "outline"
                      }>
                        {item.priority}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.dueDate}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}