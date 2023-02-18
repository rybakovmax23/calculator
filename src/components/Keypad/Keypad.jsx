import React from 'react';
import { KEYS } from 'Constants/keyButtons';
import { v4 as uuidV4 } from 'uuid';
import { KeypadWrapper } from './styled';
import { Key } from 'Components/Key/Key';

export const Keypad = () => {
  return (
    <KeypadWrapper>
      {KEYS.map(item => (
        <Key keypadValue={item} key={uuidV4()} />
      ))}
    </KeypadWrapper>
  );
};
