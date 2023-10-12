import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCPzx310g-7gsCWQHtYyBX44PUUhzGAZI",
  authDomain: "web-rental-dc4dc.firebaseapp.com",
  projectId: "web-rental-dc4dc",
  storageBucket: "web-rental-dc4dc.appspot.com",
  messagingSenderId: "952269568748",
  appId: "1:952269568748:web:79aaa3d5602cb07ac043c9",
  measurementId: "G-WNZXLMVENQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;