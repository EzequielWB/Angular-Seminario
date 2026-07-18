//app-module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RecetaCard } from './receta-card/receta-card';
import { RecetaList } from './receta-list/receta-list';
import { RecetaCartComponent } from './receta-cart/receta-cart.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './main/main.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    App,
    RecetaCard,
    RecetaList,
    RecetaCartComponent,
    AboutComponent,
    HomeComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
