import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyDJNQVErhHjPERbd1UV1K0rqgjB2NmlIe0",
    authDomain: "proyecto-8767e.firebaseapp.com",
    databaseURL: "https://proyecto-8767e.firebaseio.com",
    projectId: "proyecto-8767e",
    storageBucket: "proyecto-8767e.appspot.com",
    messagingSenderId: "451377521598",
    appId: "1:451377521598:web:d9d9fa2d3052890a4ccfef"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
