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
import { DialogService } from '../../services/dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, FormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  juegoSeleccionado! : number;

  userObs$!: Observable<User | null>;
  userValue!: User | null;
  mostrarDescripcion: boolean = false;
  descripcion :string = ""; 
  juegoTitulo:string = ""; 

  private dialog = inject(DialogService);
  private authservice = inject(FirebaseAuthService);
  private router = inject(Router);


  constructor()
  {
    this.userObs$ = this.authservice.getUser();
    this.userObs$.subscribe((response) => {
      this.userValue = response;
    })
  }


  seleccionarImagen(numeroImagen: number): void {
    this.juegoSeleccionado = numeroImagen;
    this.jugar();
  }

  jugar()
  {
    if(this.userValue?.email != null){
        switch(this.juegoSeleccionado){
          case 1:
            this.router.navigateByUrl('/preguntados');
            break;
          case 2:
            this.router.navigateByUrl('/mayormenor');
            break;
          case 3:
            this.router.navigateByUrl('/ahorcado');
            break;
          case 4:
            this.router.navigateByUrl('/resistenciazombie');
            break;
        }
      }
      else{
        this.openDialog();
      }
  }

  mostrarDesc(numDesc:number)
  {
    switch(numDesc)
    {
      case 1:
        this.juegoTitulo = "Preguntados";
        this.descripcion = "¡Demuestra tu conocimiento Pokémon! Adivina el nombre del Pokémon a partir de su imagen antes de que se acabe el tiempo. Cada acierto te lleva a la siguiente ronda. ¿Cuántos puedes adivinar?";
        break;
      case 2:
        this.juegoTitulo = "Mayor o Menor";
        this.descripcion = "¡Pon a prueba tu intuición en este emocionante juego de cartas! Adivina si la siguiente carta será mayor, menor o igual que la actual. Cada acierto te lleva más lejos en el juego. ¿Hasta dónde puedes llegar con tus predicciones?";
        break;
      case 3:
        this.juegoTitulo = "Ahorcado";
        this.descripcion = "Adivina la palabra oculta letra por letra antes de que el dibujo del ahorcado se complete. Cada error te acerca al final del juego. ¿Cuántas palabras puedes adivinar antes de quedar colgado? ";
        break;
      case 4:
        this.juegoTitulo = "Resistencia Zombie";
        this.descripcion = "¡Sobrevive al apocalipsis zombie! Dispara a los zombies que aparecen en la pantalla antes de que te alcancen. Cada acierto aumenta tu puntuación, pero cuidado, si fallas perderás una vida ¡Atrévete a enfrentar la horda!";
        break;
      
    }
    this.mostrarDescripcion = true;
  }

  ocultarDesc(){
    this.mostrarDescripcion = false;
  }

  openDialog(){
    this.dialog.openDialog({tittle: 'ALTO AHÍ!', content: `Debes iniciar sesión para poder jugar.`, img:'../../../assets/stop.png', retryAction:() => this.navLogin(), btn: 'Ir al login'});
  }

  navLogin()
  {
    this.router.navigateByUrl('/login');
  }


  
  

}
