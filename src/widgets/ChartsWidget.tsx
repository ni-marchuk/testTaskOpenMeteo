import { type FC, useState } from 'react';
import { useChartWeatherDataQuery } from '@entities/weather/queries/queries.ts';
import { CityLineChart, type CityLineChartProps } from '@features/CityLineChart/CityLineChart.tsx';
import { COORDS_BY_CITY } from '@shared/constants/constants.ts';

export const ChartsWidget: FC = () => {
  const [newYorkParams, setNewYorkParams] = useState<CityLineChartProps['params']>({
    timezone: 'auto',
    hourly: 'temperature_2m',
    forecast_days: 1,
    ...COORDS_BY_CITY.NEW_YORK,
  });

  const {
    data: newYorkData,
    isLoading: newYorkIsLoading,
    isError: newYorkIsError,
    error: newYorkError,
  } = useChartWeatherDataQuery({
    ...newYorkParams,
  });

  const [amsterdamParams, setAmsterdamParams] = useState<CityLineChartProps['params']>({
    timezone: 'auto',
    hourly: 'temperature_2m',
    forecast_days: 1,
    ...COORDS_BY_CITY.AMSTERDAM,
  });

  const {
    data: amsterdamData,
    isLoading: amsterdamIsLoading,
    isError: amsterdamIsError,
    error: amsterdamError,
  } = useChartWeatherDataQuery({
    ...amsterdamParams,
  });

  const [tokioParams, setTokioParams] = useState<CityLineChartProps['params']>({
    timezone: 'auto',
    hourly: 'temperature_2m',
    forecast_days: 1,
    ...COORDS_BY_CITY.TOKIO,
  });

  const {
    data: tokioData,
    isLoading: tokioIsLoading,
    isError: tokioIsError,
    error: tokioError,
  } = useChartWeatherDataQuery({
    ...tokioParams,
  });

  return (
    <div className="flex flex-col items-start w-full gap-4 lg:flex-row">
      <div className="w-full lg:w-[calc(33.333%-1rem)]">
        <CityLineChart
          city="New York"
          data={{
            labels: newYorkData?.labels ?? [],
            datasets: [
              {
                data: newYorkData?.data ?? [],
                label: 'New York ° ',
                borderColor: COORDS_BY_CITY.NEW_YORK.border,
                backgroundColor: COORDS_BY_CITY.NEW_YORK.bg,
              },
            ],
          }}
          isLoading={newYorkIsLoading}
          isError={newYorkIsError}
          error={newYorkError}
          params={newYorkParams}
          setChartParams={setNewYorkParams}
        />
      </div>
      <div className="w-full lg:w-[calc(33.333%-1rem)]">
        <CityLineChart
          city="Amsterdam"
          data={{
            labels: amsterdamData?.labels ?? [],
            datasets: [
              {
                data: amsterdamData?.data ?? [],
                label: 'Amsterdam ° ',
                borderColor: COORDS_BY_CITY.AMSTERDAM.border,
                backgroundColor: COORDS_BY_CITY.AMSTERDAM.bg,
              },
            ],
          }}
          isLoading={amsterdamIsLoading}
          isError={amsterdamIsError}
          error={amsterdamError}
          params={amsterdamParams}
          setChartParams={setAmsterdamParams}
        />
      </div>
      <div className="w-full lg:w-[calc(33.333%-1rem)]">
        <CityLineChart
          city="Tokio"
          data={{
            labels: tokioData?.labels ?? [],
            datasets: [
              {
                data: tokioData?.data ?? [],
                label: 'Tokio ° ',
                borderColor: COORDS_BY_CITY.TOKIO.border,
                backgroundColor: COORDS_BY_CITY.TOKIO.bg,
              },
            ],
          }}
          isLoading={tokioIsLoading}
          isError={tokioIsError}
          error={tokioError}
          params={tokioParams}
          setChartParams={setTokioParams}
        />
      </div>
    </div>
  );
};
