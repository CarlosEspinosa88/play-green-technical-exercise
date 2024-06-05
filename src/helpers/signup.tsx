import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { userStatus } from './status';

export const signup = (setIsLogged) => {
  createUserWithEmailAndPassword(auth, 'test_again@test.com', '55559999')
    .then((userCredential) => {
      const user = userCredential.user;

      if (user) {
        console.log('User created successfully', user.uid);
        userStatus(setIsLogged);
      }
    })
    .catch((error) => {
      console.log(`Error: ${error.message}, code ${error.code}`);
    });
};
