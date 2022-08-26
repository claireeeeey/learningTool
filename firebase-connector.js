import {getDatabase, ref, set, update, child, get,
onValue, remove} from "https://www.gstatic.com/firebasejs/9.9.3/firebasedatabase.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
function initializeFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyCmprwZYUG5w0wB8Pa3AeGxeCxQp40m3LQ",
    authDomain: "test3-24a5a.firebaseapp.com (Links to an external site.)",
    projectId: "test3-24a5a",
    storageBucket: "test3-24a5a.appspot.com (Links to an external site.)",
    messagingSenderId: "333990236385",
    appId: "1:333990236385:web:53a034772bf17a95fb67a0",
    measurementId: "G-XPSE5H2EHE"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

initializeFirebase();

let myFlashcard = [
  {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
  },
  {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
  },
  {
   "question": "Name this species of bird.",
   "image" : "images/hummingbird-2139279__340.webp",
   "answer": "Hummingbird" 
  }
];

const db = getDatabase();
const dbLocation = {};
dbLocation['/deck/flashcards/'] = myFlashcards;
update (ref(db), dbLocation);
