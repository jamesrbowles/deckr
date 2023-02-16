import React from 'react';
import { useUserContext } from '../../hooks/AuthContext';

const Account = () => {
  const { user, logout } = useUserContext();

  return (
    <div>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <button>Logout</button>
    </div>
  );
};

export default Account;
