import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Validate } from '../../util/validate';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { identity } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  loading: HTMLIonLoadingElement;
  nome = '';
  cpf = '';
  telefone = '';
  email = '';
  senha = '';
  confsenha = '';
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

  canSave(): boolean{
    return Validate.validateEmail(this.email)  &&
    this.senha===this.confsenha &&
    this.senha.length >= 6 &&
    this.cpf.length >= 11;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirme os dados',
      message: 'Leia seus dados atentamente e confirme: seus dados estão corretos?',
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
              const result = await this.fireAuth.createUserWithEmailAndPassword(this.email, this.senha);
              console.log(result);
              const uid = result.user.uid;
              this.firestore.collection('usuarios').doc(uid).set({
                id: uid,
                email: this.email,
                nome: this.nome,
                cpf: this.cpf,
                telefone: this.telefone,
                bloqueado: false
              });
              this.router.navigateByUrl('login');
              this.presentToast('Usuário criado com sucesso. Agora faça o login para acessar o sistema!');
            }
            catch(deuErro){
              console.log(JSON.stringify(deuErro));
              if(deuErro.code === 'auth/email-already-in-use'){
                this.presentToast('Este e-mail já está sendo utilizado!');
              }else if(deuErro.code === 'auth/weak-password'){
                this.presentToast('Senha fraca. Tente outra senha!');
              }else{
                this.presentToast('Erro desconhecido.');
              }

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
