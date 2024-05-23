import { Component, EventEmitter, inject} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Event } from '@angular/router';
import { FirebaseAuthService} from '../../services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { authState, Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NavComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  
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

  async logOut(): Promise<void>{
    try{
      await this.authservice.logOut();
    }catch(e){
      console.log(e);
    }
  }

  test()
  {
    // this.obs.subscribe((response) => {
    console.log(this.userValue);
      // })

    // authState(this.auth).subscribe((response) => {
    //   console.log(response);
    // })
  }

}
