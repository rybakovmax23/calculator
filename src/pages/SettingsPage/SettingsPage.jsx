import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonsWrapper,
  SettingsButton,
  SettingsWrapper,
  SettingTitle,
  SwitchThemeLabel,
} from './styled';
import { deleteHistory } from 'Store/slices/calculatorSlice';
import { ThemeButtons } from 'Components/ThemeButtons/ThemeButtons';

export const SettingsPage = () => {
  const dispatch = useDispatch();

  const handlerClearHistory = () => {
    dispatch(deleteHistory());
  };

  return (
    <SettingsWrapper>
      <SettingTitle>Settings</SettingTitle>
      <SwitchThemeLabel>Switch Theme</SwitchThemeLabel>
      <ButtonsWrapper>
        <ThemeButtons />
        <SettingsButton onClick={handlerClearHistory}>Clear All History</SettingsButton>
      </ButtonsWrapper>
    </SettingsWrapper>
  );
};
