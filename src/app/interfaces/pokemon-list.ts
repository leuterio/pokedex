import { Pokemon } from "./pokemon";

export interface PokemonList {
    count: number;
    next: string;
    previous: any;
    results: Array<Pokemon>;
}
