import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"sala-de-juegos-6a481","appId":"1:1060868848914:web:bb147d11e696e109e3c7cb","storageBucket":"sala-de-juegos-6a481.appspot.com","apiKey":"AIzaSyCWYxD4F04BE-NbyO3jTbDHwXywHDa0qZo","authDomain":"sala-de-juegos-6a481.firebaseapp.com","messagingSenderId":"1060868848914"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
