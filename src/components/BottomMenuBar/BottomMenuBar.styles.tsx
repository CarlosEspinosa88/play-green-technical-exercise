import { styled } from 'styled-components';

export const StyledBottomBarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.box};
  display: flex;
  justify-content: space-between;
  height: 65px;
  border-radius: 20px;
  margin: 15px;
  align-items: center;
  padding: 5px 10px;
`;
export const StyledMenuButton = styled.button<{ $path?: boolean }>`
  border: 0;
  cursor: pointer;
  transition: all 150ms ease-out;
  width: 40px;
  height: 40px;
  padding: 5px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${(props) => `
    color: ${props.theme.colors.text};
    background-color: ${props.$path ? props.theme.colors.background : 'transparent'};
  `};

  &:hover {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
