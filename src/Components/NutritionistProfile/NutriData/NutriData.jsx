import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./NutriData.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { getUsers } from "../../../redux/actions/actions";

const NutriData = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length < 1) dispatch(getUsers());
  }, [dispatch, users]);

  console.log(users[1]);

  return (
    <Container className={style.container}>
      <h2 className="mb-4">Modificar mi perfil:</h2>
      <label>Actualizar foto de perfil:</label>
      <input type="file" name="avatar" accept="image/png, image/jpeg" />

      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre(s):</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Apellido(s):</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Legajo:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Especialidad:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Contraseña:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Repetir Contraseña:</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre..." />
        </Form.Group>
        <Button className="my-2" variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </Container>
  );
};

export default NutriData;
