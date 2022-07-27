let myFlashcards = [ {
    "question": "Name this very species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Owl of Barn"
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
    }, 
    {
    "question": "Name this species of bird.",
    "image" : "images/kingfisher-2046453__340.webp",
    "answer": "Kingfisher"
    }, 
 {
    "question": "Name this species of bird.",
    "image" : "images/owl-50267__340.webp",
    "answer": "Regular old Owl"
    }, 
{
    "question": "Name this species of bird.",
    "image" : "images/swan-2107052__340.webp",
    "answer": "Swanny River"
    }, 
    {
     "question": "What is the capital of PA?",
     "answer": "Harrisburg"
     }
     ];


function initializeFirebase() {
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

function writeStudentAnswers(name, email, answers) {
  firebase.database().ref('users/' + name).set({
    username: name,
    email: email,
    answers : answers
  });
  let dbLocation = firebase.database().ref('deck/flashy')
  dbLocation.set(myFlashcards);
}

initializeFirebase();
writeStudentAnswers("michael","foo@bar.com", ["b","c","e","f"]);
writeStudentAnswers("jennifer","third@floor.com", ["45","Gettysburg address","Windows 11","french fries"]);

let fc = firebase.database().ref('deck/flashy');
console.log('Output: ' + fc.toString() );
console.log('JSON: ' + fc.toJSON() );

let qd;
fc.on("value", function(retrieve) {
    let queryData = retrieve.val();
    console.log('Real JSON:' + JSON.stringify(queryData) );
    qd = JSON.stringify(queryData);
});
console.log('Real Real JSON:' + qd );
