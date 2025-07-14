import type { Coordinates } from '@shared/types/types.ts';

export const openMeteoBaseUrl = import.meta.env.VITE_OPEN_METEO_API_URL;

export const COORDS_BY_CITY: Record<string, Coordinates> = {
  NEW_YORK: {
    latitude: 40.7143,
    longitude: -74.006
  },
  AMSTERDAM: {
    latitude: 52.374,
    longitude: 4.8897
  },
  TOKYO: {
    latitude: 35.6895,
    longitude: 139.6917
  },
};