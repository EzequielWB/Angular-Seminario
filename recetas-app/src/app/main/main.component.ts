import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <div class="container text-center mt-5">
      <h1 class="display-4">Recetario TUDAI</h1>
      <p class="lead">Mi pagina de recetas (no sabia que hacer).</p>
      <hr class="my-4" />
      <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">

        <button class="btn btn-primary btn-lg px-4 gap-3" routerLink="/recetas">Ver Recetas</button>
        <button class="btn btn-outline-secondary btn-lg px-4" routerLink="/nosotros">Sobre nosotros</button>
      </div>
    </div>
  `,
})
export class HomeComponent {}
