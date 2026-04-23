/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
    apiKey: "AIzaSyCrxvLknYgjuXnOAcCBKQIWzZ-Y8lWT1jE",
    authDomain: "yuv-singh-12comp-1169b.firebaseapp.com",
    databaseURL: "https://yuv-singh-12comp-1169b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "yuv-singh-12comp-1169b",
    storageBucket: "yuv-singh-12comp-1169b.firebasestorage.app",
    messagingSenderId: "475182460149",
    appId: "1:475182460149:web:6f23899c85b799f27829bc"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
