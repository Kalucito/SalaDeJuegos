import { Injectable } from '@angular/core';
import { inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user, authState, UserCredential, } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import firebase from 'firebase/app';
import { usuario } from '../models/usuario.model';
import { FirebaseAppModule } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  private auth:Auth = inject(Auth);
  obs!: Observable<User | null>;
  // readonly authState$ = authState(this.auth);

  register(userCredential:UserInterface): Promise<UserCredential>{
    return createUserWithEmailAndPassword(this.auth, userCredential.email, userCredential.password);
  }

  logIn(userCredential:UserInterface):Observable<void>{
    // signInWithEmailAndPassword(this.auth, userCredential.email, userCredential.password);

    const promise = signInWithEmailAndPassword(this.auth, userCredential.email, userCredential.password).then(()=>{
    })
    return from(promise);
  }

  logOut():Promise<void>
  {
    return this.auth.signOut();
  }
  
  getUser(){
    // return authState;
    this.obs = authState(this.auth);
    return this.obs;
    // authState(this.auth).subscribe((response) => {
    //   return response;
    // })

    // const promise = authState
  }
  // constructor() { }
}
