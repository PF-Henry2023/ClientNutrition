import Table from "react-bootstrap/Table";
import style from "./UserTable.module.css";
import { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState(false);  
  
  useEffect(() => {
    
      if (!users)
        fetch("http://localhost:3001/users/allusers")
          .then((response) => response.json())
          .then((data) => { if (data[0]) setUsers(data);});
      
    
  },[users])

  const openNewWindow = (id) => {
    window.open(`http://localhost:5173/adminprofile/detail/users/${id}`, "_blank", "width=770, height=700");
  };




  return (
    <Table striped bordered hover responsive className="shadow-sm text-center">
      <thead>
        <tr>
          <th>#</th>

          <th key={1}>Nombre</th>
          <th key={2}>Apellidos</th>
          <th key={3}>Proxima cita</th>
        </tr>
      </thead>
      <tbody>
        {users !== false && users.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td className={style.name} onClick={() => openNewWindow(e.id)} >{e.name}</td>
              <td className={style.name} onClick={() => openNewWindow(e.id)} >{e.lastName}</td>              
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserTable;
