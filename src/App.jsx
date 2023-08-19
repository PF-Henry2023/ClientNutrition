import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './Components/NavBar/NavBar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route path='/login'></Route>
        <Route path='/home'></Route>
        <Route path='/appointment'></Route>
        <Route path='/signup'></Route>
      </Routes>
    </div>
  )
}

export default App
