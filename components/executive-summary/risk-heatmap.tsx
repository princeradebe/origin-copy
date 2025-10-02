"use client";

import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

export function RiskHeatmap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hours = [
    "Cybersecurity",
    "Financial",
    "Operational",
    "Regulatory",
    "Strategic",
  ];
  const days = [
    "Very Low",
    "Low",
    "Medium",
    "High",
    "Critical",
  ];

  const data: [number, number, number][] = [
    [0, 0, 2],
    [0, 1, 3],
    [0, 2, 5],
    [0, 3, 8],
    [0, 4, 12],
    [1, 0, 1],
    [1, 1, 2],
    [1, 2, 4],
    [1, 3, 7],
    [1, 4, 9],
    [2, 0, 3],
    [2, 1, 4],
    [2, 2, 8],
    [2, 3, 11],
    [2, 4, 6],
    [3, 0, 2],
    [3, 1, 3],
    [3, 2, 5],
    [3, 3, 9],
    [3, 4, 7],
    [4, 0, 1],
    [4, 1, 2],
    [4, 2, 6],
    [4, 3, 8],
    [4, 4, 5],
  ];

  const maxValue = Math.max(...data.map((item) => item[2]));

  const option: EChartsOption = {
    tooltip: {
      position: "top",
      formatter: (params: any) => {
        return `${hours[params.data[0]]}<br/>${days[params.data[1]]}: ${params.data[2]} risks`;
      },
    },
    grid: {
      left: "10%",
      right: "4%",
      bottom: "10%",
      top: "2%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: hours,
      splitArea: {
        show: true,
      },
      axisLabel: {
        interval: 0,
        rotate: 0,
        fontSize: 11,
      },
    },
    yAxis: {
      type: "category",
      data: days,
      splitArea: {
        show: true,
      },
      axisLabel: {
        fontSize: 11,
      },
    },
    visualMap: {
      min: 0,
      max: maxValue,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: "0%",
      inRange: {
        color: ["#16a34a", "#eab308", "#ea580c", "#dc2626"],
      },
    },
    series: [
      {
        name: "Risk Count",
        type: "heatmap",
        data: data,
        label: {
          show: true,
          fontSize: 11,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  if (!mounted) {
    return <div className="h-[300px] w-full animate-pulse bg-muted rounded" />;
  }

  return <ReactECharts option={option} style={{ height: "300px" }} />;
}
