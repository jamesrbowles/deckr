import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import CardProvider from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);
