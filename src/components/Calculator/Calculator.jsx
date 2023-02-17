import { Display } from 'Components/Display/Display';
import { Keypad } from 'Components/Keypad/Keypad';
import React, { useState } from 'react';
import { calculatorCore } from 'Utils/CalculatorCore';
import { invertNumber } from 'Utils/numberOperations';
import { CalculatorWrapper } from './styled';

export const Calculator = () => {
  const [firstValue, setFirstValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [result, setResult] = useState('');
  const display = result || secondValue || firstValue;

  const handleKeypad = keypadValue => {
    switch (keypadValue) {
      case '%':
      case '+':
      case '-':
      case '/':
      case '*': {
        setResult('');
        if (operator) {
          if (secondValue && !result) {
            setFirstValue(calculatorCore(firstValue, operator, secondValue));
          }
          setSecondValue('');
          setOperator(keypadValue);
          return;
        }
        setOperator(keypadValue);
        break;
      }
      case '=': {
        if (!operator) return;
        if (!secondValue) {
          setResult(calculatorCore(firstValue, operator, firstValue));
          setFirstValue(calculatorCore(firstValue, operator, firstValue));
          setSecondValue(firstValue);
          return;
        }
        setResult(calculatorCore(firstValue, operator, secondValue));
        setFirstValue(calculatorCore(firstValue, operator, secondValue));
        break;
      }
      case '.': {
        if (result) {
          setFirstValue(secondValue);
          setSecondValue('0.');
          setResult('');
          return;
        }
        if (!secondValue) {
          if (operator) {
            setSecondValue('0.');
            return;
          }
          if (firstValue.includes('.')) return;
          setFirstValue(firstValue + '.');
          return;
        }
        if (secondValue.includes('.')) return;
        setSecondValue(secondValue + '.');
        break;
      }
      case 'CE': {
        setFirstValue('0');
        setSecondValue('');
        setResult('');
        setOperator('');
        break;
      }
      case 'C': {
        if (!secondValue) {
          setFirstValue(firstValue.slice(0, firstValue.length - 1) || '0');
          return;
        }
        setSecondValue(secondValue.slice(0, secondValue.length - 1) || '0');
        break;
      }
      case '+/-': {
        if (result) {
          setResult(invertNumber(result));
          setFirstValue(invertNumber(result));
        }
        if (operator && !secondValue) {
          setSecondValue(invertNumber('0'));
          return;
        }
        if (firstValue) {
          setFirstValue(invertNumber(firstValue));
        }

        break;
      }
      default: {
        if (result) {
          setFirstValue(secondValue);
          setSecondValue(keypadValue);
          setResult('');
          return;
        }
        if (operator) {
          if (secondValue == '0') {
            setSecondValue(keypadValue);
            return;
          }
          if (secondValue == '-0') {
            setSecondValue('-' + keypadValue);
            return;
          }
          setSecondValue(secondValue + keypadValue);
          return;
        }
        if (firstValue == '0') {
          setFirstValue(keypadValue);
          return;
        }
        if (firstValue == '-0') {
          setFirstValue('-' + keypadValue);
          return;
        }
        setFirstValue(firstValue + keypadValue);
      }
    }
  };
  return (
    <React.Fragment>
      <CalculatorWrapper>
        <Display value={display} />
        <Keypad handleKeypad={handleKeypad} />
      </CalculatorWrapper>
    </React.Fragment>
  );
};
