import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Calendar as BigCalendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import {getSchedules, getNutritionistSchedule} from "../../redux/actions/actions";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "./custom-calendar.css";
import { saveInfoEvent } from "../../redux/actions/actions";
import Example from "./Modal";
import { red } from "@cloudinary/url-gen/actions/adjust";

const localizer = dayjsLocalizer(dayjs);

const Calendar = (props) => {

  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [view, setView] = useState("month");
  const dispatch = useDispatch();

  const appointments = useSelector(e => e.appointments);
  const schedules = useSelector(e => e.schedules);

  useEffect(() => {
    if(!appointments.length){
      dispatch(getSchedules())
    } else {
      const id = window.localStorage.getItem("idNutri");
      dispatch(getNutritionistSchedule(id))
    }
  },[]);

  const handleSelectC = ({ start }) => {
    const day = dayjs(start).day()
    const date = dayjs(start).date()
    const hour = dayjs(start).hour();
    const month = dayjs(start).month();
    const year = dayjs(start).year()
    
    const info = {hour,date,month,year}
    window.localStorage.setItem('infoEvent', JSON.stringify(info));
    const infoAppointment = JSON.parse(localStorage.getItem("infoEvent"));
    console.log(infoAppointment);

    let isHourAvailable = false;

    if(day === 0 || day === 6){
      return window.alert("Dia no disponible")
    }
  
    if (schedules[day]) {
      for (const [horaInicio, horaFin] of schedules[day]) {
        if (hour >= horaInicio && hour < horaFin) {
          isHourAvailable = true; 
          break;
        }
      }
    }
  
    if (isHourAvailable) {
      setFullscreen(true);
      setShow(true);
    } else {
      window.alert("Hora no disponible");
    }
  };

  const closedButton = () => {
    setShow(false);
  };

  const dayPropGetter = (date) => {
    const dayStyle = {};
    const dayWeek = dayjs(date).day();
    if(dayWeek === 0 || dayWeek === 6){
      dayStyle.backgroundColor = "#E39C8E";
    }

    return {
      style: dayStyle
    }
  };

  const slotPropGetter = (date) => {
    const slotStyle = {};
    const diaSemana = dayjs(date).day();

    if (schedules[diaSemana]) {
      for (const [horaInicio, horaFin] of schedules[diaSemana]) {
        if (dayjs(date).hour() >= horaInicio && dayjs(date).hour() < horaFin) {
          slotStyle.backgroundColor = "#B5E38E"; 
          break; 
        }
      }
    }

    return {
      style: slotStyle,
    };
  };



  return (
    <div>
      <div className="container">
        <BigCalendar
          localizer={localizer}
          selectable
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, width: 800 }}
          views={["month", "day"]} 
          view={view} 
          onView={setView} 
          onSelectSlot={handleSelectC}
          dayPropGetter={dayPropGetter}
          slotPropGetter={slotPropGetter}
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

export default Calendar