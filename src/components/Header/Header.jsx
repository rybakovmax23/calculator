import React from 'react';
import { ROUTES } from 'Constants/routes';
import { HeaderLink, HeaderNav, HeaderTitle, HeaderWrapper } from './styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Calculator App</HeaderTitle>
      <HeaderNav>
        <HeaderLink to={ROUTES.main}>Home</HeaderLink>
        <HeaderLink to={ROUTES.settings}>Settings</HeaderLink>
      </HeaderNav>
    </HeaderWrapper>
  );
};
