import React from 'react';
import { KeypadButton } from './styled';
import { connect } from 'react-redux';
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

export class KeyCC extends React.Component {
  handleOnDigit = () => {
    const {
      keypadValue,
      firstValue,
      secondValue,
      operator,
      result,
      setFirstValue,
      setSecondValue,
      setResult,
      setOperator,
      setHistory,
      setResetValues,
    } = this.props;

    if (isNaN(firstValue)) {
      setResetValues();
      return;
    }

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
            setHistory(firstValue + operator + secondValue);
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
          setHistory(firstValue + operator + firstValue);
          setSecondValue(firstValue);
          return;
        }
        setResult(calculatorCore(firstValue, operator, secondValue));
        setFirstValue(calculatorCore(firstValue, operator, secondValue));
        setHistory(firstValue + operator + secondValue);
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
        setResetValues();
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
          return;
        }
        if (operator && !secondValue) {
          setSecondValue(invertNumber('0'));
          return;
        }
        if (secondValue) {
          setSecondValue(invertNumber(secondValue));
          return;
        }
        if (firstValue) {
          setFirstValue(invertNumber(firstValue));
          return;
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
  render() {
    const { keypadValue, operator } = this.props;
    return (
      <React.Fragment>
        <KeypadButton active={keypadValue === operator} onClick={this.handleOnDigit}>
          {keypadValue}
        </KeypadButton>
      </React.Fragment>
    );
  }
}

KeyCC.propTypes = {
  keypadValue: PropTypes.string,
};

function mapStateToProps(state) {
  return state.calculator;
}

function mapDispatchToProps(dispatch) {
  return {
    setResult: result => {
      dispatch(setResult(result));
    },
    setFirstValue: firstValue => {
      dispatch(setFirstValue(firstValue));
    },
    setSecondValue: secondValue => {
      dispatch(setSecondValue(secondValue));
    },
    setOperator: operator => {
      dispatch(setOperator(operator));
    },
    setHistory: expression => {
      dispatch(setHistory(expression));
    },
    setResetValues: () => {
      dispatch(setResetValues());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyCC);
