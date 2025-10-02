"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";

interface Risk {
  id: string;
  title: string;
  category: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  likelihood: string;
  impact: string;
  score: number;
  trend: "up" | "down" | "stable";
  owner: string;
  status: string;
}

export function TopRisksTable() {
  const risks: Risk[] = [
    {
      id: "RISK-001",
      title: "Ransomware Attack on Critical Infrastructure",
      category: "Cybersecurity",
      severity: "Critical",
      likelihood: "High",
      impact: "Very High",
      score: 9.2,
      trend: "up",
      owner: "CISO",
      status: "Mitigation In Progress",
    },
    {
      id: "RISK-002",
      title: "Regulatory Non-Compliance - Data Privacy",
      category: "Regulatory",
      severity: "Critical",
      likelihood: "Medium",
      impact: "Critical",
      score: 8.8,
      trend: "stable",
      owner: "CCO",
      status: "Under Review",
    },
    {
      id: "RISK-003",
      title: "Supply Chain Disruption",
      category: "Operational",
      severity: "High",
      likelihood: "Medium",
      impact: "High",
      score: 8.5,
      trend: "up",
      owner: "COO",
      status: "Monitoring",
    },
    {
      id: "RISK-004",
      title: "Third-Party Vendor Security Breach",
      category: "Cybersecurity",
      severity: "High",
      likelihood: "Medium",
      impact: "High",
      score: 8.1,
      trend: "down",
      owner: "CISO",
      status: "Assessment Complete",
    },
    {
      id: "RISK-005",
      title: "Financial Market Volatility Impact",
      category: "Financial",
      severity: "High",
      likelihood: "High",
      impact: "Medium",
      score: 7.8,
      trend: "up",
      owner: "CFO",
      status: "Hedging Strategy Active",
    },
    {
      id: "RISK-006",
      title: "Key Personnel Attrition",
      category: "Strategic",
      severity: "High",
      likelihood: "Medium",
      impact: "High",
      score: 7.5,
      trend: "stable",
      owner: "CHRO",
      status: "Retention Program Implemented",
    },
    {
      id: "RISK-007",
      title: "Cloud Infrastructure Outage",
      category: "Operational",
      severity: "High",
      likelihood: "Low",
      impact: "Very High",
      score: 7.3,
      trend: "down",
      owner: "CTO",
      status: "Redundancy Enhanced",
    },
    {
      id: "RISK-008",
      title: "New Competitor Market Entry",
      category: "Strategic",
      severity: "Medium",
      likelihood: "High",
      impact: "Medium",
      score: 7.0,
      trend: "up",
      owner: "CEO",
      status: "Market Analysis Ongoing",
    },
    {
      id: "RISK-009",
      title: "Credit Default by Major Customer",
      category: "Financial",
      severity: "Medium",
      likelihood: "Medium",
      impact: "High",
      score: 6.8,
      trend: "stable",
      owner: "CFO",
      status: "Credit Review Scheduled",
    },
    {
      id: "RISK-010",
      title: "Environmental Regulation Changes",
      category: "Regulatory",
      severity: "Medium",
      likelihood: "High",
      impact: "Medium",
      score: 6.5,
      trend: "up",
      owner: "CCO",
      status: "Compliance Gap Analysis",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 font-semibold text-sm">Risk ID</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Title</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Category</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Severity</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Risk Score</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Trend</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Owner</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Status</th>
            <th className="text-left py-3 px-4 font-semibold text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((risk, index) => (
            <tr key={risk.id} className="border-b hover:bg-muted/50 transition-colors">
              <td className="py-3 px-4">
                <span className="font-mono text-sm">{risk.id}</span>
              </td>
              <td className="py-3 px-4">
                <div className="max-w-xs">
                  <p className="font-medium text-sm">{risk.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Likelihood: {risk.likelihood} | Impact: {risk.impact}
                  </p>
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="text-sm">{risk.category}</span>
              </td>
              <td className="py-3 px-4">
                <Badge
                  variant={
                    risk.severity === "Critical"
                      ? "destructive"
                      : risk.severity === "High"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {risk.severity}
                </Badge>
              </td>
              <td className="py-3 px-4">
                <span
                  className={`text-lg font-bold ${
                    risk.score >= 8
                      ? "text-red-600"
                      : risk.score >= 7
                        ? "text-orange-600"
                        : "text-yellow-600"
                  }`}
                >
                  {risk.score}
                </span>
              </td>
              <td className="py-3 px-4">
                <div className="flex items-center gap-1">
                  {risk.trend === "up" && (
                    <TrendingUp className="h-4 w-4 text-red-500" />
                  )}
                  {risk.trend === "down" && (
                    <TrendingDown className="h-4 w-4 text-green-500" />
                  )}
                  {risk.trend === "stable" && (
                    <div className="h-4 w-4 border-t-2 border-gray-400" />
                  )}
                </div>
              </td>
              <td className="py-3 px-4">
                <span className="text-sm font-medium">{risk.owner}</span>
              </td>
              <td className="py-3 px-4">
                <span className="text-sm text-muted-foreground">{risk.status}</span>
              </td>
              <td className="py-3 px-4">
                <Button variant="ghost" size="sm">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
