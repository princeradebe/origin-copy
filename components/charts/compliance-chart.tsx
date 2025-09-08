"use client";

import ReactECharts from 'echarts-for-react';

export function ComplianceChart() {
  const option = {
    title: {
      text: 'Compliance Metrics',
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
      data: ['Compliant', 'In Progress', 'Non-Compliant'],
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
      data: ['SOX', 'GDPR', 'ISO 27001', 'HIPAA', 'PCI DSS', 'NIST']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Compliant',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [95, 88, 76, 92, 65, 82],
        itemStyle: {
          color: '#22c55e'
        }
      },
      {
        name: 'In Progress',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [3, 8, 20, 5, 25, 15],
        itemStyle: {
          color: '#eab308'
        }
      },
      {
        name: 'Non-Compliant',
        type: 'bar',
        stack: 'total',
        emphasis: {
          focus: 'series'
        },
        data: [2, 4, 4, 3, 10, 3],
        itemStyle: {
          color: '#ef4444'
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