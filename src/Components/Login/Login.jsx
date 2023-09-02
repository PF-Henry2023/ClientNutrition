import { useState, useEffect } from "react";
import style from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { login } from './../../redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.user)

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    isNutritionist: false,
  });

  /*
  const [url, setUrl] = useState("");

  useEffect(() => {
    const urlRed = async () => {
      const { data } = await axios.get(
        "http://localhost:3001/calendarGoogle/auth"
      );
      setUrl(data.url);
    };
    urlRed();
  }, []);*/

  useEffect(() => {
    if (user == null) {
      return
    }

    if (user.role === "admin") {
        navigate("/adminprofile")
    } else if (user.role == "user") {
        navigate("/appointments")
    } else {
        navigate("/nutritionistprofile")
    }
  }, [user])

  const changeHandler = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value,
    });
  };

  const userLogin = async (event) => {
    event.preventDefault();
    dispatch(login(credentials))
  }

  const googleLogin = () => {
    window.open(url, "_blank");
  };

  return (
      <Container className={style.container}>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12}>
            <h2 className="mb-4">Ingresa correo electrónico y contraseña</h2>
            <Form>
              <Form.Group className="mb-3" controlId="user">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu correo electrónico"
                  onChange={(event) => {
                    changeHandler("email", event.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
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
                  La contraseña debe contener 6 caracteres o más, una mayúscula
                  y un caracter especial.
                </Form.Control.Feedback>
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Button
                  className="my-2"
                  variant="primary"
                  type="submit"
                  onClick={userLogin}
                >
                  INGRESAR
                </Button>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  className="my-2"
                  variant="primary"
                  type="submit"
                  onClick={googleLogin}
                >
                  INGRESA CON GOOGLE
                </Button>
              </div>

              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Eres nutricionista?"
                onChange={() => changeHandler("nutri", !credentials.isNutritionist)}
              />
            </Form>
          </Col>
        </Row>
      </Container>
  );
}
