import React from 'react';
import { KEYS } from 'Constants/keyButtons';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';
import { KeypadButton, KeypadWrapper } from './styled';

export const Keypad = ({ handleKeypad }) => {
  const handleOnDigit = e => {
    handleKeypad(e.target.innerText);
  };

  return (
    <KeypadWrapper>
      {KEYS.map(item => (
        <KeypadButton key={uuidV4()} onClick={handleOnDigit}>
          {item}
        </KeypadButton>
      ))}
    </KeypadWrapper>
  );
};

Keypad.propType = {
  handleKeypad: PropTypes.func,
};
