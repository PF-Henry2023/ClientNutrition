import "./FutureDates.module.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container } from "react-bootstrap";
const FutureDates = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(0.1, "days").toDate(),
      title: "An event",
    },
  ];
  return (
    <Container className="container">
      <BigCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="agenda"
        events={events}
        style={{ height: "70vh" }}
      />
    </Container>
  );
};

export default FutureDates;
