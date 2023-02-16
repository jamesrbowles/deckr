// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCs08FOHkzHY69xhdUFZjEhDOCbjKjU9E0',
  authDomain: 'deckr-1b6a2.firebaseapp.com',
  projectId: 'deckr-1b6a2',
  storageBucket: 'deckr-1b6a2.appspot.com',
  messagingSenderId: '78000149180',
  appId: '1:78000149180:web:0ce105dee8ee50304b36b9',
  measurementId: 'G-D7RH6WH893',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app;
