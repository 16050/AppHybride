import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GearCreatePage } from './gear-create.page';

const routes: Routes = [
  {
    path: '',
    component: GearCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GearCreatePageRoutingModule {}
