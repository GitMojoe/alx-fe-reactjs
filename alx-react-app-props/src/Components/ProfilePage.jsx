import UserInfo from './UserInfo';
import React, {useContext} from 'react';
import { userContext } from '../UserContext';
function ProfilePage() {
    const userData = useContext(userContext);
  
  return <UserInfo userData={userData} />;
}

export default ProfilePage;