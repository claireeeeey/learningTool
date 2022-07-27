// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
function initializeFirebase () {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCucqrbubrsMi31OmxroTUIJsUsm5x3-ew",
    authDomain: "best-learning-tool-b5156.firebaseapp.com",
    projectId: "best-learning-tool-b5156",
    storageBucket: "best-learning-tool-b5156.appspot.com",
    messagingSenderId: "101366930945",
    appId: "1:101366930945:web:8f2e6f633845e737f2aa00",
    measurementId: "G-3PR2PQRBPV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}





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

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
let dbLocation = firebase.database().ref('deck/flashcards'); 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);

initializeFirebase();

// As before,make the database point to the location where the data exists
// If the location doesn't exist it will be created but there will be nothing to retirieve
let fc = firebase.database().ref('deck/flashy');

// A variable to store the JSON results in a human readable format
let jsonString;
// Tell Firebase to retrieve your data
fc.on("value", function(retrieve) {
    //Get the raw JSON data back from the database
    let queryData = retrieve.val();
    // Turn the data into a JSON String
    jsonString = JSON.stringify(queryData);
});

// Print the data out as a JSON string or otherwise manipulate it
console.log (' JSON string:' + jsonString )
