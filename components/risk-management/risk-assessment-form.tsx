"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Save,
  AlertTriangle,
  Calendar,
  User,
  FileText,
  Shield,
  Target,
} from "lucide-react";

interface RiskAssessmentFormProps {
  onClose: () => void;
  onSave: () => void;
  riskId?: string;
}

export function RiskAssessmentForm({ onClose, onSave, riskId }: RiskAssessmentFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    severity: "",
    probability: "",
    impact: "",
    riskOwner: "",
    dateIdentified: "",
    potentialCauses: "",
    potentialConsequences: "",
    existingControls: "",
    mitigationStrategy: "",
    actionPlan: "",
    reviewDate: "",
    status: "Open",
  });

  const [riskScore, setRiskScore] = useState(0);

  const calculateRiskScore = () => {
    const probabilityValues = {
      "Very Low": 1,
      "Low": 2,
      "Medium": 3,
      "High": 4,
      "Very High": 5,
    };
    
    const impactValues = {
      "Very Low": 1,
      "Low": 2,
      "Medium": 3,
      "High": 4,
      "Very High": 5,
    };

    const probValue = probabilityValues[formData.probability as keyof typeof probabilityValues] || 0;
    const impactValue = impactValues[formData.impact as keyof typeof impactValues] || 0;
    
    const score = probValue * impactValue * 0.4; // Scale to 10
    setRiskScore(Math.round(score * 10) / 10);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Recalculate risk score if probability or impact changes
    if (field === "probability" || field === "impact") {
      setTimeout(calculateRiskScore, 0);
    }
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.title || !formData.category || !formData.riskOwner) {
      alert("Please fill in all required fields");
      return;
    }
    
    // Save the risk assessment
    console.log("Saving risk assessment:", formData);
    onSave();
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onClose}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Register
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {riskId ? "Edit Risk Assessment" : "New Risk Assessment"}
            </h1>
            <p className="text-muted-foreground">
              Identify and assess organizational risks
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            <Save className="mr-2 h-4 w-4" />
            Save Assessment
          </Button>
        </div>
      </div>

      {/* Risk Score Card */}
      {(formData.probability && formData.impact) && (
        <Card className="border-l-4 border-l-orange-500">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Calculated Risk Score</h3>
                <p className="text-sm text-muted-foreground">
                  Based on probability and impact assessment
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-orange-600">{riskScore}</div>
                <Badge className={getSeverityColor(
                  riskScore >= 8 ? "Critical" :
                  riskScore >= 6 ? "High" :
                  riskScore >= 4 ? "Medium" :
                  "Low"
                )}>
                  {riskScore >= 8 ? "Critical" :
                   riskScore >= 6 ? "High" :
                   riskScore >= 4 ? "Medium" :
                   "Low"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Form */}
      <Tabs defaultValue="identification" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="identification">Risk Identification</TabsTrigger>
          <TabsTrigger value="assessment">Risk Assessment</TabsTrigger>
          <TabsTrigger value="treatment">Risk Treatment</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring & Review</TabsTrigger>
        </TabsList>

        <TabsContent value="identification" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Risk Identification
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Risk Title *</Label>
                  <Input
                    id="title"
                    placeholder="Brief description of the risk"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Risk Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="operational">Operational</SelectItem>
                      <SelectItem value="financial">Financial</SelectItem>
                      <SelectItem value="regulatory">Regulatory</SelectItem>
                      <SelectItem value="strategic">Strategic</SelectItem>
                      <SelectItem value="reputational">Reputational</SelectItem>
                      <SelectItem value="environmental">Environmental</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Risk Description</Label>
                <Textarea
                  id="description"
                  placeholder="Detailed description of the risk"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="riskOwner">Risk Owner *</Label>
                  <Input
                    id="riskOwner"
                    placeholder="Person responsible for managing this risk"
                    value={formData.riskOwner}
                    onChange={(e) => handleInputChange("riskOwner", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateIdentified">Date Identified</Label>
                  <Input
                    id="dateIdentified"
                    type="date"
                    value={formData.dateIdentified}
                    onChange={(e) => handleInputChange("dateIdentified", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="potentialCauses">Potential Causes</Label>
                <Textarea
                  id="potentialCauses"
                  placeholder="What could cause this risk to occur?"
                  rows={3}
                  value={formData.potentialCauses}
                  onChange={(e) => handleInputChange("potentialCauses", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="potentialConsequences">Potential Consequences</Label>
                <Textarea
                  id="potentialConsequences"
                  placeholder="What would be the impact if this risk occurs?"
                  rows={3}
                  value={formData.potentialConsequences}
                  onChange={(e) => handleInputChange("potentialConsequences", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Risk Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="probability">Probability</Label>
                    <Select value={formData.probability} onValueChange={(value) => handleInputChange("probability", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select probability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Very Low">Very Low (1-10%)</SelectItem>
                        <SelectItem value="Low">Low (11-30%)</SelectItem>
                        <SelectItem value="Medium">Medium (31-60%)</SelectItem>
                        <SelectItem value="High">High (61-85%)</SelectItem>
                        <SelectItem value="Very High">Very High (86-100%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="impact">Impact</Label>
                    <Select value={formData.impact} onValueChange={(value) => handleInputChange("impact", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select impact" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Very Low">Very Low</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Very High">Very High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Impact Criteria</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>Very High:</strong> Catastrophic impact on business operations</div>
                      <div><strong>High:</strong> Major impact requiring significant resources</div>
                      <div><strong>Medium:</strong> Moderate impact manageable with planning</div>
                      <div><strong>Low:</strong> Minor impact with limited consequences</div>
                      <div><strong>Very Low:</strong> Negligible impact on operations</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="existingControls">Existing Controls</Label>
                <Textarea
                  id="existingControls"
                  placeholder="Current measures in place to prevent or mitigate this risk"
                  rows={4}
                  value={formData.existingControls}
                  onChange={(e) => handleInputChange("existingControls", e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Risk Treatment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="mitigationStrategy">Mitigation Strategy</Label>
                <Textarea
                  id="mitigationStrategy"
                  placeholder="Strategy to reduce the likelihood or impact of this risk"
                  rows={4}
                  value={formData.mitigationStrategy}
                  onChange={(e) => handleInputChange("mitigationStrategy", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="actionPlan">Action Plan</Label>
                <Textarea
                  id="actionPlan"
                  placeholder="Specific actions, timelines, and responsibilities"
                  rows={5}
                  value={formData.actionPlan}
                  onChange={(e) => handleInputChange("actionPlan", e.target.value)}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Mitigated">Mitigated</SelectItem>
                      <SelectItem value="Accepted">Accepted</SelectItem>
                      <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reviewDate">Next Review Date</Label>
                  <Input
                    id="reviewDate"
                    type="date"
                    value={formData.reviewDate}
                    onChange={(e) => handleInputChange("reviewDate", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Monitoring & Review
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Review Schedule</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Monthly Review</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Quarterly Review</span>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Annual Review</span>
                      <input type="checkbox" className="rounded" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded">
                      <span>Ad-hoc Review</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Key Performance Indicators</h4>
                  <div className="space-y-3">
                    <Input placeholder="KPI 1" />
                    <Input placeholder="KPI 2" />
                    <Input placeholder="KPI 3" />
                    <Button variant="outline" size="sm">
                      Add KPI
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Stakeholder Notifications</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Risk Owner</Label>
                    <Input value={formData.riskOwner} readOnly className="bg-muted" />
                  </div>
                  <div className="space-y-2">
                    <Label>Additional Stakeholders</Label>
                    <Input placeholder="Enter email addresses" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}