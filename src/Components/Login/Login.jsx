import { useState } from 'react';
import style from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import jwtDecode from 'jwt-decode';
import axios from "axios";

export default function Login() {
    const [user, setUser] = useState({
      email:"",
      password:""
    });
    const [authenticated, setAuthenticated] = useState(false);
    const [decodedToken, setDecodedToken] = useState(null); // State para almacenar el token decodificado
 


  const changeHandler = (field, value) => {
    setUser({
      ...user,
      [field]: value,
    });
  }   
 

  const userLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/users/login', user);
        const data = response.data;

        // Verificar el token aquí
        const token = data.token;
        const decoded = jwtDecode(token); // Decodificar el token
        setDecodedToken(decoded); // Guardar el token decodificado en el estado

        setAuthenticated(true);

        alert('Inicio de sesión exitoso');
        console.log(data); // Aquí debería mostrar el token
    } catch (error) {
        console.log(error.message);
        alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        setDecodedToken(null); // Limpiar el token decodificado en caso de inicio de sesión fallido
    }
};  

   
  

  return (
    <Container className={style.container}>

{authenticated && decodedToken ? (
                <div>
                    <h3>Token Decodificado:</h3>
                    <p>ID: {decodedToken.id}</p>
                    <p>Nombre: {decodedToken.name}</p>
                    <p>Apellido: {decodedToken.lastName}</p>
                    <p>Fecha de Nacimiento: {decodedToken.birthDate}</p>
                    {/* Mostrar otras propiedades del token según sea necesario */}
                </div>
            ) : null}

      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h2 className="mb-4">Ingresa usuario y contraseña</h2>
          <Form >
            <Form.Group className="mb-3" controlId="user">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario"
                onChange={(event) => {
                  changeHandler("email", event.target.value);
                }}
               
              />
              <Form.Control.Feedback type="invalid">
               
              </Form.Control.Feedback>
              {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
              <div className="valid-feedback">Looks good!</div>
            </Form.Group>           

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña..."
                onChange={(event) => {
                  changeHandler("password", event.target.value);
                }}
                
              />
              <Form.Control.Feedback type="invalid">
                Contraseña debe contener 6 caracteres o mas, una mayuscula y un
                caracter especial.
              </Form.Control.Feedback>
            </Form.Group> 
            <div className="d-flex justify-content-end">  

             
                <Button className="my-2" variant="primary" type="submit" onClick={userLogin}>
                    INGRESAR
                </Button>
               
            </div>            
            <div className="d-flex justify-content-end">
                <Button className="my-2" variant="primary" type="submit" >
                    INGRESA CON GOOGLE
                </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

/* const decoded = jwt.verify(token, secretKey, { algorithms: ['RS256'] }) */