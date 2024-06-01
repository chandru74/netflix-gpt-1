// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN6-afsik_vPTLfy5g-TaeEYD-ACKLhoc",
  authDomain: "netflixgpt-1e3a1.firebaseapp.com",
  projectId: "netflixgpt-1e3a1",
  storageBucket: "netflixgpt-1e3a1.appspot.com",
  messagingSenderId: "931622690069",
  appId: "1:931622690069:web:9f258ab3f939a2f4391d1c",
  measurementId: "G-EGJ09XXHPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();