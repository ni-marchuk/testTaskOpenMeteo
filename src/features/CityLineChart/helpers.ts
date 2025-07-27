import type { ChartData, ChartOptions } from 'chart.js';

/** данный хелпер служит для более приятных визуальных настроек графика */
export const getChartOptions = (data: ChartData<'line', number[], Date>): ChartOptions<'line'> => {
  return {
    scales: {
      y: {
        suggestedMin: Math.min(...data.datasets[0].data) - 5,
        suggestedMax: Math.max(...data.datasets[0].data) + 5,
      },
      x: {
        type: 'time',
        offset: true,
        ticks: {
          font: { size: 10 },
        },
        time: {
          tooltipFormat: 'D MMM HH:mm',  // локализованный формат
          displayFormats: {
            minute: 'HH:mm',
            hour: 'D MMM HH:mm',
            day: 'D MMM',
            month: 'MMM YYYY',
          },
        },
        title: {
          display: true,
          text: 'Дата',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
};