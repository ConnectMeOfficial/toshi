import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

function ConnectMe() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" className="ion-padding">
        <h1>ConnectMe</h1>
      </IonContent>
    </>
  );
}

export default ConnectMe;