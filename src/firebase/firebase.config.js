// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// apiKey: "AIzaSyCo4b--ixEKx96BI8Eo4RsDiLQNfyN1uNI",
// authDomain: "volunterrapp.firebaseapp.com",
// projectId: "volunterrapp",
// storageBucket: "volunterrapp.appspot.com",
// messagingSenderId: "44421903783",
// appId: "1:44421903783:web:7d3d35fd616b7e2833b282"