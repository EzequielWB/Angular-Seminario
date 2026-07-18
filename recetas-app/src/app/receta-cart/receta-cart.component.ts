import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../Receta';
import { RecetaCartService } from './receta-cart.service';

@Component({
  selector: 'app-receta-cart',
  standalone: false,
  templateUrl: './receta-cart.component.html',
})
export class RecetaCartComponent implements OnInit {

  cartList$: Observable<Receta[]>;

  constructor(private cartService: RecetaCartService) {
    this.cartList$ = this.cartService.cartList;
  }

  ngOnInit(): void {
  }
}
