import { styled } from 'styled-components';

export const StyledHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledIconContainer = styled.div`
  ${({ theme }) => `
    color: ${theme.colors.text};
    background: ${theme.colors.background};
    position: fixed;
    top: 76px;
    padding: 10px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
  `}
`;

export const StyledHeaderTwo = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
`;

export const StyledHeaderDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 1rem 0;
  line-height: 1.4;
  font-family: 'Epilogue', sans-serif;
`;

export const StyledCardsContainer = styled.div`
  padding: 75px 20px 100px 20px;
`;
