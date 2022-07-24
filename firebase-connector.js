// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCucqrbubrsMi31OmxroTUIJsUsm5x3-ew",
  authDomain: "best-learning-tool-b5156.firebaseapp.com",
  projectId: "best-learning-tool-b5156",
  storageBucket: "best-learning-tool-b5156.appspot.com",
  messagingSenderId: "101366930945",
  appId: "1:101366930945:web:8f2e6f633845e737f2aa00",
  measurementId: "G-3PR2PQRBPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
