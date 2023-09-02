import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./Calendar.module.css";

import Example from "./Modal";

const localizer = momentLocalizer(moment);


const Calendar = () => {

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [view, setView] = useState('month')

  

  const handleSelectC = ({ start }) => {
    const day = moment(start).day();
    const hour = moment(start).hour();
    if(view === "day"){
      for (const dayA of props.day) {
        if(day === dayA){
          return window.alert("Dia no disponible");
        } else {
          if (fullscreen === true) {
            setFullscreen(false);
          }
          setFullscreen(true);
          setShow(true);
        }
      }
      for (const hourA of props.hour) {
        if(hour > hourA[0] && hour < hourA[1]){
          return window.alert("Hora no disponible");
        } else {
          if (fullscreen === true) {
            setFullscreen(false);
          }
          setFullscreen(true);
          setShow(true);
        }
      }
    } else {
      setView("day");
    }
  };

  const closedButton = () => {
    setShow(false);
  };

  const dayPropGetter = (date) => {
    const dayStyle = {};
    const dateA = moment(date).day();
    const mapeo = props.day.map(e => {
      if(dateA === e){
        dayStyle.backgroundColor = "#E39C8E";
      }
    })
    return {
      style: dayStyle,
    };
  };


  const slotPropGetter = (date) => {
    const slotStyle = {};
    for (const range of props.hour) {
      if(moment(date).hour() > range[0] && moment(date).hour() < range[1]){
        slotStyle.backgroundColor = "#E39C8E";
      }
    }
    return {
      style: slotStyle,
    };

  }
  const openNewWindow = () => {
    window.open(`http://www.stripe.com`, "_blank", "width=770, height=700");
  };

  return (
    <div>
      <div>
        <BigCalendar
          style={{ height: "500px", width: "700px", margin: "auto" }}
          localizer={localizer}
          views={["month", "week", "day"]}
          defaultView={"month"}
          onView={view}
          onSelectSlot={handleSelectC}
          selectable
          dayPropGetter={dayPropGetter}
          slotPropGetter={slotPropGetter}
          day={[0, 6]} hour={[[8,20], [0,3]]}

        />
        <Example
          show={show}
          fullscreen={fullscreen}
          closedButton={closedButton}
        />
      </div>
      <button onClick={() => openNewWindow()}>Pagar con Stripe</button>
    </div>
  );
};

export default Calendar