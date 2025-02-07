
import ReactECharts from 'echarts-for-react';

const WorkTypeChart = () => {
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
          { value: 14069, name: 'Service Request' },
          { value: 12866, name: 'Incident' }
        ]
      }
    ]
  };

  return <ReactECharts option={option} style={{ height: '300px' }} />;
};

export default WorkTypeChart;
