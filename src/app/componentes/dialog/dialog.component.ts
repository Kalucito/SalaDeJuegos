import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../interfaces/dialog-data';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatButton],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:DialogData, private router: Router, dialogRef: MatDialogRef<DialogComponent>)
  {

  }

  onMenuClick(): void {
    this.router.navigateByUrl('/');
  }

  onRetryClick(): void {
    if (this.data.retryAction) {
      this.data.retryAction();
    }
  }

  
}
