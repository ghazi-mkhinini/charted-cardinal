
import ReactECharts from 'echarts-for-react';

const PriorityChart = () => {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: true,
          formatter: '{b}: {c} ({d}%)'
        },
        data: [
          { value: 10224, name: 'High' },
          { value: 4625, name: 'Mid' },
          { value: 13306, name: 'Low' }
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default PriorityChart;
