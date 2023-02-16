import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/AuthContext';

const Account = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <p>User Email: {user && user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Account;
