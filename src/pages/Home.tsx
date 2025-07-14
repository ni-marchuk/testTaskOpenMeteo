import { type FC } from 'react';
import { ChartsWidget } from '@widgets/ChartsWidget.tsx';
import viteLogo from '/vite.svg';
import reactLogo from '/react.svg';

export const HomePage: FC = () => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Погода в городах</h1>
      <div className="container">
        <ChartsWidget />
      </div>
    </>
  );
};
