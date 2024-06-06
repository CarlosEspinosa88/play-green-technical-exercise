import { Routes, Route } from 'react-router-dom';
import type { ColorScheme } from '../interfaces';
import Home from '../pages/Home';
import Fav from '../pages/Fav';
import Login from '../pages/Login';

export const InitRoute = ({ colorScheme, setColorScheme }: ColorScheme) => {
  return (
    <Routes>
      <Route path="/" element={<Home colorScheme={colorScheme} setColorScheme={setColorScheme} />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
