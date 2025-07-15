import { type FC } from 'react';
import { ChartsWidget } from '@widgets/ChartsWidget.tsx';
import { Typography } from '@shared/ui/Typography/Typography.tsx';
import { clsx } from 'clsx';

export const HomePage: FC = () => {
  return (
    <>
      <div
        className={clsx('w-full mx-auto px-4 pb-10 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl')}>
        <Typography as="h1" variant="h1" className="my-8 text-neutral-700">Погода в городах мира</Typography>
        <ChartsWidget />
      </div>
    </>
  );
};
