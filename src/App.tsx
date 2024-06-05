import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { InitRoute } from './routes';
import { GlobalStyles, theme } from './styles';

function App() {
  const [mode, setMode] = useState('light');

  return (
    <ThemeProvider theme={theme[mode]}>
      <BrowserRouter>
        <GlobalStyles />
        <InitRoute mode={mode} setMode={setMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
