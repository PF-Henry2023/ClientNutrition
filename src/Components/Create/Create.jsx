import { useState } from "react";
import { useNavigate } from "react-router";
import style from "./Create.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Validate } from "./Validate";
import axios from "axios";

export default function Create() {
  const [userInformation, setInfo] = useState({
    name: "",
    lastName: "",
    email: "",
    birthDate: new Date(),
    password: "",
    phone: "",
    image: "",
    address: "",
    gender: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    errors: "zero",
  });

  let user = 0;

  const changeHandler = (field, value) => {
    setInfo({
      ...userInformation,
      [field]: value,
    });

    setErrors(
      Validate({
        ...userInformation,
        [field]: value,
      })
    );
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      !errors.name1 &&
      !errors.lastName1 &&
      !errors.email1 &&
      !errors.birthDate1 &&
      !errors.password1 &&
      !errors.phone1 &&
      !errors.errors
    ) {
      if (
        userInformation.name.length > 0 &&
        userInformation.lastName.length > 0 &&
        userInformation.email.length > 0 &&
        userInformation.birthDate.length > 0 &&
        userInformation.password.length > 0 &&
        userInformation.phone.length > 0 &&
        userInformation.address.length > 0 &&
        userInformation.gender.length > 0
      ) {
        try {
          console.log(userInformation);
          const response = await axios.post(
            "http://localhost:3001/users/signup",
            userInformation
          );

          const data = response.data;
          console.log(data);
          alert("User successfully created");
          console.log(data); // Aquí debería mostrar el token

          navigate('/login')
        } catch (error) {
          console.log(error.message);
        }
      } else {
        alert("Por favor, completa todos los campos.");
      }
    } else {
      alert("Por favor, completa todos los campos.");
    }
  };

  return (
    <Container className={style.container}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h2 className="mb-4">Completa tu perfil</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre(s):</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre..."
                onChange={(event) => {
                  changeHandler("name", event.target.value);
                }}
                isInvalid={errors.name1 && userInformation.name.length > 0}
                isValid={
                  !errors.name1 && userInformation.name.length > 0 && true
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.name1 && "El nombre no puede incluir numeros."}
              </Form.Control.Feedback>
              {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
              <div className="valid-feedback">Se ve perfecto!</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tus Apellidos..."
                onChange={(event) => {
                  changeHandler("lastName", event.target.value);
                }}
                isInvalid={
                  errors.lastName1 && userInformation.lastName.length > 0
                }
                isValid={
                  !errors.lastName1 &&
                  userInformation.lastName.length > 0 &&
                  true
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName && "Ingresa tus apellidos."}
                {errors.lastName1 && "Los apellidos no pueden incluir numeros."}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu Email..."
                onChange={(event) => {
                  changeHandler("email", event.target.value);
                }}
                isInvalid={errors.email1 && userInformation.email.length > 0}
                isValid={
                  !errors.email1 && userInformation.email.length > 0 && true
                }
              />
              <Form.Control.Feedback type="invalid">
                Verifica la información del email.
              </Form.Control.Feedback>
              <div className="valid-feedback">Correo correcto.</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña..."
                onChange={(event) => {
                  changeHandler("password", event.target.value);
                }}
                isInvalid={
                  errors.password1 && userInformation.password.length > 0
                }
                isValid={
                  !errors.password1 &&
                  userInformation.password.length > 0 &&
                  true
                }
              />
              <Form.Control.Feedback type="invalid">
                Contraseña debe contener 6 caracteres o mas, una mayuscula y un
                caracter especial.
              </Form.Control.Feedback>
              <div className="valid-feedback">Formato correcto.</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Fecha de Nacimiento:</Form.Label>
              <Form.Control
                type="date"
                onChange={(event) => {
                  changeHandler("birthDate", event.target.value);
                }}
                isInvalid={
                  errors.birthDate1 && userInformation.birthDate.length > 0
                }
                isValid={
                  !errors.birthDate1 &&
                  userInformation.birthDate.length > 0 &&
                  true
                }
              />

              <Form.Control.Feedback type="invalid">
                {errors.birthDate && "Selecciona una fecha."}
                {errors.birthDate1 && "Selecciona una fecha valida."}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Numero de telefono:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Numero de telefono..."
                onChange={(event) => {
                  changeHandler("phone", event.target.value);
                }}
                isInvalid={errors.phone1 && userInformation.phone.length > 0}
                isValid={
                  !errors.phone &&
                  !errors.phone1 &&
                  userInformation.phone !== "" &&
                  true
                }
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone1 && "Ingresa 10 digitos."}
                {errors.phone && "El campo telefono no puede estar vacio."}
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
                isInvalid={errors.address}
                isValid={
                  !errors.address && userInformation.address.length > 0 && true
                }
              />
              <Form.Control.Feedback type="invalid">
                Ingresa un domicilio.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Genero:</Form.Label>
              <Form.Select
                placeholder="Selecciona genero..."
                onChange={(event) => {
                  changeHandler("gender", event.target.value);
                }}
                isInvalid={errors.gender}
                isValid={
                  !errors.gender && userInformation.gender.length > 0 && true
                }
              >
                <option value={""}>Selecciona tu genero:</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                Selecciona uno.
              </Form.Control.Feedback>
            </Form.Group>

            <Button className="my-2" variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
