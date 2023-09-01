import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import style from "./Calendar.module.css";
import { getAppointments } from "../../redux/actions/actions";

const localizer = momentLocalizer(moment);
const events = [
  {
    start: moment().toDate(),
    end: moment().add(0.1, "days").toDate(),
    title: "An event",
  },
];

const Calendar = () => {
  const openNewWindow = () => {
    window.open(`http://www.stripe.com`, "_blank", "width=770, height=700");
  };

  return (
    <div className={style.Calendar}>
      {/* <Navbar/> */}
      <div>
        <button className={style.Agendar}>Agendar mi cita</button>
      </div>
      <div>
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "80vh" }}
        />
      </div>
      <button onClick={() => openNewWindow()}>Pagar con Stripe</button>
    </div>
  );
};

export default Calendar;
