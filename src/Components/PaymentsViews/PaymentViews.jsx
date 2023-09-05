import styles from "./PaymentViews.module.css";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export default function PaymentViews() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                 <Card className="h-100" style={{ width: '18rem', backgroundColor: 'lightgreen' }}>
                     <Card.Body>
                         <Card.Title>EL PAGO SE HA REALIZADO CORRECTAMENTE</Card.Title>
                         <Card.Text>MUCHAS GRACIAS!</Card.Text>
                     </Card.Body>
                     <Link to="/">
                        <button>Volver</button>
                        </Link>
                 </Card>

                    <br />

                 <Card className="h-100" style={{ width: '18rem', backgroundColor: 'orange' }}>
                     <Card.Body>
                         <Card.Title>NO SE HA PODIDO PROCESAR EL PAGO</Card.Title>
                         <Card.Text>VUELVA A INTENTAR!</Card.Text>
                     </Card.Body>
                     <Link to="/">
                        <button>Volver</button>
                        </Link>
                 </Card>
            </div>
        </div>
    )
}