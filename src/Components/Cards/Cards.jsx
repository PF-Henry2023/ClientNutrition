import styles from "./Cards.module.css"
import Card from 'react-bootstrap/Card';

export default function Cards() {
    return (
        <div className={styles.divConAlturaViewport}>
        <div className={styles.text}>
            <div className={styles.title}>QUIENES NOS ELIGEN</div>

            <div className="row">
                <div className="col-md-4">
                    <Card className="h-100" style={{ width: '18rem', backgroundColor: 'lightgreen' }}>
                        <Card.Body>
                            <Card.Title>Carlos M.</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                "Gracias a ZUCCA finalmente tengo un plan alimenticio hecho a mi medida. Me siento más energizado y apoyado en mi camino hacia el bienestar. Ha sido una experiencia transformadora!"
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="h-100" style={{ width: '18rem', backgroundColor: 'green' }}>
                        <Card.Body>
                            <Card.Title>Diego T.</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                "Como deportista, ZUCCA ha mejorado mi rendimiento con planes personalizados. Mi energía y recuperación están en su punto máximo. Es altamente recomendable, yo estoy muy conforme."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card className="h-100" style={{ width: '18rem', backgroundColor: "#FF0000" }}>
                        <Card.Body>
                            <Card.Title>Dra. Lucia G.</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                            <Card.Text>
                                "ZUCCA ha revolucionado mi enfoque como profesional. Facilita la comunicación y me permite concentrarme en guiar a mis pacientes hacia sus objetivos."
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        </div>
    )
}
