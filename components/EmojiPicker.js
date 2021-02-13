import { useState } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { Smile } from 'react-feather'

const EmojiPicker = () => {
  const [open, setOpen] = useState(false)
  const [emoji, setEmoji] = useState({}) 
  const handleClick = () => setOpen(!open)

  const addEmoji = (emoji, e) => {
    setEmoji(emoji)
  }

  return (
    <>
      <div className={`absolute bottom-14 left-0 ${open || 'hidden'}`}>
        <Picker set="google" emoji="" color="#3B82F6" enableFrequentEmojiSort={true} showPreview={false} showSkinTones={false} perLine={9} onSelect={addEmoji}/>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className={`self-center text-gray-500 focus:outline-none ${open && 'text-blue-500'}`}
      >
        <Smile size={24}/>
      </button>
    </>
  )
}
 
export default EmojiPicker