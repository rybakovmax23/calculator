import React, { useState } from 'react';
import {
  Arrow,
  ButtonsWrapper,
  OtherButton,
  OtherButtonWrapper,
  SettingsButton,
  SettingsWrapper,
  SettingTitle,
  SwitchThemeLabel,
} from './styled';

export const SettingsPage = () => {
  const [isOpened, setOpened] = useState(false);
  const [themes, setThemes] = useState([
    { name: 'Dark Theme', theme: 'dark', isSelect: false },
    { name: 'Light Theme', theme: 'light', isSelect: true },
    { name: 'Colored Theme', theme: 'colored', isSelect: false },
  ]);
  const [themeSelected] = themes.filter(el => el.isSelect);
  const otherThemes = themes.filter(el => !el.isSelect);

  const handlerDropdown = () => {
    setOpened(!isOpened);
  };

  const handlerChooseTheme = e => {
    const name = e.target.innerText;
    setThemes([
      ...themes.map(el => {
        if (el.name === name) {
          return { ...el, isSelect: true };
        } else {
          return { ...el, isSelect: false };
        }
      }),
    ]);
  };

  const handlerCloseDropdown = () => {
    if (isOpened) {
      setOpened(!isOpened);
    }
  };

  return (
    <SettingsWrapper onClick={handlerCloseDropdown}>
      <SettingTitle>Settings</SettingTitle>
      <SwitchThemeLabel>Switch Theme</SwitchThemeLabel>
      <ButtonsWrapper>
        <SettingsButton
          key={themeSelected.theme}
          type={'button'}
          isTheme={true}
          isOpened={isOpened}
          onClick={handlerDropdown}>
          {themeSelected.name}
          <span>{isOpened ? '▲' : '▼'}</span>
        </SettingsButton>
        {isOpened && (
          <OtherButtonWrapper onClick={handlerChooseTheme}>
            {otherThemes.map(el => (
              <OtherButton key={el.theme} type={'button'} onClick={handlerDropdown}>
                {el.name}
              </OtherButton>
            ))}
          </OtherButtonWrapper>
        )}
        <SettingsButton>Clear All History</SettingsButton>
      </ButtonsWrapper>
    </SettingsWrapper>
  );
};
