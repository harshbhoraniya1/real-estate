import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Login from './Login'
// import Lead from './lead/Lead'
// import Contact from './contact/Contact'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
    
  </React.StrictMode>,
)