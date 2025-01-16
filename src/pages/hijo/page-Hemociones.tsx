import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

function Hemociones() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Emociones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Emociones</h1>
      </IonContent>
    </>
  );
}

export default Hemociones;