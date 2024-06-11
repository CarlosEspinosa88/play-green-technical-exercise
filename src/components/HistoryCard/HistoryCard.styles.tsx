import { styled } from 'styled-components';

export const StyledCardHistoryContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.box};
  margin-bottom: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const StyledImageContainer = styled.div<{ $src?: string }>`
  ${(props) => `
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.$src});
    border-radius: ${props.theme.borderRadius.medium};
    background-color: ${props.theme.otherColors.gray};
  `};
  width: 200px;
  height: 10vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledTextContainer = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  margin: 0 0 0 15px;
`;

export const StyledText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.otherColors.white};
`;

export const StyledIcon = styled.div<{ $icon?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$icon === 'likes' ? props.theme.colors.iconHeart : props.theme.otherColors.error)};
  width: 60px;
`;
