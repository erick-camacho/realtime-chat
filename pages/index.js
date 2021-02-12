import { useEffect, useState } from 'react'
import SignIn from '../components/SignIn'
import SignOut from '../components/SignOut'
import Channel from '../components/Channel'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function Home() {
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

  if (initializing) return null
  return (
    <>
      {user ? (
        <Channel user={user}/>
      ) : (
        <SignIn/>
      )}
    </>
  )
}
