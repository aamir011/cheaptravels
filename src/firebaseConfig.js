import {initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCd4w-jW_5gy3uat3Qi3Haj-Al1n6FoTII",
  authDomain: "cheap-flights-dd863.firebaseapp.com",
  projectId: "cheap-flights-dd863",
  storageBucket: "cheap-flights-dd863.appspot.com",
  messagingSenderId: "763734238223",
  appId: "1:763734238223:web:c08a992599cbf859f76f7a",
  measurementId: "G-EZ9WQBGJJ4"
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBNsrMnROMQW0TlZBJtZrhHjrQdKTtO2BE",
//     authDomain: "cheap-flights-53f39.firebaseapp.com",
//     databaseURL: "https://cheap-flights-53f39-default-rtdb.firebaseio.com",
//     projectId: "cheap-flights-53f39",
//     storageBucket: "cheap-flights-53f39.appspot.com",
//     messagingSenderId: "1024500083585",
//     appId: "1:1024500083585:web:ec83e1017d989fcf649680",
//     measurementId: "G-5ZTFKKG9MG"
//   };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  const db = getFirestore(app)
  export default db;