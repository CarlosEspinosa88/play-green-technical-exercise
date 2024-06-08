import { auth } from '../../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { UserStatus } from '../../interfaces';

export const userStatus = ({ setIsLogged, setUser = () => {} }: UserStatus) => {
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      setIsLogged(true);
      setUser({ id: user?.uid, email: user?.email });
    } else {
      setIsLogged(false);
    }
  });
};
