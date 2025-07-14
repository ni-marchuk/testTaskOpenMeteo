import { fetchWeatherApi } from 'openmeteo';
import { openMeteoBaseUrl } from '@shared/constants/constants.ts';
import type { GetWeatherParams, WeatherHourlyResult } from '@entities/weather/types/types.ts';

export const getWeather = async (params: GetWeatherParams): Promise<WeatherHourlyResult> => {
  try {
    const responses = await fetchWeatherApi(openMeteoBaseUrl, params);
    const response = responses[0];
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const hourly = response.hourly()!;
    // TODO тут вычисления из доки, нужно разобраться более детально как работать с пакетом
    // по сути сейчас тут данные для 1 города за 1 день / оставляю как в доке, дальнейшая работа с данными проведется в другом месте
    return {
      hourly: {
        time: [
          ...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()),
        ].map(
          (_, i) =>
            new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000),
        ),
        temperature2m: hourly.variables(0)!.valuesArray()!,
      },
    };
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : 'Unknown error getWeather service');
  }
};
