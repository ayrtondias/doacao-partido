import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherPage } from './escolher.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherPageRoutingModule {}
