import React from 'react';

const Welcome = ({ user, onSignOut }) => {
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
        <a href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

export default Welcome;