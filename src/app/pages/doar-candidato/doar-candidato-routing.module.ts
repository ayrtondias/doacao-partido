import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoarCandidatoPage } from './doar-candidato.page';

const routes: Routes = [
  {
    path: '',
    component: DoarCandidatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoarCandidatoPageRoutingModule {}
