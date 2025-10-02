"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TriangleAlert as AlertTriangle, TrendingUp, TrendingDown, Shield, Target, DollarSign, Users, ArrowUpRight, FileText, Download, Calendar, CircleCheck as CheckCircle, Circle as XCircle, CircleAlert as AlertCircle, Building2, Activity } from "lucide-react";
import { ExecutiveRiskChart } from "./executive-risk-chart";
import { RiskHeatmap } from "./risk-heatmap";
import { TopRisksTable } from "./top-risks-table";

export function ExecutiveRiskSummary() {
  const [selectedPeriod, setSelectedPeriod] = useState<"month" | "quarter" | "year">("quarter");

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Executive Risk Summary</h1>
          <p className="text-muted-foreground">
            Comprehensive risk overview for leadership decision-making
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Button
              variant={selectedPeriod === "month" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod("month")}
            >
              Month
            </Button>
            <Button
              variant={selectedPeriod === "quarter" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod("quarter")}
            >
              Quarter
            </Button>
            <Button
              variant={selectedPeriod === "year" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPeriod("year")}
            >
              Year
            </Button>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Risk Score</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">7.2</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingUp className="h-4 w-4 text-red-500 mr-1" />
              <span className="text-red-600 font-medium">+0.8</span>
              <span className="text-muted-foreground ml-1">from last {selectedPeriod}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Risks</CardTitle>
            <XCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-600">12</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingUp className="h-4 w-4 text-orange-500 mr-1" />
              <span className="text-orange-600 font-medium">+3</span>
              <span className="text-muted-foreground ml-1">new this {selectedPeriod}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mitigated Risks</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">28</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">-15</span>
              <span className="text-muted-foreground ml-1">since last {selectedPeriod}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Exposure</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">$8.5M</div>
            <div className="flex items-center text-sm mt-2">
              <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">-12%</span>
              <span className="text-muted-foreground ml-1">from last {selectedPeriod}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Risk Trend Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ExecutiveRiskChart period={selectedPeriod} />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Risk Heatmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RiskHeatmap />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Top 10 Critical Risks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TopRisksTable />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Risk by Business Unit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { unit: "Technology", score: 8.5, risks: 24, trend: "up" },
                { unit: "Finance", score: 6.2, risks: 18, trend: "down" },
                { unit: "Operations", score: 7.1, risks: 22, trend: "up" },
                { unit: "Sales & Marketing", score: 4.8, risks: 12, trend: "down" },
                { unit: "Human Resources", score: 5.3, risks: 9, trend: "stable" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{item.unit}</p>
                    <p className="text-sm text-muted-foreground">{item.risks} active risks</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className={`text-lg font-bold ${
                        item.score >= 7 ? "text-red-600" :
                        item.score >= 5 ? "text-orange-600" :
                        "text-green-600"
                      }`}>
                        {item.score}
                      </div>
                    </div>
                    {item.trend === "up" && <TrendingUp className="h-4 w-4 text-red-500" />}
                    {item.trend === "down" && <TrendingDown className="h-4 w-4 text-green-500" />}
                    {item.trend === "stable" && <div className="h-4 w-4" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Risk Category Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { category: "Cybersecurity", count: 28, severity: "Critical", color: "red" },
                { category: "Regulatory Compliance", count: 19, severity: "High", color: "orange" },
                { category: "Financial", count: 15, severity: "Medium", color: "yellow" },
                { category: "Operational", count: 22, severity: "High", color: "orange" },
                { category: "Strategic", count: 11, severity: "Medium", color: "yellow" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      item.color === "red" ? "bg-red-500" :
                      item.color === "orange" ? "bg-orange-500" :
                      "bg-yellow-500"
                    }`} />
                    <div>
                      <p className="font-medium">{item.category}</p>
                      <p className="text-sm text-muted-foreground">{item.count} risks</p>
                    </div>
                  </div>
                  <Badge variant={
                    item.severity === "Critical" ? "destructive" :
                    item.severity === "High" ? "secondary" :
                    "outline"
                  }>
                    {item.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Risk Reviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Quarterly Risk Committee",
                  date: "Feb 15, 2025",
                  attendees: 12,
                  status: "Scheduled",
                },
                {
                  title: "Cyber Risk Assessment",
                  date: "Feb 22, 2025",
                  attendees: 8,
                  status: "Preparing",
                },
                {
                  title: "Board Risk Report",
                  date: "Mar 1, 2025",
                  attendees: 15,
                  status: "Draft",
                },
                {
                  title: "Operational Risk Review",
                  date: "Mar 10, 2025",
                  attendees: 10,
                  status: "Planning",
                },
              ].map((item, index) => (
                <div key={index} className="p-3 border rounded-lg space-y-2">
                  <div className="flex items-start justify-between">
                    <p className="font-medium text-sm">{item.title}</p>
                    <Badge variant="outline" className="text-xs">{item.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      <span>{item.attendees}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Executive Action Items
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              {
                title: "Review Critical Cybersecurity Risks",
                description: "8 new critical vulnerabilities require executive approval for remediation budget",
                priority: "Urgent",
                owner: "CIO",
                deadline: "Today",
              },
              {
                title: "Approve Risk Mitigation Strategy",
                description: "Updated enterprise risk management framework pending board review",
                priority: "High",
                owner: "CRO",
                deadline: "This Week",
              },
              {
                title: "Regulatory Compliance Update",
                description: "New regulations require policy updates and resource allocation",
                priority: "High",
                owner: "CCO",
                deadline: "2 Weeks",
              },
              {
                title: "Third-Party Risk Assessment",
                description: "12 critical vendors require immediate security assessment",
                priority: "Medium",
                owner: "CISO",
                deadline: "3 Weeks",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white border rounded-lg space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="font-semibold">{item.title}</h4>
                  <Badge variant={
                    item.priority === "Urgent" ? "destructive" :
                    item.priority === "High" ? "secondary" :
                    "outline"
                  }>
                    {item.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Owner: <span className="font-medium text-foreground">{item.owner}</span></span>
                    <span className="text-muted-foreground">Due: <span className="font-medium text-foreground">{item.deadline}</span></span>
                  </div>
                  <Button size="sm" variant="outline">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
