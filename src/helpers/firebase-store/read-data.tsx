import { db } from '../../config/firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import type { SportValuesType, ReadFiretoreType } from '../../interfaces';

export const readFirestoreData = async ({ userId, setHistorySports }: ReadFiretoreType) => {
  const sportRef = doc(db, 'sports', userId);

  await onSnapshot(sportRef, async (doc) => {
    const data: SportValuesType[] = await doc?.data()?.sports;
    setHistorySports(data);
  });
};
