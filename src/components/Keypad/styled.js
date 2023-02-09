import styled from 'styled-components';

export const KeypadWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  padding: 15px 10px;
`;

export const KeypadButton = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 32px;
  cursor: pointer;
  margin: 10px 0;
  border: 1px solid #707070;
  font-size: 44px;
  line-height: 57px;

  &:hover {
    background: #707070;
  }
`;
