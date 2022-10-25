// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyn9E6iEkhfoB2HFX6LYbfCYQFRkP0UqA",
    authDomain: "saj-academy.firebaseapp.com",
    projectId: "saj-academy",
    storageBucket: "saj-academy.appspot.com",
    messagingSenderId: "287087078870",
    appId: "1:287087078870:web:95d313979f47056379c877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
