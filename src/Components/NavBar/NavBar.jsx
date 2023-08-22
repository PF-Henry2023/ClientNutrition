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