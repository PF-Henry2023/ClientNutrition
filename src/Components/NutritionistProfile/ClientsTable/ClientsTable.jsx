import Table from "react-bootstrap/Table";
import style from "./ClientsTable.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/actions/actions";
import Cloudinary from "../../Cloudinary/Cloudinary";

function ClientsTable() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length < 1) dispatch(getUsers());
  }, [dispatch, users]);

  console.log(users);

  return (
    <Table striped bordered hover responsive className="shadow-sm text-center">
      <thead>
        <tr>
          <th key={1}>Nombre</th>
          <th key={2}>Apellidos</th>
          <th key={3}>Fecha de nacimiento</th>
          <th key={4}>E-mail</th>
          <th key={5}>Cargar Archivo</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.birthDate}</td>
              <td>{user.email}</td>
              <Cloudinary></Cloudinary>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ClientsTable;
