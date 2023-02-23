// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAEtUQRXvUZJILGL8k1ypnglvTA27LfURc",
  authDomain: "disneyplus-clone-26828.firebaseapp.com",
  projectId: "disneyplus-clone-26828",
  storageBucket: "disneyplus-clone-26828.appspot.com",
  messagingSenderId: "761172930173",
  appId: "1:761172930173:web:049ceb5effe85058d2cb14",
  measurementId: "G-T2110YCRM2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const appAuth = getAuth();
const provider = new GoogleAuthProvider();
const appStorage = getStorage();

export { appAuth, provider, appStorage };
export default db;
