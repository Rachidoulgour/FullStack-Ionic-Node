import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritsPage } from './favorits.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritsPageRoutingModule {}
