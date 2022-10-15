import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StammdatenRoutingModule } from './stammdaten-routing.module';
import { StammdatenComponent } from './stammdaten.component';

@NgModule({
  declarations: [
    StammdatenComponent
  ],
  imports: [
    CommonModule,
    StammdatenRoutingModule
  ]
})
export class StammdatenModule { }
