import React, { useState, useContext,useEffect } from 'react';
import { IonContent,IonText, IonPage, IonInput, IonButton, IonItem, IonLabel, IonToast } from '@ionic/react';
import { useHistory} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import './Login.css';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login,isAuthenticated } = useAuth();

  if(isAuthenticated){
    console.log(isAuthenticated)
    window.location.href = '/home';
  }
  
  const handleLogin = () => {
    
    if (username === 'usuario' && password === '123') {
      // Aquí puedes redirigir al usuario o realizar alguna acción en caso de éxito
      login('dummyToken'); // Almacena un token simulado en localStorage
      window.location.href = '/home';
    } else {
      setError('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <IonPage>
    <IonContent className="ion-padding">
      <h2>Iniciar sesión</h2>
      <IonItem>
        <IonLabel position="floating">Nombre de Usuario</IonLabel>
        <IonInput
          value={username}
          onIonChange={(e) => setUsername(e.detail.value!)}
          type="text"
          required
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Contraseña</IonLabel>
        <IonInput
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
          type="password"
          required
        />
      </IonItem>
      {error && <IonText color="danger">{error}</IonText>}
      <IonButton expand="block" onClick={handleLogin}>Ingresar</IonButton>
    </IonContent>
  </IonPage>
  );
};
export default Login;