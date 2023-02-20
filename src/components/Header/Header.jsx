import React from 'react';
import { ROUTES } from 'Constants/routes';
import { HeaderLink, HeaderNav, HeaderTitle, HeaderWrapper } from './styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Calculator App</HeaderTitle>
      <HeaderNav>
        <HeaderLink to={ROUTES.main} data-cy='home'>
          Home
        </HeaderLink>
        <HeaderLink to={ROUTES.calculatorCC} data-cy='calculateCC'>
          CalculatorCC
        </HeaderLink>
        <HeaderLink to={ROUTES.settings} data-cy='settings'>
          Settings
        </HeaderLink>
      </HeaderNav>
    </HeaderWrapper>
  );
};
