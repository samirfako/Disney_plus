import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDhgNQIffcx-xD4m0mvZP-LrzqgT0bCQ2o',
  authDomain: 'disneyplus-b9a4a.firebaseapp.com',
  projectId: 'disneyplus-b9a4a',
  storageBucket: 'disneyplus-b9a4a.appspot.com',
  messagingSenderId: '328185478979',
  appId: '1:328185478979:web:7100abcf9ec1e02476f9f6',
  measurementId: 'G-C5K4B7PGP6',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
