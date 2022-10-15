import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeckblattComponent } from './componenets/deckblatt/deckblatt.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'deckblatt'
  },
  {
    path: 'deckblatt',
    component: DeckblattComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StammdatenRoutingModule {}
