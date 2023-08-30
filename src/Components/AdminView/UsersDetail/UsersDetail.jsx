import React from 'react'
import { useParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import { dataSet } from './dataSet';
import style from './UsersDetail.module.css'
import Container from 'react-bootstrap/Container';

export default function UsersDetail() {

  const users = [
      {
        id: 1,
        name: "Sofía",
        lastName: "Rodríguez",
        phoneNumber: "123-456-7890",
        review: 4,
        email: "sofia@example.com"
      },
      {
        id: 2,
        name: "Mateo",
        lastName: "García",
        phoneNumber: "987-654-3210",
        review: 5,
        email: "mateo@example.com"
      },
      {
        id: 3,
        name: "Valentina",
        lastName: "Martínez",
        phoneNumber: "555-123-4567",
        review: 3,
        email: "valentina@example.com"
      },
      {
        id: 4,
        name: "Sebastián",
        lastName: "Hernández",
        phoneNumber: "789-456-1230",
        review: 4,
        email: "sebastian@example.com"
      },
      {
        id: 5,
        name: "Isabella",
        lastName: "López",
        phoneNumber: "111-222-3333",
        review: 5,
        email: "isabella@example.com"
      },
      {
        id: 6,
        name: "Matías",
        lastName: "Díaz",
        phoneNumber: "444-555-6666",
        review: 4,
        email: "matias@example.com"
      },
      {
        id: 7,
        name: "Luciana",
        lastName: "Pérez",
        phoneNumber: "777-888-9999",
        review: 3,
        email: "luciana@example.com"
      },
      {
        id: 8,
        name: "Nicolás",
        lastName: "Ramírez",
        phoneNumber: "000-111-2222",
        review: 5,
        email: "nicolas@example.com"
      },
      {
        id: 9,
        name: "Valentino",
        lastName: "Gómez",
        phoneNumber: "999-888-7777",
        review: 4,
        email: "valentino@example.com"
      },
      {
        id: 10,
        name: "Camila",
        lastName: "Fernández",
        phoneNumber: "123-456-7890",
        review: 3,
        email: "camila@example.com"
      }
    ];

  const { id } = useParams();
  
  return (
    <Container className={style.main}>
          <Table striped bordered hover responsive className="shadow-sm text-center">
    <thead>
      <tr>

        <th key={1}>Nombre Paciente</th>
        <th key={2}>Apellidos</th>
        <th key={3}>Email</th>
            <th key={4}>Número de teléfono</th>
            <th key={5}>Review</th>
      </tr>
    </thead>
    <tbody>
          <tr key={users[id - 11].id}>
            <td className={style.name}>{users[id - 11].name}</td>
            <td className={style.name}>{users[id - 11].lastName}</td>
            <td>{users[id - 11].email}</td>
            <td>{users[id - 11].phoneNumber}</td>
            <td>{users[id - 11].review}</td>
          </tr>
          </tbody>
          </Table>
          
          <Table striped bordered hover responsive className="shadow-sm text-center">
          <thead>
      <tr>

        <th key={2}>Fecha de Cita</th>
        <th key={3}>Cita Completada</th>
        <th key={4}>Status</th>
      </tr>
    </thead>
    <tbody>
              {dataSet[0].map((e) => {
                  return (
                    <tr key={e.id}>
                    <td className={style.name}>{e.appointmentDate}</td>
                    <td>{e.appointmentCompleted[0].toUpperCase() + e.appointmentCompleted.slice(1)}</td>
                    <td>{e.status[0].toUpperCase() + e.status.slice(1)}</td>
                  </tr>
              )
          })}
    </tbody>
          </Table>
    </Container>
  )
}
