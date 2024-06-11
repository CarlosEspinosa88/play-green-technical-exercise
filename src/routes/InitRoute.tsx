import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/History';
import Login from '../pages/Login';
import ProtectedRoute from '../components/ProtectedRoute';
import type { ColorScheme } from '../interfaces';

export const InitRoute = ({ colorScheme, setColorScheme }: ColorScheme) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            {' '}
            <Home colorScheme={colorScheme} setColorScheme={setColorScheme} />{' '}
          </ProtectedRoute>
        }
      />
      <Route
        path="/history"
        element={
          <ProtectedRoute>
            {' '}
            <History />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
