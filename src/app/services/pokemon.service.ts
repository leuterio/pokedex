import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';
  http = inject(HttpClient);

  getPokemon(){
    return this.http.get(this.apiUrl + '/pokemon/?&limit=300');
  }
  
  getPokemonByName(name: String) {
    return this.http.get(this.apiUrl + '/pokemon/' + name);
  }
}
