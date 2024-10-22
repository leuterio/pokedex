import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
  providers:  [ PokemonService ]
})

export class PokemonListComponent implements OnInit {
  pokemonService = inject(PokemonService);
  pokemon: Pokemon[] = [];
  pokemonName: String = '';
  pokemonDetails: any[] = [];
  offset: number = 0;
  limit: number = 20;
  nextPageUrl: string | null = null;
  previousPageUrl: string | null = null;

  
  ngOnInit(): void {
    this.getPokemonService();
  }
  
  getPokemonService() {
    this.pokemonService.getPokemon(this.offset, this.limit).pipe(
      switchMap((res: any) => {
        this.nextPageUrl = res.next;
        this.previousPageUrl = res.previous;
        this.pokemon = res.results;
        // Após obter a lista de pokemons, chama a função que vai buscar os details
        return this.getPokemonDetails(this.pokemon);
      })
    ).subscribe((details: any[]) => {
      // Aqui você recebe todos os details
      this.pokemonDetails = details;
    });
  }

  getPokemonByName(name: String) {
    return this.pokemonService.getPokemonByName(name).subscribe((res: any) => {
      console.log(res);
    });
  }

  getPokemonDetails(pokemons: Pokemon[]) {
    // Cria uma array de observables para obter os details de cada pokemon
    const spriteRequests = pokemons.map(pokemon =>
      this.pokemonService.getPokemonByName(pokemon.name).pipe(
        map((res: any) => res) // Mapeia para pegar apenas os details
      )
    );
    
    // Retorna um forkJoin que espera todas as requisições de details serem completadas
    return forkJoin(spriteRequests);
  }

  nextPage(): void {
    if (this.nextPageUrl) {
      this.offset += this.limit; // Incrementa o offset
      this.getPokemonService();
    }
  }

  previousPage(): void {
    if (this.nextPageUrl) {
      this.offset -= this.limit; // Incrementa o offset
      this.getPokemonService();
    }
  }
}
