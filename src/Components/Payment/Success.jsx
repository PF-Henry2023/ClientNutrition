import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Success.module.css";
import { useEffect } from "react";
import { postAppointment } from "../../redux/actions/actions";
const Success = () => {

    const dispatch = useDispatch();
    const infoAppointment = JSON.parse(localStorage.getItem("infoEvent"));
    console.log(infoAppointment);

    const formattedMonth = infoAppointment.month.toString().padStart(2, '0');
    const formattedDate = infoAppointment.date.toString().padStart(2, '0');

    const formattedDateStr = `${formattedMonth}-${formattedDate}-${infoAppointment.year}`;
    const formattedHour = `${infoAppointment.hour.toString().padStart(2, '0')}:00:00`;

    console.log(formattedDateStr, formattedHour);

    const infoPost = {
        date:formattedDateStr,
        hour:formattedHour
    }

    useEffect(() => {
          dispatch(postAppointment(infoPost))
      },[]);


    return (
        <div className={styles.container}>
            <h1>PAGO REALIZADO CORRECTAMENTE</h1>
            <h3>GRACIAS POR TÚ COMPRA</h3>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
        
        
    );
};

export default Success;
