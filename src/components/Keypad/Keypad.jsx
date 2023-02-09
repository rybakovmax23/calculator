import React from 'react';
import { KEYS } from 'Constants/keyButtons';
import { v4 as uuidV4 } from 'uuid';
import { KeypadButton, KeypadWrapper } from './styled';

export const Keypad = () => {
  const handleOnDigit = e => {
    console.log(e.target);
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
