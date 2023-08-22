import styles from "./Home.module.css"
import HomeDescripion from "../HomeDescription/HomeDescription";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <div className={styles.text}>
            
            <HomeDescripion title="Servicio que ofrecemos" description="Descubre una nueva forma de alcanzar tus objetivos de salud y bienestar a través de nuestro innovador servicio de consultas en línea con nutricionistas expertos. En nuestra plataforma, te conectamos con profesionales altamente calificados que se dedican a comprender tus necesidades individuales y crear planes de alimentación personalizados que se adapten a tu estilo de vida único. Ya sea que estés buscando perder peso, aumentar tu energía o mejorar tus hábitos alimenticios, nuestros nutricionistas te brindarán orientación y apoyo a cada paso del camino. Con comodidad y flexibilidad, accederás a sesiones virtuales en tiempo real donde podrás discutir tus metas, recibir asesoramiento basado en la evidencia y resolver tus inquietudes nutricionales. Comienza tu viaje hacia una vida más saludable hoy mismo con nuestro servicio de consultas en línea, respaldado por profesionales comprometidos que están aquí para ayudarte a alcanzar el éxito duradero."/>
            <Carousel />
            <HomeDescripion title="Cómo trabajamos?" description="
            1. Idioma (español)
            2.Condiciones: gmeet + cámara prendida obligatoriamente
            3. Duración (45-60min) (Segundas reuniones de 25 min)
            4. Precio/Paquete
            5. Modalidad de pago
            6. Qué tan pronto puede ser la cita: + 7 días"/>
            <Carousel />
            <Footer />
        </div>
    )
}