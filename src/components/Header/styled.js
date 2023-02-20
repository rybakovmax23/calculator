import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.backgroundHeader};
  border: 1px solid ${props => props.theme.colors.borderHeader};
  padding: 21px 32px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 32px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
  opacity: 0.7;
  padding-bottom: 3px;
  &.active {
    opacity: 1;
    border-bottom: 2px solid #ffffff;
    // text-decoration: underline;
  }
`;
