import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYt4EHHtFFFTBhK0mKObWHHVS-Vbfs4zM",
  authDomain: "realtime-chat-app-5605c.firebaseapp.com",
  projectId: "realtime-chat-app-5605c",
  storageBucket: "realtime-chat-app-5605c.appspot.com",
  messagingSenderId: "72039362101",
  appId: "1:72039362101:web:ecb8e8f6dc524962da8b7c",
  measurementId: "G-P0WZ5ZMVJ1"
};

export default !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

export const db = firebase.firestore()
