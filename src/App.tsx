import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { InitRoute } from './routes';
import { GlobalStyles, theme } from './styles';
import type { ColorScheme } from './interfaces'; 

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  return (
    <ThemeProvider theme={theme[colorScheme]}>
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
