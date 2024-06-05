import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { UserAuth } from '../interfaces';

export const useAuth = (): UserAuth => {
  return useContext(AuthContext);
};
