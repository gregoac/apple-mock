import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDnASZMogueMBI0q2k2bhxUortwGjiAWc8",
    authDomain: "apple-ecommerce-22582.firebaseapp.com",
    projectId: "apple-ecommerce-22582",
    storageBucket: "apple-ecommerce-22582.appspot.com",
    messagingSenderId: "818287189859",
    appId: "1:818287189859:web:69185267a85fb8ef0ebd56"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);