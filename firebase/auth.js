import { useEffect, useState } from 'react'
import app from './config'
import firebase from 'firebase/app'
import 'firebase/auth'

const auth = app.auth()

export const signIn = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.useDeviceLanguage()
  try {
    await auth.signInWithRedirect(provider);
  } catch (error) {
    console.log(error.message);
  }
}

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error.message);
  }
};

export const useAuth = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
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