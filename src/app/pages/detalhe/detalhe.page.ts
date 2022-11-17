import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { CadastroService } from './../../cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.page.html',
  styleUrls: ['./detalhe.page.scss'],
})
export class DetalhePage implements OnInit {
  doacao: any;
  id: any;


  constructor(
    private router: Router,
    public firestore: AngularFirestore,
    private cadastroProvider: CadastroService
    ) {
      const getNav = this.router.getCurrentNavigation();
        this.id = getNav.extras.state.valorParaEnviar;
        console.log(this.id);

      this.doacao = firestore.collection('doar-candidato').valueChanges({ idField: 'id' });
      console.log(this.doacao);

      const contatos = this.cadastroProvider.pegaDoacoes();
      console.log(contatos); }

  ngOnInit() {
  }

}
