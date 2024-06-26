import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../componentes/dialog/dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { DialogData } from '../interfaces/dialog-data';



@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogOpen = false;

  constructor(private matDialog: MatDialog) { }

  openDialog(data:DialogData){
    this.matDialog.open(DialogComponent, {data});
  }
  
}
