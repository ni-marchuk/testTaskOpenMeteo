import {useQuery} from '@tanstack/react-query';
import {getWeather} from '@entities/weather/services/services.ts';
import type {GetWeatherParams} from '@entities/weather/types/types.ts';
import dayjs from 'dayjs';
import type {ChartData} from 'chart.js';

export const useChartWeatherQuery = (
    params: GetWeatherParams & {
        chartLabel: string;
    },
) => {
    return useQuery({
        queryKey: ['getWeatherNewYork', params],
        queryFn: async (): Promise<ChartData<'line', number[], string>> => {
            const result = await getWeather(params);

            /** For test start*/
            const p = new Promise((_resolve, _reject) => setTimeout(() => {
                _resolve('timeout');
                // _reject('Error timeout');
            }, 2000));

            await p.then().catch(e => {
                throw new Error(e)
            });
            /** For test end*/

            return {
                labels: result.hourly.time.map((t) => dayjs(t).format('HH:mm')),
                datasets: [
                    {
                        data: [...result.hourly.temperature2m].map((i) => Math.floor(i)), // `${Math.floor(i)} °`
                        type: 'line',
                        fill: true,
                        label: `${params.chartLabel} ° `,
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            };
        },
        retry: 1,
    });
};
