import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecetaList } from './receta-list/receta-list';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './main/main.component';

const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'recetas', component: RecetaList },
  { path: 'nosotros', component: AboutComponent },

  { path: '**', redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
