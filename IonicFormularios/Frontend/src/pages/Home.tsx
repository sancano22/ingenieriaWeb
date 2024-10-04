import React, {useEffect,useState} from 'react';
import { IonContent, IonText, IonHeader,IonButton, IonInput, IonPage, IonTitle, IonToolbar,IonItem,IonLabel } from '@ionic/react';
import axios from 'axios';

import './Home.css';

const Home: React.FC = () => {
   //manejando estado de inputs 
   const [correo_electronico, setCorreo_electronico] = useState('');
   const [contrasena, setContrasena] = useState('');
   const [islogueado, setIsLogueado]=useState(false);
   //const [error, setError]=useState('');
   const[error,setError]=useState({correo_electronico:'',contrasena:''});
   const[errors,setErrors]=useState('');
   const [responseMessage, setResponseMessage] = useState('');

  const Validar=()=>{
    let emailError='';
    let passwordError='';
    if (!correo_electronico){
        emailError="El correo electrónico es requerido"; 
    }else if (!/\S+@\S+\.\S+/.test(correo_electronico)){
         emailError="El correo electrónico no es válido";
    }

    if(!contrasena){
      passwordError="La contraseña es requerida";
    }else if(contrasena.length < 6){
      passwordError="la contraseña debe tener al menos 6 caracteres";
    }

    if(emailError || passwordError){
      setError({ correo_electronico: emailError,contrasena:passwordError});
      return false;
    }
     return true;

  }

  const Enviar=async(e:Event) =>{
      e.preventDefault();
      const isValid=Validar();
      if(isValid){
        try {

          // Enviar la solicitud POST al backend
          /*const response = await axios.post('http://localhost:3000/usuario', {
              "email":correo_electronico,
              "password":contrasena
          });*/

          const response = await axios.post('http://localhost:3000/login',{
              "email":correo_electronico,
              "password":contrasena
             });
            if(response.data.message)
                setIsLogueado(true); 
          // Guardar el mensaje de éxito
          //setResponseMessage(response.data.message);
         
      } catch (error) {
          console.error('Error al enviar los datos:', error);
      }

        /*
        if(correo_electronico=='admin@mail.com' && contrasena=='123456'){
          setIsLogueado(true); //cambiar estado para ocultar el formulario
          setError({correo_electronico:'',contrasena:''}); //limpiar errores
        }else{
          setErrors('Credenciales incorrectas');
        }*/
      }

      /*if(correo_electronico=='admin@mail.com' && contrasena=='1234'){
        setIsLogueado(true); //cambiar estado para ocultar el formulario
        setError(''); //limpiar errores
      }else{
        setError('Credenciales incorrectas');
      }*/
     
      /*setCorreo_electronico('');
      setContrasena('');
      console.log("sonido");*/
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio de Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {!islogueado ? (
        <form onSubmit={Enviar}>
           <IonText color="danger">
            <p>{errors}</p>
            </IonText>
          <IonItem>
            <div className={`form-control ${error.correo_electronico ? 'invalid' : ''}`}>
                <label htmlFor="correo_electronico">Correo Electrónico</label>              
                <input
                type="email"
                id="correo_electronico"
                value={correo_electronico}
                onChange={e => setCorreo_electronico(e.target.value!)}
                className={error.correo_electronico ? 'input-error' : ''}
              />
              {error.correo_electronico && <p className="error-message">{error.correo_electronico}</p>}
            </div>
          </IonItem>
              
          <IonItem>
                    <div className={`form-control ${error.contrasena ? 'invalid' : ''}`}>
            <IonLabel position="floating">Contraseña</IonLabel>
            <input 
               type='password'
               id="contrasena"
               value={contrasena}
               onChange={e => setContrasena(e.target.value)}
               className={error.contrasena ? 'input-error' : ''}
            />
              {error.contrasena && <p className="error-message">{error.contrasena}</p>}
            </div>
          </IonItem>

          <IonButton type="submit" expand="block">
            Enviar
          </IonButton>
        </form>
        ):(
          // Pantalla que se muestra después de iniciar sesión
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <IonText color="success">
              <h2>¡Bienvenido, {correo_electronico}!</h2>
            </IonText>
            <IonButton expand="block" onClick={() => setIsLogueado(false)}>
              Cerrar Sesión
            </IonButton>
          </div>
        )}
    {responseMessage && <p>{responseMessage}</p>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
