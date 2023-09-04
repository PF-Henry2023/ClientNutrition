import style from "./UserProfile.module.css"
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { Button, Alert, Card, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { getAppointments } from "../../redux/actions/actions";

export default function UserProfile(){ 

    const dispatch = useDispatch();
    const appointments = useSelector(e => e.appointments);
    useEffect(() => {
        const userId = window.localStorage.getItem("id");
        dispatch(getAppointments(userId))
    },[])
    
    if(appointments){
        const nutriId = appointments[0]?.NutritionistId;
        window.localStorage.setItem("idNutri", nutriId);
    }


    return (
            <Row >
                <Col>
            <NavBar/>
            <h1>Citas</h1>
            <Link to={'/appointments/new'}><Button variant="primary">+ Nueva cita</Button></Link>
            <br />
            <br />
            <h2>Próximas</h2>
            {
                appointments.length === 0 ?  <Alert key="secondary" variant="secondary">No hay citas agendas</Alert> : appointments.map(e => (
                    <Alert>{e.purpose}</Alert>
                )) 
            }
            <h2>Pasadas</h2>
            <Card >
                <Card.Body>
                    <Card.Title>Primera cita</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">04 de agosto de 2023 </Card.Subtitle>
                    <Button className={style.cardButton} variant="primary" size="sm">+ Notas</Button>
                    <Button className={style.cardButton} variant="primary" size="sm">+ Plan alimentario</Button>
                    <Button className={style.cardButton} variant="primary" size="sm">+ Plan de entrenamiento</Button>
                </Card.Body>
            </Card> 
        </Col>
        </Row>
    )}