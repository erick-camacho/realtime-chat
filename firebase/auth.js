import firebase from 'firebase/app'
import 'firebase/auth'

const provider = new firebase.auth.GoogleAuthProvider

export const signIn = () => {
  firebase.auth().signInWithRedirect(provider)
}

export const signOut = () => {
  firebase.auth().signOut().then(() => {
    console.log("Sign-out successful")
  }).catch((error) => {
    console.log(error)
  });
}

export const getUser = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user)
    } else {
      console.log("No user is signed in")
    }
  });
}