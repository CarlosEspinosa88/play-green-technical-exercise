import { createContext, useEffect, useState, ReactNode } from 'react';
import { login, logout, signup, userStatus } from '../helpers';
import type { UserAuth, ValueUserType, User } from '../interfaces';

export const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({});
  const [isLogged, setIsLogged] = useState(false);
  const [isLoggedError, setIsLoggedError] = useState(null);

  function loginUser(values: ValueUserType) {
    login({ isLogged, setIsLogged, setIsLoggedError, setUser, email: values.email, password: values.password });
  }

  function logoutUser() {
    logout({ isLogged, setIsLogged });
  }

  function signupUser(values: ValueUserType) {
    signup({ isLogged, setIsLogged, setIsLoggedError, setUser, email: values.email, password: values.password });
  }

  useEffect(() => {
    userStatus({ setIsLogged, setUser });
  }, []);

  const value = {
    user,
    isLogged,
    isLoggedError,
    loginUser,
    logoutUser,
    signupUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
