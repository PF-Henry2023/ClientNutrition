import { useState } from "react";
import { useNavigate } from "react-router";
import style from "./Create.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { validate, isButtonDisabled } from "./Validate";
import axios from "axios";
import GoogleLogin from "react-google-login";

export default function Create() {

  const [userInformation, setInfo] = useState({});
  const navigate = useNavigate();
  const [errors, setErrors] = useState(validate(userInformation)); 

  let user = 0;

  const changeHandler = (field, value) => {
    setInfo({
      ...userInformation,
      [field]: value,
    });

    setErrors(
      validate({
        ...userInformation,
        [field]: value,
      })
    );
  };
  

  const submitHandler = async (event) => {
    event.preventDefault();
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
  };

  const onSuccessLogin = async (response) => {
    const { tokenId } = response;
    const { data } = await axios.post(
      "http://localhost:3001/users/signup/oauth2.0",
      { tokenId: tokenId }
    );
    setUserId(response.profileObj.email);
    /* localStorage.setItem('token', JSON.stringify(token))
        const tokenReducer = token
        dispatch(setToken(tokenReducer))
        dispatch(userLoggedIn(true))
        navigate('/home') */
    console.log(data);
  };

  const onFailureLogin = (response) => {
    console.log(response);
  };

  return (
    <Container className={style.container}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <h2 className="mb-4">Completa tu perfil</h2>
          <GoogleLogin
            clientId="659206981480-dpv28b5to1u20p6oncccfrl2pkgmei5b.apps.googleusercontent.com"
            buttonText="Iniciar sesión con Google"
            onSuccess={onSuccessLogin}
            onFailure={onFailureLogin}
            cookiePolicy={"single_host_origin"}
            scope="https://www.googleapis.com/auth/calendar"
          />
          <Form onSubmit={submitHandler}>

            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre(s):</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre..."
                onChange={(event) => {
                  changeHandler("name", event.target.value);
                }}
                isInvalid={errors.name}
                isValid={userInformation.name && !errors.name}
              />
              <Form.Control.Feedback type="invalid">
                <div>El nombre debe tener al menos dos letras y no puede incluir números.</div>
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                <div>Se ve perfecto!</div>
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Apellidos:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido..."
                onChange={(event) => {
                  changeHandler("lastName", event.target.value);
                }}
                isInvalid={errors.lastName}
                isValid={userInformation.lastName && !errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                <div>El apellido debe tener al menos dos letras y no puede incluir números.</div>
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu E-mail..."
                onChange={(event) => {
                  changeHandler("email", event.target.value);
                }}
                isInvalid={errors.email}
                isValid={userInformation.email && !errors.email}
              />
              <Form.Control.Feedback type="invalid">
                Verifica el formato del e-mail.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                <div>Correo correcto</div>
              </Form.Control.Feedback>
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
                isValid={userInformation.password && !errors.password}
              />
              <Form.Control.Feedback type="invalid">
                La contraseña debe contener 6 caracteres o más, una mayúscula y un
                caracter especial.
              </Form.Control.Feedback>
              <Form.Control.Feedback type="valid">
                <div>Formato correcto</div>
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="dob">
              <Form.Label>Fecha de Nacimiento:</Form.Label>
              <Form.Control
                type="date"
                onChange={(event) => {
                  changeHandler("birthDate", event.target.value);
                }}
                isInvalid={errors.birthDate}
                isValid={userInformation.birthDate && !errors.birthDate}
              />

              <Form.Control.Feedback type="invalid">
                Verifica el formato de la fecha.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Número de teléfono:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Número de teléfono..."
                onChange={(event) => {
                  changeHandler("phone", event.target.value);
                }}
                isInvalid={errors.phone}
                isValid={userInformation.phone && !errors.phone}
  />
              <Form.Control.Feedback type="invalid">
                <div>El teléfono debe tener 10 dígitos</div>
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
                isValid={!errors.address && userInformation.address}
              />
              <Form.Control.Feedback type="invalid">
               <div>Ingrese un domicilio válido</div>
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
              <Form.Label>Género:</Form.Label>
              <Form.Select
                placeholder="Selecciona género..."
                onChange={(event) => {
                  changeHandler("gender", event.target.value);
                }}
                isInvalid={errors.gender}
                isValid={!errors.gender && userInformation.gender}
              >
                <option value={""}>Selecciona tu género:</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </Form.Select>
            </Form.Group>

            <Button className="my-2" variant="primary" type="submit" disabled={isButtonDisabled(errors, userInformation)}>
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
