import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { HashRouter } from 'react-router-dom';

//custom hooks
import CardProvider from './hooks/Context';
import AuthContextProvider from './hooks/AuthContext';
import TempCardProvider from './hooks/TempContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthContextProvider>
        <TempCardProvider>
          <CardProvider>
            <App />
          </CardProvider>
        </TempCardProvider>
      </AuthContextProvider>
    </HashRouter>
  </React.StrictMode>
);
