import { CommonModule } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Mensaje } from '../../interfaces/mensaje.interface';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, AfterViewChecked{
  @ViewChild('contenedorMensajes') private contenedorMensajes!: ElementRef;
  auxObservable$! : Observable<User | null>;
  user$! : User | null;
  mensajes? : Mensaje[] = [];
  isLoading: boolean = true;

  constructor(private chatService: ChatService, private userAuthService: FirebaseAuthService, private formB : FormBuilder)
  {
    this.auxObservable$ = this.userAuthService.getUser();
    this.auxObservable$.subscribe((r)=> 
    {
      this.user$ = r;
    })
  }


  ngOnInit(){
    this.chatService.obtenerChats().subscribe((mensajes) => {
      mensajes.sort((a, b) => a.date.localeCompare(b.date));
      this.mensajes = mensajes;
      this.isLoading = false;
    })
  }
  
  ngAfterViewChecked(): void {
    if(this.mensajes!.length > 0){
      this.scrollToBottom(); // Asegúrate de que el chat se desplaza hacia abajo al iniciar el componente
    } 
  }

  form = this.formB.nonNullable.group({
    mensaje: ['', Validators.required],
  });

  enviarMensaje() {
    const value = this.form.getRawValue();

    let fecha = new Date();

    let mensaje: Mensaje = 
    {
      texto: value.mensaje,
      mail: this.user$?.email || '',
      date: `${fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })} - ${fecha.toLocaleTimeString()}`
    };

    this.chatService.guardarChats(mensaje);
    this.form.setValue({ mensaje: '' });
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.contenedorMensajes.nativeElement.scrollTop = this.contenedorMensajes.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Error scrolling to bottom', err);
    }
  }

}

