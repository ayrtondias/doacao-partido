import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDoacoesPageRoutingModule } from './listar-doacoes-routing.module';

import { ListarDoacoesPage } from './listar-doacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDoacoesPageRoutingModule
  ],
  declarations: [ListarDoacoesPage]
})
export class ListarDoacoesPageModule {}
