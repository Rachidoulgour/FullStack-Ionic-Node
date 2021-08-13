import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritsPageRoutingModule } from './favorits-routing.module';

import { FavoritsPage } from './favorits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritsPageRoutingModule
  ],
  declarations: [FavoritsPage]
})
export class FavoritsPageModule {}
