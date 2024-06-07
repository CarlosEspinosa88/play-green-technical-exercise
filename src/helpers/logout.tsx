import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { userStatus } from './status';
import { FirebaseAuthType } from '../interfaces';

export const logout = ({ isLogged, setIsLogged }: FirebaseAuthType) => {
  signOut(auth)
    .then(() => {
      isLogged && userStatus(setIsLogged);
      console.log('User logout successfully');
    })
    .catch((error) => {
      console.log(`${error.message}, code: ${error.code}`);
      setError(error.message);
    });
};
