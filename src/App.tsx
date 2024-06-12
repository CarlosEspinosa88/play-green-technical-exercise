import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { InitRoute } from './routes';
import { GlobalStyles, theme } from './styles';
import type { ThemeKeys } from './interfaces';

function App() {
  const [colorScheme, setColorScheme] = useState<ThemeKeys>('light');
  const currentTheme = theme[colorScheme];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <AuthProvider>
          <GlobalStyles />
          <InitRoute colorScheme={colorScheme} setColorScheme={setColorScheme} />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
