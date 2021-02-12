import { useEffect, useState, useRef } from 'react'
import SignOut from './SignOut'
import Message from './Message'
import Form from './Form'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()
const query = db.collection("messages").orderBy("createdAt").limit(100) 

const Channel = ({ user }) => {
  const [messages, setMessages] = useState([])

  const messageEndRef = useRef(null)
  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView(false)
  }

  useEffect(() => {
    const unsubscribe = query.onSnapshot(querySnapshot => {
      const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      setMessages(data)
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="h-screen grid auto-rows-auto">
      <SignOut/>
      <main className="p-4 min-h-sm lg:min-h-lg overflow-auto">
        <ul className="space-y-5 ">
          {messages.map(message => 
            <li key={message.id}>
              <Message {...message}/>
            </li>
          )}
        </ul>
        <div ref={messageEndRef}></div>
      </main>
      <Form user={user}/>      
    </div>
  );
}
 
export default Channel