import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import legumbres from './legumbres.jpeg';
import consultaonline from './consultaonline.jpg.png'
import recetas from './recetas.png'
import style from './Carousel.module.css'



export default function CarouselHome() {

  return (
    <Carousel className={style.main}>
      <Carousel.Item>
        <img className="d-block w-100" src={legumbres} alt="First slide"></img>
        <Carousel.Caption className={style.Caption}>
          <h3>Dieta Personalizada</h3>
          <p>Acorde a las necesidades y objetivos de cada persona</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={consultaonline} alt="Second slide"></img>
        <Carousel.Caption className={style.Caption}>
          <h3>Consulta Virtual</h3>
          <p>Sin tener que moverte de tu casa, y a un click!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100" src={recetas} alt="Third slide"></img>
        <Carousel.Caption className={style.Caption}>
          <h3>Recetario </h3>
          <p>
            Encontrarás un montón de ideas y recetas fáciles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
