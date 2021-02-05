import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn, getUser, signOut } from '../firebase/auth'
import { useEffect } from 'react'

export default function Login() {
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to MyChat</h1>
        <h3 className={styles.subtitle}>An easy way to send text messages</h3>
      </header>
      <Image 
          src='/chat_illustration.svg'
          width={1200} 
          height={1000}
          className={styles.illustration}
        />
      <button onClick={signIn} className={styles.button}>Sign up with Google</button>
      <button onClick={signOut} className={styles.button}>Sign out</button>
    </div>
  )
}