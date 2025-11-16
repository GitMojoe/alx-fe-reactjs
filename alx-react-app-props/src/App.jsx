import ProfilePage from './components/ProfilePage.jsx'
import UserContext from './components/UserContext.js'

function App() {
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };

  return (
    <>
         <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>


    </>
  )
}

export default App
