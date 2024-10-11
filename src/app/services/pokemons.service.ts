import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonCount } from '../interface/pokemon';
import { PokemonDetails } from '../interface/pokemon-detail';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number, offset: number) {
    return this.http.get<PokemonCount>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getMoreData(id: string) {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/pokemon/${id}`);
  }

}
