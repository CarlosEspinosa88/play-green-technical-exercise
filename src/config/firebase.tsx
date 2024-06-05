import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBYsq2g4AkxANsmwHLKUUNaJZ9Sf3uCtj0',
  authDomain: 'play-green-f8a46.firebaseapp.com',
  projectId: 'play-green-f8a46',
  storageBucket: 'play-green-f8a46.appspot.com',
  messagingSenderId: '497108580629',
  appId: '1:497108580629:web:4cd1f9b97c3f11c6a4511c',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
