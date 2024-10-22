import { Component, Input } from '@angular/core';
import { PokemonDetails } from '../../interfaces/pokemon-details';
import { PokemonCardData } from '../../interfaces/pokemon-card-data';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class PokemonCardComponent {
  @Input() pokemonDetails: PokemonDetails | undefined;
  

  data: PokemonCardData = {
    imageId: "pDGNBK9A0sk",
    state: "default",
  };

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}
