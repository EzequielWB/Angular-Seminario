import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  template: `
    <div class="container mt-5">
      <h1>Mi recetario</h1>
      <p>Encuentra recetas y también podes comprar contra todo pronostico (habia que intentar meter un carrito).</p>
      <p>Contacto: 111-222-333-444</p>
    </div>
  `,
})
export class AboutComponent {}
