import styles from "./Home.module.css"
import HomeDescripion from "../HomeDescription/HomeDescription";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";

export default function Home() {
    return (
        <div className={styles.text}> 
            <HomeDescripion title="Servicio que ofrecemos" description="Descubre una nueva forma de alcanzar tus objetivos de salud y bienestar a través de nuestro innovador servicio de consultas en línea con nutricionistas expertos. En nuestra plataforma, te conectamos con profesionales altamente calificados que se dedican a comprender tus necesidades individuales y crear planes de alimentación personalizados que se adapten a tu estilo de vida único. Ya sea que estés buscando perder peso, aumentar tu energía o mejorar tus hábitos alimenticios, nuestros nutricionistas te brindarán orientación y apoyo a cada paso del camino. Con comodidad y flexibilidad, accederás a sesiones virtuales en tiempo real donde podrás discutir tus metas, recibir asesoramiento basado en la evidencia y resolver tus inquietudes nutricionales. Comienza tu viaje hacia una vida más saludable hoy mismo con nuestro servicio de consultas en línea, respaldado por profesionales comprometidos que están aquí para ayudarte a alcanzar el éxito duradero."/>
            <hr />
            <Carousel />
            <hr />
            <HomeDescripion
        title="Cómo trabajamos?"
        description={
          <>
            <p>1. Las consultas se realizan en español</p>
            <p>2. Condiciones: el espacio de consulta se realizará mediante Google Meet, con cámara prendida obligatoriamente.</p>
            <p>3. La duración del primer encuentro es de 45-60min, y las siguientes reuniones de 25 minutos.</p>
            <p>4. Se puede acceder a un mejor precio por acceder a un paquete de consultas.</p>
            <p>5. La modalidad de pago de las consultas será: -.</p>
            <p>6. La cita será otorgada con al menos 7 días de anticipación.</p>
          </>
        }
      />
            <Carousel />
            <Footer />
        </div>
    )
}