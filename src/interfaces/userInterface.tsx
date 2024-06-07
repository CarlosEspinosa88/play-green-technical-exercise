/* eslint-disable no-unused-vars */

export type UserAuth = {
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
  email?: string;
  password?: string;
};
