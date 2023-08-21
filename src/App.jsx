import { useState } from 'react'
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './zucca-theme.css'
import './App.css'
//<<<<<<< feature/home-component
import Home from './Components/Home/Home';
//=======
import Create from './Components/Create/Create';
const URL = "http://localhost:5173/"
axios.defaults.baseURL = URL;
import Login from './Components/Login/Login';


//>>>>>>> Development

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/appointment'></Route>
        <Route path='/signup' element={<Create/>} ></Route>
      </Routes>
    </div>
  )
}

export default App;
