import { useState, useEffect, useRef } from 'react'
import app from './config'
import firebase from 'firebase/app'
import 'firebase/firestore'

const db = app.firestore()
const messagesRef = db.collection("messages")
const query = messagesRef.orderBy("createdAt").limit(100)

export const addMessage = (message, { uid, displayName, photoURL }) => {
  messagesRef.add({
    text: message,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    uid,
    displayName,
    photoURL,
  }).then(docRef => {
    console.log("Document written with ID: ", docRef.id)
  }).catch(error => {
    console.error("Error adding document: ", error)
  })
}

export const useMessages = () => {
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

  return { messages, messageEndRef }
}

export const deleteMessage = (id) => {
  messagesRef.doc(id).delete().then(() => {
    console.log("Message successfully deleted!")
  }).catch(error => {
    console.error("Error removing message: ", error)
  }) 
}
