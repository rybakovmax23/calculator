import { ErrorBoundary } from 'Components/ErrorBoundary/ErrorBoundary';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ROUTES } from './constants/routes';
import { MainPage, MainPageCC, SettingsPage } from './pages/index';
import { AppWrapper } from './styled';

const App = () => {
  return (
    <ErrorBoundary>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path={ROUTES.main} element={<MainPage />} />
          <Route path={ROUTES.calculatorCC} element={<MainPageCC />} />
          <Route path={ROUTES.settings} element={<SettingsPage />} />
        </Routes>
      </AppWrapper>
    </ErrorBoundary>
  );
};
export default App;
