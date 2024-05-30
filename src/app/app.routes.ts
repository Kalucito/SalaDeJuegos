import { Routes } from '@angular/router';
// import { LoginComponent } from './componentes/login/login-auth/login.component';
// import { RegisterAuthComponent } from './componentes/login/register-auth/register-auth.component';
// import { HomeComponent } from './componentes/home/home.component';
// import { AboutusComponent } from './componentes/aboutus/aboutus.component';
// import { AhorcadoComponent } from './componentes/juegos/ahorcado/ahorcado.component';
// import { PreguntadosComponent } from './componentes/juegos/preguntados/preguntados.component';
// import { MayormenorComponent } from './componentes/juegos/mayormenor/mayormenor.component';
// import { ResistenciazombieComponent } from './componentes/juegos/resistenciazombie/resistenciazombie.component';
// import { ChatComponent } from './componentes/chat/chat.component';

// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: "full" },
//     { path: 'home', component: HomeComponent},
//     { path: 'login', component: LoginComponent},
//     { path: 'register', component: RegisterAuthComponent},
//     { path: 'aboutus', component: AboutusComponent},
//     { path: 'ahorcado', component: AhorcadoComponent},
//     { path: 'mayormenor', component: MayormenorComponent},
//     { path: 'preguntados', component: PreguntadosComponent},
//     { path: 'resistenciazombie', component: ResistenciazombieComponent},
//     { path: 'chat', component: ChatComponent},
// ];

export const routes: Routes = [
    {
        path: "login",
        loadComponent: () => import('./componentes/login/login-auth/login.component').then(
            (m) => m.LoginComponent,
        ),
    },
    {
        path: "home",
        loadComponent: () => import('./componentes/home/home.component').then(
            (m) => m.HomeComponent,
        ),
    },
    {
        path: "aboutus",
        loadComponent: () => import('./componentes/aboutus/aboutus.component').then(
            (m) => m.AboutusComponent,
        ),
    },
    {
        path: "register",
        loadComponent: () => import('./componentes/login/register-auth/register-auth.component').then(
            (m) => m.RegisterAuthComponent,
        ),
    },
    {
        path: "ahorcado",
        loadComponent: () => import('./componentes/juegos/ahorcado/ahorcado.component').then(
            (m) => m.AhorcadoComponent,
        ),
    },
    {
        path: "mayormenor",
        loadComponent: () => import('./componentes/juegos/mayormenor/mayormenor.component').then(
            (m) => m.MayormenorComponent,
        ),
    },
    {
        path: "preguntados",
        loadComponent: () => import('./componentes/juegos/preguntados/preguntados.component').then(
            (m) => m.PreguntadosComponent,
        ),
    },
    {
        path: "resistenciazombie",
        loadComponent: () => import('./componentes/juegos/resistenciazombie/resistenciazombie.component').then(
            (m) => m.ResistenciazombieComponent,
        ),
    },
    {
        path: "chat",
        loadComponent: () => import('./componentes/chat/chat.component').then(
            (m) => m.ChatComponent,
        ),
    },
    {
        path: " ",
        redirectTo: "home",
        pathMatch: "full",
    },
    {
        path: "**",
        redirectTo: "home",
        pathMatch: "full",
    },
];
