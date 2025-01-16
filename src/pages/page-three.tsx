import React from 'react';
import { IonButton, IonNavLink, IonHeader, IonContent, IonToolbar, IonTitle } from '@ionic/react';
import Hperfil from './././hijo/page-Hperfil';
import Havatar from './././hijo/page-Havatar';
import Hchat from './././hijo/page-Hchat';
import Hemociones from './././hijo/page-Hemociones';
import Hfamilia from './././hijo/page-Hfamilia';
import Hajustes from './././hijo/page-ajuste';

function ConnectMe() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>hola mundo</h1>
        <IonNavLink routerDirection="forward" component={() => <Hperfil/>}>
          <IonButton>Perfil</IonButton>
        </IonNavLink>
        <IonNavLink routerDirection="forward" component={() => <Havatar/>}>
          <IonButton>Avatar</IonButton>
        </IonNavLink>
        <IonNavLink routerDirection="forward" component={() => <Hchat/>}>
          <IonButton>Chat</IonButton>
        </IonNavLink>
        <IonNavLink routerDirection="forward" component={() => <Hemociones/>}>
          <IonButton>Emociones</IonButton>
        </IonNavLink>
        <IonNavLink routerDirection="forward" component={() => <Hfamilia/>}>
          <IonButton>Familia</IonButton>
        </IonNavLink>
        <IonNavLink routerDirection="forward" component={() => <Hajustes/>}>
          <IonButton>Ajustes</IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default ConnectMe;


