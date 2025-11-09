import React, {useContext} from 'react';
import {userContext} from '../../UserContext.js'

function UserDetails() {
    const user = useContext(userContext)
  return (
    <div>
      <p>Name: {user}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;