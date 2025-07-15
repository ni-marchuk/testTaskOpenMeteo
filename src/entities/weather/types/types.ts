import type { Coordinates } from '@shared/types/types.ts';

export type GetWeatherParams = {
  hourly?: 'temperature_2m';
  daily?: 'temperature_2m_mean';
  forecast_days: number;
  timezone: 'auto';
} & Coordinates;

export type WeatherResult = {
  data: {
    time: Array<string>;
    temperature: Array<number>;
  };
};
