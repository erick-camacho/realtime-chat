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
// fixed inset-x-0 bottom-0 
  return (
    <footer className="py-2 lg:py-3 px-4 shadow">
      <form onSubmit={handleSubmit} className="flex max-w-3xl mx-auto">
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Type a message"
          value={message}
          onChange={handleChange}
          className="bg-gray-200 placeholder-gray-500 rounded-3xl py-2 pl-4 flex-1 focus:outline-none"
        />
        <button 
          type="submit"
          disabled={!message}
          className="self-center text-gray-500 disabled:opacity-50 ml-2 focus:outline-none"
        >
          <Send size={24}/>
        </button>
      </form>
    </footer>
  );
}
 
export default Form;