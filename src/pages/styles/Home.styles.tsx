import { styled } from 'styled-components';

export const StyledHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImageContainer = styled.div<{ $src?: string }>`
  ${(props) => `
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${props.$src});
    border-bottom-right-radius: ${props.theme.borderRadius.extra};
    border-bottom-left-radius: ${props.theme.borderRadius.extra};
    background-color: ${props.theme.otherColors.gray};
  `};
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledTextContainer = styled.div`
  position: relative;
  bottom: 67px;
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
