import { PokemonType } from "./pokemon-type";

export interface PokemonTypes {
    count: number;
    next: string;
    previous: string;
    results: PokemonType[];
}

