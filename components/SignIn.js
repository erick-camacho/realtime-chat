import firebase from 'firebase/app'
import 'firebase/auth'

const SignIn = () => {
  const handleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().useDeviceLanguage()
    try {
      await firebase.auth().signInWithRedirect(provider);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <header>
        <h1>Welcome to MyChat</h1>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </header>
      
      <button onClick={handleSignIn}>Sign up with Google</button>
    </div>
  )
}

export default SignIn