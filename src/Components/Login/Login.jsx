import { useState } from "react";
import style from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Validate from "./Validate";

export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();
    
        const validationErrors = {};
        // Validar el campo de usuario
        if (!user) {
          validationErrors.user = true;
          validationErrors.user1 = true;
        }
        
        // Validar la contraseña
        if (!Validate.password(password)) {
          validationErrors.password = true;
        }
    
        // Si hay errores de validación, establecer el estado de errores
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
    
        // Aquí puedes realizar la lógica de autenticación, como enviar los datos al servidor
        // y verificar si las credenciales son válidas. 
        // Por ahora, simplemente imprimiré los datos en la consola.
    
        console.log("Usuario:", user);
        console.log("Contraseña:", password);
      };
    
      const changeHandler = (field, value) => {
        // Actualizar el estado correspondiente al campo que está cambiando
        if (field === "user") {
          setUser(value);
        } else if (field === "password") {
          setPassword(value);
        }
      };

  return (
    <Container className={style.container}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h2 className="mb-4">Ingresa usuario y contraseña</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="user">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario"
                onChange={(event) => {
                  changeHandler("user", event.target.value);
                }}
                isInvalid={errors.user || errors.user1}
              />
              <Form.Control.Feedback type="invalid">
                {errors.user && "Ingresa un usuario"}
                {errors.user1 && "El usuario no puede ser vacio"}
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
                isInvalid={errors.password}
              />
              <Form.Control.Feedback type="invalid">
                Contraseña debe contener 6 caracteres o mas, una mayuscula y un
                caracter especial.
              </Form.Control.Feedback>
            </Form.Group> 
            <div className="d-flex justify-content-end">    
                <Button className="my-2" variant="primary" type="submit">
                    INGRESAR
                </Button>
            </div>            
            <div className="d-flex justify-content-end">
                <Button className="my-2" variant="primary" type="submit">
                    INGRESA CON GOOGLE
                </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}