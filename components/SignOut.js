import { signOut } from '../firebase/auth'

const SignOut = () => {
  return (
    <header className="shadow p-4 lg:py-5">
      <div className="flex justify-between max-w-3xl mx-auto">
        <h1 className="font-bold text-blue-600">Realtime Chat</h1>
        <button 
          type="button" 
          onClick={signOut}
          className="hover:text-blue-600 focus:outline-none"
          >
            Sign Out
          </button>
      </div>
    </header>
  );
}
 
export default SignOut;