import { useState } from 'react'
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './zucca-theme.css'
import './App.css'
import Create from './Components/Create/Create';
const URL = "http://localhost:5173/"
axios.defaults.baseURL = URL;


function App() {

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

export default App;
