import React from 'react';
import { StyledDarkModeContainer, StyledDarkModeButton } from './DarkMode.styles';
import type { ColorScheme } from '../../interfaces';

const DarkMode = ({ colorScheme, setColorScheme }: ColorScheme) => {
  function handleMode() {
    colorScheme === 'light' ? setColorScheme('dark') : setColorScheme('light');
  }
  return (
    <StyledDarkModeContainer>
      <StyledDarkModeButton type="button" onClick={handleMode}>
        {colorScheme === 'light' ? '🌙' : '🌤️'}
      </StyledDarkModeButton>
    </StyledDarkModeContainer>
  );
};

export default DarkMode;
