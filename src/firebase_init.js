// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_QxiUq7rAzX64uClcXfo6hrhYJImuqNs",
    authDomain: "warehouse-full-stack.firebaseapp.com",
    projectId: "warehouse-full-stack",
    storageBucket: "warehouse-full-stack.appspot.com",
    messagingSenderId: "980081823342",
    appId: "1:980081823342:web:488be3e0e7e2b84a69e07f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;