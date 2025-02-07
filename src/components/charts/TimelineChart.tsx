
import ReactECharts from 'echarts-for-react';

const TimelineChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisLabel: { color: '#fff' }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#fff' }
    },
    series: [
      {
        name: 'Tickets Created',
        type: 'line',
        data: [2200, 2300, 2500, 2000, 2400, 2300, 2200, 2400, 2600, 2300, 2100, 2400],
        color: '#8b5cf6'
      },
      {
        name: 'Tickets Closed',
        type: 'line',
        data: [2150, 2250, 2450, 1950, 2350, 2250, 2150, 2350, 2550, 2250, 2050, 2350],
        color: '#06b6d4'
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default TimelineChart;
