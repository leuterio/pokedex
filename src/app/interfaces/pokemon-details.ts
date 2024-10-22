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
    location_area_encounters: String;
    moves: Array<any>;
    name: String;
    order: number;
    past_abilities: Array<any>;
    past_types: Array<any>;
    species: Object;
    sprites: {
        front_default: String;
        back_default: String;
    };
    stats: Array<any>;
    types: Array<any>;
    wight: number;
}
