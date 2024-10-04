import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  fechaActual!: Date;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.fechaActual = new Date();
  }
}
