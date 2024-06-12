import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { userStatus } from './status';
import type { UserLogout } from '../../interfaces';

export const logout = ({ isLogged, setUser, setIsLogged, setIsLoggedError }: UserLogout) => {
  signOut(auth)
    .then(() => {
      isLogged && userStatus({ setIsLogged, setUser });
      console.log('User logout successfully');
    })
    .catch((error) => {
      console.log(`${error.message}, code: ${error.code}`);
      setIsLoggedError(error.message);
    });
};
