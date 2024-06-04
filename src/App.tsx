import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { InitRoute } from './routes';

function App() {
  return (
    <BrowserRouter>
      <InitRoute />
    </BrowserRouter>
  );
}

export default App;
