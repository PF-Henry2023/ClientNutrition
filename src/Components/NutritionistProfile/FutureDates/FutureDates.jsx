import "./FutureDates.module.css";
import Table from "react-bootstrap/Table";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { allEvents } from "../../../redux/actions/actions";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const FutureDates = () => {
  const id = window.localStorage.getItem("id")
  const nutriEvents = useSelector(e => e.nutriEvents);
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);

  useEffect(() => {
   dispatch(allEvents(id));
   const filterAppointmentsInFuture = (appointment) => {
    const currentDateTime = dayjs(); // Get the current date and time
    const filteredAppointments = appointment.filter((appointment) => {
      // Parse the appointment date and time using dayjs
      const appointmentDateTime = dayjs(
        `${appointment.date} ${appointment.hour}:00`
      );
      // Compare the appointment date and time to the current date and time
      return appointmentDateTime.isAfter(currentDateTime);
    });

    return filteredAppointments;
  };
  const apointFuture = filterAppointmentsInFuture(nutriEvents);
  setEvent([
    ...apointFuture
  ])
  }, [])
  

  return (
    <Container className="container">
      <Table>
      <thead>
        <tr>
          <th key={1}>Fecha</th>
          <th key={2}>Hora</th>
          <th key={4}>Proposito</th>
        </tr>
      </thead>
      <tbody>
        {
          nutriEvents && event.map(e => (
            <tr key={e.id}>
              <td>{e.date}</td>
              <td>{e.hour}</td>
              <td>{e.purpose}</td>
            </tr>
          ))
        }
      </tbody>
      </Table>
    </Container>
  );
};

export default FutureDates;
