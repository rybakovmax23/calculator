import { configureStore } from '@reduxjs/toolkit';
import { calculatorReducer } from './slices/calculatorSlice';
import { themeReducer } from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    theme: themeReducer,
  },
});
