import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticeEditPageRoutingModule } from './notice-edit-routing.module';

import { NoticeEditPage } from './notice-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticeEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NoticeEditPage]
})
export class NoticeEditPageModule {}
