import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ZuccaLogoNav from "../../assets/ZuccaLogoNav.png";
import { Button, Image } from "react-bootstrap";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './../../redux/actions/actions'
import defaultUserIcon from '../../assets/default-user-icon-profile.png'

function NavBar() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user)

  function drawNavbar() {
    return user ? drawLoggedInNavbar() : drawDefaultNavbar()
  }

  function handleLogout() {
    dispatch(logout())
    navigate("/")
  }

  function drawDefaultNavbar() {
    const navbar = [];

    if (pathname == "/") {
      navbar.push(
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#home">¿Por qué Zucca?</Nav.Link>
            <Nav.Link href="#link">Quienes nos eligen</Nav.Link>
            <Nav.Link href="#home">¿Cómo trabajamos?</Nav.Link>
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
              src={defaultUserIcon}
            />
            Hola, {user.name}!
          </>
        }
      >
        <NavDropdown.Item
          href={
            user.role === "admin"
              ? "/adminprofile"
              : user.role === "user"
              ? "/appointments"
              : "/nutritionistprofile"
          }
        >
          Mi Perfil
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => handleLogout()}>
          Cerrar sesión
        </NavDropdown.Item>
      </NavDropdown>
    );
  }

  return (
      <Navbar fixed="top" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <Image className={styles.logo} src={ZuccaLogoNav} />
          </Navbar.Brand>
          {drawNavbar()}
        </Container>
      </Navbar>
  );
}

export default NavBar;
