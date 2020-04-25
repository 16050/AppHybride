import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GearPage } from './gear.page';

const routes: Routes = [
  {
    path: '',
    component: GearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GearPageRoutingModule {}
