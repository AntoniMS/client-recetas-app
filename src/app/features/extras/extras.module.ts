import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrasRoutingModule } from './extras-routing.module';
import { ExtraContainerComponent } from './components/extra-container/extra-container.component';


@NgModule({
  declarations: [
    ExtraContainerComponent
  ],
  imports: [
    CommonModule,
    ExtrasRoutingModule
  ]
})
export class ExtrasModule { }
