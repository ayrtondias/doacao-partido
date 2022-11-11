import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoarPartidoPage } from './doar-partido.page';

const routes: Routes = [
  {
    path: '',
    component: DoarPartidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoarPartidoPageRoutingModule {}
