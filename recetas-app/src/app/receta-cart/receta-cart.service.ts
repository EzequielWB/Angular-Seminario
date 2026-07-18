
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Receta } from '../Receta';

@Injectable({
  providedIn: 'root',
})
export class RecetaCartService {

  private _cartList: Receta[] = [];

  private _cartListSubject: BehaviorSubject<Receta[]> = new BehaviorSubject(this._cartList);

  public cartList: Observable<Receta[]> = this._cartListSubject.asObservable();

  constructor() {}

  addToCart(receta: Receta) {
    let item = this._cartList.find((v1) => v1.nombre == receta.nombre);

    if (!item) {

      this._cartList.push({ ...receta });
    } else {
      item.cantidad += receta.cantidad;
    }


    this._cartListSubject.next(this._cartList);
  }
}
