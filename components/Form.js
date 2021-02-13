import { useEffect, useState, useRef } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Send, Smile } from 'react-feather'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

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
  const [open, setOpen] = useState(false)
  
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [open])

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleClick = () => {
    setOpen(!open)
  }

  const addEmoji = (emoji) => {
    setMessage(message + emoji.native)
    inputRef.current.focus()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedMessage = message.trim()
    if (trimmedMessage){
      addMessage(trimmedMessage, user)
    }
    setOpen(false)
    setMessage("")
  }

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      setOpen(false)
    }
  }
  
  return (
    <footer className="py-2 lg:py-3 px-4 shadow">
      <div className="flex max-w-3xl mx-auto md:relative">
        <div className={`absolute bottom-14 md:bottom-12 left-0 ${open || 'hidden'}`}>
          <Picker native={true} emoji="" color="#3B82F6" enableFrequentEmojiSort={true} showPreview={false} showSkinTones={false} perLine={9} onClick={addEmoji}/>
        </div>
        <button
          type="button"
          onClick={handleClick}
          className={`self-center text-gray-500 focus:outline-none ${open && 'text-blue-500'}`}
        >
          <Smile size={24}/>
        </button>
        <form onSubmit={handleSubmit} className="flex flex-1">
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Type a message"
            value={message}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            className="bg-gray-200 placeholder-gray-500 rounded-3xl py-2 pl-4 flex-1 focus:outline-none mx-2"
          />
          <button 
            type="submit"
            disabled={!message}
            className="self-center text-gray-500 disabled:opacity-50 focus:outline-none"
          >
            <Send size={24}/>
          </button>
        </form>
      </div>
    </footer>
  );
}
 
export default Form;