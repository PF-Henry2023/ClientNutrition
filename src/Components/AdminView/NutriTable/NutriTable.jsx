import Table from "react-bootstrap/Table";
import style from "./NutriTable.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

function NutriTable() {


  const [nutri, setNutri] = useState(false);


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
                <button onClick={() => restoreNutri(e.id)} >O</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default NutriTable;
