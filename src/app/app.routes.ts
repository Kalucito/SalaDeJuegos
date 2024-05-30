import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login-auth/login.component';
import { RegisterAuthComponent } from './componentes/login/register-auth/register-auth.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutusComponent } from './componentes/aboutus/aboutus.component';
import { AhorcadoComponent } from './componentes/juegos/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './componentes/juegos/preguntados/preguntados.component';
import { MayormenorComponent } from './componentes/juegos/mayormenor/mayormenor.component';
import { ResistenciazombieComponent } from './componentes/juegos/resistenciazombie/resistenciazombie.component';
import { ChatComponent } from './componentes/chat/chat.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterAuthComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'ahorcado', component: AhorcadoComponent},
    { path: 'mayormenor', component: MayormenorComponent},
    { path: 'preguntados', component: PreguntadosComponent},
    { path: 'resistenciazombie', component: ResistenciazombieComponent},
    { path: 'chat', component: ChatComponent},
];
