import { styled } from 'styled-components';

export const StyledDarkModeContainer = styled.div`
  display: inline-block;
  position: absolute;
  margin-left: 10px;
  top: 65px;
  z-index: 1;
`;

export const StyledDarkModeButton = styled.button`
  border: 0;
  margin: 0;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  line-height: 1;
  cursor: pointer;
  overflow: hidden;
  font-size: 1.5em;
  background: ${({ theme }) => theme.colors.background};
`;
