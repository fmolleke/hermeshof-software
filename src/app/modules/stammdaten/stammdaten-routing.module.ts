import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StammdatenComponent } from './stammdaten.component';

const routes: Routes = [
  {
    path: '',
    component: StammdatenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StammdatenRoutingModule {}
