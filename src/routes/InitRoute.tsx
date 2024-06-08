import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Fav from '../pages/Fav';
import Login from '../pages/Login';
import type { ColorScheme } from '../interfaces';

export const InitRoute = ({ colorScheme, setColorScheme }: ColorScheme) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home colorScheme={colorScheme} setColorScheme={setColorScheme} />} />
      <Route path="/fav" element={<Fav />} />
    </Routes>
  );
};
