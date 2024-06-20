import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Lead from './lead/Lead'

export default function App() {
  return (
    <>

        <ul>
        <li>
                <Link to='/' >Login</Link>
            </li>
            <li>
                <Link to='/lead' >Lead</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/lead' element={<Lead />}></Route>
        </Routes>
    </>
  )
}