import { Link } from "react-router-dom";
import styles from "./Success.module.css";
const Success = () => {
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
