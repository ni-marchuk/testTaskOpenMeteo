import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@entities/weather/services/services.ts';
import type { GetWeatherParams } from '@entities/weather/types/types.ts';

type ChartWeatherQueryResult = {
  labels: Array<string>;
  data: Array<number>;
};

export const useChartWeatherDataQuery = (queryParams: GetWeatherParams) => {
  return useQuery({
    queryKey: ['getWeatherNewYork', queryParams],
    queryFn: async (): Promise<ChartWeatherQueryResult> => {
      const result = await getWeather(queryParams);
      /** For test start*/
      console.log(result);
      const p = new Promise((_resolve, _reject) => setTimeout(() => {
          _resolve('timeout');
          // _reject('Error timeout');
      }, 1000));
      await p.then().catch(e => {
          throw new Error(e)
      });
      /** For test end*/
      return {
        labels: result.data.time,
        data: result.data.temperature,
      };
    },
    retry: 1,
  });
};
