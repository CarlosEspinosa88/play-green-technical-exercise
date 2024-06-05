import { Routes, Route } from 'react-router-dom';
import { Mode } from '../interfaces';
import Home from '../pages/Home';
import Fav from '../pages/Fav';
import Login from '../pages/Login';

export const InitRoute = ({ mode, setMode }: Mode) => {
  return (
    <Routes>
      <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
      <Route path="/fav" element={<Fav />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
