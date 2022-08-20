import { getAuth } from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMzNV4N_ckFvQL7FycHU_IWbZDBWppZ0A",
    authDomain: "project-sunshine-task-95851.firebaseapp.com",
    projectId: "project-sunshine-task-95851",
    storageBucket: "project-sunshine-task-95851.appspot.com",
    messagingSenderId: "220614485519",
    appId: "1:220614485519:web:40047a3159f377971a657a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;