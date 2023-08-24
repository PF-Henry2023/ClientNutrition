import axios from "axios";
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './zucca-theme.css';
import './App.css';
import Home from './Components/Home/Home';
import Calendar from "./Components/Calendar/Calendar";
import Create from './Components/Create/Create';
import Login from './Components/Login/Login';
import UserProfile from './Components/UserProfile/UserProfile';
import NavBar from './Components/NavBar/NavBar';
import AdminView from "./Components/AdminView/AdminView";

const URL = "http://localhost:5173/"
axios.defaults.baseURL = URL;

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>        
        <Route path='/appointment'></Route>
        <Route path='/signup' element={<AdminView/>} ></Route>
        <Route path='/userprofile' element={<UserProfile/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
