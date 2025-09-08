"use client";

import ReactECharts from 'echarts-for-react';

export function IncidentChart() {
  const option = {
    title: {
      text: 'Incident Reports by Category',
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
    legend: {
      data: ['Security', 'Compliance', 'Operational', 'Data Privacy'],
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
      data: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Security',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [8, 12, 6, 15, 10],
        itemStyle: {
          color: '#ef4444'
        }
      },
      {
        name: 'Compliance',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [4, 6, 8, 5, 7],
        itemStyle: {
          color: '#3b82f6'
        }
      },
      {
        name: 'Operational',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [12, 8, 14, 10, 9],
        itemStyle: {
          color: '#eab308'
        }
      },
      {
        name: 'Data Privacy',
        type: 'bar',
        emphasis: {
          focus: 'series'
        },
        data: [2, 4, 3, 6, 5],
        itemStyle: {
          color: '#8b5cf6'
        }
      }
    ]
  };

  return (
    <ReactECharts 
      option={option} 
      style={{ height: '300px', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  );
}