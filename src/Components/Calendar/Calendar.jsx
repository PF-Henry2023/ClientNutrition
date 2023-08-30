import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./Calendar.module.css";
import { getAppointments } from "../../redux/actions/actions";
import Example from "./Modal";

const localizer = momentLocalizer(moment);
const events = [
  {
    start: moment().toDate(),
    end: moment().add(0.1, "days").toDate(),
    title: "An event",
  },
];

const Calendar = () => {
  const dispatch = useDispatch();
  const allappointments = useSelector((state) => state.appointments);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [appointment, setAppointment] = useState([]);

  useEffect(() => {
    if (allappointments.length < 1) dispatch(getAppointments());
  }, [dispatch, allappointments]);

  console.log(allappointments);
  // const appointments = allappointments.map((appointment) => {})

  const handleSelectC = ({ start }) => {
    /* const end = dayjs(start).add(1, 'hour').toDate();
    const newEvent = {
        title: 'New Event2',
        start,
        end,
    };
    setEvents([...events, newEvent]);
    console.log({ start, end }); */

    const isWeekend = (date) => {
      const day = date.getDay();
      return day === 0 || day === 6; // Sunday (0) and Saturday (6)
    };
    const isSelectable = (date) => !isWeekend(date);

    if (fullscreen === true) {
      setFullscreen(false);
    }
    if (isSelectable) {
      setFullscreen(true);
      setShow(true);
    }
  };

  const closedButton = () => {
    setShow(false);
  };

  return (
    <div>
      <div>
        <BigCalendar
          style={{ height: "500px", width: "700px", margin: "auto" }}
          defaultView="month"
          defaultDate={new Date()}
          localizer={localizer}
          events={events}
          selectable
          onSelectSlot={handleSelectC}
        />
        <Example
          show={show}
          fullscreen={fullscreen}
          closedButton={closedButton}
        />
      </div>
    </div>
  );
};

export default Calendar;
