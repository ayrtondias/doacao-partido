import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-doar-candidato',
  templateUrl: './doar-candidato.page.html',
  styleUrls: ['./doar-candidato.page.scss'],
})
export class DoarCandidatoPage implements OnInit {
  loading: HTMLIonLoadingElement;
  nome = '';
  cargo = '';
  partido = '';
  data = '';
  valor = '';
  habilitaSalvar = false;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    public firestore: AngularFirestore,
    private fireAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    setInterval(()=>{
      this.habilitaSalvar=!this.habilitaSalvar;
    }, 500);
  }

  cadastrar(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirme os dados',
      message: 'Leia os dados atentamente e confirme: Os dados informados estão corretos?<img src="/assets/doacao-financeira.jpg">',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Você cancelou...');
          }
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: async () => {
            await this.showLoading();
            try{
              const result = this.fireAuth.currentUser;
              console.log(result);
              const uid = (await result).uid;
              this.firestore.collection('doar-candidato').add({
                id: uid,
                nome: this.nome,
                cargo: this.cargo,
                partido: this.partido,
                data: this.data,
                valor: this.valor,
                dataAprovacao: '',
                usuarioId: uid,
                aprovado: false
              });
              this.router.navigateByUrl('home');
              this.presentToast('Doação registrada com sucesso.');
            }
            catch(deuErro){
              console.log(JSON.stringify(deuErro));
                this.presentToast('');
            }
            await this.fecharLoading();
          }
        },
      ],

    });

    await alert.present();
  }


  async presentToast( mensagem: string ) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    });

    await toast.present();
  }

  private async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Aguarde...'
    });

    this.loading.present();
  }

  private async fecharLoading(){
    await this.loading.dismiss();
  }


}
