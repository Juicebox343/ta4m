import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQegIFaXlv2VdUrcjiGO5Y3LHTbQRRvTY",
  authDomain: "there-are-four-mics.firebaseapp.com",
  projectId: "there-are-four-mics",
  storageBucket: "there-are-four-mics.appspot.com",
  messagingSenderId: "959185179414",
  appId: "1:959185179414:web:edd9656fa2c2930b537637",
  measurementId: "G-Y1ZCZDEJSQ"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();