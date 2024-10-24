import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonTypes } from '../../interfaces/pokemon-types';
import { PokemonType } from '../../interfaces/pokemon-type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    pokemonService = inject(PokemonService);
    pokemonTypes: PokemonType[] = [];

    ngOnInit(): void {
      this.getPokemonTypes();
    }
    
    getPokemonTypes() {
      this.pokemonService.getAllPokemonTypes().subscribe((res: PokemonTypes) => {
        this.pokemonTypes = res.results;
      });
    }
}
