import axios from "axios";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./zucca-theme.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Calendar from "./Components/Calendar/Calendar";
import Create from "./Components/Create/Create";
import Login from "./Components/Login/Login";
import UserProfile from "./Components/UserProfile/UserProfile";
import NavBar from "./Components/NavBar/NavBar";
import NutritionistProfile from "./Components/NutritionistProfile/NutritionistProfile";
import AdminView from "./Components/AdminView/AdminView";
import NutriDetail from "./Components/AdminView/NutriDetail/NutriDetail";
import UsersDetail from "./Components/AdminView/UsersDetail/UsersDetail";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import NutriForm from "./Components/AdminView/NutriForm/NutriForm";
import Success from "./Components/Payment/Success";
import Cancel from "./Components/Payment/Cancel";
import Protected from "./Components/Protected/Protected";


const URL = "http://localhost:5173/";
axios.defaults.baseURL = URL;

function App() {

  const horariosTrabajo = {
    1: [[3, 7], [4,8]],          
    2: [[8, 12], [14, 18]], 
    3: [[10, 15]],         
    4: [[8, 12], [13, 16]], 
    5: [[9, 14]],                   
  };

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/appointments" element={
          <Protected roles={["user"]}>
            <UserProfile />
          </Protected>
        } />
        <Route path="/signup" element={<Create />}></Route>
        <Route path="/adminprofile" element={
          <Protected roles={["admin"]}>
            <AdminView />
          </Protected>
        } />
        <Route path="/adminprofile/nutriform" element={<NutriForm />}></Route>
        <Route
          path="/adminprofile/detail/:id"
          element={<NutriDetail />}
        ></Route>
        <Route
          path="/adminprofile/detail/users/:id"
          element={<UsersDetail />}
        ></Route>
        <Route path="/appointments/new" element={<Calendar horarios={horariosTrabajo}/>}></Route>
        <Route
          path="/nutritionistprofile"
          element={<NutritionistProfile />}
        ></Route>
        <Route
          path="/termsandconditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/cancel" element={<Cancel />}></Route>
        {/* ruta para probar el cloudinary:
        <Route path="/cloudinary" element={<Cloudinary />}></Route> */}

      </Routes>
    </div>
  );
}

export default App;
