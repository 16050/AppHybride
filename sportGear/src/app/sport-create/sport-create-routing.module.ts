import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportCreatePage } from './sport-create.page';

const routes: Routes = [
  {
    path: '',
    component: SportCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportCreatePageRoutingModule {}
