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
    <header>
      <div className="logo">Chat</div>
      <div className="button" onClick={handleSignOut}>Sign out</div>
    </header>
  );
}
 
export default SignOut;