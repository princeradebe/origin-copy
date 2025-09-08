"use client";

import ReactECharts from 'echarts-for-react';

export function AuditChart() {
  const option = {
    title: {
      text: 'Audit Schedule & Status',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    legend: {
      data: ['Planned', 'In Progress', 'Completed'],
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
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Planned',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [8, 12, 6, 10, 15, 8],
        itemStyle: {
          color: '#3b82f6'
        }
      },
      {
        name: 'In Progress',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [3, 5, 8, 4, 6, 9],
        itemStyle: {
          color: '#eab308'
        }
      },
      {
        name: 'Completed',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [5, 7, 2, 6, 9, 6],
        itemStyle: {
          color: '#22c55e'
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