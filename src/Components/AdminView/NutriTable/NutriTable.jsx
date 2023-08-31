import Table from "react-bootstrap/Table";
import style from "./NutriTable.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function NutriTable() {
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

  const [nutri, setNutri] = useState(false);
  const [render, setRender] = useState(true)

  useEffect(() => {
    if (!nutri)
      fetch("http://localhost:3001/nutritionists/list?isActive=true")
        .then((response) => response.json())
        .then((data) => { if (data[0]) setNutri(data);});
    
  }, [nutri]);

  const blockNutri = (id) => {
    axios.delete(`http://localhost:3001/nutritionists/delete/${id}`)
    setNutri((prev) => false);
  }

  const restoreNutri = (id) => {
    axios.put(`http://localhost:3001/nutritionists/delete/${id}`)
    setNutri((prev) => false);
  }

  const openNewWindow = (id) => {
    window.open(
      `http://localhost:5173/adminprofile/detail/${id}`,
      "_blank",
      "width=770, height=700"
    );
  };

  return console.log(nutri),(
    <Table striped bordered hover responsive className="shadow-sm text-center">
      <thead>
        <tr>
          <th>#</th>

          <th key={1}>Nombre</th>
          <th key={2}>Apellidos</th>
          <th key={4}>Número de citas</th>
          <th key={5}>Bloquear</th>
          <th key={6}>Desbloquear</th>
        </tr>
      </thead>
      <tbody>
        {nutri !== false && nutri.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td className={style.name} onClick={() => openNewWindow(e.id)}>
                {e.name}
              </td>
              <td className={style.name} onClick={() => openNewWindow(e.id)}>
                {e.lastName}
              </td>
              <td>{e.numberOfAppointments}</td>
              <td>
                <button onClick={() => blockNutri(e.id)}>X</button>
              </td>
              <td>
                <button onClick={() => restoreNutri()} >O</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default NutriTable;
