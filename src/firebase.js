//npm add firebase
//firebasetool
import firebase from 'firebase';

console.log(firebase);


const firebaseConfig = {
    apiKey: "AIzaSyDlF1YjVpyvJny1XAiIUW2f9aiZx496AS8",
    authDomain: "linkedin-clone02.firebaseapp.com",
    projectId: "linkedin-clone02",
    storageBucket: "linkedin-clone02.appspot.com",
    messagingSenderId: "345208719076",
    appId: "1:345208719076:web:b47411352e2cf10e3bcef1",
    measurementId: "G-FTGTQ11VZF"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db,auth,storage };
