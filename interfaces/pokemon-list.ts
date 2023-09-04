export interface PokemonListResponse {
    // count: number;
    // previous?: string;
    // next?: string;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url:  string;
    id:   number;
    img:  string;
}
