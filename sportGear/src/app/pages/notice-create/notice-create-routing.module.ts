import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticeCreatePage } from './notice-create.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticeCreatePageRoutingModule {}
