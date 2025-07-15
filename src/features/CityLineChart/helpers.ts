import type { ChartData } from 'chart.js';

/** данный хелпер служит для более приятных визуальных настроек графика */
export const getChartOptions = (data: ChartData<'line', number[], string>) => {
  return {
    scales: {
      y: {
        suggestedMin: Math.min(...data.datasets[0].data) - 5,
        suggestedMax: Math.max(...data.datasets[0].data) + 5,
      },
      x: {
        offset: true,
        ticks: {
          font: { size: 10 },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
};