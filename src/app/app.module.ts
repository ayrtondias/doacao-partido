import { CadastroService } from './cadastro.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDZ4W3gMpDacFNR6_r4t7PTfS7uHOjdm1Y",
      authDomain: "doacao-partido.firebaseapp.com",
      projectId: "doacao-partido",
      storageBucket: "doacao-partido.appspot.com",
      messagingSenderId: "59598185769",
      appId: "1:59598185769:web:58bd33911d6e71537d0338"
     }),
     AngularFirestoreModule,
     AngularFireAuthModule
  ],
  providers: [CadastroService,
              { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
