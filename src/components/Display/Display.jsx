import React from 'react';
import { DisplayInput } from './styled';
import { useSelector } from 'react-redux';

export const Display = () => {
  const { firstValue, secondValue, result } = useSelector(state => state.calculator);
  const screen = result || secondValue || firstValue;

  return <DisplayInput data-cy="display">{screen}</DisplayInput>;
};
