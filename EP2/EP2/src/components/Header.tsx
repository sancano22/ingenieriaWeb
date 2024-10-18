import React from 'react';
import {IonMenu,IonButton, IonButtons,IonMenuButton,IonHeader,IonTitle,IonToolbar,IonItem,IonLabel,IonList,IonContent} from '@ionic/react'


interface HeaderProps {
  title: string;  // Recibe el título del header como prop
}

const Header: React.FC <HeaderProps> = ({ title }) => {
  return (
    
      <IonHeader>
      <IonTitle>{title}</IonTitle>
      <IonToolbar>
        
      <IonButtons slot="start">
        <IonMenuButton /> {/* Botón de hamburguesa */}
        <IonButton routerLink="/home">Inicio</IonButton>
        <IonButton routerLink="/acercade">Acerca de</IonButton>
        <IonButton routerLink="/registro">Registro</IonButton>
      </IonButtons>

      </IonToolbar>
      </IonHeader>



  )};
export default Header;