import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../interfaces/mensaje.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  firestore = inject(Firestore);

  guardarChats(mensaje: Mensaje)
  {
    const col = collection(this.firestore, 'chats');
    return addDoc(col, mensaje);
  }

  obtenerChats(): Observable<Mensaje[]>
  {
    const col = collection(this.firestore, 'chats');
    const observable = collectionData(col);
    return observable as Observable<Mensaje[]>;
  }
}

