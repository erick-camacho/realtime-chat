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
    <div className="flex flex-col justify-center items-center h-screen space-y-48">
      <h1 className="text-4xl text-center">
        <span className="block font-light">Welcome to</span>
        <span className="block text-blue-600 font-bold">Realtime Chat</span>
      </h1>
      <button
        type="button"
        onClick={handleSignIn}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-3 rounded-xl focus:outline-none"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn