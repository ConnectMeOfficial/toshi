import React from 'react';
import { IonButton, IonInput, IonItem, IonList, IonHeader, IonContent, IonButtons, IonBackButton, IonNavLink, IonToolbar, IonTitle, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

import ConnectMe from './page-three';

function Registro() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle style={{ fontSize: '2em' }}>ConnectMe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '2em', marginBottom: '20px', textAlign: 'center' }}>Registro</h1>

        <IonList style={{ maxWidth: '500px', margin: '0 auto' }}>
          <IonItem lines="full" style={{ marginBottom: '15px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Nombres</IonLabel>
            <IonInput placeholder="Enter text" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '15px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Apellidos</IonLabel>
            <IonInput placeholder="Enter text" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '15px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Género</IonLabel>
            <IonSelect placeholder="Selecciona tu género" style={{ fontSize: '1.5em' }}>
              <IonSelectOption value="male">Masculino</IonSelectOption>
              <IonSelectOption value="female">Femenino</IonSelectOption>
              <IonSelectOption value="other">Otro</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '15px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Correo electrónico</IonLabel>
            <IonInput type="email" placeholder="email@domain.com" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '15px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Contraseña</IonLabel>
            <IonInput type="password" placeholder="password" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>

          <IonItem lines="full" style={{ marginBottom: '15px' }}>
            <IonLabel position="stacked" style={{ fontSize: '2em' }}>Número de teléfono</IonLabel>
            <IonInput type="tel" placeholder="888-888-8888" style={{ fontSize: '1.5em' }}></IonInput>
          </IonItem>
        </IonList>
        <IonNavLink routerDirection="forward" component={() => <ConnectMe />}>
          <IonButton style={{ padding: '20px', fontSize: '1.5em', fontWeight: 'bold', marginTop: '20px', float: 'right' }}>
            Crear cuenta
          </IonButton>
        </IonNavLink>
      </IonContent>
    </>
  );
}

export default Registro;
