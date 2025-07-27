import { useQuery } from '@tanstack/react-query';
import { getWeather } from '@entities/weather/services/services.ts';
import type { GetWeatherParams } from '@entities/weather/types/types.ts';

export type ChartWeatherQueryResult = {
  labels: Array<Date>;
  data: Array<number>;
};

export const useChartWeatherDataQuery = (queryParams: GetWeatherParams) => {
  return useQuery({
    queryKey: ['getWeatherNewYork', queryParams],
    queryFn: async (): Promise<ChartWeatherQueryResult> => {
      const result = await getWeather(queryParams);
      return {
        labels: result.data.time,
        data: result.data.temperature,
      };
    },
    retry: 1,
    networkMode: 'always'
  });
};
