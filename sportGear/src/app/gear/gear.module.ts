import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GearPageRoutingModule } from './gear-routing.module';

import { GearPage } from './gear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GearPageRoutingModule
  ],
  declarations: [GearPage]
})
export class GearPageModule {}
