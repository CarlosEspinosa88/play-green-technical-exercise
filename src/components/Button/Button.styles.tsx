import { styled } from 'styled-components';

export const ButtonStyled = styled.button`
  border: 0;
  margin: 0;
  opacity: 1;
  line-height: 1;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  position: relative;
  text-align: center;
  vertical-align: top;
  white-space: nowrap;
  text-decoration: none;
  transition: all 150ms ease-out;
  padding: 1.3rem 1.8rem;
  font-weight: 600;
  font-family: 'Epilogue', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.otherColors.white};
  border-radius: ${({ theme }) => theme.borderRadius.extra};
  box-shadow: ${({ theme }) => `2px 3px 14px 3px ${theme.otherColors.blueShadowPrimary}`};
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.otherColors.iconBlue} 0%, ${theme.otherColors.primary} 100%)`};

  &:hover {
    box-shadow: none;
    background: ${({ theme }) => theme.otherColors.shadowBlue};
  }
`;
