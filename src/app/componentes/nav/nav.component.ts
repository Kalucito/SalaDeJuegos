import { Component, EventEmitter, inject} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Event, Router, NavigationStart } from '@angular/router';
import { FirebaseAuthService} from '../../services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { User } from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';
import { authState, Auth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NavComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  private navigationSubscription: Subscription |null = null;
  userObs$!: Observable<User | null>;
  userValue!: User | null;

  private authservice = inject(FirebaseAuthService);

  constructor(private dialog: MatDialog, private router: Router, public miDialog: MatDialog)
  {
    this.userObs$ = this.authservice.getUser();
    this.userObs$.subscribe((response) => {
      this.userValue = response;
    })
  }

  ngOnInit(): void {
    this.navigationSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.dialog.closeAll();
        this.miDialog.closeAll();
      }
    });
  }

  async logOut(): Promise<void>{
    try{
      await this.authservice.logOut();
    }catch(e){
      console.log(e);
    }
    this.router.navigateByUrl('/home');
    
  }

}
