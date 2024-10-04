// File: MyComponent.tsx
import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonActionSheet } from '@ionic/react';

const Menu1: React.FC = () => {
  
    const [present, dismiss] = useIonActionSheet();

    const showActionSheet = () => {
      present({
        header: 'Actions',
        buttons: [
          {
            text: 'Option 1',
            handler: () => {
              console.log('Option 1 clicked');
            },
          },
          {
            text: 'Option 2',
            handler: () => {
              console.log('Option 2 clicked');
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            },
          },
        ],
      });
    };
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Action Sheet Example</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton onClick={showActionSheet}>Show Action Sheet</IonButton>
        </IonContent>
      </IonPage>
    );
  };

  /*
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Action Sheet Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={showActionSheet}>Show Action Sheet</IonButton>
      </IonContent>
    </IonPage>
  );
};

  );
}
  */
export default Menu1;