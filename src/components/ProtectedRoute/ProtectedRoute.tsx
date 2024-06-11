import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  if (!auth?.isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
