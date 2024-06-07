import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { userStatus } from './status';
import { FirebaseAuthType } from '../interfaces';

export const signup = ({ isLogged, setIsLogged, setIsLoggedError, email, password }: FirebaseAuthType) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user && !isLogged) {
        console.log('User created successfully', user.uid);
        userStatus(setIsLogged);
        setIsLoggedError('');
      }
    })
    .catch((error) => {
      console.log(`${error.message}, code: ${error.code}`);
      setIsLoggedError(error.message);
    });
};
