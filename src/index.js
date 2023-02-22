import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

//custom hooks
import CardProvider from './hooks/Context';
import AuthContextProvider from './hooks/AuthContext';
import TempCardProvider from './hooks/TempContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TempCardProvider>
        <AuthContextProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </AuthContextProvider>
      </TempCardProvider>
    </BrowserRouter>
  </React.StrictMode>
);
