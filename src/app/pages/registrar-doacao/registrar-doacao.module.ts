import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarDoacaoPageRoutingModule } from './registrar-doacao-routing.module';

import { RegistrarDoacaoPage } from './registrar-doacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarDoacaoPageRoutingModule
  ],
  declarations: [RegistrarDoacaoPage]
})
export class RegistrarDoacaoPageModule {}
