// Import functions to get the database root, set a location and update the values
//
import { getDatabase, ref, set, update, child, get,
onValue, remove } from
"https://www.gstatic.com/firebasejs/9.9.2/firebasedatabase.js (https://www.gstatic.com/firebasejs/9.9.2/firebasedatabase.js)";
<!-- define the script as a module. This is a special type of JavaScript file that allows you to include other JavaScript libraries. -->
<script type="module" src="firebase-connector.js">
  //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  //TODO: Add SDKs for Firebase products that you want to use
  //https://firebase.google.com/docs/web/setup#available-libraries

  //Your web app's Firebase configuration
  //For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB7PyoBopqhHlDIeMtIfZc9tP2PyWdPEOQ",
    authDomain: "best-learning-tool-9281c.firebaseapp.com",
    projectId: "best-learning-tool-9281c",
    storageBucket: "best-learning-tool-9281c.appspot.com",
    messagingSenderId: "988183622580",
    appId: "1:988183622580:web:9677979a51d67f58d0f8e1",
    measurementId: "G-B6YY6VSY25"
  };

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

let myFlashcards = [ {
"question": "Name this species of bird.",
"image" : "images/barn-owl-2550068__340.webp",
"answer": "Barn Owl"
},
{
"question": "Name this species of bird.",
"image" : "images/dove-2516641__340.webp",�
"answer": "Dove"
},
{
"question": "Name this species of bird.",
"image" : "images/hummingbird-2139279__340.webp",
"answer": "Hummingbird"
}
];

// Get a pointer to the database root
const db = getDatabase();
// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
const dbLocation = {};
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation['/deck/flashcards/'] = myFlashcards; //Specify a specific location in the database tree
update (ref(db), dbLocation);

