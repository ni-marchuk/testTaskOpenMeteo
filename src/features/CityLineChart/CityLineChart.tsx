import {type FC} from 'react';
import type {ChartData} from "chart.js";
import {type ChartOptions} from 'chart.js';
import {Line} from 'react-chartjs-2';

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

const DefaultLineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    }
};

type ChartParams = {
    hourly?: 'temperature_2m';
    daily?: 'temperature_2m_mean';
    timezone: 'auto';
    forecast_days: number;
    latitude: number;
    longitude: number;
}

export type CityLineChartProps = {
    city: string
    data?: ChartData<'line', number[], string>
    isLoading: boolean,
    isError: boolean,
    error: Error | null,
    params: ChartParams,
    setChartParams: (params: ChartParams) => void
}

export const CityLineChart: FC<CityLineChartProps> = ({
                                                          city,
                                                          isLoading,
                                                          isError,
                                                          error,
                                                          data,
                                                          params,
                                                          setChartParams
                                                      }) => {

    if (isLoading) return <div>{city} Loading...</div>;
    if (isError) return <div>{error?.message ?? 'Ошибка загрузки погоды ' + city}</div>;

    const handleChatParams = (days: number) => {
        const newParams = {...params};
        if (days > 1) {
            delete newParams['hourly']
            newParams['daily'] = 'temperature_2m_mean';
        } else {
            delete newParams['daily']
            newParams['hourly'] = 'temperature_2m';
        }
        newParams['forecast_days'] = days;
        setChartParams(newParams);
    }

    if (data) return (
        <div>
            <h2>Сегодня</h2>
            <button onClick={() => handleChatParams(1)}>За сегодня</button>
            <h2>По дням</h2>
            <button onClick={() => handleChatParams(2)}>Средняя за 2 дня</button>
            <button onClick={() => handleChatParams(3)}>Средняя за 3 дня</button>
            <button onClick={() => handleChatParams(4)}>Средняя за 4 дня</button>
            <button onClick={() => handleChatParams(5)}>Средняя за 5 дней</button>
            <button onClick={() => handleChatParams(6)}>Средняя за 6 дней</button>
            <button onClick={() => handleChatParams(7)}>Средняя за 7 дней</button>
            <Line
                options={{
                    scales: {
                        y: {
                            suggestedMin: Math.min(...data.datasets[0].data) - 5,
                            suggestedMax: Math.max(...data.datasets[0].data) + 5,
                        },
                        x: {
                            offset: true,
                        },
                    },
                    ...DefaultLineChartOptions,
                }}
                data={data}
            />
        </div>
    )
};
