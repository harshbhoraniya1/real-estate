import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Login from './Login'
// import Lead from './lead/Lead'
// import Contact from './contact/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Layout from './Layout'
import Lead from './lead/Lead'
import Contact from './contact/Contact'
import Meeting from './meeting/Meeting'
import Dashboard from './home/Dashboard'
import RequireAuth from './private/RequireAuth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Layout/>,
    children: [
      { path: '', element: <RequireAuth><Dashboard /></RequireAuth> },
      { path: '/dashboard/lead', element: <RequireAuth><Lead /></RequireAuth> },
      { path: '/dashboard/contact', element: <RequireAuth><Contact /></RequireAuth>},
      { path: '/dashboard/meeting', element: <RequireAuth> <Meeting /></RequireAuth> },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
    
  </React.StrictMode>,
)