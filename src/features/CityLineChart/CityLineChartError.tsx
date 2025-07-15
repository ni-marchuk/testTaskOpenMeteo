import type { FC } from 'react';
import { Typography } from '@shared/ui/Typography/Typography.tsx';

export const CityLineChartError: FC<{ city: string }> = ({ city }) => {
  return (
    <div
      className="flex items-center justify-center size-full p-4 h-107 border-2 border-solid border-slate-600 rounded-xl">
      <Typography variant="h2" className="text-center text-rose-700">{'Ошибка загрузки погоды ' + city}</Typography>
    </div>
  );
};