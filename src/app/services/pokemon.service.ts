import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonTypes } from '../interfaces/pokemon-types';
import { PokemonList } from '../interfaces/pokemon-list';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  http = inject(HttpClient);

  getPokemon(offset: number = 0, limit: number = 20): Observable<PokemonList>{
    const url = `${this.baseUrl}/pokemon/?offset=${offset}&limit=${limit}`
    return this.http.get<PokemonList>(url);
  }
  
  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + '/pokemon/' + name);
  }

  getAllPokemonTypes(): Observable<PokemonTypes> {
    return this.http.get<PokemonTypes>(this.baseUrl + '/type?offset=0&limit=22');
  }
}
