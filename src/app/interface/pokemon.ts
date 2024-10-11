export interface Pokemon {
  name: string; // Ensures the name property is always a string
  url: string; // Ensures the url property is always a string
}
export interface PokemonCount {
  count: number; // Ensures the count property is always a number
  next: string | null; // Allows the next URL to be a string or null
  previous: string | null; // Allows the previous URL to be a string or null
  results: Array<Pokemon>; // Uses the previously defined Pokemon interface
}
