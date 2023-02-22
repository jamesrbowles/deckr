import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="#/deckr" />;
  }

  return children;
};

export default ProtectedRoute;
