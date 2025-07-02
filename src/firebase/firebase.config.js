// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKE0_SJsMP4uT4NSku2DN9FjSF81XapCw",
  authDomain: "megamerx-client-side.firebaseapp.com",
  projectId: "megamerx-client-side",
  storageBucket: "megamerx-client-side.firebasestorage.app",
  messagingSenderId: "60278794257",
  appId: "1:60278794257:web:36831499019645f95469b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;