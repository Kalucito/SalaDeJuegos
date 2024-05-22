import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { inject, signal } from '@angular/core';
import {FirebaseAuthService} from '../../services/firebase-auth.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { user, authState, Auth } from '@angular/fire/auth';
import { usuario } from '../../models/usuario.model';
import { User } from 'firebase/auth';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imagenSeleccionada! : number;

  userObs$!: Observable<User | null>;
  userValue!: User | null;

  private authservice = inject(FirebaseAuthService);

  constructor()
  {
    // this.user$ = this.authservice.getUser();
    this.userObs$ = this.authservice.getUser();
    this.userObs$.subscribe((response) => {
      this.userValue = response;
    })
  }


  // // private auth:Auth = inject(Auth);
  
  // authState$ = this.authservice.getUser();

  seleccionarImagen(numeroImagen: number): void {
    this.imagenSeleccionada = numeroImagen;
  }

  // async logOut(): Promise<void>{
  //   try{
  //     await this.authservice.logOut();
  //   }catch(e){
  //     console.log(e);
  //   }
    
  // }

  test()
  {
    console.log(this.authservice.getUser());
  }

}
