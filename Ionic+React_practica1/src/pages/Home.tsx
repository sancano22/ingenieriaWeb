import { IonItem, IonLabel, IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';import './Home.css';

const Home: React.FC = () => {
  const handleItemClick = () => {
    alert('Item was clicked!');
  };
  return (
  
    <IonContent className="ion-padding">
      <IonItem button onClick={handleItemClick}>
        <IonLabel>Click Me</IonLabel>
      </IonItem>
    </IonContent>

);
};

export default Home;
