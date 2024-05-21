import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login-auth/login.component';
import { RegisterAuthComponent } from './componentes/login/register-auth/register-auth.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutusComponent } from './componentes/aboutus/aboutus.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterAuthComponent},
    { path: 'aboutus', component: AboutusComponent},
];
