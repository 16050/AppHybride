import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeCreatePageRoutingModule } from './notice-create-routing.module';

import { NoticeCreatePage } from './notice-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticeCreatePageRoutingModule
  ],
  declarations: [NoticeCreatePage]
})
export class NoticeCreatePageModule {}
