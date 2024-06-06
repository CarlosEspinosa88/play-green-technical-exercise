import { breakPoints } from '../../styles';
import { styled } from 'styled-components';

export const BodyContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  background: ${({ theme }) => theme.otherColors.white};
`;

export const MainContainer = styled.div`
  ${({ theme }) => `
    background: ${theme.colors.background};
    border-radius: ${theme.borderRadius.large};
  `};
  padding: 30px;
  display: flex;
  overflow: hidden;
  overflow-y: scroll;
  align-items: center;
  justify-content: center;

  @media (min-width: ${breakPoints.mobile}) {
    height: 85vh;
    width: 300px;
  }
`;
