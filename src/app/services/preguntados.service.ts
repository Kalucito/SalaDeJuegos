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
    return this.http.get<Pokemon>(http).pipe(
      catchError((e) => {
        console.log(e);
        return of (undefined);
      })
    )
  }

  getOpciones(): Observable<PokeNames[]> {
    let http = "https://pokeapi.co/api/v2/pokemon?limit=300";    
    return this.http.get<any>(http).pipe(
      map(response => response.results)
      
    );
  }

    
}
