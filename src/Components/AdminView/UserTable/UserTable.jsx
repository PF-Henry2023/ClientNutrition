import Table from "react-bootstrap/Table";
import style from "./UserTable.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getUsers } from "../../../redux/actions/actions";

function UserTable() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  
  useEffect(() => {
    if (users.length < 1) dispatch(getUsers());
  }, [dispatch, users]);

  console.log(users);


  const openNewWindow = (id) => {
    window.open(`http://localhost:5173/adminprofile/detail/users/${id}`, "_blank", "width=770, height=700");
  };

  


  return (
    <Table striped bordered hover responsive className="shadow-sm text-center">
      <thead>
        <tr>
          <th>ID</th>

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
