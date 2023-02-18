import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeButtons } from 'Constants/themeButtons';
import { setTheme } from 'Store/slices/themeSlice';
import { selectThemeByName, selectThemes } from 'Utils/themesOperations';
import { ThemeButton, OtherThemeButtonWrapper, OtherThemeButton } from './styled';

export const ThemeButtons = () => {
  const [isOpened, setOpened] = useState(false);
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const { selectedTheme, otherThemes } = selectThemes(themeButtons, theme);

  const handlerDropdown = () => {
    setOpened(!isOpened);
  };

  const handlerChooseTheme = e => {
    const name = e.target.innerText;
    dispatch(setTheme(selectThemeByName(themeButtons, name)));
  };

  return (
    <React.Fragment>
      <ThemeButton
        key={selectedTheme.theme}
        type={'button'}
        isOpened={isOpened}
        onClick={handlerDropdown}>
        {selectedTheme.name}
        <span>{isOpened ? '▲' : '▼'}</span>
      </ThemeButton>
      {isOpened && (
        <OtherThemeButtonWrapper onClick={handlerChooseTheme}>
          {otherThemes.map(el => (
            <OtherThemeButton key={el.theme} type={'button'} onClick={handlerDropdown}>
              {el.name}
            </OtherThemeButton>
          ))}
        </OtherThemeButtonWrapper>
      )}
    </React.Fragment>
  );
};
