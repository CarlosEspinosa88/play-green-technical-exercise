import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const readFirestoreData = async () => {
  const querySnapshot = await getDocs(collection(db, 'sports'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};
