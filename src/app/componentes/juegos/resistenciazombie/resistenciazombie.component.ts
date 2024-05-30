import { AfterViewInit, Component, Inject, OnDestroy, inject, ViewChild } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef,  } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { SpinerComponent } from '../../spiner/spiner.component';
import { VersionGroupDetail } from '../../../interfaces/pokemon.interface';

@Component({
  selector: 'app-resistenciazombie',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './resistenciazombie.component.html',
  styleUrl: './resistenciazombie.component.css'
})
export class ResistenciazombieComponent implements AfterViewInit, OnDestroy{

  private container!: HTMLElement;
  private bloodSpot!: HTMLElement;
  private zombies: HTMLDivElement[] = [];
  vidas: number = 3;
  puntos: number = 0;
  private timeSpawn = 2000;
  private minSpawnTime: number = 500; // Tiempo mínimo entre apariciones
  private spawnReductionRate: number = 100; // Reducir 100 ms cada vez
  private spawnIntervalId: any;
  botonDeshabilitado : boolean = false;

  //spiner
  countdown: number = 3;
  showSpinner: boolean = false;
  constructor(public miDialog: MatDialog) {}


  private dialog = inject(DialogService);

  ngAfterViewInit(): void {
    this.container = document.querySelector('#divTotal') as HTMLElement;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.vidas = 0;
    if (this.spawnIntervalId) {
      clearInterval(this.spawnIntervalId);
      this.miDialog.closeAll();
    }
  }

  capturarClick(event:MouseEvent)
  {
    // const x = event.clientX;
    // const y = event.clientY; 
    // this.bloodSpot.style.left = `${x}px`;
    // this.bloodSpot.style.top = `${y}px`;

    if ((event.target as HTMLElement).classList.contains('zombie')) {
      this.puntos++;
      (event.target as HTMLElement).remove();
      this.adjustSpawnInterval();
    }
  }


  spawnZombie(){    
    console.log(this.vidas);
    
    if (this.vidas > 0) {
      // const zombie = document.createElement('img');
      const zombie = document.createElement('div');
      zombie.setAttribute('class', 'zombie');
      // zombie.setAttribute('src', '../../../../assets/resistenciazombie/zombie.png');
      zombie.setAttribute('draggable', 'false');


      // background-image: url('../../../../assets/resistenciazombie/fondo.webp');
      // background-repeat: no-repeat;
      // background-size: cover;
      this.container.appendChild(zombie);
      this.zombies.push(zombie);
    
      
      const height =this.getRandom(240, 480); 
      const width = height * 0.625;

      const randLeft =this.getRandom(0, 160); 

      // Calcula el top de modo que las imágenes más pequeñas estén más arriba
      const maxHeight = 480; // Altura máxima conocida
      const minHeight = 240; // Altura mínima conocida

      // A menor altura, mayor top
      const minTop = 45; // 45vh para la altura mínima
      const maxTop = 49; // 50vh para la altura máxima
      const topRange = maxTop - minTop; // Rango de variación de top
      const heightProportion = (height - minHeight) / (maxHeight - minHeight);
      const calculatedTop = minTop + (heightProportion * topRange);
      
      zombie.style.backgroundImage = "url('../../../../assets/resistenciazombie/zombie.png')";
      zombie.style.backgroundSize = "cover";
      zombie.style.backgroundRepeat = "no-repeat";

      zombie.style.position = 'absolute';
      zombie.style.top = `${calculatedTop}vh`;
      zombie.style.left = `${randLeft}vh`;
      zombie.style.width = `${width}px`;
      zombie.style.height = `${height}px`;
      zombie.style.userSelect = 'none';
      zombie.style.border = 'none';
      zombie.style.padding = '0';
      zombie.style.margin = '0';
      zombie.style.boxSizing = 'border-box';

      setTimeout(() => {
        if (zombie.parentNode) {
          zombie.parentNode.removeChild(zombie);
          this.vidas--;
          if(!(this.vidas > 0))
          {
            clearInterval(this.spawnIntervalId);
            this.openDialog(1);
            this.zombies.forEach(e => {
              e.parentNode?.removeChild(e);
            });
          }
        }
      }, 1000);
      

    }else{


    }

  }

  getRandom(min: number, max: number): number
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  play(): void {
    this.botonDeshabilitado = true;
    this.vidas = 3;

    const dialogRef = this.miDialog.open(SpinerComponent, {
      width: '50vh',
      disableClose: true
    });


    dialogRef.afterClosed().subscribe(() => {
      if(this.vidas > 0){
        this.puntos = 0;
        this.timeSpawn = 2000;
        this.spawnZombie();
        this.spawnIntervalId = setInterval(this.spawnZombie.bind(this), this.timeSpawn);
      }
    });
  }

  private adjustSpawnInterval(): void {
    if (this.timeSpawn > this.minSpawnTime) {
      this.timeSpawn -= this.spawnReductionRate;
      clearInterval(this.spawnIntervalId);
      this.spawnIntervalId = setInterval(this.spawnZombie.bind(this), this.timeSpawn);
    }
  }

  openDialog(caso:number){
    this.botonDeshabilitado = true;

    switch(caso)
    {
      case 1:
        if(this.puntos > 0)
          {
            this.dialog.openDialog({tittle: 'JUEGO TERMINADO', content: `Conseguiste matar: ${this.puntos} zombies.`, img:'../../../assets/victoria.png', retryAction:() => this.play(), btn: 'Jugar de Nuevo'});
          }
          else{
            this.dialog.openDialog({tittle: 'PERDISTE', content: 'Sigue intentando. No te rindas!', img:'../../../assets/derrota.png', retryAction:() => this.play(), btn: 'Jugar de Nuevo'});
          }
        break;
      case 2:
        this.dialog.openDialog({tittle: 'ESTAS LISTO?', content: 'Oprime comenzar para iniciar el juego', img:'../../../assets/estaslisto.png', retryAction:() => this.play(), btn: 'Comenzar'});
        break;
    }
   }


}


