import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/History';
import Login from '../pages/Login';
import type { ColorScheme } from '../interfaces';

export const InitRoute = ({ colorScheme, setColorScheme }: ColorScheme) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home colorScheme={colorScheme} setColorScheme={setColorScheme} />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
