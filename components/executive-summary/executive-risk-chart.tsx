"use client";

import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

interface ExecutiveRiskChartProps {
  period: "month" | "quarter" | "year";
}

export function ExecutiveRiskChart({ period }: ExecutiveRiskChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getDataByPeriod = () => {
    switch (period) {
      case "month":
        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          critical: [8, 10, 11, 12],
          high: [15, 16, 14, 18],
          medium: [22, 20, 23, 21],
          low: [12, 13, 11, 14],
        };
      case "quarter":
        return {
          labels: ["Jan", "Feb", "Mar"],
          critical: [8, 10, 12],
          high: [14, 16, 18],
          medium: [20, 22, 21],
          low: [11, 12, 14],
        };
      case "year":
        return {
          labels: ["Q1", "Q2", "Q3", "Q4"],
          critical: [6, 8, 10, 12],
          high: [12, 14, 16, 18],
          medium: [18, 20, 22, 21],
          low: [10, 11, 12, 14],
        };
    }
  };

  const data = getDataByPeriod();

  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Critical", "High", "Medium", "Low"],
      bottom: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: data.labels,
    },
    yAxis: {
      type: "value",
      name: "Number of Risks",
    },
    series: [
      {
        name: "Critical",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 3,
        },
        emphasis: {
          focus: "series",
        },
        data: data.critical,
        itemStyle: {
          color: "#dc2626",
        },
      },
      {
        name: "High",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 3,
        },
        emphasis: {
          focus: "series",
        },
        data: data.high,
        itemStyle: {
          color: "#ea580c",
        },
      },
      {
        name: "Medium",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 3,
        },
        emphasis: {
          focus: "series",
        },
        data: data.medium,
        itemStyle: {
          color: "#eab308",
        },
      },
      {
        name: "Low",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 3,
        },
        emphasis: {
          focus: "series",
        },
        data: data.low,
        itemStyle: {
          color: "#16a34a",
        },
      },
    ],
  };

  if (!mounted) {
    return <div className="h-[300px] w-full animate-pulse bg-muted rounded" />;
  }

  return <ReactECharts option={option} style={{ height: "300px" }} />;
}
