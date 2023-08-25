import React from 'react'
import { useParams } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import { dataSet } from './dataSet';
import style from './NutriDetail.module.css'
import Container from 'react-bootstrap/Container';

export default function NutriDetail() {
    const nutritionists = [
        {
          id: 1,
          firstName: "Alice",
          lastName: "Johnson",
          numberOfAppointments: 10,
          hireDate: "2022-01-15",
        },
        {
          id: 2,
          firstName: "Bob",
          lastName: "Smith",
          numberOfAppointments: 10,
          hireDate: "2021-09-10",
        },
        {
          id: 3,
          firstName: "Charlie",
          lastName: "Brown",
          numberOfAppointments: 10,
          hireDate: "2023-03-22",
        },
        {
          id: 4,
          firstName: "David",
          lastName: "Lee",
          numberOfAppointments: 10,
          hireDate: "2020-11-05",
        },
        {
          id: 5,
          firstName: "Ella",
          lastName: "Davis",
          numberOfAppointments: 10,
          hireDate: "2022-07-18",
        },
        {
          id: 6,
          firstName: "Frank",
          lastName: "Miller",
          numberOfAppointments: 10,
          hireDate: "2021-04-30",
        },
        {
          id: 7,
          firstName: "Grace",
          lastName: "Wilson",
          numberOfAppointments: 10,
          hireDate: "2023-01-08",
        },
        {
          id: 8,
          firstName: "Henry",
          lastName: "Martinez",
          numberOfAppointments: 10,
          hireDate: "2020-06-25",
        },
        {
          id: 9,
          firstName: "Isabel",
          lastName: "Taylor",
          numberOfAppointments: 10,
          hireDate: "2022-10-12",
        },
        {
          id: 10,
          firstName: "Jack",
          lastName: "Anderson",
          numberOfAppointments: 10,
          hireDate: "2023-06-14",
        },
      ];
    const {id} = useParams()

  return (
      <Container className={style.main}>
          <Table striped bordered hover responsive className="shadow-sm text-center">
    <thead>
      <tr>

        <th key={1}>Nombre Nutricionista</th>
        <th key={2}>Apellidos</th>
        <th key={3}>Fecha de contratación</th>
        <th key={4}>Numero de citas</th>
      </tr>
    </thead>
    <tbody>
          <tr key={nutritionists[id - 1].id}>
            <td className={style.name}>{nutritionists[id - 1].firstName}</td>
            <td className={style.name}>{nutritionists[id - 1].lastName}</td>
            <td>{nutritionists[id - 1].hireDate}</td>
            <td>{nutritionists[id - 1].numberOfAppointments}</td>
          </tr>
          </tbody>
          </Table>
          
          <Table striped bordered hover responsive className="shadow-sm text-center">
          <thead>
      <tr>

        <th key={1}>Paciente</th>
        <th key={2}>Fecha de Cita</th>
        <th key={3}>Cita Completada</th>
        <th key={4}>Status</th>
      </tr>
    </thead>
    <tbody>
              {dataSet[id - 1].map((e) => {
                  return (
                    <tr key={e.id}>
                    <td className={style.name}>{e.patient}</td>
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
