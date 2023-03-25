// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseconfig = {
  apiKey: "AIzaSyBmLyKq_iniKcedDdDNeMxdRDp_ewUOV6w",
  authDomain: "ecstatic-emblem-268211.firebaseapp.com",
  projectId: "ecstatic-emblem-268211",
  storageBucket: "ecstatic-emblem-268211.appspot.com",
  messagingSenderId: "837040977434",
  appId: "1:837040977434:web:cccfbff83ec1809f9683a3",
};


// Initialize Firebase
const app = initializeApp(firebaseconfig);
const analytics = getAnalytics(app);

export default app
