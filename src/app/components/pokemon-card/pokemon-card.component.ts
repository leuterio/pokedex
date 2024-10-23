import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PokemonDetails } from '../../interfaces/pokemon-details';
import { PokemonCardData } from '../../interfaces/pokemon-card-data';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [NgStyle],
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
export class PokemonCardComponent implements OnInit {
  ngOnInit(): void {
    
  }
  @Input() pokemonDetails: PokemonDetails | undefined;
  data: PokemonCardData = {
    imageId: "pDGNBK9A0sk",
    state: "default",
  };
  typeColors: { [key: string]: string } = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    flying: '#A890F0'
  };

  getTypeColor(type: string): string {
    return this.typeColors[type] || '#FFF'; // Cor padrão caso o tipo não seja encontrado
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}
