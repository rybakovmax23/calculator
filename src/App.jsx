import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ROUTES } from './constants/routes';
import { MainPage, MainPageCC, SettingsPage } from './pages/index';
import { AppWrapper } from './styled';

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.calculatorCC} element={<MainPageCC />} />
        <Route path={ROUTES.settings} element={<SettingsPage />} />
      </Routes>
    </AppWrapper>
  );
};
export default App;
