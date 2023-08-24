import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getUsers } from "../../redux/actions/actions";
import style from "./NutritionistProfile.module.css";

const NutritionistProfile = () => {
  const localizer = momentLocalizer(moment);
  const events = [
    {
      start: moment().toDate(),
      end: moment().add(0.1, "days").toDate(),
      title: "An event",
    },
  ];

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (users.length < 1) dispatch(getUsers());
  }, [dispatch, users]);

  console.log(users);

  return (
    <div>
      <div className={style.div1}>
        <h4>Mis Citas</h4>
      </div>
      <BigCalendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="agenda"
        events={events}
        style={{ height: "50vh" }}
      />
      <div className={style.div2}>
        <button className={style.btns}>Cargar Archivos</button>
        <button className={style.btns}>Mi Perfil</button>
      </div>
    </div>
  );
};

export default NutritionistProfile;
