// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcCnwcAlzEQzBzSdCvkQpgdpLRRyC9H0M",
  authDomain: "star-wars-362e1.firebaseapp.com",
  projectId: "star-wars-362e1",
  storageBucket: "star-wars-362e1.appspot.com",
  messagingSenderId: "831415659949",
  appId: "1:831415659949:web:c403987687076cdbf40524",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
