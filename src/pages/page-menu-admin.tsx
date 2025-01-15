import React from 'react';
import { IonBackButton, IonButtons, IonMenu, IonMenuButton, IonIcon, IonPage, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';

function AdminMenu() {
  return (
    <>
    <IonMenu side="end" contentId="main-content">
          <IonHeader>
            <IonToolbar>
            <IonTitle>MENU</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          </IonContent>
          </IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="black" className="ion-padding">
        <h1>ConnectMe</h1>
      </IonContent>
    </>
  );
}

export default AdminMenu;