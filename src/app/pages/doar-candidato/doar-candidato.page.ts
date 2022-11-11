import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Validate } from '../../util/validate';
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
      message: 'Você confirma que os dados estão corretos?',
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
            this.showLoading();
            setTimeout( async () => {
              await this.fecharLoading();
            },
            2000);
            console.log('confirmou!');
            console.log('cadastrando...');
            console.log(this.nome, this.cargo, this.partido, this.data, this.valor);
            if(this.nome !== ''  &&
            this.cargo !== '' &&
            this.partido !== '' &&
            this.data !== '' &&
            this.valor !== ''){
              try{
                await this.firestore.collection('doar-candidato').add({
                  nome: this.nome,
                  cargo: this.cargo,
                  partido: this.partido,
                  data: this.data,
                  valor: this.valor
                });
                this.presentToast('Doação cadastrada!');
                this.router.navigateByUrl('home');
              }
              catch(erro){
                console.log(erro);
                //alert(erro.message)
              }

            }
            else{
              this.presentToast('Dados inválidos!');
            }

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
