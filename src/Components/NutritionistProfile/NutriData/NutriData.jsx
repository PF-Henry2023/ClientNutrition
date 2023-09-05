import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./NutriData.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { getDetail } from "../../../redux/actions/actions";
import Cloudinary from "../../Cloudinary/Cloudinary";

const NutriData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length < 1) dispatch(getDetail());
  }, [dispatch, users]);

  console.log(users[0]);

  return (
    <Container className={style.container}>
      <h2 className="mb-4">Modificar mi perfil:</h2>
      <label>Actualizar foto de perfil:</label>
      <Cloudinary></Cloudinary>
      
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre(s):</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Apellido(s):</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu apellido..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu contraseña..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Repetir Contraseña:</Form.Label>
          <Form.Control type="text" placeholder="Repetir contraseña..." />
        </Form.Group>
        <Button className="my-2" variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </Container>
  );
};

export default NutriData;
