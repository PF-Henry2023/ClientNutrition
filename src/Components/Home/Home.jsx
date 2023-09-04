import styles from "./Home.module.css";
import CarouselH from "../CarouselH/CarouselH";
import Cards from "../Cards/Cards";
import AccordionHome from "../AccordionHome/AccordionHome";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className={styles.text}> 
            <CarouselH />
            <div className={styles.divConAlturaViewport}>
                <h4>Por qué ZUCCCA?</h4>
            En ZUCCA, encontrarás una gama completa de servicios diseñados para apoyarte en tu búsqueda de una vida más saludable y equilibrada. Nuestro enfoque se basa en brindarte la atención que mereces, centrándonos en tu bienestar y tus objetivos individuales.
            Nuestra misión en ZUCCA es guiarte hacia una vida en la que te sientas bien contigo mismo, te sientas lleno de energía y tengas el conocimiento para tomar decisiones informadas sobre tu alimentación y estilo de vida. ¡Estamos aquí para ayudarte en cada paso del camino!
            <p>1. Planes de alimentación personalizados: Nuestros profesionales en nutrición trabajarán contigo para crear planes de alimentación personalizados que se adapten a tus necesidades, objetivos y preferencias alimentarias. Ya sea que estés buscando perder peso, ganar energía o mejorar tu salud en general, te proporcionaremos un plan alimenticio que se ajuste a ti.</p>
            <p>2. Servicios virtuales: Con la comodidad y la flexibilidad en mente, ofrecemos sesiones de asesoramiento nutricional en línea. Puedes acceder a nuestros servicios desde la comodidad de tu hogar o cualquier lugar que te resulte conveniente.</p>
            <p>3. Precios competitivos: Entendemos la importancia de hacer que los servicios de asesoramiento nutricional sean accesibles para todos. Nuestros precios competitivos te brindan una excelente relación calidad-precio sin comprometer la calidad del servicio que recibirás.</p>
            <p>4. Recetas saludables: Queremos inspirarte a incorporar hábitos alimenticios más saludables en tu vida diaria. Te proporcionaremos una variedad de recetas deliciosas y equilibradas que se ajusten a tus necesidades nutricionales y te ayuden a explorar nuevas opciones culinarias.</p>
            <p>5. Atención personalizada: En ZUCCA, no creemos en enfoques universales. Te ofrecemos atención personalizada que tiene en cuenta tus preferencias, necesidades y circunstancias individuales. Nuestros profesionales se asegurarán de que te sientas apoyado en cada paso de tu viaje hacia la salud y el bienestar.</p>
            </div>
            
          
        <Cards />
      <br />
        
        <AccordionHome />
      <br />
      <Alert key={'secondary'} variant={'secondary'} className="text-center">
      <Link to="/termsandconditions">Política de Privacidad / Términos y condiciones</Link>
      </Alert>     
  </div>
    )
}
