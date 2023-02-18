import styled from 'styled-components';

export const KeypadButton = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 32px;
  cursor: pointer;
  margin: 10px 0;
  border: 1px solid #707070;
  font-size: 44px;
  line-height: 57px;
  background: ${props => (props.active ? 'aliceblue' : 'buttonface')};

  &:hover {
    background: #707070;
  }
`;
