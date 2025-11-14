import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoZyj0ZTIu5kWxc1wBTFwCV7gtA4Ncx9E",
  authDomain: "ph-logic.firebaseapp.com",
  projectId: "ph-logic",
  storageBucket: "ph-logic.firebasestorage.app",
  messagingSenderId: "310911560610",
  appId: "1:310911560610:web:b02032cdda0fb095f1e0fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
