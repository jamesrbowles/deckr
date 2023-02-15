// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4Pq-bPXHUBNnYSukVCeHXhVJY14NzWVQ',
  authDomain: 'deckr-a598d.firebaseapp.com',
  projectId: 'deckr-a598d',
  storageBucket: 'deckr-a598d.appspot.com',
  messagingSenderId: '167155678083',
  appId: '1:167155678083:web:1cfb8b4cddca238a6b14b6',
  measurementId: 'G-TWFNRZK4N7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
