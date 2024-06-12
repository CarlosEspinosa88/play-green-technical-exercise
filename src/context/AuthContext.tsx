import { createContext, useEffect, useState, ReactNode } from 'react';
import { login, logout, signup, userStatus } from '../helpers';
import type { UserAuth, ValueUserType, User } from '../interfaces';

export const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ id: '', email: '' });
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [isLoggedError, setIsLoggedError] = useState<string | null>(null);

  function loginUser(values: ValueUserType) {
    login({ isLogged, email: values.email, password: values.password, setIsLogged, setIsLoggedError, setUser });
  }

  function logoutUser() {
    logout({ isLogged, setUser, setIsLogged, setIsLoggedError });
  }

  function signupUser(values: ValueUserType) {
    signup({ isLogged, email: values.email, password: values.password, setIsLogged, setIsLoggedError, setUser });
  }

  useEffect(() => {
    userStatus({ setIsLogged, setUser });
  }, []);

  const value: UserAuth = {
    user,
    isLogged,
    isLoggedError,
    loginUser,
    logoutUser,
    signupUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
