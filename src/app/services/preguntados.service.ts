import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { PokeNames, Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntadosService {

  constructor(private http: HttpClient) { }
  // private http:HttpClient = inject(HttpClient);

  getRandom(min: number, max: number): number
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getPokemon(): Observable<Pokemon | undefined>{
    let http = "https://pokeapi.co/api/v2/pokemon/" + this.getRandom(1,300).toString();
    console.log(http);
    return this.http.get<Pokemon>(http).pipe(
      catchError((e) => {
        console.log(e);
        return of (undefined);
      })
    )
  }

  // getOpciones()
  // {
  //   let http = "https://pokeapi.co/api/v2/pokemon?limit=300";
  //   console.log(http);
  //   return this.http.get<PokeNames[]>(http).pipe(
  //     catchError((e) => {
  //       console.log(e);
  //       return of (undefined);
  //     })
  //   )
  // }

  getOpciones(): Observable<PokeNames[]> {
    let http = "https://pokeapi.co/api/v2/pokemon?limit=300";
    console.log(http);    
    return this.http.get<any>(http).pipe(
      map(response => response.results)
    );
  }

  // getAllPokemonNames(): Observable<string[]> {
  //   return this.http.get<Pokemon[]>("https://pokeapi.co/api/v2/pokemon?limit=300").pipe(
  //     map(response => response.map((pokemon: { name: any; }) => pokemon.name)), // Map se aplica aquí
  //     catchError((error) => {
  //       console.error(error);
  //       return of([]);
  //     })
  //   );
  // }

    
}
