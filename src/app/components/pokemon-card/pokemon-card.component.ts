import { Component, Input } from '@angular/core';
import { PokemonDetails } from '../../interfaces/pokemon-details';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input() pokemonDetails: PokemonDetails | undefined;
}
