import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './route/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import UserProvider from './components/ContextUser/UserProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>,
)
