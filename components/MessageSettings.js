import { db } from '../firebase/config'
import { Trash2 } from 'react-feather'

const MessageSettings = ({id}) => {
  const deleteMessage = () => {
    const messagesRef = db.collection("messages")
    messagesRef.doc(id).delete().then(() => {
      console.log("Message successfully deleted!")
    }).catch(error => {
      console.error("Error removing message: ", error)
    }) 
  }
  return (
    <>
      <button 
        type="button" 
        onClick={deleteMessage}
        className="hover:text-red-500 focus:outline-none"
      >
        <Trash2 size={18}/>
      </button>
    </>
  );
}
 
export default MessageSettings;