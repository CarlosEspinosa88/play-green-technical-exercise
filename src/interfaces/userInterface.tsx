/* eslint-disable no-unused-vars */

export type User = {
  id: string;
  email: string | null;
};

export type UserLogout = {
  isLogged: boolean;
  setUser: ({ id, email }: User) => void;
  setIsLogged: (bool: boolean) => void;
  setIsLoggedError: (error: string) => void;
};

export type ValueUserType = {
  email: string;
  password: string;
};

export type UserAuth = {
  user: User;
  isLogged: boolean;
  isLoggedError: string | null;
  loginUser: ({ email, password }: ValueUserType) => void;
  logoutUser: () => void;
  signupUser: ({ email, password }: ValueUserType) => void;
};

export type FirebaseAuthType = {
  isLogged: boolean;
  email: string;
  password: string;
  setIsLogged: (bool: boolean) => void;
  setIsLoggedError: (error: string) => void;
  setUser: ({ id, email }: User) => void;
};

export type UserStatus = {
  setIsLogged: (bool: boolean) => void;
  setUser: ({ id, email }: User) => void;
};
