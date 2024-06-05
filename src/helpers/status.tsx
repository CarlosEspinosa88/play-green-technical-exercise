import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const userStatus = (setIsLogged) => {
  onAuthStateChanged(auth, (user) => {
    if (user && user.uid) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  });
};
