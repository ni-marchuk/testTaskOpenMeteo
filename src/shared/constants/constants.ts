import type { ChartColors, Coordinates } from '@shared/types/types.ts';

export const openMeteoBaseUrl = import.meta.env.VITE_OPEN_METEO_API_URL;

export const COORDS_BY_CITY: Record<string, Coordinates & ChartColors> = {
  NEW_YORK: {
    latitude: 40.7143,
    longitude: -74.006,
    border: 'rgb(53, 162, 235)',
    bg: 'rgba(53, 162, 235, 0.5)',
  },
  AMSTERDAM: {
    latitude: 52.374,
    longitude: 4.8897,
    border: 'rgb(235,53,177)',
    bg: 'rgba(235,53,183,0.5)',
  },
  TOKIO: {
    latitude: 35.6895,
    longitude: 139.6917,
    border: 'rgb(235,117,53)',
    bg: 'rgba(235,123,53,0.5)',
  },
};
