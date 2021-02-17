import { createContext } from 'react'
import { useAuth } from '../firebase/auth'
import SignIn from '../components/SignIn'
import Channel from '../components/Channel'

export const UserContext = createContext()

export default function Home() {
  const { initializing, user } = useAuth()

  if (initializing) return null
  return (
    <UserContext.Provider value={user}>
      {user ? (
        <Channel/>
      ) : (
        <SignIn/>
      )}
    </UserContext.Provider>
  )
}
