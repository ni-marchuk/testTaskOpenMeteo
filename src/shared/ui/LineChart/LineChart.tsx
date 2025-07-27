import type { FC } from 'react';
import type { ChartData, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  TimeScale,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  TimeScale,
  Legend,
);

type LineChartProps = {
  data: ChartData<'line', number[], Date>;
  options?: ChartOptions<'line'>
};

export const LineChart: FC<LineChartProps> = ({ data, options }) => {
  return (
    <Line
      options={options}
      data={data}
    />
  );
};