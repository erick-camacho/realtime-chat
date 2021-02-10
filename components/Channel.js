import { useEffect, useState } from 'react'
import Message from './Message'
import Form from './Form'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = firebase.firestore()
const query = db.collection("messages").orderBy("createdAt").limit(100) 

const Channel = ({ user }) => {
  const [messages, setMessages] = useState([])

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
  console.log(messages)

  return (
    <main>
      <ul>
        {messages.map(message => 
          <li key={message.id}>
            <Message {...message}/>
          </li>
        )}
      </ul>
      <Form user={user}/>      
    </main>
  );
}
 
export default Channel