import { Display } from 'Components/Display/Display';
import { Keypad } from 'Components/Keypad/Keypad';
import React from 'react';
import { CalculatorWrapper } from './styled';

export const Calculator = () => {
  return (
    <React.Fragment>
      <CalculatorWrapper>
        <Display />
        <Keypad />
      </CalculatorWrapper>
    </React.Fragment>
  );
};
