import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDoacoesPage } from './listar-doacoes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDoacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDoacoesPageRoutingModule {}
