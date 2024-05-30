import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spiner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './spiner.component.html',
  styleUrl: './spiner.component.css'
})
export class SpinerComponent {

counter: number = 3;
interval: any;

constructor(private dialogRef: MatDialogRef<SpinerComponent>) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.counter > 1) {
        this.counter--;
      } else {
        this.counter = 0;
        clearInterval(this.interval);
        this.dialogRef.close();
      }
    }, 1000);
  }
}
