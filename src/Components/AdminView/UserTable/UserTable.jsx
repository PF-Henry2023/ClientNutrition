import Table from "react-bootstrap/Table";
import style from "./UserTable.module.css";
import { Link } from "react-router-dom";

function UserTable() {
  const users = [
    {
      id: 11,
      name: "Sofía",
      lastName: "Rodríguez",
      numberOfAppointments: 5,
      firstAppointment: "no",
      paymentMethod: "tarjeta de crédito",
      appointmentFrequency: "semanal"
    },
    {
      id: 12,
      name: "Mateo",
      lastName: "García",
      numberOfAppointments: 8,
      firstAppointment: "no",
      paymentMethod: "PayPal",
      appointmentFrequency: "quincenal"
    },
    {
      id: 13,
      name: "Valentina",
      lastName: "Martínez",
      numberOfAppointments: 3,
      firstAppointment: "no",
      paymentMethod: "efectivo",
      appointmentFrequency: "mensual"
    },
    {
      id: 14,
      name: "Sebastián",
      lastName: "Hernández",
      numberOfAppointments: 12,
      firstAppointment: "no",
      paymentMethod: "tarjeta de crédito",
      appointmentFrequency: "semanal"
    },
    {
      id: 15,
      name: "Isabella",
      lastName: "López",
      numberOfAppointments: 6,
      firstAppointment: "no",
      paymentMethod: "PayPal",
      appointmentFrequency: "quincenal"
    },
    {
      id: 16,
      name: "Matías",
      lastName: "Díaz",
      numberOfAppointments: 9,
      firstAppointment: "no",
      paymentMethod: "tarjeta de crédito",
      appointmentFrequency: "mensual"
    },
    {
      id: 17,
      name: "Luciana",
      lastName: "Pérez",
      numberOfAppointments: 4,
      firstAppointment: "no",
      paymentMethod: "efectivo",
      appointmentFrequency: "semanal"
    },
    {
      id: 18,
      name: "Nicolás",
      lastName: "Ramírez",
      numberOfAppointments: 7,
      firstAppointment: "no",
      paymentMethod: "PayPal",
      appointmentFrequency: "quincenal"
    },
    {
      id: 19,
      name: "Valentino",
      lastName: "Gómez",
      numberOfAppointments: 11,
      firstAppointment: "no",
      paymentMethod: "tarjeta de crédito",
      appointmentFrequency: "semanal"
    },
    {
      id: 20,
      name: "Camila",
      lastName: "Fernández",
      numberOfAppointments: 2,
      firstAppointment: "no",
      paymentMethod: "efectivo",
      appointmentFrequency: "mensual"
    }
  ];
  

  const openNewWindow = (id) => {
    window.open(`http://localhost:5173/userprofile/detail/users/${id}`, "_blank", "width=770, height=700");
  };

  return (
    <Table striped bordered hover responsive className="shadow-sm text-center">
      <thead>
        <tr>
          <th>#</th>

          <th key={1}>Nombre</th>
          <th key={2}>Apellidos</th>
          <th key={3}>Primera cita</th>
          <th key={4}>Numero de citas</th>
          <th key={5}>Frecuencia</th>
          <th key={6}>Metodo de pago</th>
        </tr>
      </thead>
      <tbody>
        {users.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td className={style.name} onClick={() => openNewWindow(e.id)} >{e.name}</td>
              <td className={style.name} onClick={() => openNewWindow(e.id)} >{e.lastName}</td>
              <td>{e.firstAppointment[0].toUpperCase() + e.firstAppointment.slice(1)}</td>
              <td>{e.numberOfAppointments}</td>
              <td>{e.appointmentFrequency[0].toUpperCase() + e.appointmentFrequency.slice(1)}</td>
              <td>{e.paymentMethod[0].toUpperCase() + e.paymentMethod.slice(1)}</td>              
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserTable;
