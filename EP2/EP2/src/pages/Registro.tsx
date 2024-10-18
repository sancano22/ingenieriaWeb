import React,{ useState } from 'react';
import { IonContent,IonHeader, IonPage, IonTitle, IonToolbar,IonItem,IonLabel,IonSelect,IonSelectOption,IonInput,IonText,IonButton} from '@ionic/react';
import './Home.css';
const Registro: React.FC = () => {

    const [userData, setUserData] = useState({
        region: '',
        comuna: '',
        usuario: '',
        password: '',
        confirmPassword: ''
      });
    
      const [error, setError] = useState('');
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUserData({
          ...userData,
          [name]: value
        });
      };
      const handleRegister = () => {
        if (!userData.region || !userData.comuna || !userData.usuario || !userData.password || !userData.confirmPassword) {
          setError('Por favor completa todos los campos');
        } else if (userData.password.length < 6) {
          setError('La contraseña debe tener al menos 6 caracteres');
        } else if (userData.password !== userData.confirmPassword) {
          setError('Las contraseñas no coinciden');
        } else {
          setError('');
          console.log('Datos de registro:', userData);
          // Aquí iría la lógica de envío de datos al servidor o backend
        }
      }

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Región</IonLabel>
          <IonSelect
            name="region"
            value={userData.region}
            placeholder="Selecciona tu región"
            onIonChange={handleChange}
          >
            <IonSelectOption value="Region Metropolitana">Región Metropolitana</IonSelectOption>
            <IonSelectOption value="Valparaíso">Valparaíso</IonSelectOption>
            <IonSelectOption value="Biobío">Biobío</IonSelectOption>
            {/* Agrega más opciones de regiones aquí */}
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Comuna</IonLabel>
          <IonInput
            type="text"
            name="comuna"
            value={userData.comuna}
            placeholder="Ingresa tu comuna"
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Usuario</IonLabel>
          <IonInput
            type="text"
            name="usuario"
            value={userData.usuario}
            placeholder="Ingresa tu nombre de usuario"
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Contraseña</IonLabel>
          <IonInput
            type="password"
            name="password"
            value={userData.password}
            placeholder="Ingresa tu contraseña"
            onIonChange={handleChange}
          />
        </IonItem>

        <IonItem>
          <IonLabel>Confirmar Contraseña</IonLabel>
          <IonInput
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            placeholder="Confirma tu contraseña"
            onIonChange={handleChange}
          />
        </IonItem>

        {error && (
          <IonText color="danger">
            <p>{error}</p>
          </IonText>
        )}

        <IonButton expand="block" onClick={handleRegister}>
          Registrarse
        </IonButton>
      </IonContent>
    </IonPage>
    )};

export default Registro;