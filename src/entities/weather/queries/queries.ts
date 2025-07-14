import {useQuery} from '@tanstack/react-query';
import {getWeather} from '@entities/weather/services/services.ts';
import type {GetWeatherParams} from '@entities/weather/types/types.ts';
import dayjs from 'dayjs';

type ChartWeatherQueryResult = {
    labels: Array<string>,
    data: Array<number>
}
export const useChartWeatherDataQuery = (
    queryParams: GetWeatherParams,
) => {
    return useQuery({
        queryKey: ['getWeatherNewYork', queryParams],
        queryFn: async (): Promise<ChartWeatherQueryResult> => {
            const result = await getWeather(queryParams);
            console.log(result);
            /** For test start*/
            // const p = new Promise((_resolve, _reject) => setTimeout(() => {
            //     _resolve('timeout');
            //     // _reject('Error timeout');
            // }, 2000));
            // await p.then().catch(e => {
            //     throw new Error(e)
            // });
            /** For test end*/

            /** форматируем данные для графика в нужный нам вид */
            return {
                labels: result.data.time.map((t) => dayjs(t).format('DD/MM/YYYY - HH:mm')),
                data: [...result.data.temperature].map((i) => Math.floor(i))
            };
        },
        retry: 1,
    });
};