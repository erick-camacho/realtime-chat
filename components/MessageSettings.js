import { deleteMessage } from '../firebase/store'
import { Trash2 } from 'react-feather'

const MessageSettings = ({ id }) => {
  return (
    <>
      <button 
        type="button" 
        onClick={() => deleteMessage(id)}
        className="hover:text-red-500 focus:outline-none"
      >
        <Trash2 size={18}/>
      </button>
    </>
  );
}
 
export default MessageSettings;