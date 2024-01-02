import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { auth } from "../firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlevmM4He5y818i7pqlCHMUPP-EpP9m-A",
  authDomain: "instagram-clone-b87d2.firebaseapp.com",
  projectId: "instagram-clone-b87d2",
  storageBucket: "instagram-clone-b87d2.appspot.com",
  messagingSenderId: "201442551282",
  appId: "1:201442551282:web:b52b2f386e73733f39f76b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
