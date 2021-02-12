import firebase from 'firebase/app'
import 'firebase/auth'

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <header className="shadow p-4 lg:py-5">
      <div className="flex justify-between max-w-3xl mx-auto">
        <h1 className="font-bold">Realtime Chat</h1>
        <button 
          type="button" 
          onClick={handleSignOut}
          className="hover:text-blue-600 focus:outline-none"
          >
            Sign Out
          </button>
      </div>
    </header>
  );
}
 
export default SignOut;