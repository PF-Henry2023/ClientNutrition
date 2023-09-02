import jwtDecode from "jwt-decode";

function handleUserLogin(token) {
    const decoded = jwtDecode(token);

    const user = {
        name: decoded.name,
        image: decoded.image,
        role: decoded.role
    }

    window.localStorage.setItem("token", token);
    window.localStorage.setItem("user", JSON.stringify(user));
}

function handleUserLogout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
}

function isUserLoggedIn() {
    return window.localStorage.getItem("token") != null
}

function getLoggedInUser() {
    return JSON.parse(window.localStorage.getItem("user"))
}

function getUserRole() {
    const user = getLoggedInUser()
    if (user == null) {
        return "unauthenticated"
    }
    return user.role
}

export {
    handleUserLogin,
    handleUserLogout,
    isUserLoggedIn,
    getLoggedInUser,
    getUserRole
}