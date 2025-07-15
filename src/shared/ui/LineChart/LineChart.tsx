import type { ChartData, ChartOptions } from 'chart.js';
import type { FC } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  // Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  // Legend,
);

const DefaultLineChartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
};

type LineChartProps = {
  data: ChartData<'line', number[], string>;
};

export const LineChart: FC<LineChartProps> = ({ data }) => {
  return (
    <Line
      options={{
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
        ...DefaultLineChartOptions
      }}
      data={data}
    />
  );
};