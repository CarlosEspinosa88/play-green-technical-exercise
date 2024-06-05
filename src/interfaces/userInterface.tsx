/* eslint-disable no-unused-vars */

export type UserAuth = {
  isLogged: boolean;
  loginUser: (isLogged: boolean, setIsLogged: () => void) => void;
  logoutUser: (isLogged: boolean, setIsLogged: () => void) => void;
  signupUser: (setIsLogged: () => void) => void;
};
