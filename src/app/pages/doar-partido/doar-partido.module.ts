import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoarPartidoPageRoutingModule } from './doar-partido-routing.module';

import { DoarPartidoPage } from './doar-partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoarPartidoPageRoutingModule
  ],
  declarations: [DoarPartidoPage]
})
export class DoarPartidoPageModule {}
