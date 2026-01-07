import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
