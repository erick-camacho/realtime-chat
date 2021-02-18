import { createContext } from 'react'
import Head from 'next/head'
import { useAuth } from '../firebase/auth'
import SignIn from '../components/SignIn'
import Channel from '../components/Channel'

export const UserContext = createContext()

export default function Home() {
  const { initializing, user } = useAuth()

  if (initializing) return null
  return (
    <UserContext.Provider value={user}>
      <Head>
        <title>Realtime Chat</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {user ? (
        <Channel/>
      ) : (
        <SignIn/>
      )}
    </UserContext.Provider>
  )
}
