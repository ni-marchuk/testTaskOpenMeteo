import {type FC, useState} from 'react';
import {useChartWeatherDataQuery} from '@entities/weather/queries/queries.ts';
import {COORDS_BY_CITY} from '@shared/constants/constants.ts';
import {CityLineChart, type CityLineChartProps} from "@features/CityLineChart/CityLineChart.tsx";

export const ChartsWidget: FC = () => {
    const [newYorkParams, setNewYorkParams] = useState<CityLineChartProps['params']>({
        timezone: 'auto',
        hourly: 'temperature_2m',
        forecast_days: 1,
        ...COORDS_BY_CITY.NEW_YORK
    })

    const {
        data: newYorkData,
        isLoading: newYorkIsLoading,
        isError: newYorkIsError,
        error: newYorkError,
    } = useChartWeatherDataQuery({
        ...newYorkParams,
    });

    return (
        <div className='row'>
            <CityLineChart
                city='New York'
                data={{
                    labels: newYorkData?.labels ?? [],
                    datasets: [
                        {
                            data: newYorkData?.data ?? [],
                            label: 'New York ° ',
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        }
                    ]
                }}
                isLoading={newYorkIsLoading}
                isError={newYorkIsError}
                error={newYorkError}
                params={newYorkParams}
                setChartParams={setNewYorkParams}
            />
        </div>
    );
};
