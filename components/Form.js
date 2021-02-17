import { useContext, useState } from 'react'
import { UserContext } from '../pages'
import { addMessage } from '../firebase/store'
import { Send, Smile } from 'react-feather'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import usePicker from '../utils/usePicker'

const Form = () => {
  const [message, setMessage] = useState("")
  const { isOpen, inputRef, toggle, close } = usePicker()
  const user = useContext(UserContext)

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedMessage = message.trim()
    if (trimmedMessage){
      addMessage(trimmedMessage, user)
    }
    close()
    setMessage("")
  }
  
  const addEmoji = (emoji) => {
    setMessage(message + emoji.native)
    inputRef.current.focus()
  }

  return (
    <footer className="py-2 lg:py-3 px-4 shadow">
      <div className="flex max-w-3xl mx-auto md:relative">
        <div className={`${isOpen || 'hidden'} absolute bottom-14 md:bottom-12 left-0`}>
          <Picker native={true} emoji="" color="#3B82F6" enableFrequentEmojiSort={true} showPreview={false} showSkinTones={false} perLine={9} onClick={addEmoji}/>
        </div>
        <button
          type="button"
          onClick={toggle}
          className={`self-center text-gray-500 focus:outline-none ${isOpen && 'text-blue-500'}`}
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
            className="bg-gray-200 placeholder-gray-500 rounded-3xl py-2 pl-4 flex-1 focus:outline-none mx-2"
          />
          <button 
            type="submit"
            disabled={!message}
            className={`self-center text-gray-500 disabled:opacity-50 focus:outline-none ${message || "cursor-default" }`}
          >
            <Send size={24}/>
          </button>
        </form>
      </div>
    </footer>
  );
}
 
export default Form;