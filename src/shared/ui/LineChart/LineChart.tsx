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

type LineChartProps = {
  data: ChartData<'line', number[], string>;
  options?: ChartOptions<'line'>;
};

export const LineChart: FC<LineChartProps> = ({ data, options }) => {
  return (
    <Line
      options={options}
      data={data}
    />
  );
};