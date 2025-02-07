
import ReactECharts from 'echarts-for-react';

const TopAgentChart = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'value',
      axisLabel: { color: '#fff' }
    },
    yAxis: {
      type: 'category',
      data: ['David Wilson', 'Joseph Hall', 'Jessica Clark', 'Daniel Young', 'Brittany Martin'],
      axisLabel: { color: '#fff' }
    },
    series: [
      {
        type: 'bar',
        data: [1238, 1185, 1178, 1170, 1169],
        color: '#3b82f6'
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default TopAgentChart;
