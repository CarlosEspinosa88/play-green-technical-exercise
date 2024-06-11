import { styled } from 'styled-components';

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCardContainer = styled.div`
  height: 60vh;
`;

export const StyledImageContainer = styled.div<{ $src?: string }>`
  ${(props) => `
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${props.$src});
    border-radius: ${props.theme.borderRadius.large};
    background-color: ${props.theme.otherColors.gray};
  `};
  width: 300px;
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

export const StyledTextContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
  color: ${({ theme }) => theme.otherColors.white};
`;

export const StyledText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.otherColors.white};
`;

export const StyledBottomBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.box};
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-radius: 20px;
  margin: 17px;
  align-items: center;
  padding: 5px 25px;
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const StyledIconHeartContainer = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.otherColors.iconBlue} 0%, ${theme.otherColors.primary} 100%)`};
  color: ${({ theme }) => theme.otherColors.white};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  display: flex;
  padding: 15px;
  margin-left: 20px;
  justify-content: center;
  width: 23px;
  height: 23px;
`;

export const StyledIconDislikeContainer = styled.div`
  color: ${({ theme }) => theme.colors.remove};
  background: ${({ theme }) => theme.colors.box};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  display: flex;
  padding: 7px;
  justify-content: center;
  width: 23px;
  height: 23px;
  box-shadow: ${({ theme }) => `2px 1px 11px 4px ${theme.otherColors.grayShadow}`};
`;
