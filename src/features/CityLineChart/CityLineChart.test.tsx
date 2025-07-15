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
  'labels': [
    '15/07/2025/03:00',
    '15/07/2025/04:00',
    '15/07/2025/05:00',
    '15/07/2025/06:00',
    '15/07/2025/07:00',
    '15/07/2025/08:00',
    '15/07/2025/09:00',
    '15/07/2025/10:00',
    '15/07/2025/11:00',
    '15/07/2025/12:00',
    '15/07/2025/13:00',
    '15/07/2025/14:00',
    '15/07/2025/15:00',
    '15/07/2025/16:00',
    '15/07/2025/17:00',
    '15/07/2025/18:00',
    '15/07/2025/19:00',
    '15/07/2025/20:00',
    '15/07/2025/21:00',
    '15/07/2025/22:00',
    '15/07/2025/23:00',
    '16/07/2025/00:00',
    '16/07/2025/01:00',
    '16/07/2025/02:00',
  ],
  'data': [
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
