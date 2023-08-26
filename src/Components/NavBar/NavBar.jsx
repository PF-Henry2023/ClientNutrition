import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { Button, Image } from 'react-bootstrap';
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function NavBar() {
const {pathname} = useLocation()

  return (
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <Image className={styles.logo} src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Cómo trabajamos?</Nav.Link>
            <Nav.Link href="#link">Testimonios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {pathname === '/' && <Link to="/login">
          <Button variant="primary">Iniciar sesión</Button>
        </Link>}
        {pathname === '/' && <Link to="/signup" style={{ marginLeft: "10px" }}>
          <Button variant="primary">Registrarse</Button>
        </Link>}
        
      </Container>
    </Navbar>
  );
}

export default NavBar;


//CÓDIGO QUE RENDERIZA FOTO Y NOMBRE DE PERFIL SI EL USUARIO
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from '../../assets/logo.png';
// import { Button, Image } from 'react-bootstrap';
// import styles from './NavBar.module.css'
// import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
// import { useState } from 'react';

// function NavBar() {
//   const { pathname } = useLocation()

//   const [ user, setUser ] = useState({ "name": "Cintia", "image": "https://media.licdn.com/dms/image/D4D03AQFJhFNlA4kb-Q/profile-displayphoto-shrink_800_800/0/1683268356769?e=1698278400&v=beta&t=8vSE-OutUfgPj81n_9e7UMiBITrgVJC2MTYLlJsiBDs" }) // TODO: incializar el modelo con el del local storage

//   function handleLogout() {
//     // TODO: código para cerrar sesión
//   }

//   function drawNavbar() {
//     return user ? drawLoggedInNavbar() : drawDefaultNavbar()
//   }

//   function drawDefaultNavbar() {
//     const navbar = []

//     if (pathname == '/') {
//       navbar.push(
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Cómo trabajamos?</Nav.Link>
//             <Nav.Link href="#link">Testimonios</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       )
//     }

//     if (pathname != '/login' && pathname != '/signup') {
//       navbar.push(
//         <Nav>
//           <Link to="/login">
//             <Button variant="outline-secondary">Iniciar sesión</Button>
//           </Link>
//           <Link to="/signup" style={{ marginLeft: "10px" }}>
//             <Button variant="primary">Registrarse</Button>
//           </Link>
//         </Nav>
//       )
//     }

//     return navbar
//   }

//   function drawLoggedInNavbar() {
//     return (
//       <NavDropdown title={
//         <>
//             <Image className={styles.profilePicture} src={user.image} />
//             {user.name}
//         </>
//       }
//       >
//         <NavDropdown.Item href="/userprofile">Perfil</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item onClick={handleLogout}>Cerrar sesión</NavDropdown.Item>
//       </NavDropdown>
//     )
//   }
 
//   return (
//     <Navbar fixed="top" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="/">
//             <Image className={styles.logo} src={logo} />
//         </Navbar.Brand>

//         { drawNavbar() }
        
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;