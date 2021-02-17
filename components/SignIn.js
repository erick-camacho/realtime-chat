import { signIn } from '../firebase/auth'

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-48">
      <h1 className="text-4xl text-center">
        <span className="block font-light">Welcome to</span>
        <span className="block text-blue-600 font-bold">Realtime Chat</span>
      </h1>
      <button
        type="button"
        onClick={signIn}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-3 rounded-xl focus:outline-none"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn