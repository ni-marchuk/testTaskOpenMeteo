import { type FC, useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from '/react.svg';
import { getWeather } from '@entities/weather/services/services.ts';
import type { WeatherHourlyResult } from '@entities/weather/types/types.ts';
import { COORDS_BY_CITY } from '@shared/constants/constants.ts';

export const HomePage: FC = () => {
  const [newYork, setNewYork] = useState<WeatherHourlyResult | null>(null);

  useEffect(() => {
    getWeather({
      hourly: 'temperature_2m',
      forecast_days: 1,
      timezone: 'auto',
      ...COORDS_BY_CITY.NEW_YORK,
    }).then((r) => {
      setNewYork(r);
    });
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {JSON.stringify(newYork)}
        <p>
          Edit <code>src/pages/HomePage.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};
