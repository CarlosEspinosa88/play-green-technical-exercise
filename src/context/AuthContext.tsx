import { createContext, useEffect, useState, ReactNode } from 'react';
import { login, logout, signup, userStatus } from '../helpers';
import { UserAuth } from '../interfaces';

export const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  function loginUser() {
    login(isLogged, setIsLogged);
  }

  function logoutUser() {
    logout(isLogged, setIsLogged);
  }

  function signupUser() {
    signup(setIsLogged);
  }

  useEffect(() => {
    userStatus(setIsLogged);
  }, []);

  const value = {
    isLogged,
    loginUser,
    logoutUser,
    signupUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
