import { Component, EventEmitter, inject} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Event } from '@angular/router';
import { FirebaseAuthService} from './services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { authState, Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SalaDeJuegos';
  // user$ : User | null;
  
  obs!: Observable<User | null>;

  private authservice = inject(FirebaseAuthService);
  private auth:Auth = inject(Auth);
  
  

  constructor()
  {
    // this.user$ = this.authservice.getUser();
    this.obs = this.authservice.getUser();
  }

  
  
  async logOut(): Promise<void>{
    try{
      await this.authservice.logOut();
    }catch(e){
      console.log(e);
    }
    
  }

  test()
  {
    this.obs.subscribe((response) => {
        console.log(response);
      })

    // authState(this.auth).subscribe((response) => {
    //   console.log(response);
    // })
  }


}