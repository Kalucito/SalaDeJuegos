import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent {
  abecedario: string[] = [];
  abecedarioAux: string[] = [];
  letraSeleccionada: string = "";
  intentos: number = 0;
  horca: number = 1;
  palabraActual: string = "";
  palabraActualAux!: string[];
  deshabilitarLetras: boolean = false;
  palabrasSimples: string[] = [
    'casa', 'gato', 'perro', 'mesa', 'silla', 'flor', 'agua', 'sol', 'luna', 'mar',
    'viento', 'fuego', 'tierra', 'cielo', 'nube', 'arbol', 'piedra', 'lago', 'rio', 'nieve',
    'montaña', 'valle', 'bosque', 'prado', 'jardín', 'campo', 'ciudad', 'puente', 'calle', 'camino',
    'coche', 'tren', 'barco', 'avion', 'bici', 'libro', 'papel', 'pluma', 'bolsa', 'reloj',
    'puerta', 'ventana', 'pared', 'techo', 'suelo', 'cama', 'almohada', 'manta', 'armario', 'espejo'
  ];

  private dialog = inject(DialogService);

  ngOnInit(): void {
    this.generarAbecedario();
    this.elegirPalabra();
  }

  generarAbecedario(): void {
    for (let i = 97; i <= 122; i++) {
      this.abecedario.push(String.fromCharCode(i));
      if(i == 110){
        //Agrego la ñ
        this.abecedario.push(String.fromCharCode(241));
      }
    } 
    this.abecedarioAux = this.abecedario;
  }

  seleccionarLetra(letra:string){
    let flag = false;
    let flagWin = true;
    this.letraSeleccionada = letra;
    
    if(this.abecedarioAux.includes(letra))
      {
        //Logica de Revisión de letra.
        for (let i = 0; i < this.palabraActual.length; i++){
          if (this.palabraActual[i] === letra) {
            this.palabraActualAux[i] = letra;
            flag = true;
          } 
          if(this.palabraActualAux[i] == '_'){
            flagWin = false;
          }
        }
        
        if (!flag){
          this.intentos ++;
          this.horca ++;
        }
        
        if(this.intentos == 6){
          this.abecedarioAux = this.abecedario;
          this.estaSeleccionada(letra);
          this.openDialog(1);
        }
        
        if (flagWin){
          this.abecedarioAux = this.abecedario;
          this.estaSeleccionada(letra);
          this.openDialog(2);
        }
      }

      this.abecedarioAux = this.abecedarioAux.filter(letter => letter !== this.letraSeleccionada);
    }

  estaSeleccionada(letter: string): boolean{
    return !this.abecedarioAux.includes(letter);
  }

  elegirPalabra()
  {
    this.deshabilitarLetras = false;
    this.intentos = 0;
    this.horca = 1;
    this.letraSeleccionada = "";
    this.abecedarioAux = [...this.abecedario];

    let indice = Math.floor(Math.random() * this.palabrasSimples.length);
    this.palabraActual = this.palabrasSimples[indice];
    this.palabraActualAux = this.palabraActual.split('').map(() => '_');
  }

  openDialog(caso:number){
    this.deshabilitarLetras = true;
    switch(caso)
    {
      case 1:
        this.dialog.openDialog({tittle: 'PERDISTE', content: 'No conseguiste ningún punto. No te rindas!', img:'../../../assets/derrota.png', retryAction:() => this.elegirPalabra(), btn: 'Jugar de Nuevo'});
        break;
      case 2:
        this.dialog.openDialog({tittle: 'FELICITACIONES', content: `Lograste adivinar la palabra!` , img:'../../../assets/victoria.png', retryAction:() => this.elegirPalabra(),btn: 'Jugar de Nuevo'});
        break;
    }
   }

}
