import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarDoacaoPage } from './registrar-doacao.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarDoacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarDoacaoPageRoutingModule {}
