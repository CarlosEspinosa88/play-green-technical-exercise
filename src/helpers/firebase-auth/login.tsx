import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userStatus } from './status';
import type { FirebaseAuthType } from '../../interfaces';

export const login = ({ isLogged, email, password, setIsLogged, setIsLoggedError, setUser }: FirebaseAuthType) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user && !isLogged) {
        console.log('User login successfully');
        userStatus({ setIsLogged, setUser });
        setIsLoggedError('');
      }
    })
    .catch((error) => {
      console.log(`${error.message}, code: ${error.code}`);
      setIsLoggedError(error.message);
    });
};
