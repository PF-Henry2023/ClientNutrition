import jwtDecode from "jwt-decode";

function handleUserLogin(token) {
    const decoded = jwtDecode(token);
    
    const user = {
        id: decoded.id,
        name: decoded.name,
        lastName: decoded.lastName,
        image: decoded.image,
        role: decoded.role ? decoded.role : "nutritionist"
    }

    window.localStorage.setItem("token", token);
    window.localStorage.setItem("user", JSON.stringify(user));
    window.localStorage.setItem("id", user.id);
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

function coordinator() {
    const role = getUserRole()

    if (role == "admin") {
        return {
            profile: "/adminprofile"
        }
    } else if (role == "user") {
        return {
            profile: "/appointments"
        }
    } else { // we asume nutritionist
        return {
            profile: "/nutritionistprofile"
        }
    }
}

export {
    handleUserLogin,
    handleUserLogout,
    isUserLoggedIn,
    getLoggedInUser,
    coordinator
}