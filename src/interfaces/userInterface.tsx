/* eslint-disable no-unused-vars */

export type User = {
  id: string;
  email: string;
};

export type UserAuth = {
  user: User;
  isLogged: boolean;
  isLoggedError: string;
  loginUser: (isLogged: boolean, setIsLogged: () => void) => void;
  logoutUser: (isLogged: boolean, setIsLogged: () => void) => void;
  signupUser: (setIsLogged: () => void) => void;
};

export type ValueUserType = {
  email: string;
  password: string;
};

export type FirebaseAuthType = {
  isLogged: boolean;
  setIsLogged: () => void;
  setIsLoggedError: () => void;
  setUser: ({ id, email }: User) => void;
  email?: string;
  password?: string;
};

export type UserStatus = {
  setIsLogged: (bool: boolean) => void;
  setUser: ({ id, email }: User) => void;
};
