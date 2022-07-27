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


// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
let dbLocation = firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);
