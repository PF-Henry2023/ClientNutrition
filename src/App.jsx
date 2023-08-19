import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Create from './Components/Create/Create';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/login'></Route>
        <Route path='/home'></Route>
        <Route path='/appointment'></Route>
        <Route path='/signup' element={<Create/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
