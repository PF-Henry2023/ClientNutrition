import { useState } from "react";
import style from "./Create.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Create() {
  const [userInformation, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
    phone: "",
    image: "",
    address: "",
    gender: "",
  });

  const [errors, setErrors] = useState({
    initialValue: 0,
  });

  const changeHandler = (field, value) => {
    setInfo({
      ...userInformation,
      [field]: value,
    });
  };

  return (
    console.log(userInformation),
    (
      <Container className={style.container}>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12}>
            <h2 className="mb-4">Completa tu perfil:</h2>
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre(s):</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu nombre..."
                  onChange={(event) => {
                    changeHandler("name", event.target.value);
                  }}
                />
                {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
                <div className="valid-feedback">Looks good!</div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Apellidos:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tus Apellidos..."
                  onChange={(event) => {
                    changeHandler("lastName", event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu Email..."
                  onChange={(event) => {
                    changeHandler("email", event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingresa tu contraseña..."
                  onChange={(event) => {
                    changeHandler("password", event.target.value);
                  }}
                  isInvalid={false}
                />
                <Form.Control.Feedback type="invalid">
                  Contraseña debe contener 6 caracteres o mas, una mayuscula y
                  un caracter especial
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="dob">
                <Form.Label>Fecha de Nacimiento:</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(event) => {
                    changeHandler("birthDate", event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Numero de telefono:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Solo 10 digitos..."
                  onChange={(event) => {
                    changeHandler("phone", event.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Solo debes ingresar 10 digitos
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Domicilio:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu domicilio..."
                  onChange={(event) => {
                    changeHandler("address", event.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Genero:</Form.Label>
                <Form.Select
                  placeholder="Selecciona genero..."
                  onChange={(event) => {
                    changeHandler("gender", event.target.value);
                  }}
                >
                  <option>Selecciona tu genero:</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </Form.Select>
              </Form.Group>

              <Button className="my-2" variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  );
}
