import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoacoesAprovadaPageRoutingModule } from './doacoes-aprovada-routing.module';

import { DoacoesAprovadaPage } from './doacoes-aprovada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoacoesAprovadaPageRoutingModule
  ],
  declarations: [DoacoesAprovadaPage]
})
export class DoacoesAprovadaPageModule {}
