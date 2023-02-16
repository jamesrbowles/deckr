import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

//custom hooks
import CardProvider from './hooks/Context';
import AuthContextProvider from './hooks/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
