import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validate } from '../../util/validate';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-doacoes-aprovada',
  templateUrl: './doacoes-aprovada.page.html',
  styleUrls: ['./doacoes-aprovada.page.scss'],
})
export class DoacoesAprovadaPage implements OnInit {
  loading: HTMLIonLoadingElement;
  doacao: any;

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {
    console.log(router.url);
    this.doacao = firestore.collection('doar-candidato').valueChanges();
    console.log(this.doacao);
   }

  ngOnInit() {
  }

}
