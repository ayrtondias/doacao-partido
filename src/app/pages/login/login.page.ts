import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Validate } from '../../util/validate';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: HTMLIonLoadingElement;
  contador = 0;
  id = '';
  email = '';
  senha = '';

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastController: ToastController,
    private fireAuth: AngularFireAuth
  ) {}

  ngOnInit() {
  }

  async presentToast( mensagem: string ) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }

  canSave(): boolean{
    return Validate.validateEmail(this.email)  &&
    this.senha !== '' &&
    this.senha.length >= 6;
  }

  async entrar(){
    this.showLoading();
    console.log('entrando...');
    //this.fireAuth.createUserWithEmailAndPassword()
    try{
      const result = await this.fireAuth.signInWithEmailAndPassword(this.email, this.senha);
      console.log(result);
      const uid = result.user.uid;
      //firestore.collection(usuarios).doc(result.user.uid)
      //if(usuario.estaAtivo===true)
      this.presentToast('Bem vindo!');
      this.router.navigateByUrl('home');
    }
    catch(erroQueOcorreu){
      console.log(erroQueOcorreu);
      this.presentToast('Usuário ou senha incorretos!');
    }
    await this.fecharLoading();
  }


  getEmailMaiusculo(){
    return this.email.toUpperCase();
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
