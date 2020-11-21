import * as firebase from 'firebase/app';
import 'firebase/database';



  var firebaseConfig = {
    apiKey: "AIzaSyBAbDx866w5dNaM5wpkMoixcJt-Uq4uD9w",
    authDomain: "webmobile-48ab0.firebaseapp.com",
    databaseURL: "https://webmobile-48ab0.firebaseio.com",
    projectId: "webmobile-48ab0",
    storageBucket: "webmobile-48ab0.appspot.com",
    messagingSenderId: "760801258293",
    appId: "1:760801258293:web:70e7b01ade058bcaeaba7c",
    measurementId: "G-ZX9LXG5S00"
  };


  export default firebase.initializeApp(firebaseConfig);
