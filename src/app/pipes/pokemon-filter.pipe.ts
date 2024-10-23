import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon'; // Importe o tipo

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {
  transform(pokemons: Pokemon[], searchTerm: string): Pokemon[] {
    if (!pokemons || !searchTerm) {
      return pokemons; // Retorna todos se não houver termo de busca
    }
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}