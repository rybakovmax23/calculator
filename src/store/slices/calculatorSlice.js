import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstValue: '0',
  secondValue: '',
  result: '',
  operator: '',
  history: [],
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setFirstValue(state, action) {
      state.firstValue = action.payload;
    },
    setSecondValue(state, action) {
      state.secondValue = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
    },
    setOperator(state, action) {
      state.operator = action.payload;
    },
    setResetValues(state) {
      state.firstValue = '0';
      state.secondValue = '';
      state.result = '';
      state.operator = '';
    },
    setHistory(state, action) {
      state.history = [...state.history, action.payload];
    },
    deleteHistory(state) {
      state.history = [];
    },
  },
});

export const {
  setSecondValue,
  setFirstValue,
  setOperator,
  setResult,
  setResetValues,
  setHistory,
  deleteHistory,
} = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
