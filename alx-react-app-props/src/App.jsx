import ProfilePage from './Components/ProfilePage.jsx'
import { userContext } from './Components/UserContext.js'

function App() {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <>
         <userContext.Provider value={userData}>
          <ProfilePage />
        </userContext.Provider>


    </>
  )
}

export default App
