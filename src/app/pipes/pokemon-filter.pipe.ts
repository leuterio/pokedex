import { Pipe, PipeTransform } from '@angular/core';
import { PokemonDetails } from '../interfaces/pokemon-details';

@Pipe({
  name: 'pokemonFilter',
  standalone: true
})
export class PokemonFilterPipe implements PipeTransform {
  transform(pokemons: PokemonDetails[], searchTerm: string): PokemonDetails[] {
    if (!pokemons || !searchTerm) {
      return pokemons; // Retorna todos se não houver termo de busca
    }
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}