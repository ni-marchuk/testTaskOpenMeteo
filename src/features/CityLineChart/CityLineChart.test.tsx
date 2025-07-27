import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import type { ChartWeatherQueryResult } from '@entities/weather/queries/queries.ts';
import { CityLineChart, type CityLineChartProps } from './CityLineChart';
import { COORDS_BY_CITY } from '@shared/constants/constants.ts';

/** Mock т.к у библиотеки vitest проблемы с canvas */
vi.mock('@shared/ui/LineChart/LineChart', () => ({
  LineChart: () => <div data-testid="mock-chart" />,
}));

const mockData: ChartWeatherQueryResult = {
  labels: [
    new Date("2025-07-27T00:00:00.000Z"),
    new Date("2025-07-27T01:00:00.000Z"),
    new Date("2025-07-27T02:00:00.000Z"),
    new Date("2025-07-27T03:00:00.000Z"),
    new Date("2025-07-27T04:00:00.000Z"),
    new Date("2025-07-27T05:00:00.000Z"),
    new Date("2025-07-27T06:00:00.000Z"),
    new Date("2025-07-27T07:00:00.000Z"),
    new Date("2025-07-27T08:00:00.000Z"),
    new Date("2025-07-27T09:00:00.000Z"),
    new Date("2025-07-27T10:00:00.000Z"),
    new Date("2025-07-27T11:00:00.000Z"),
    new Date("2025-07-27T12:00:00.000Z"),
    new Date("2025-07-27T13:00:00.000Z"),
    new Date("2025-07-27T14:00:00.000Z"),
    new Date("2025-07-27T15:00:00.000Z"),
    new Date("2025-07-27T16:00:00.000Z"),
    new Date("2025-07-27T17:00:00.000Z"),
    new Date("2025-07-27T18:00:00.000Z"),
    new Date("2025-07-27T19:00:00.000Z"),
    new Date("2025-07-27T20:00:00.000Z"),
    new Date("2025-07-27T21:00:00.000Z"),
    new Date("2025-07-27T22:00:00.000Z"),
    new Date("2025-07-27T23:00:00.000Z")
  ],
  data: [
    23,
    22,
    23,
    22,
    22,
    22,
    22,
    23,
    24,
    25,
    26,
    26,
    26,
    27,
    28,
    30,
    29,
    29,
    28,
    27,
    26,
    25,
    24,
    24,
  ],
};

describe('CityLineChart', () => {
  const baseProps: CityLineChartProps = {
    city: 'Amsterdam',
    isLoading: false,
    isError: false,
    error: null,
    data: {
      labels: mockData.labels,
      datasets: [{
        data: mockData.data,
        label: 'Amsterdam ° ',
        borderColor: COORDS_BY_CITY.AMSTERDAM.border,
        backgroundColor: COORDS_BY_CITY.AMSTERDAM.bg,
      }],
    },
    params: {
      hourly: 'temperature_2m',
      timezone: 'auto',
      forecast_days: 1,
      latitude: COORDS_BY_CITY.AMSTERDAM.latitude,
      longitude: COORDS_BY_CITY.AMSTERDAM.longitude,
    },
    setChartParams: vi.fn(),
  };

  it('renders city and mock chart', () => {
    render(<CityLineChart {...baseProps} />);
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });

  it('calls setChartParams on day button click', () => {
    render(<CityLineChart {...baseProps} />);
    fireEvent.click(screen.getByText('2 дня'));
    expect(baseProps.setChartParams).toHaveBeenCalledWith({
      daily: 'temperature_2m_mean',
      timezone: 'auto',
      forecast_days: 2,
      latitude: COORDS_BY_CITY.AMSTERDAM.latitude,
      longitude: COORDS_BY_CITY.AMSTERDAM.longitude,
    });
  });
});
