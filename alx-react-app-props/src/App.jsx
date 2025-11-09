import { useState} from 'react'
import {userContext} from './UserContext.js'

function App() {
  const [user, setUser] = useState('Mojoe')

  return (
    <>
         <userContext.Provider value={user}>
          <ProfilePage user={userData} />
        </userContext.Provider>


    </>
  )
}

export default App
