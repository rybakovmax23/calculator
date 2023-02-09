import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { ROUTES } from './constants/routes';
import { MainPage, SettingsPage } from './pages/index';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path={ROUTES.main} element={<MainPage />} />
        <Route path={ROUTES.settings} element={<SettingsPage />} />
      </Routes>
    </React.Fragment>
  );
};
export default App;
