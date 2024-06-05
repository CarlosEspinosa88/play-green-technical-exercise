import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { userStatus } from './status';

export const logout = (isLogged, setIsLogged) => {
  signOut(auth)
    .then(() => {
      isLogged && userStatus(setIsLogged);
      console.log('User logout successfully');
    })
    .catch((error) => {
      console.log(`Error: ${error.message}, code ${error.code}`);
    });
};
