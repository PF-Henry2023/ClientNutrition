import Table from "react-bootstrap/Table";
import style from "./NutriTable.module.css";


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

  const openNewWindow = (id) => {
    window.open(`http://localhost:5173/adminprofile/detail/${id}`, "_blank", "width=770, height=700");
  };

  return (
    <Table striped bordered hover responsive className="shadow-sm text-center">
      <thead>
        <tr>
          <th>#</th>

          <th key={1}>Nombre</th>
          <th key={2}>Apellidos</th>
          <th key={3}>Fecha de contratación</th>
          <th key={4}>Número de citas</th>
          <th key={4}>Bloquear</th>
          <th key={4}>Desbloquear</th>
        </tr>
      </thead>
      <tbody>
        {nutritionists.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td className={style.name} onClick={() => openNewWindow(e.id)} >{e.firstName}</td>
              <td className={style.name} onClick={() => openNewWindow(e.id)} >{e.lastName}</td>
              <td>{e.hireDate}</td>
              <td>{e.numberOfAppointments}</td>
              <td><button>X</button></td>
              <td><button>O</button></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default NutriTable;
