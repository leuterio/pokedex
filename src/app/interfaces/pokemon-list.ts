import { Pokemon } from "./pokemon";

export interface PokemonList {
    count: number;
    next: String;
    previous: any;
    results: Array<Pokemon>;
}
