import { Link } from "react-router-dom";
import styles from "./Cancel.module.css";

const Cancel = () => {
    return (
        <div className={styles.container}>
            <h1>PAGO RECHAZADO</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Cancel ;
