import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { DeckblattComponent } from './componenets/deckblatt/deckblatt.component';
import { StammdatenRoutingModule } from './stammdaten-routing.module';

@NgModule({
  declarations: [DeckblattComponent],
  imports: [CommonModule, SharedModule, StammdatenRoutingModule]
})
export class StammdatenModule {}
