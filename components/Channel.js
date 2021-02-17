import { useMessages } from '../firebase/store'
import SignOut from './SignOut'
import Message from './Message'
import Form from './Form'

const Channel = () => {
  const { messages, messageEndRef } = useMessages()

  return (
    <div className="h-screen grid auto-rows-auto">
      <SignOut/>
      <main className="overflow-y-scroll py-2 min-h-sm lg:min-h-lg overflow-auto">
        <ul className="space-y-2">
          {messages.map(message => 
            <li key={message.id}>
              <Message {...message}/>
            </li>
          )}
        </ul>
        <div ref={messageEndRef}></div>
      </main>
      <Form/>      
    </div>
  );
}
 
export default Channel