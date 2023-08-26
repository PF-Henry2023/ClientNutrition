import styles from "./Home.module.css"
import HomeDescripion from "../HomeDescription/HomeDescription";
import Carousel from "../Carousel/Carousel";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Home() {
    return (
        <div className={styles.text}> 

            <HomeDescripion title="" description="ZUCCA ofrece asesoramiento nutricional personalizado a través de sesiones a distancia con profesionales de nutrición altamente calificados. Nuestro enfoque se centra en la salud, la vitalidad y el bienestar general.
"/>
            <hr />
            <div>
                <h4>Nuestro diferencial</h4>
            En ZUCCA, encontrarás una gama completa de servicios diseñados para apoyarte en tu búsqueda de una vida más saludable y equilibrada. Nuestro enfoque se basa en brindarte la atención que mereces, centrándonos en tu bienestar y tus objetivos individuales.
            Nuestra misión en ZUCCA es guiarte hacia una vida en la que te sientas bien contigo mismo, te sientas lleno de energía y tengas el conocimiento para tomar decisiones informadas sobre tu alimentación y estilo de vida. ¡Estamos aquí para ayudarte en cada paso del camino!
            <p>1. Planes de alimentación personalizados: Nuestros profesionales en nutrición trabajarán contigo para crear planes de alimentación personalizados que se adapten a tus necesidades, objetivos y preferencias alimentarias. Ya sea que estés buscando perder peso, ganar energía o mejorar tu salud en general, te proporcionaremos un plan alimenticio que se ajuste a ti.</p>
            <p>2. Servicios virtuales: Con la comodidad y la flexibilidad en mente, ofrecemos sesiones de asesoramiento nutricional en línea. Puedes acceder a nuestros servicios desde la comodidad de tu hogar o cualquier lugar que te resulte conveniente.</p>
            <p>3. Precios competitivos: Entendemos la importancia de hacer que los servicios de asesoramiento nutricional sean accesibles para todos. Nuestros precios competitivos te brindan una excelente relación calidad-precio sin comprometer la calidad del servicio que recibirás.</p>
            <p>4. Recetas saludables: Queremos inspirarte a incorporar hábitos alimenticios más saludables en tu vida diaria. Te proporcionaremos una variedad de recetas deliciosas y equilibradas que se ajusten a tus necesidades nutricionales y te ayuden a explorar nuevas opciones culinarias.</p>
            <p>5. Atención personalizada: En ZUCCA, no creemos en enfoques universales. Te ofrecemos atención personalizada que tiene en cuenta tus preferencias, necesidades y circunstancias individuales. Nuestros profesionales se asegurarán de que te sientas apoyado en cada paso de tu viaje hacia la salud y el bienestar.</p>
            </div>
            <Carousel/>
            <hr />
            <HomeDescripion
        title="Cómo trabajamos?"
        description={
          <>

            En ZUCCA, comprendemos la importancia de establecer una modalidad de trabajo que sea efectiva, cómoda y centrada en tus necesidades. Nuestra forma de trabajar está diseñada para brindarte un servicio de asesoramiento nutricional personalizado que se adapte a tu estilo de vida y objetivos. A continuación, te presentamos nuestra modalidad de trabajo que garantiza una experiencia integral y orientada hacia tu bienestar.
            <p>1. Idioma: Ofrecemos nuestros servicios en español, para que puedas comunicarte y entender completamente todo el proceso.</p>
            <p>2. Condiciones de la sesión: Para garantizar una interacción efectiva y personalizada, requerimos que las sesiones se realicen a través de la plataforma de videollamadas Google Meet. Además, es obligatorio tener la cámara prendida durante la sesión. Esto nos permite comunicarnos de manera más efectiva.</p>
            <p>3. Duración de las sesiones: Las sesiones tienen una duración de entre 45 y 60 minutos.</p>
            <p>4. Precios: Cada sesión tiene un valor de 55USD</p>
            <p>5. Modalidad de pago: Aceptamos pagos en línea con tarjetas. Puedes elegir la opción que te resulte más conveniente, y te proporcionaremos instrucciones claras para completar el proceso de pago de manera segura.</p>
            <p>6. Planificación: Entendemos que estás listo para comenzar tu viaje hacia una vida más saludable. Trabajamos para asegurarnos de que puedas programar tu cita en un plazo de 7 días desde tu solicitud inicial. Queremos que comiences a sentir los beneficios lo antes posible.</p>
          </>
        }
      />  
        <Breadcrumb.Item href="/termsandconditions">Política de Privacidad/Términos y condiciones</Breadcrumb.Item>
        </div>
    )
}