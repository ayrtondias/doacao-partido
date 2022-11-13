import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesDoacaoPageRoutingModule } from './detalhes-doacao-routing.module';

import { DetalhesDoacaoPage } from './detalhes-doacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesDoacaoPageRoutingModule
  ],
  declarations: [DetalhesDoacaoPage]
})
export class DetalhesDoacaoPageModule {}
