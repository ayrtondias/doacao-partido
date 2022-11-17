import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-doacoes-aprovada',
  templateUrl: './doacoes-aprovada.page.html',
  styleUrls: ['./doacoes-aprovada.page.scss'],
})
export class DoacoesAprovadaPage implements OnInit {
  loading: HTMLIonLoadingElement;
  doacao: any;
  id: string;
  db: any;

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {
    this.doacao = firestore.collection('doar-candidato',  ref =>
    ref.where('aprovado', '==', true)).valueChanges({ idField: 'id' });
    console.log(this.doacao);
   }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Função de detalhes está em desenvolvimento!',
      buttons: ['OK'],
    });

    await alert.present();
  }

//  detalhes(id){
//    const navigationExtras: NavigationExtras = {
//      state: {
//        valorParaEnviar: id
//      }
//    };
    //this.router.navigate(['detalhes-doacao'], navigationExtras);
    //console.log(navigationExtras);

//  }

}
