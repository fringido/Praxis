import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  pokemons: any[] = [];
  limit: number = 20;
  offset: number = 0;

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(): void {
    this.pokemonService.getPokemonList(this.limit, this.offset).subscribe((data: any) => {
      this.pokemons = data.results;
    });
    console.log(this.pokemons);
  }



  // Función para avanzar a la siguiente página
  nextPage(): void {
    this.offset += this.limit;
    this.getPokemons();
  }

  // Función para retroceder a la página anterior
  prevPage(): void {
    if (this.offset > 0) {
      this.offset -= this.limit;
      this.getPokemons();
    }
  }
}
