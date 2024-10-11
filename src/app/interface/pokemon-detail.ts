export interface PokemonDetails {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<Ability>; // Array of Ability objects
  forms: Array<PokemonForm>; // Array of PokemonForm objects
  game_indices: Array<GameIndex>; // Array of GameIndex objects
  held_items: Array<HeldItem>; // Array of HeldItem objects
  location_area_encounters: string; // URL for location area encounters
  moves: Array<PokemonMove>; // Array of PokemonMove objects
  species: { // Object representing the Pokemon species
    name: string;
    url: string;
  };
  sprites: Sprites; // New property for Pokemon sprites

}

// Interface for individual Ability within the abilities array
export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: {
    name: string;
    url: string;
  };
}

// Interface for individual PokemonForm within the forms array
export interface PokemonForm {
  name: string;
  url: string;
}

// Interface for individual GameIndex within the game_indices array
export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

// Interface for individual HeldItem within the held_items array
export interface HeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: Array<HeldItemVersionDetail>; // Array of HeldItemVersionDetail objects
}

// Interface for individual HeldItemVersionDetail within the held_items.version_details array
export interface HeldItemVersionDetail {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

// Interface for individual PokemonMove within the moves array
export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: Array<MoveLearnMethodDetails>; // Array of MoveLearnMethodDetails objects
}

// Interface for individual MoveLearnMethodDetails within the moves.version_group_details array
export interface MoveLearnMethodDetails {
  level_learned_at: number;
  version_group: {
    name: string;
    url: string;
  };
  move_learn_method: {
    name: string;
    url: string;
  };
}

// Interface for Sprites property
export interface Sprites {
  back_default: string; // URL for default back sprite
  back_female: string | null; // URL for female back sprite (if applicable)
  back_shiny: string; // URL for default shiny back sprite
  back_shiny_female: string | null; // URL for female shiny back sprite (if applicable)
  front_default: string; // URL for default front sprite
  front_female: string | null; // URL for female front sprite (if applicable)
  front_shiny: string; // URL for default shiny front sprite
  front_shiny_female: string | null; // URL for female shiny front sprite (if applicable)
  other: { // Object containing other sprite variations
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
  }
}
