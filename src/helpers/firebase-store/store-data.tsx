import { db } from '../../config/firebase';
import { doc, updateDoc, arrayUnion, setDoc, getDoc } from 'firebase/firestore';

export const storeFirestoreData = async (userId, sportData) => {
  try {
    const sportRef = doc(db, 'sports', userId);
    const sportDoc = await getDoc(sportRef);

    if (sportDoc.exists()) {
      await updateDoc(sportRef, { sports: arrayUnion(sportData) });
    } else {
      await setDoc(sportRef, { sports: arrayUnion(sportData) });
    }
  } catch (error) {
    console.error('Error storing sport data', error);
  }
};
