import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportCreatePageRoutingModule } from './sport-create-routing.module';

import { SportCreatePage } from './sport-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportCreatePageRoutingModule
  ],
  declarations: [SportCreatePage]
})
export class SportCreatePageModule {}
