import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { PokemonListComponent } from "./components/pokemon-list/pokemon-list.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, PokemonListComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Praxis';
}
