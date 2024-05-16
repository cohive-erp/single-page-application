import App from './app/App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
const root =
  ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GoogleOAuthProvider clientId=''>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider >,
)
