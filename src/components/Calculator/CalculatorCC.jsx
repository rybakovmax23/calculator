import DisplayCC from 'Components/Display/DisplayCC';
import { KeypadCC } from 'Components/Keypad/KeypadCC';
import React from 'react';
import { CalculatorWrapper } from './styled';

export class CalculatorCC extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CalculatorWrapper>
          <DisplayCC />
          <KeypadCC />
        </CalculatorWrapper>
      </React.Fragment>
    );
  }
}
