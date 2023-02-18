import React from 'react';
import { KeypadButton } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setResult,
  setFirstValue,
  setSecondValue,
  setOperator,
  setResetValues,
  setHistory,
} from 'Store/slices/calculatorSlice';
import { calculatorCore } from 'Utils/calculatorCore';
import { invertNumber } from 'Utils/numberOperations';

export const Key = ({ keypadValue }) => {
  const { firstValue, secondValue, operator, result } = useSelector(state => state.calculator);
  const dispatch = useDispatch();

  const handleOnDigit = () => {
    switch (keypadValue) {
      case '%':
      case '+':
      case '-':
      case '/':
      case '*': {
        dispatch(setResult(''));
        if (operator) {
          if (secondValue && !result) {
            dispatch(setFirstValue(calculatorCore(firstValue, operator, secondValue)));
            dispatch(setHistory(firstValue + operator + secondValue));
          }
          dispatch(setSecondValue(''));
          dispatch(setOperator(keypadValue));
          return;
        }
        dispatch(setOperator(keypadValue));
        break;
      }

      case '=': {
        if (!operator) return;
        console.log(firstValue, operator, secondValue);
        if (!secondValue) {
          dispatch(setResult(calculatorCore(firstValue, operator, firstValue)));
          dispatch(setFirstValue(calculatorCore(firstValue, operator, firstValue)));
          dispatch(setHistory(firstValue + operator + firstValue));
          dispatch(setSecondValue(firstValue));
          return;
        }
        dispatch(setResult(calculatorCore(firstValue, operator, secondValue)));
        dispatch(setFirstValue(calculatorCore(firstValue, operator, secondValue)));
        dispatch(setHistory(firstValue + operator + secondValue));
        break;
      }

      case '.': {
        if (result) {
          dispatch(setFirstValue(secondValue));
          dispatch(setSecondValue('0.'));
          dispatch(setResult(''));
          return;
        }
        if (!secondValue) {
          if (operator) {
            dispatch(setSecondValue('0.'));
            return;
          }
          if (firstValue.includes('.')) return;
          dispatch(setFirstValue(firstValue + '.'));
          return;
        }
        if (secondValue.includes('.')) return;
        dispatch(setSecondValue(secondValue + '.'));
        break;
      }

      case 'CE': {
        dispatch(setResetValues());
        break;
      }

      case 'C': {
        if (!secondValue) {
          dispatch(setFirstValue(firstValue.slice(0, firstValue.length - 1) || '0'));
          return;
        }
        dispatch(setSecondValue(secondValue.slice(0, secondValue.length - 1) || '0'));
        break;
      }

      case '+/-': {
        if (result) {
          dispatch(setResult(invertNumber(result)));
          dispatch(setFirstValue(invertNumber(result)));
        }
        if (operator && !secondValue) {
          dispatch(setSecondValue(invertNumber('0')));
          return;
        }
        if (firstValue) {
          dispatch(setFirstValue(invertNumber(firstValue)));
        }
        if (secondValue) {
          dispatch(setSecondValue(invertNumber(secondValue)));
        }
        break;
      }

      default: {
        if (result) {
          dispatch(setFirstValue(secondValue));
          dispatch(setSecondValue(keypadValue));
          dispatch(setResult(''));
          return;
        }
        if (operator) {
          if (secondValue == '0') {
            dispatch(setSecondValue(keypadValue));
            return;
          }
          if (secondValue == '-0') {
            dispatch(setSecondValue('-' + keypadValue));
            return;
          }
          dispatch(setSecondValue(secondValue + keypadValue));
          return;
        }
        if (firstValue == '0') {
          dispatch(setFirstValue(keypadValue));
          return;
        }
        if (firstValue == '-0') {
          dispatch(setFirstValue('-' + keypadValue));
          return;
        }
        dispatch(setFirstValue(firstValue + keypadValue));
      }
    }
  };
  return (
    <React.Fragment>
      <KeypadButton active={keypadValue === operator} onClick={handleOnDigit}>
        {keypadValue}
      </KeypadButton>
    </React.Fragment>
  );
};

Key.propTypes = {
  keypadValue: PropTypes.string,
};
