import axios from "axios";
import { handleUserLogin, getLoggedInUser, handleUserLogout } from './../../utils/UserUtils'

export const GET_USERS = "GET_USERS";
export const GET_APPOINTMENTS = "GET_APPOINTMENTS";
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

export function getNutritionists() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001");

    return dispatch({
      type: "GET_NUTRITIONISTS",
      payload: json.data,
    });
  };
}

export function getNutritionistsName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/nutritionists?name=" + name
      );

      console.log(json.data);

      return dispatch({
        type: "GET_NUTRITIONISTS_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async (dispatch) => {
    var json = await axios.get("http://localhost:3001/nutritionists/" + id);

    return dispatch({
      type: "GET_DETAIL",
      payload: json.data,
    });
  };
}

export const addUser = (dataAct) => {
  return async function (dispatch) {
    return axios.post(`http://localhost:3001/user`, dataAct).then((res) => {
      dispatch({ type: "POST_USER", payload: res.data });
    });
  };
};

export function getUsers() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/users/allUsers");

    return dispatch({
      type: "GET_USERS",
      payload: json.data,
    });
  };
}

export function getUsersId(id) {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/users/" + id);

    dispatch({
      type: "GET_USERS_DETAIL",
      payload: json.data,
    });
  };
}

export const getAppointments = () => {
  return async function (dispatch) {
    const response = await axios.get(
      "http://localhost:3001/calendarGoogle/allEvents/calendar"
    );
    return dispatch({
      type: "GET_APPOINTMENTS",
      payload: response.data,
    });
  };
};

export const login = (credentials, errorHandler) => {
  return async function(dispatch) {
    try {
      const response =
      credentials.isNutritionist === true
        ? await axios.post("http://localhost:3001/nutritionists/login", credentials) //colocar ruta de logueo nutricionista.
        : await axios.post("http://localhost:3001/users/login", credentials);
  
      handleUserLogin(response.data.token)
  
      return dispatch({
        type: "LOGIN",
        payload: getLoggedInUser()
      })
    } catch(error) {
      errorHandler(error)
    }
  }
}

export const logout = () => {
  handleUserLogout()
  return {
    type: "LOGOUT"
  }
}

export const signup = (userInformation, errorHandler) => {
  return async function(dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/users/signup",
        userInformation
      );
  
      handleUserLogin(response.data.token)
  
      return dispatch({
        type: "LOGIN",
        payload: getLoggedInUser()
      })
    } catch(error) {
      errorHandler(error)
    }
  }
}