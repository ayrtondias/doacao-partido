import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherPageRoutingModule } from './escolher-routing.module';

import { EscolherPage } from './escolher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherPageRoutingModule
  ],
  declarations: [EscolherPage]
})
export class EscolherPageModule {}
