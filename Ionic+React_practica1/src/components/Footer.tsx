import React from 'react';
import {IonFooter, IonToolbar,IonButton } from '@ionic/react';

const Footer: React.FC = () => {
  return (
    <IonFooter>
    <IonToolbar>
      <IonButton expand="full">Footer Button</IonButton>
    </IonToolbar>
  </IonFooter>
);
}
export default Footer;