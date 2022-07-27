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
  
function writeStudentAnswers(name, email, answers) {
  firebase.database().ref('users/' + name).set({
    username: name,
    email: email,
    answers : answers
  });
  let dbLocation = firebase.database().ref('deck/flashy')
  dbLocation.set(myFlashcards);
}
writeStudentAnswers("michael","foo@bar.com", ["b","c","e","f"]);
