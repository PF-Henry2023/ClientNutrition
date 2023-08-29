// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from '../../assets/logo.png';
// import { Button, Image } from 'react-bootstrap';
// import styles from './NavBar.module.css'
// import { Link } from 'react-router-dom'
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// function NavBar() {
//   const [logOut, setLogOut] = useState(true)
//   const navigate = useNavigate();
//   const { pathname } = useLocation()

//   const tokenAccess = () => {
//     return [JSON.parse(window.localStorage.getItem('token')), JSON.parse(window.localStorage.getItem('access'))]
//   }

//   const LogOut = () => {
//     window.localStorage.setItem('access', JSON.stringify(false))
//     setLogOut(!logOut)
//   }

//   useEffect(() => {
//     if (logOut === false) navigate('/')
//   }, [logOut])

//   return (
//     <Navbar fixed="top" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="/">
//             <Image className={styles.logo} src={logo} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Cómo trabajamos?</Nav.Link>
//             <Nav.Link href="#link">Testimonios</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         {pathname === '/' && tokenAccess()[1] !== true && <Link to="/login">
//           <Button variant="primary">Iniciar sesión</Button>
//         </Link>}
//         {pathname === '/' && tokenAccess()[1] !== true && <Link to="/signup" style={{ marginLeft: "10px" }}>
//           <Button variant="primary">Registrarse</Button>
//         </Link>}
//         {pathname === '/' && tokenAccess()[1] === true && <Link to="/adminprofile" style={{ marginLeft: "10px" }}>
//           <Button variant="primary">Mi Perfil</Button>
//         </Link>}
//         {tokenAccess()[1] === true &&
//           <Button onClick={() => LogOut() }  style={{ marginLeft: "10px" }} variant="primary">Log Out</Button> }

//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

//CÓDIGO QUE RENDERIZA FOTO Y NOMBRE DE PERFIL SI EL USUARIO
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.png";
import { Button, Image } from "react-bootstrap";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const { pathname } = useLocation();

  const [user, setUser] = useState(); // TODO: incializar el modelo con el del local storage
  const [logOut, setLogOut] = useState(true);

  const navigate = useNavigate();

  function handleLogout() {
    window.localStorage.setItem("access", JSON.stringify(false));
    window.localStorage.setItem("token", JSON.stringify(false));
    setLogOut(!logOut);
    setUser({});
    navigate("/");
  }

  const tokenAccess = () => {
    return [
      JSON.parse(window.localStorage.getItem("token")),
      JSON.parse(window.localStorage.getItem("access")),
    ];
  };

  useEffect(() => {
    if (tokenAccess()[0]?.name) setUser({ ...tokenAccess()[0] });
    if (logOut === false) navigate("/");
  }, []);

  function drawNavbar() {
    return tokenAccess()[0] ? drawLoggedInNavbar() : drawDefaultNavbar();
  }

  function drawDefaultNavbar() {
    const navbar = [];

    if (pathname == "/") {
      navbar.push(
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Cómo trabajamos?</Nav.Link>
            <Nav.Link href="#link">Testimonios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      );
    }

    if (pathname != "/login" && pathname != "/signup") {
      navbar.push(
        <Nav>
          <Link to="/login">
            <Button variant="outline-secondary">Iniciar sesión</Button>
          </Link>
          <Link to="/signup" style={{ marginLeft: "10px" }}>
            <Button variant="primary">Registrarse</Button>
          </Link>
        </Nav>
      );
    }

    return navbar;
  }

  function drawLoggedInNavbar() {
    return (
      <NavDropdown
        title={
          <>
            <Image
              className={styles.profilePicture}
              src={user?.image || null}
            />
            {tokenAccess()[0].name}
          </>
        }
      >
        <NavDropdown.Item
          href={
            tokenAccess()[0].role === "admin"
              ? "/adminprofile"
              : tokenAccess()[0].role === "user"
              ? "/appointments"
              : "/nutriprofile"
          }
        >
          Perfil
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => handleLogout()}>
          Cerrar sesión
        </NavDropdown.Item>
      </NavDropdown>
    );
  }

  return (
    console.log(tokenAccess()[0]),
    (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <Image className={styles.logo} src={logo} />
          </Navbar.Brand>

          {drawNavbar()}
        </Container>
      </Navbar>
    )
  );
}

export default NavBar;
