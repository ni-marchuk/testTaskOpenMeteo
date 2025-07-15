import { fetchWeatherApi } from 'openmeteo';
import dayjs from 'dayjs';
import type { GetWeatherParams, WeatherResult } from '@entities/weather/types/types.ts';
import { openMeteoBaseUrl } from '@shared/constants/constants.ts';

export const getWeather = async (params: GetWeatherParams): Promise<WeatherResult> => {
  try {
    const responses = await fetchWeatherApi(openMeteoBaseUrl, params);
    const response = responses[0];
    const utcOffsetSeconds = response.utcOffsetSeconds();

    if (params.hasOwnProperty('hourly')) {
      const hourly = response.hourly()!;
      const values = [...hourly.variables(0)!.valuesArray()!]

      return {
        data: {
          time: [
            ...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()),
          ].map(
            (_, i) =>
              dayjs(new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)).format('DD/MM/YYYY/HH:mm'),
          ),
          temperature: values.map((i) => Math.floor(i)),
        },
      };
    }

    if (params.hasOwnProperty('daily')) {
      const daily = response.daily()!;
      const values = [...daily.variables(0)!.valuesArray()!]

      return {
        data: {
          time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
            (_, i) =>
              dayjs(new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)).format('DD/MM/YYYY'),
          ),
          temperature: values.map((i) => Math.floor(i)),
        },
      };
    }

    throw new Error('Unknown error getWeather service');
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : 'Unknown error getWeather service');
  }
};
