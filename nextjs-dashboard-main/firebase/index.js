import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4vYkSi2SUrVkaPndpqge8_12vfaEPWBA",
  authDomain: "todo-app-f6590.firebaseapp.com",
  projectId: "todo-app-f6590",
  storageBucket: "todo-app-f6590.appspot.com",
  messagingSenderId: "129452240442",
  appId: "1:129452240442:web:1c3104b5f6412e75aacf03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

