import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import {FirebaseAuthService} from '../../../services/firebase-auth.service';
import { inject, signal } from '@angular/core';
import { UserInterface } from '../../../interfaces/user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-auth.component.html',
  styleUrl: './register-auth.component.css'
})
export class RegisterAuthComponent {
    userMail : string = "";
    userPass : string = "";

    private authService = inject(FirebaseAuthService);
    private router = inject(Router);

  async register():Promise<void>{
    const credential : UserInterface = {
      email: this.userMail || '',
      password : this.userPass || '',
    }
    try{
      await this.authService.register(credential);
      this.router.navigateByUrl('/');
    } catch (e)
    {
      console.log(e);
    }

  }


  // constructor(public auth: Auth, private firestore : Firestore){
  // }

  // Register(){
  //   createUserWithEmailAndPassword(this.auth, this.userMail, this.userPass).then((res) =>{
  //     let col = collection(this.firestore, "logins");
  //     addDoc(col, {fecha : new Date(), "user" : this.userMail});
  //   }).catch((e) =>{
  //     // switch(e.code)
  //     // {
  //     //   case "":
  //     //     break;
  //     //   default:
  //     //     console.log(e.code);
  //     //     console.log(this.userMail);
  //     //     console.log(this.userPass);
  //     //     break;
  //     // }
  //   })
  // } 
  

}
