import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryCreatePageRoutingModule } from './category-create-routing.module';

import { CategoryCreatePage } from './category-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CategoryCreatePageRoutingModule
  ],
  declarations: [CategoryCreatePage]
})
export class CategoryCreatePageModule {}
