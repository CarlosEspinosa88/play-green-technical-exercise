import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const storeFirestoreData = async (sportData) => {
  try {
    const docRef = await addDoc(collection(db, 'sports'), sportData);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
