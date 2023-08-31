import NutriSchedule from './NutriSchedule/NutriSchedule'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { validate, isButtonDisabled } from "../../Create/Validate";
import style from './NutriForm.module.css'

const NutriForm = () => {
    const [nutriInfo, setInfo] = useState([])
    const [errors, setErrors] = useState(validate(nutriInfo))

    const navigate = useNavigate()
    
    const changeHandler = (field, value) => {

        
        setInfo({
          ...nutriInfo,
          [field]: value,
        });
    
        setErrors(
          validate({
            ...nutriInfo,
            [field]: value,
          })
        );
      };

      const submitHandler = async (event) => {
        event.preventDefault();
            try {
              
              const response = await axios.post(
                "http://localhost:3001/nutritionists/create",
                combinedData
              );
                

              const data = response.data;
              console.log(data);
              alert("Nutritionist successfully created");
              console.log(data); // Aquí debería mostrar el token
    
              navigate('/adminprofile')
            } catch (error) {
              console.log(error.message);
            }
      };

    return (
        <Container className={style.container}>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12}>
            <h2 className="mb-4">Crear Nutricionista</h2>
            {/* <GoogleLogin
              clientId="659206981480-dpv28b5to1u20p6oncccfrl2pkgmei5b.apps.googleusercontent.com"
              buttonText="Iniciar sesión con Google"
              onSuccess={onSuccessLogin}
              onFailure={onFailureLogin}
              cookiePolicy={"single_host_origin"}
              scope="https://www.googleapis.com/auth/calendar"
            /> */}
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
                  isValid={nutriInfo.name && !errors.name}
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
                  isValid={nutriInfo.lastName && !errors.lastName}
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
                  isValid={nutriInfo.email && !errors.email}
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
                  isValid={nutriInfo.password && !errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  La contraseña debe contener 6 caracteres o más, una mayúscula y un
                  caracter especial.
                </Form.Control.Feedback>
                <Form.Control.Feedback type="valid">
                  <div>Formato correcto</div>
                </Form.Control.Feedback>
              </Form.Group>
              <NutriSchedule />
              <Button className="my-2" variant="primary" type="submit"  disabled={isButtonDisabled(errors, nutriInfo)}>
              Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
}

export default NutriForm