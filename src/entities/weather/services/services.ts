import {fetchWeatherApi} from 'openmeteo';
import {openMeteoBaseUrl} from '@shared/constants/constants.ts';
import type {GetWeatherParams, WeatherResult} from '@entities/weather/types/types.ts';

export const getWeather = async (params: GetWeatherParams): Promise<WeatherResult> => {
    try {
        const responses = await fetchWeatherApi(openMeteoBaseUrl, params);
        const response = responses[0];
        const utcOffsetSeconds = response.utcOffsetSeconds();

        if (params.hasOwnProperty('hourly')) {
            const hourly = response.hourly()!;
            return {
                data: {
                    time: [
                        ...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval()),
                    ].map(
                        (_, i) =>
                            new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000),
                    ),
                    temperature: hourly.variables(0)!.valuesArray()!,
                },
            };
        }

        if (params.hasOwnProperty('daily')) {
            const daily = response.daily()!;
            return {
                data: {
                    time: [
                        ...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval()),
                    ].map(
                        (_, i) =>
                            new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000),
                    ),
                    temperature: daily.variables(0)!.valuesArray()!,
                },
            };
        }

        throw new Error('Unknown error getWeather service');
    } catch (e) {
        throw new Error(e instanceof Error ? e.message : 'Unknown error getWeather service');
    }
};
