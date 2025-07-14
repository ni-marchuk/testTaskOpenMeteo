import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { TanstackReactQueryProvider } from '@app/providers/TanstackReactQueryProvider.tsx';
import { HomePage } from '@pages/Home.tsx';
import '@app/App.css';

export const App: FC = () => {
  return (
    <TanstackReactQueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </TanstackReactQueryProvider>
  );
};
