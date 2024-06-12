import { db } from '../../config/firebase';
import { doc, updateDoc, arrayUnion, setDoc, getDoc } from 'firebase/firestore';
import type { StoreFiretoreType } from '../../interfaces';


export const storeFirestoreData = async ({ userId, sportData }: StoreFiretoreType) => {
  const path = 'sports'
  const sportRef = doc(db, path, userId);
  
  try {
    const sportDoc = await getDoc(sportRef);

    if (sportDoc.exists()) {
      await updateDoc(sportRef, { sports: arrayUnion(sportData) });
    } else {
      await setDoc(sportRef, { sports: arrayUnion(sportData) });
    }
  } catch (error) {
    console.log('Error storing sport data', error);
  }
};
