import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoacoesAprovadaPage } from './doacoes-aprovada.page';

const routes: Routes = [
  {
    path: '',
    component: DoacoesAprovadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoacoesAprovadaPageRoutingModule {}
