import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userStatus } from './status';
import type { FirebaseAuthType } from '../interfaces';

export const login = ({ isLogged, setIsLogged, setIsLoggedError, email, password }: FirebaseAuthType) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user && !isLogged) {
        console.log('User login successfully');
        userStatus(setIsLogged);
        setIsLoggedError('');
      }
    })
    .catch((error) => {
      console.log(`${error.message}, code: ${error.code}`);
      setIsLoggedError(error.message);
    });
};
