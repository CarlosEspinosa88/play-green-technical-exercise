import { db } from '../../config/firebase';
import { onSnapshot, doc } from 'firebase/firestore';

export const readFirestoreData = async (userId, setHistorySports) => {
  const sportRef = doc(db, 'sports', userId);

  await onSnapshot(sportRef, async (doc) => {
    const data = await doc?.data()?.sports;
    setHistorySports(data);
  });
};
