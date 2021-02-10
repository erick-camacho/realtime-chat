import { useEffect, useState, useRef } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Send } from 'react-feather'

const db = firebase.firestore()
const messagesRef = db.collection("messages")

const addMessage = (message, user) => {
  messagesRef.add({
    text: message,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
  }).then(docRef => {
    console.log("Document written with ID: ", docRef.id)
  }).catch(error => {
    console.error("Error adding document: ", error)
  })
}

const Form = ({user}) => {
  const [message, setMessage] = useState("")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedMessage = message.trim()
    if (trimmedMessage){
      addMessage(trimmedMessage, user)
    }
    setMessage("")
  }

  return (
    <footer>
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Type a message"
          value={message}
          onChange={handleChange}
        />
        <button 
          type="submit"
          disabled={!message}
        >
          <Send size={12}/>
        </button>
      </form>
    </footer>
  );
}
 
export default Form;