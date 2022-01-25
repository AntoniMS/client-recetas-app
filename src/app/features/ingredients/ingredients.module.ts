import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientContainerComponent } from './components/ingredient-container/ingredient-container.component';


@NgModule({
  declarations: [
    IngredientContainerComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
