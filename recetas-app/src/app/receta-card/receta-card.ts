
import { Component, Input } from '@angular/core';
import { Receta } from '../Receta';

@Component({
  selector: 'app-receta-card',
  standalone: false,
  templateUrl: './receta-card.html',
})
export class RecetaCard {
  @Input() receta!: Receta;

  constructor() {}
}
