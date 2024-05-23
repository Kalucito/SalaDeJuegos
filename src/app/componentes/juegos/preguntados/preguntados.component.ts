import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PreguntadosService } from '../../../services/preguntados.service';
import { HttpClientModule } from '@angular/common/http';
import { PokeNames, Pokemon, Sprites } from '../../../interfaces/pokemon.interface';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {
  
  pokemon!: Pokemon | undefined;
  pokemons!: PokeNames[] | undefined;
  opcionUno!: string;
  opcionDos!: string;
  opcionTres!: string;
  opcionCuatro!: string;
  pokemonObs$! :Observable<Pokemon | undefined>;

  @ViewChild('myDiv') myDiv!: ElementRef;

  constructor(private pokemonService: PreguntadosService){
    this.play();
  }
  
  play()
  {
    this.pokemonObs$ = this.pokemonService.getPokemon();

    this.pokemonObs$.subscribe((response) =>{
      this.pokemon = response;
      this.pokemonService.getOpciones().subscribe((response) =>{
        this.pokemons = response;
        this.opcionesRandom();
      });
    });

  }

  opcionesRandom(): void {

    const filteredPokemons = this.pokemons!.filter(poke => poke.name.toLowerCase() !== this.pokemon?.name);

    //Mezclar
    const shuffled = filteredPokemons.sort(() => 0.5 - Math.random());
    //Selecciono 3
    const selectedOptions = shuffled.slice(0, 3);
    //Pusheo la opción correcta
    selectedOptions.push({ name: this.pokemon!.name ?? '', url: '' });
    //Mezclar
    const finalOptions = selectedOptions.sort(() => 0.5 - Math.random());
    
    if (finalOptions.length >= 4) {
      this.opcionUno = finalOptions[0].name;
      this.opcionDos = finalOptions[1].name;
      this.opcionTres = finalOptions[2].name;
      this.opcionCuatro = finalOptions[3].name;
    } else {
      console.error("No hay suficientes opciones disponibles.");
    }
  }

  verificarRespuesta(opcion :number)
  {
    switch(opcion)
    {
      case 1:
        if(this.opcionUno == this.pokemon?.name)
          {
            alert("Correcto");
          }
          else{
            alert("Mal");
          }
        break;
        break;
      case 2:
        if(this.opcionDos == this.pokemon?.name)
          {
            alert("Correcto");
          }
          else{
            alert("Mal");
          }
        break;
        break;
      case 3:
        if(this.opcionTres == this.pokemon?.name)
          {
            alert("Correcto");
          }
          else{
            alert("Mal");
          }
        break;
        break;
      case 4:
        if(this.opcionCuatro == this.pokemon?.name)
          {
            alert("Correcto");
          }
          else{
            alert("Mal");
          }
        break;
    }
  }





  changeContent() {
      this.myDiv.nativeElement.innerHTML = 'Contenido modificado';
  }


}
