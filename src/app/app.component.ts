import { Component, EventEmitter, inject} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Event } from '@angular/router';
import { FirebaseAuthService} from './services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { authState, Auth } from '@angular/fire/auth';
import { NavComponent } from "./componentes/nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NavComponent]
})
export class AppComponent {
  title = 'SalaDeJuegos';



}