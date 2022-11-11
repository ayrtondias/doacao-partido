import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoarCandidatoPageRoutingModule } from './doar-candidato-routing.module';

import { DoarCandidatoPage } from './doar-candidato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoarCandidatoPageRoutingModule
  ],
  declarations: [DoarCandidatoPage]
})
export class DoarCandidatoPageModule {}
