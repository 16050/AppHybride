import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GearListPageRoutingModule } from './gear-list-routing.module';

import { GearListPage } from './gear-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GearListPageRoutingModule
  ],
  declarations: [GearListPage]
})
export class GearListPageModule {}
