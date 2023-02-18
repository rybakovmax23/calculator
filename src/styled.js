import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.color};
`;
