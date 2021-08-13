import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicationdetailsPageRoutingModule } from './publicationdetails-routing.module';

import { PublicationdetailsPage } from './publicationdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicationdetailsPageRoutingModule
  ],
  declarations: [PublicationdetailsPage]
})
export class PublicationdetailsPageModule {}
