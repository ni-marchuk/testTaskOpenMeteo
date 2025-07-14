import type { Coordinates } from '@shared/types/types.ts';

export type GetWeatherParams = {
  hourly: 'temperature_2m';
  forecast_days: number;
  timezone: string;
} & Coordinates;

export type WeatherHourlyResult = {
  hourly: {
    time: Array<Date>;
    temperature2m: Float32Array<ArrayBufferLike>;
  };
};
