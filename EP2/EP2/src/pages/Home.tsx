import React, { useEffect, useState } from 'react';
import { IonContent,IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';  // Importa Swiper y SwiperSlide
import {Pagination,Autoplay,Navigation} from 'swiper/modules';  // Importa el módulo de paginación si lo usas

import './Home.css';
import 'swiper/css';  // Importa los estilos por defecto de Swiper
import 'swiper/css/pagination';  // Importa estilos para la paginación si lo necesitas

import slidesData from '../assets/datos.json';  // Ajusta la ruta a tu archivo JSON

const Home: React.FC = () => {

  return (
  <IonPage>
  <IonContent>
   <Swiper
          modules={[Pagination, Autoplay, Navigation]}  // Agrega los módulos que desees
          spaceBetween={30}
          slidesPerView={1}
          loop={true}  // Hace que los slides se repitan en bucle
          autoplay={{ delay: 3000, disableOnInteraction: false }}  // Deslizamiento automático
          pagination={{ clickable: true }}  // Habilita paginación
          navigation={true}  // Activa las flechas de navegación
        >
         
         {slidesData.map(slide => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.title} />
              <h2>{slide.title}</h2>
            </SwiperSlide>
          ))}
    

        </Swiper>
  </IonContent>
  </IonPage>
  );
};

export default Home;
