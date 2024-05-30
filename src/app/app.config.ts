import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"sala-de-juegos-6a481","appId":"1:1060868848914:web:bb147d11e696e109e3c7cb","storageBucket":"sala-de-juegos-6a481.appspot.com","apiKey":"AIzaSyCWYxD4F04BE-NbyO3jTbDHwXywHDa0qZo","authDomain":"sala-de-juegos-6a481.firebaseapp.com","messagingSenderId":"1060868848914"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideHttpClient(), provideAnimationsAsync(),{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  importProvidersFrom(MatDialogModule, MatProgressSpinnerModule, MatButtonModule)]
};
