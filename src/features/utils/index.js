import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";

export const setUserLoginState = (data) => {
  if (data) {
    localStorage.setItem("loggedIn", true);
  } else {
    localStorage.setItem("loggedIn", false);
  }
};

export const checkLoginStatus = () => {
  return localStorage.getItem("loggedIn");
};

export const fetchMovies = async (collectionName) => {
  return await getDocs(collection(db, collectionName));
};
