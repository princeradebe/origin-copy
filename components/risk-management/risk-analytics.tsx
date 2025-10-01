"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChartBar as BarChart3, TrendingUp, TrendingDown, TriangleAlert as AlertTriangle, Shield, Target, Calendar } from "lucide-react";
import ReactECharts from "echarts-for-react";

export function RiskAnalytics() {
  // Risk Trend Chart
  const riskTrendOption = {
    title: {
      text: 'Risk Trend Analysis',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['New Risks', 'Mitigated Risks', 'Total Open Risks'],
      bottom: '5%'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '20%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'New Risks',
        type: 'line',
        data: [8, 12, 6, 15, 10, 18, 14, 22, 11, 16, 19, 13],
        itemStyle: {
          color: '#ef4444'
        }
      },
      {
        name: 'Mitigated Risks',
        type: 'line',
        data: [5, 8, 12, 9, 14, 11, 16, 13, 18, 15, 12, 20],
        itemStyle: {
          color: '#22c55e'
        }
      },
      {
        name: 'Total Open Risks',
        type: 'line',
        data: [45, 49, 43, 49, 45, 52, 50, 59, 52, 53, 60, 53],
        itemStyle: {
          color: '#3b82f6'
        }
      }
    ]
  };

  // Risk Distribution by Category
  const categoryDistributionOption = {
    title: {
      text: 'Risk Distribution by Category',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['Cybersecurity', 'Operational', 'Financial', 'Regulatory', 'Strategic', 'Reputational']
    },
    series: [
      {
        name: 'Risk Category',
        type: 'pie',
        radius: '50%',
        center: ['60%', '50%'],
        data: [
          { value: 28, name: 'Cybersecurity', itemStyle: { color: '#ef4444' } },
          { value: 42, name: 'Operational', itemStyle: { color: '#f97316' } },
          { value: 24, name: 'Financial', itemStyle: { color: '#eab308' } },
          { value: 18, name: 'Regulatory', itemStyle: { color: '#3b82f6' } },
          { value: 31, name: 'Strategic', itemStyle: { color: '#8b5cf6' } },
          { value: 13, name: 'Reputational', itemStyle: { color: '#22c55e' } }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // Risk Severity Distribution
  const severityDistributionOption = {
    title: {
      text: 'Risk Severity Distribution',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Critical', 'High', 'Medium', 'Low']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Number of Risks',
        type: 'bar',
        data: [
          { value: 12, itemStyle: { color: '#dc2626' } },
          { value: 28, itemStyle: { color: '#ea580c' } },
          { value: 65, itemStyle: { color: '#ca8a04' } },
          { value: 51, itemStyle: { color: '#16a34a' } }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // Risk Aging Analysis
  const agingAnalysisOption = {
    title: {
      text: 'Risk Aging Analysis',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['0-30 days', '31-60 days', '61-90 days', '91-180 days', '180+ days']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Number of Risks',
        type: 'bar',
        data: [
          { value: 23, itemStyle: { color: '#22c55e' } },
          { value: 34, itemStyle: { color: '#eab308' } },
          { value: 28, itemStyle: { color: '#f97316' } },
          { value: 19, itemStyle: { color: '#ef4444' } },
          { value: 12, itemStyle: { color: '#dc2626' } }
        ]
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Key Analytics Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Risk Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">6.8</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
              -0.3 from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-red-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High-Risk Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">40</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="mr-1 h-3 w-3 text-red-500" />
              +5 from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mitigation Rate</CardTitle>
            <Shield className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">78%</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              +12% from last quarter
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Reviews</CardTitle>
            <Calendar className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">8</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingDown className="mr-1 h-3 w-3 text-green-500" />
              -3 from last week
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <ReactECharts 
              option={riskTrendOption} 
              style={{ height: '400px', width: '100%' }}
              opts={{ renderer: 'svg' }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ReactECharts 
              option={categoryDistributionOption} 
              style={{ height: '400px', width: '100%' }}
              opts={{ renderer: 'svg' }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ReactECharts 
              option={severityDistributionOption} 
              style={{ height: '400px', width: '100%' }}
              opts={{ renderer: 'svg' }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <ReactECharts 
              option={agingAnalysisOption} 
              style={{ height: '400px', width: '100%' }}
              opts={{ renderer: 'svg' }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Risk Performance Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Risk Performance Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="font-medium text-center">Risk Response Effectiveness</h4>
              <div className="space-y-3">
                {[
                  { label: "Preventive Controls", value: 85, color: "bg-green-500" },
                  { label: "Detective Controls", value: 78, color: "bg-blue-500" },
                  { label: "Corrective Controls", value: 72, color: "bg-orange-500" },
                  { label: "Contingency Plans", value: 65, color: "bg-red-500" },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 ${item.color} rounded-full`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-center">Risk by Business Unit</h4>
              <div className="space-y-3">
                {[
                  { unit: "IT Department", risks: 32, critical: 8 },
                  { unit: "Finance", risks: 24, critical: 3 },
                  { unit: "Operations", risks: 28, critical: 1 },
                  { unit: "HR", risks: 16, critical: 0 },
                  { unit: "Legal", risks: 12, critical: 0 },
                ].map((unit, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <div className="font-medium">{unit.unit}</div>
                      <div className="text-sm text-muted-foreground">{unit.risks} total risks</div>
                    </div>
                    <div className="text-right">
                      <Badge variant={unit.critical > 0 ? "destructive" : "default"}>
                        {unit.critical} critical
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-center">Risk Treatment Status</h4>
              <div className="space-y-3">
                {[
                  { status: "Mitigate", count: 89, percentage: 57, color: "bg-green-500" },
                  { status: "Accept", count: 34, percentage: 22, color: "bg-blue-500" },
                  { status: "Transfer", count: 21, percentage: 14, color: "bg-yellow-500" },
                  { status: "Avoid", count: 12, percentage: 7, color: "bg-red-500" },
                ].map((treatment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{treatment.status}</span>
                      <span className="font-medium">{treatment.count} risks ({treatment.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 ${treatment.color} rounded-full`}
                        style={{ width: `${treatment.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}