
import ReactECharts from 'echarts-for-react';

const SatisfactionChart = () => {
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
      data: ['★★★★★', '★★★★', '★★★', '★★', '★'],
      axisLabel: { color: '#fff' }
    },
    series: [
      {
        type: 'bar',
        data: [15000, 8000, 2500, 1000, 500],
        color: '#3b82f6'
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default SatisfactionChart;
