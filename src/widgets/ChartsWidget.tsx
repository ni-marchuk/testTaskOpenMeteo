import {type FC, useState} from 'react';
import type {GetWeatherParams} from '@entities/weather/types/types.ts';
import {useChartWeatherQuery} from '@entities/weather/queries/queries.ts';
import {COORDS_BY_CITY} from '@shared/constants/constants.ts';
import {CityLineChart} from "@features/CityLineChart/CityLineChart.tsx";

const defaultWeatherParams: Pick<GetWeatherParams, 'hourly' | 'timezone'> = {
    hourly: 'temperature_2m',
    timezone: 'auto',
};

export const ChartsWidget: FC = () => {
    const [forecastDays, _setForecastDays] = useState<number>(1)

    const {
        data: newYorkData,
        isLoading: newYorkIsLoading,
        isError: newYorkIsError,
        error: newYorkError,
    } = useChartWeatherQuery({
        ...defaultWeatherParams,
        ...COORDS_BY_CITY.NEW_YORK,
        chartLabel: 'New York',
        forecast_days: forecastDays,
    });

    const {
        data: amsterdamData,
        isLoading: amsterdamIsLoading,
        isError: amsterdamIsError,
        error: amsterdamError,
    } = useChartWeatherQuery({
        ...defaultWeatherParams,
        ...COORDS_BY_CITY.NEW_YORK,
        chartLabel: 'Amsterdam',
        forecast_days: forecastDays,
    });

    return (
        <div className='row'>
            <CityLineChart
                city='New York'
                data={newYorkData}
                isLoading={newYorkIsLoading}
                isError={newYorkIsError}
                error={newYorkError}
            />
            <CityLineChart
                city='Amsterdam'
                data={amsterdamData}
                isLoading={amsterdamIsLoading}
                isError={amsterdamIsError}
                error={amsterdamError}
            />
        </div>
    );
};
