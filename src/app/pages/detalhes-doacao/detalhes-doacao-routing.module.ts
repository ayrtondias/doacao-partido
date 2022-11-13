import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesDoacaoPage } from './detalhes-doacao.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesDoacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesDoacaoPageRoutingModule {}
