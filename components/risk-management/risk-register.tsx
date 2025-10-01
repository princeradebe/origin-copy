"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ListFilter as Filter, MoveHorizontal as MoreHorizontal, Eye, CreditCard as Edit, Trash2, TriangleAlert as AlertTriangle, Calendar, User } from "lucide-react";

interface Risk {
  id: string;
  title: string;
  category: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  probability: "Very High" | "High" | "Medium" | "Low" | "Very Low";
  impact: "Very High" | "High" | "Medium" | "Low" | "Very Low";
  status: "Open" | "In Progress" | "Mitigated" | "Accepted" | "Closed";
  owner: string;
  dateIdentified: string;
  lastReview: string;
  nextReview: string;
  riskScore: number;
}

interface RiskRegisterProps {
  onSelectRisk: (riskId: string) => void;
}

export function RiskRegister({ onSelectRisk }: RiskRegisterProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSeverity, setFilterSeverity] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const risks: Risk[] = [
    {
      id: "RSK-001",
      title: "Cybersecurity breach through phishing attacks",
      category: "Cybersecurity",
      severity: "Critical",
      probability: "High",
      impact: "Very High",
      status: "In Progress",
      owner: "Sarah Johnson",
      dateIdentified: "2024-11-15",
      lastReview: "2025-01-15",
      nextReview: "2025-02-15",
      riskScore: 9.2,
    },
    {
      id: "RSK-002",
      title: "Supply chain disruption - key supplier bankruptcy",
      category: "Operational",
      severity: "High",
      probability: "Medium",
      impact: "High",
      status: "Open",
      owner: "Michael Chen",
      dateIdentified: "2024-12-01",
      lastReview: "2025-01-10",
      nextReview: "2025-02-10",
      riskScore: 7.8,
    },
    {
      id: "RSK-003",
      title: "Currency exchange rate volatility impact",
      category: "Financial",
      severity: "Medium",
      probability: "High",
      impact: "Medium",
      status: "Mitigated",
      owner: "Emma Davis",
      dateIdentified: "2024-10-22",
      lastReview: "2025-01-05",
      nextReview: "2025-04-05",
      riskScore: 6.4,
    },
    {
      id: "RSK-004",
      title: "GDPR compliance violation due to data processing",
      category: "Regulatory",
      severity: "High",
      probability: "Low",
      impact: "Very High",
      status: "In Progress",
      owner: "David Wilson",
      dateIdentified: "2024-09-18",
      lastReview: "2024-12-18",
      nextReview: "2025-03-18",
      riskScore: 7.2,
    },
    {
      id: "RSK-005",
      title: "Key personnel departure - critical knowledge loss",
      category: "Strategic",
      severity: "Medium",
      probability: "Medium",
      impact: "High",
      status: "Open",
      owner: "Lisa Thompson",
      dateIdentified: "2024-11-30",
      lastReview: "2024-12-30",
      nextReview: "2025-01-30",
      riskScore: 6.8,
    },
    {
      id: "RSK-006",
      title: "Server hardware failure - critical systems",
      category: "Operational",
      severity: "High",
      probability: "Medium",
      impact: "High",
      status: "Mitigated",
      owner: "James Rodriguez",
      dateIdentified: "2024-08-14",
      lastReview: "2024-11-14",
      nextReview: "2025-02-14",
      riskScore: 7.5,
    },
    {
      id: "RSK-007",
      title: "Social media reputation damage",
      category: "Reputational",
      severity: "Medium",
      probability: "Low",
      impact: "Medium",
      status: "Accepted",
      owner: "Anna Martinez",
      dateIdentified: "2024-07-10",
      lastReview: "2024-10-10",
      nextReview: "2025-01-10",
      riskScore: 4.2,
    },
    {
      id: "RSK-008",
      title: "Third-party API service disruption",
      category: "Operational",
      severity: "Medium",
      probability: "Medium",
      impact: "Medium",
      status: "In Progress",
      owner: "Robert Kim",
      dateIdentified: "2024-12-05",
      lastReview: "2025-01-05",
      nextReview: "2025-02-05",
      riskScore: 5.8,
    },
  ];

  const filteredRisks = risks.filter((risk) => {
    const matchesSearch = risk.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         risk.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = filterSeverity === "all" || risk.severity === filterSeverity;
    const matchesCategory = filterCategory === "all" || risk.category === filterCategory;
    
    return matchesSearch && matchesSeverity && matchesCategory;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "destructive";
      case "High":
        return "secondary";
      case "Medium":
        return "outline";
      case "Low":
        return "default";
      default:
        return "outline";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "destructive";
      case "In Progress":
        return "secondary";
      case "Mitigated":
        return "default";
      case "Accepted":
        return "outline";
      case "Closed":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Risk Register
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search risks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-64"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Severity
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterSeverity("all")}>
                  All Severities
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterSeverity("Critical")}>
                  Critical
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterSeverity("High")}>
                  High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterSeverity("Medium")}>
                  Medium
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterSeverity("Low")}>
                  Low
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setFilterCategory("all")}>
                  All Categories
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterCategory("Cybersecurity")}>
                  Cybersecurity
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterCategory("Operational")}>
                  Operational
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterCategory("Financial")}>
                  Financial
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterCategory("Regulatory")}>
                  Regulatory
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterCategory("Strategic")}>
                  Strategic
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilterCategory("Reputational")}>
                  Reputational
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Risk ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Next Review</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRisks.map((risk) => (
                <TableRow key={risk.id} className="cursor-pointer hover:bg-muted/50">
                  <TableCell className="font-mono text-sm">{risk.id}</TableCell>
                  <TableCell 
                    className="max-w-xs cursor-pointer hover:text-primary"
                    onClick={() => onSelectRisk(risk.id)}
                  >
                    <div className="truncate font-medium">{risk.title}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {risk.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getSeverityColor(risk.severity) as any}>
                      {risk.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(risk.status) as any}>
                      {risk.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        risk.riskScore >= 8 ? "bg-red-500" :
                        risk.riskScore >= 6 ? "bg-orange-500" :
                        risk.riskScore >= 4 ? "bg-yellow-500" :
                        "bg-green-500"
                      }`} />
                      <span className="font-medium">{risk.riskScore}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{risk.owner}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{risk.nextReview}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => onSelectRisk(risk.id)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Risk
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Risk
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground">
          Showing {filteredRisks.length} of {risks.length} risks
        </div>
      </CardContent>
    </Card>
  );
}