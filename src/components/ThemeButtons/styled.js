import styled from 'styled-components';

export const ThemeButton = styled.button`
  text-align: left;
  padding: 0px 27px;
  width: 401px;
  height: 93px;
  background: #ffffff;
  border: 2px solid #434343;
  border-radius: ${props => (props.isOpened ? '8px 8px 0px 0px' : '8px')};
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OtherThemeButtonWrapper = styled.div`
  position: absolute;
  top: 93px;
  display: flex;
  flex-direction: column;
`;

export const OtherThemeButton = styled.button`
  padding: 0px 27px;
  width: 401px;
  height: 93px;
  background: #ffffff;
  border: 2px solid #434343;
  font-size: 32px;
  line-height: 38px;
  border-top: none;
`;
