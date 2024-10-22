import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PokemonList } from '../interfaces/pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  http = inject(HttpClient);

  getPokemon(offset: number = 0, limit: number = 20){
    const url = `${this.baseUrl}/pokemon/?offset=${offset}&limit=${limit}`
    return this.http.get(url);
  }
  
  getPokemonByName(name: String) {
    return this.http.get(this.baseUrl + '/pokemon/' + name);
  }
}
