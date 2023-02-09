import styled from 'styled-components';

export const SettingsWrapper = styled.div`
  padding: 84px;
`;

export const SettingTitle = styled.h2`
  font-size: 64px;
  line-height: 77px;
`;

export const SwitchThemeLabel = styled.div`
  padding: 46px 0px 7px;
  font-size: 24px;
  line-height: 29px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
`;

export const SettingsButton = styled.button`
  text-align: left;
  padding: 0px 27px;
  width: 401px;
  height: 93px;
  background: ${props => (props.isTheme ? '#FFFFFF' : '#F2F2F2')};
  border: 2px solid #434343;
  border-radius: ${props => (props.isOpened ? '8px 8px 0px 0px' : '8px')};
  font-size: 32px;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OtherButtonWrapper = styled.div`
  position: absolute;
  top: 93px;
  display: flex;
  flex-direction: column;
`;

export const OtherButton = styled.button`
  padding: 0px 27px;
  width: 401px;
  height: 93px;
  background: #ffffff;
  border: 2px solid #434343;
  font-size: 32px;
  line-height: 38px;
  border-top: none;
`;
