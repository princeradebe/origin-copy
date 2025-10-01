"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Edit,
  FileText,
  AlertTriangle,
  Calendar,
  User,
  Target,
  Shield,
  TrendingUp,
  Clock,
  CheckCircle,
  Activity,
  MessageSquare,
} from "lucide-react";

interface RiskDetailsProps {
  riskId: string;
  onBack: () => void;
  onEdit: () => void;
}

export function RiskDetails({ riskId, onBack, onEdit }: RiskDetailsProps) {
  // Mock data - in real app, this would be fetched based on riskId
  const riskData = {
    id: riskId,
    title: "Cybersecurity breach through phishing attacks",
    description: "Risk of unauthorized access to systems and data through sophisticated phishing campaigns targeting employees.",
    category: "Cybersecurity",
    severity: "Critical",
    probability: "High",
    impact: "Very High",
    status: "In Progress",
    riskScore: 9.2,
    owner: "Sarah Johnson",
    dateIdentified: "2024-11-15",
    lastReview: "2025-01-15",
    nextReview: "2025-02-15",
    potentialCauses: [
      "Employee lack of cybersecurity awareness",
      "Sophisticated social engineering techniques",
      "Outdated email security systems",
      "Remote work vulnerabilities"
    ],
    potentialConsequences: [
      "Data breach and privacy violations",
      "Financial losses from system downtime",
      "Regulatory fines and penalties",
      "Reputation damage and customer loss",
      "Intellectual property theft"
    ],
    existingControls: [
      "Email filtering and anti-spam systems",
      "Regular cybersecurity training programs",
      "Multi-factor authentication implementation",
      "Incident response procedures",
      "Regular security assessments"
    ],
    mitigationActions: [
      {
        id: 1,
        action: "Implement advanced email security solution",
        responsible: "IT Security Team",
        dueDate: "2025-02-28",
        status: "In Progress",
        progress: 65,
        priority: "High"
      },
      {
        id: 2,
        action: "Conduct monthly phishing simulation tests",
        responsible: "HR Department",
        dueDate: "2025-02-01",
        status: "Completed",
        progress: 100,
        priority: "Medium"
      },
      {
        id: 3,
        action: "Update incident response procedures",
        responsible: "Security Officer",
        dueDate: "2025-03-15",
        status: "Planned",
        progress: 0,
        priority: "Medium"
      },
      {
        id: 4,
        action: "Deploy endpoint detection and response (EDR)",
        responsible: "IT Department",
        dueDate: "2025-04-01",
        status: "In Progress",
        progress: 30,
        priority: "High"
      }
    ],
    riskHistory: [
      {
        date: "2025-01-15",
        action: "Risk assessment updated",
        user: "Sarah Johnson",
        details: "Updated probability from Medium to High based on recent threat intelligence"
      },
      {
        date: "2024-12-20",
        action: "Mitigation action completed",
        user: "IT Team",
        details: "Phishing simulation testing program launched"
      },
      {
        date: "2024-11-15",
        action: "Risk identified",
        user: "Sarah Johnson",
        details: "Initial risk assessment completed following security audit"
      }
    ]
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "destructive";
      case "In Progress":
        return "secondary";
      case "Completed":
        return "default";
      case "Planned":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Register
          </Button>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight">{riskData.title}</h1>
              <Badge className={getSeverityColor(riskData.severity)}>
                {riskData.severity}
              </Badge>
            </div>
            <p className="text-muted-foreground">Risk ID: {riskData.id}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onEdit}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Risk
          </Button>
        </div>
      </div>

      {/* Risk Score Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Risk Score</p>
                <p className="text-2xl font-bold text-red-600">{riskData.riskScore}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Probability</p>
                <p className="text-2xl font-bold">{riskData.probability}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Impact</p>
                <p className="text-2xl font-bold">{riskData.impact}</p>
              </div>
              <Target className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Status</p>
                <Badge variant={getStatusColor(riskData.status) as any} className="mt-1">
                  {riskData.status}
                </Badge>
              </div>
              <Activity className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="mitigation">Mitigation Actions</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Risk Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Risk Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Category</label>
                    <p className="mt-1">{riskData.category}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Description</label>
                    <p className="mt-1 text-sm leading-relaxed">{riskData.description}</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Risk Owner</label>
                      <div className="flex items-center gap-2 mt-1">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{riskData.owner}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Date Identified</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{riskData.dateIdentified}</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Last Review</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{riskData.lastReview}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Next Review</label>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{riskData.nextReview}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Risk Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Potential Causes</label>
                  <ul className="mt-2 space-y-1">
                    {riskData.potentialCauses.map((cause, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Potential Consequences</label>
                  <ul className="mt-2 space-y-1">
                    {riskData.potentialConsequences.map((consequence, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>{consequence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Existing Controls */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Existing Controls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {riskData.existingControls.map((control, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{control}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mitigation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Mitigation Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskData.mitigationActions.map((action) => (
                  <div key={action.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{action.action}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{action.responsible}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>Due: {action.dueDate}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          action.priority === "High" ? "destructive" :
                          action.priority === "Medium" ? "secondary" :
                          "outline"
                        }>
                          {action.priority}
                        </Badge>
                        <Badge variant={getStatusColor(action.status) as any}>
                          {action.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{action.progress}%</span>
                      </div>
                      <Progress value={action.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Risk History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {riskData.riskHistory.map((entry, index) => (
                  <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Activity className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{entry.action}</h4>
                        <span className="text-sm text-muted-foreground">{entry.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{entry.details}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{entry.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Related Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Risk Assessment Report.pdf", size: "2.4 MB", date: "2025-01-15" },
                  { name: "Cybersecurity Policy.docx", size: "1.8 MB", date: "2024-12-10" },
                  { name: "Incident Response Plan.pdf", size: "3.1 MB", date: "2024-11-20" },
                  { name: "Phishing Simulation Results.xlsx", size: "856 KB", date: "2024-12-20" },
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">{doc.size} • {doc.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}