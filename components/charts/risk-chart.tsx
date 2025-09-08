"use client";

import ReactECharts from 'echarts-for-react';

export function RiskChart() {
  const option = {
    title: {
      text: 'Risk Assessment Matrix',
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
      data: ['Critical', 'High', 'Medium', 'Low']
    },
    series: [
      {
        name: 'Risk Level',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['60%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { 
            value: 12, 
            name: 'Critical',
            itemStyle: { color: '#ef4444' }
          },
          { 
            value: 28, 
            name: 'High',
            itemStyle: { color: '#f97316' }
          },
          { 
            value: 45, 
            name: 'Medium',
            itemStyle: { color: '#eab308' }
          },
          { 
            value: 65, 
            name: 'Low',
            itemStyle: { color: '#22c55e' }
          }
        ]
      }
    ],
    graphic: {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: '150\nTotal Risks',
        textAlign: 'center',
        fill: '#64748b',
        fontSize: 14,
        fontWeight: 'bold'
      }
    }
  };

  return (
    <ReactECharts 
      option={option} 
      style={{ height: '300px', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  );
}