// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDjQ-XYKnNfp9DUgYSkFxkT05UCwgO3_SI',
  authDomain: 'hakaton-2023-memory-game.firebaseapp.com',
  projectId: 'hakaton-2023-memory-game',
  storageBucket: 'hakaton-2023-memory-game.appspot.com',
  messagingSenderId: '991078126202',
  appId: '1:991078126202:web:6d655bbff38cab4e3ee1c3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
