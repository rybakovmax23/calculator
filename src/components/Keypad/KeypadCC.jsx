import React from 'react';
import { KEYS } from 'Constants/keyButtons';
import { v4 as uuidV4 } from 'uuid';
import { KeypadWrapper } from './styled';
import KeyCC from 'Components/Key/KeyCC';

export class KeypadCC extends React.Component {
  render() {
    return (
      <KeypadWrapper>
        {KEYS.map(item => (
          <KeyCC keypadValue={item} key={uuidV4()} />
        ))}
      </KeypadWrapper>
    );
  }
}
