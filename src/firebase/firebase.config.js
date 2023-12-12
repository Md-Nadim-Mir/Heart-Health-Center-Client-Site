
import { initializeApp } from "firebase/app";


          // apiKey: import.meta.env.VITE_apiKey,
          // authDomain: import.meta.env.VITE_authDomain,
          // projectId: import.meta.env.VITE_projectId,
          // storageBucket: import.meta.env.VITE_storageBucket,
          // messagingSenderId: import.meta.env.VITE_messagingSenderId,
          // appId: import.meta.env.VITE_appId,


const firebaseConfig = {

  apiKey: "AIzaSyDEgqeSUd4AAza7j80p7wdyqvFOqbiIgo4",
  authDomain: "heart-health-center.firebaseapp.com",
  projectId: "heart-health-center",
  storageBucket: "heart-health-center.appspot.com",
  messagingSenderId: "127820171577",
  appId: "1:127820171577:web:54c3bb1c8e76b1ace380e8"
 

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;