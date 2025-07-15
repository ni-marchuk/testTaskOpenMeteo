import { type FC } from 'react';
import type { ChartData } from 'chart.js';
import { CityLineChartSkeleton } from '@features/CityLineChart/CityLineChartSkeleton.tsx';
import { CityLineChartError } from '@features/CityLineChart/CityLineChartError.tsx';
import { Typography } from '@shared/ui/Typography/Typography.tsx';
import { Button } from '@shared/ui/Button/Button.tsx';
import { LineChart } from '@shared/ui/LineChart/LineChart.tsx';

type ChartParams = {
  hourly?: 'temperature_2m';
  daily?: 'temperature_2m_mean';
  timezone: 'auto';
  forecast_days: number;
  latitude: number;
  longitude: number;
};

export type CityLineChartProps = {
  city: string;
  data?: ChartData<'line', number[], string>;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  params: ChartParams;
  setChartParams: (params: ChartParams) => void;
};

export const CityLineChart: FC<CityLineChartProps> = ({
                                                        city,
                                                        isLoading,
                                                        isError,
                                                        error,
                                                        data,
                                                        params,
                                                        setChartParams,
                                                      }) => {
  if (isLoading) {
    return <CityLineChartSkeleton />;
  }

  if (isError) {
    console.error(error?.message);
    return <CityLineChartError city={city} />;
  }

  const handleChatParams = (days: number) => {
    const newParams = { ...params };
    if (days > 1) {
      delete newParams['hourly'];
      newParams['daily'] = 'temperature_2m_mean';
    } else {
      delete newParams['daily'];
      newParams['hourly'] = 'temperature_2m';
    }
    newParams['forecast_days'] = days;
    setChartParams(newParams);
  };

  if (data)
    return (
      <div className="size-full p-4 border-2 border-solid border-slate-600 rounded-xl">
        <Typography as="h2" variant="h2" className="mb-4 text-neutral-700">{city}</Typography>
        <div className="flex flex-wrap gap-1 mb-4">
          <Button onClick={() => handleChatParams(1)} disabled={params.forecast_days === 1}>За сегодня</Button>
          <Button
            onClick={() => handleChatParams(2)}
            disabled={params.forecast_days === 2}
          >
            2 дня
          </Button>
          <Button
            onClick={() => handleChatParams(3)}
            disabled={params.forecast_days === 3}
          >
            3 дня
          </Button>
          <Button
            onClick={() => handleChatParams(4)}
            disabled={params.forecast_days === 4}
          >
            4 дня
          </Button>
          <Button
            onClick={() => handleChatParams(5)}
            disabled={params.forecast_days === 5}
          >
            5 дней
          </Button>
          <Button
            onClick={() => handleChatParams(6)}
            disabled={params.forecast_days === 6}
          >
            6 дней
          </Button>
          <Button
            onClick={() => handleChatParams(7)}
            disabled={params.forecast_days === 7}
          >
            7 дней
          </Button>
        </div>
        <div className="relative w-full h-64">
          <LineChart data={data} />
        </div>
      </div>
    );
};
