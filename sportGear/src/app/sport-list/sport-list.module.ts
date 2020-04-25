import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportListPageRoutingModule } from './sport-list-routing.module';

import { SportListPage } from './sport-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportListPageRoutingModule
  ],
  declarations: [SportListPage]
})
export class SportListPageModule {}
