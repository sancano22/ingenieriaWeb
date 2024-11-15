import React, {} from 'react';
import { IonContent,IonText, IonPage, IonInput, IonButton, IonItem, IonLabel, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home: React.FC = () => {
  const { logout } = useAuth();


  const handleLogout = () => {
    logout();
    // Redirigir a la página de login después de cerrar sesión
    window.location.href = '/login';
  };

    return (
      <IonPage>
      <IonContent className="ion-padding">
        <h2>Bienvenido a la Página Protegida</h2>
        <IonButton expand="block" onClick={handleLogout}>Cerrar sesión</IonButton>
      </IonContent>
    </IonPage>)

};
export default Home;