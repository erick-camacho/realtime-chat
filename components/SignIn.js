import { signIn } from '../firebase/auth'

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-48">
      <div className="text-center space-y-4">
        <img src={require('../public/logo-chat.png')} alt="Realtime Chat Logo" width={80} height={80} className="mx-auto"/>
        <h1 className="text-4xl">
          <span className="block font-light">Welcome to</span>
          <span className="block text-blue-600 font-bold">Realtime Chat</span>
        </h1>
      </div>
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