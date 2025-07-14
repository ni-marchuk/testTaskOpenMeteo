import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from '@pages/home';
import '@app/App.css';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
