import {type FC} from 'react';
import type {ChartData} from "chart.js";
import {Line} from 'react-chartjs-2';
import {type ChartOptions} from 'chart.js';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
    Legend,
);

export const LineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        // title: {
        //     display: true,
        //     text: 'Погода',
        // },
    },
};

type CityLineChartProps = {
    city: string
    isLoading: boolean,
    isError: boolean,
    error: Error | null,
    data?: ChartData<'line', number[], string>
}

export const CityLineChart: FC<CityLineChartProps> = ({
                                                          city,
                                                          isLoading,
                                                          isError,
                                                          error,
                                                          data
                                                      }) => {
    if (isLoading) return <div>{city} Loading...</div>;
    if (isError) return <div>{error?.message ?? 'Ошибка загрузки погоды New York'}</div>;
    if (data) return <Line options={LineChartOptions} data={data}/>
};
