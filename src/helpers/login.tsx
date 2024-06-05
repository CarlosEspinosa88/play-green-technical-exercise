import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { userStatus } from './status';

export const login = (isLogged, setIsLogged) => {
  signInWithEmailAndPassword(auth, 'test@test.com', '123456789')
    .then((userCredential) => {
      const user = userCredential.user;

      if (user && !isLogged) {
        console.log('User login successfully');
        userStatus(setIsLogged);
      }
    })
    .catch((error) => {
      console.log(`Error: ${error.message}, code ${error.code}`);
    });
};
