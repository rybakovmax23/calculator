import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';

const { colorTheme } = require('./colorTheme');
const { darkTheme } = require('./darkTheme');
const { lightTheme } = require('./lightTheme');

const themes = {
  light: lightTheme,
  dark: darkTheme,
  color: colorTheme,
};

export const ThemeProvider = ({ children }) => {
  const { theme } = useSelector(state => state.theme);

  return <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>;
};
