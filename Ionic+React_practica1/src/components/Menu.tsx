import React from 'react';
import {IonRouterOutlet, IonContent, IonSplitPane,IonHeader, IonList, IonItem,IonPage,IonButtons, IonMenu,IonMenuButton, IonToolbar, IonTitle, IonLabel, IonIcon } from '@ionic/react';

const Menu: React.FC = () => {
  return (

  <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem routerLink="/home" routerDirection="none">
          <IonLabel>Inicio</IonLabel>
        </IonItem>
        <IonItem routerLink="/page2" routerDirection="none">
          <IonLabel>Page 2</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
);

  /*return (
    <IonMenu contentId="main" side="start" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menú</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/page1">
            <IonIcon icon={homeOutline} slot="start" />
            <IonLabel>Inicio</IonLabel>
          </IonItem>
          <IonItem routerLink="/page2">
            <IonIcon icon={personOutline} slot="start" />
            <IonLabel>Perfil</IonLabel>
          </IonItem>
          <IonItem routerLink="/settings">
            <IonIcon icon={settingsOutline} slot="start" />
            <IonLabel>Configuración</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );*/
};

export default Menu;
