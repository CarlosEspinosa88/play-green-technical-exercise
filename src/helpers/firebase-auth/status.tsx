import { auth } from '../../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

// eslint-disable-next-line no-unused-vars
export const userStatus = (setIsLogged: (bool: boolean) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  });
};
