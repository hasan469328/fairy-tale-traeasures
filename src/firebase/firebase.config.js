// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHUXepGx93bJjgjPWF1A1hS0O0goH4HL8",
  authDomain: "fairy-tale-treasures.firebaseapp.com",
  projectId: "fairy-tale-treasures",
  storageBucket: "fairy-tale-treasures.appspot.com",
  messagingSenderId: "114102748665",
  appId: "1:114102748665:web:cc13cd44be71aa33b8a928"
};

// Initialize Firebase
export default const app = initializeApp(firebaseConfig);