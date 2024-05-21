import { Component, Output, EventEmitter, inject} from '@angular/core';
import { usuario } from '../../../models/usuario.model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { FirebaseAuthService } from '../../../services/firebase-auth.service';
import { UserInterface } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userMail: string = "";
  userPass : string = "";

  private router = inject(Router);

  constructor(public auth: Auth, private firestore: Firestore){
  }

  // Login()
  // {
  //   signInWithEmailAndPassword(this.auth, this.userMail, this.userPass).then((res) => {
  //     let col = collection(this.firestore, "logins");
  //     addDoc(col, {fecha : new Date(), "user" : this.userMail});
  //   }).catch((e) => {
  //     switch(e.code)
  //     {
  //       case "":
  //         break;
  //       default:
  //         break;
  //     }
  //   })
  // }

  private authService = inject(FirebaseAuthService);

  async logIn():Promise<void>{
    const credential : UserInterface = {
      email: this.userMail || '',
      password : this.userPass || '',
    }
    try{
      await this.authService.logIn(credential)
      this.router.navigateByUrl('/');
    } catch (e)
    {
      console.log(e);
    }

  }

  log()
  {
    const credential : UserInterface = {
      email: this.userMail || '',
      password : this.userPass || '',
    }
    
    this.authService.logIn(credential).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      }
    })

    

    
  }

}
