
import ReactECharts from 'echarts-for-react';

const SeverityChart = () => {
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
      data: ['Normal', 'Low', 'Minor', 'Major', 'Urgent'],
      axisLabel: { color: '#fff' }
    },
    series: [
      {
        type: 'bar',
        data: [15733, 7787, 2723, 1457, 390],
        color: '#3b82f6'
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default SeverityChart;
