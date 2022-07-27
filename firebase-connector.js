let myFlashcards = [ {
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

function initializeFirebase () {
  const firebaseConfig = {
    apiKey: "AIzaSyCucqrbubrsMi31OmxroTUIJsUsm5x3-ew",
    authDomain: "best-learning-tool-b5156.firebaseapp.com",
    databaseURL: "https://best-learning-tool-b5156-default-rtdb.firebaseio.com",
    projectId: "best-learning-tool-b5156",
    storageBucket: "best-learning-tool-b5156.appspot.com",
    messagingSenderId: "101366930945",
    appId: "1:101366930945:web:8f2e6f633845e737f2aa00",
    measurementId: "G-3PR2PQRBPV"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

initializeFirebase();

let dbLocation = firebase.database().ref('deck/flashcards'); 
dbLocation.set(myFlashcards);
