import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CadastroService } from './../../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router, NavigationExtras  } from '@angular/router';


@Component({
  selector: 'app-listar-doacoes',
  templateUrl: './listar-doacoes.page.html',
  styleUrls: ['./listar-doacoes.page.scss'],
})
export class ListarDoacoesPage implements OnInit {
  doacao: any;
  id: any;

  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private cadastroProvider: CadastroService,
    private fireAuth: AngularFireAuth
  ) {

//    const result = this.fireAuth.currentUser;
//    console.log(result);
//    const uid = result.uid;

    this.doacao = firestore.collection('doar-candidato').valueChanges({ idField: 'id' });
    console.log(this.doacao);
  }

  ngOnInit() {
  }
  tratarDados(dados){
    this.doacao = Object.keys(dados).map(i =>{
      dados[i].id= i;
      this.cadastroProvider.guardaDoacao(this.doacao);
      return dados[i];
    });

  }

  detalhes(id){
    const navigationExtras: NavigationExtras = {
      state: {
        valorParaEnviar: id
      }
    };
    this.router.navigate(['detalhe'], navigationExtras);
    console.log(navigationExtras);
  }

}
