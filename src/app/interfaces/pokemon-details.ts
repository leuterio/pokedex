export interface PokemonDetails {
    abilites: Array<any>;
    base_experience: number;
    cries: Object;
    forms: Array<any>;
    game_indices: Array<any>;
    height: number;
    held_items: Array<any>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<any>;
    name: string;
    order: number;
    past_abilities: Array<any>;
    past_types: Array<any>;
    species: Object;
    sprites: {
        other: {
            showdown: {
                front_default: string;
                back_default: string;
                front_shiny: string;
                back_shiny: string;
            }
        }
    };
    stats: Array<any>;
    types: Array<any>;
    wight: number;
}
