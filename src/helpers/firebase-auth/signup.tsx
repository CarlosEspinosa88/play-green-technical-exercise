import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { userStatus } from './status';
import type { FirebaseAuthType } from '../../interfaces';

export const signup = ({ isLogged, email, password, setIsLogged, setIsLoggedError, setUser }: FirebaseAuthType) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user && !isLogged) {
        console.log('User created successfully', user?.uid);
        userStatus({ setIsLogged, setUser });
        setIsLoggedError('');
      }
    })
    .catch((error) => {
      console.log(`${error.message}, code: ${error.code}`);
      setIsLoggedError(error.message);
    });
};
