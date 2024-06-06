// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB77Dff59mjAaSQ0vzDMwYGfS3NVkf8TIQ",
  authDomain: "test-1106d.firebaseapp.com",
  projectId: "test-1106d",
  storageBucket: "test-1106d.appspot.com",
  messagingSenderId: "311332453040",
  appId: "1:311332453040:web:c5a4f7ee669ce540e65975",
  measurementId: "G-042JEXV6M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);