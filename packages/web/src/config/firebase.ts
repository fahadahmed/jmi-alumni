import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  connectFirestoreEmulator,
} from 'firebase/firestore/lite';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: process.env.JMI_API_KEY,
  authDomain: process.env.JMI_AUTH_DOMAIN,
  projectId: process.env.JMI_PROJECT_ID,
  storageBucket: process.env.JMI_STORAGE_BUCKET,
  messagingSenderId: process.env.JMI_MESSAGING_SENDER_ID,
  appId: process.env.JMI_APP_ID,
  measurementId: process.env.JMI_MEASUREMENT_ID,
};

const fire = initializeApp(firebaseConfig);
// initializeAppCheck(fire, {
//   provider: new ReCaptchaV3Provider(process.env.JMI_RECAPTCHA_CLIENT_ID),
// });
const db = getFirestore(fire);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, 'localhost', 8081);
}

export default fire;
export {
  db,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  initializeAppCheck,
  ReCaptchaV3Provider,
};
