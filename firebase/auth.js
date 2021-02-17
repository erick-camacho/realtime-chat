import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

export const signIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().useDeviceLanguage()
  try {
    await firebase.auth().signInWithRedirect(provider);
  } catch (error) {
    console.log(error.message);
  }
}

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error.message);
  }
};

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => firebase.auth().currentUser);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [initializing]);

  return { initializing, user }
}