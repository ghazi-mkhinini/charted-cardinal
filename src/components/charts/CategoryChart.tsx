
import ReactECharts from 'echarts-for-react';

const CategoryChart = () => {
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
      data: ['System', 'Login Access', 'Software', 'Hardware'],
      axisLabel: { color: '#fff' }
    },
    series: [
      {
        type: 'bar',
        data: [10917, 8251, 5756, 2899],
        color: '#3b82f6'
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default CategoryChart;
