import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GearListPage } from './gear-list.page';

const routes: Routes = [
  {
    path: '',
    component: GearListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GearListPageRoutingModule {}
