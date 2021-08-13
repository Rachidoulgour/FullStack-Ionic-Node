import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationdetailsPage } from './publicationdetails.page';

const routes: Routes = [
  {
    path: '',
    component: PublicationdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationdetailsPageRoutingModule {}
