//receta-list.ts

import { Component } from '@angular/core';
import { Receta } from '../Receta';
import { RecetaCartService } from '../receta-cart/receta-cart.service';

@Component({
  selector: 'app-receta-list',
  standalone: false,
  templateUrl: './receta-list.html',
  styleUrl: './receta-list.scss',
})
export class RecetaList {
  recetas: Receta[] = [
    {
      nombre: 'Pasta al Pesto',
      categoria: 'Italiana',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpI_vDHMKKM3eu-KJM3eOPzXQQfUeYLvquWb8Oxt_pxCoVbE6Aj31W6h6ZpKn8r9j0AQVqjc5NjGi7BzowCeIhG9GAhlcE-yyVOjDchPA&s=10',
      dificultad: 'Fácil',
      esVegano: true,
      stock: 10,
      cantidad: 0,
    },
    {
      nombre: 'Tacos al Pastor',
      categoria: 'Mexicana',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalvN1xsjSa-ro2RrA4BfENNMU96u_bLLNDjtxFjDowAzqm4TpAXC38FEGZD9dORzgVvC6a-3CeKOxIjYPFg1Lm7fpVP_91DDTVhUKeQ&s=10',
      dificultad: 'Media',
      esVegano: false,
      stock: 4,
      cantidad: 0,
    },
  ];

  constructor(private cartService: RecetaCartService) {}

  addToCart(receta: Receta): void {
    if (receta.cantidad > 0 && receta.cantidad <= receta.stock) {
      this.cartService.addToCart(receta);

      receta.stock -= receta.cantidad;

      receta.cantidad = 0;
    }
  }
}
