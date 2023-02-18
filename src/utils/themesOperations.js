export const selectThemes = (arrThemes, selectedTheme) => {
  return {
    selectedTheme: arrThemes.filter(el => el.theme === selectedTheme)[0],
    otherThemes: arrThemes.filter(el => el.theme !== selectedTheme),
  };
};

export const selectThemeByName = (arrThemes, selectedName) => {
  return arrThemes.filter(el => el.name === selectedName)[0].theme;
};
