import style from "./UserProfile.module.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Button, Alert, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAppointments, getNutritionist } from "../../redux/actions/actions";
import DownloadCloudinary from "../Cloudinary/Download"
import dayjs from "dayjs";

export default function UserProfile() {
  const [apoFuture, setApoFuture] = useState([]);
  const [apoBefore, setApoBefore] = useState([]);
  const dispatch = useDispatch();
  const appointments = useSelector((e) => e.appointments);
  const nutriInfo = useSelector((e) => e.nutriInfo);
  useEffect(() => {
    const userId = window.localStorage.getItem("id");
    dispatch(getAppointments(userId));
    const nutriId = window.localStorage.getItem("nutriId");
    if (nutriId) {
      dispatch(getNutritionist(nutriId));
    }
    const filterAppointmentsBeforeCurrentTime = (appointment) => {
      const currentDateTime = dayjs(); // Get the current date and tim
      const filteredAppointments = appointments.filter((appointment) => {
        // Parse the appointment date and time using dayjs
        const appointmentDateTime = dayjs(
          `${appointment.date} ${appointment.hour}:00`
        );
        // Compare the appointment date and time to the current date and time
        return appointmentDateTime.isBefore(currentDateTime);
      });

      return filteredAppointments;
    };

    const filterAppointmentsInFuture = (appointment) => {
      const currentDateTime = dayjs(); // Get the current date and time
      const filteredAppointments = appointments.filter((appointment) => {
        // Parse the appointment date and time using dayjs
        const appointmentDateTime = dayjs(
          `${appointment.date} ${appointment.hour}:00`
        );
        // Compare the appointment date and time to the current date and time
        return appointmentDateTime.isAfter(currentDateTime);
      });

      return filteredAppointments;
    };
    const apoF = filterAppointmentsInFuture(appointments);
    const apoB = filterAppointmentsBeforeCurrentTime(appointments);
    setApoFuture([...apoF]);
    setApoBefore([...apoB]);
  }, []);

  console.log(apoFuture);
  console.log(apoBefore);

  return (
    <Row>
      <Col>
        <NavBar />
        <h1>Citas</h1>
        <Link to={"/appointments/new"}>
          <Button variant="primary">+ Nueva cita</Button>
        </Link>
        <br />
        <br />
        <h2>Próximas</h2>
        {appointments.length === 0 ? (
          <Alert key="secondary" variant="secondary">
            No hay citas agendadas
          </Alert>
        ) : (
          apoFuture.map((e) => (
            <Alert>
              Descripcion: {e.purpose} Fecha: {e.date} Hora: {e.hour}{" "}
              Nutricionista: {nutriInfo.name} {nutriInfo.lastName}
            </Alert>
          ))
        )}
        <h2>Pasadas</h2>
        <Card>
          {appointments.length === 0 ? (
            <Alert key="secondary" variant="secondary">
              Todavia no agendaste citas
            </Alert>
          ) : (
            apoBefore.map((e) => (
              <Alert>
                Descripcion: {e.purpose} Fecha: {e.date} Nutricionista:{" "}
                {nutriInfo.name} {nutriInfo.lastName}
              </Alert>
            ))
          )}
          {/* <Card.Body>
                    <Card.Title>Primera cita</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">04 de agosto de 2023 </Card.Subtitle>
                    <DownloadCloudinary name={user.name} lastName={user.lastName}></DownloadCloudinary>
                </Card.Body> */}
        </Card>
      </Col>
    </Row>
  );
}
