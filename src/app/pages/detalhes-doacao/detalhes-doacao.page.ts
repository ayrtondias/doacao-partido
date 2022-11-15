import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';
import { collection, collectionChanges, Firestore, collectionData,} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detalhes-doacao',
  templateUrl: './detalhes-doacao.page.html',
  styleUrls: ['./detalhes-doacao.page.scss'],
})
export class DetalhesDoacaoPage implements OnInit {
  loading: HTMLIonLoadingElement;
  doacao: any;
  data: any;
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {
      const getNav = this.router.getCurrentNavigation();
      this.id = getNav.extras.state.valorParaEnviar;
      console.log(this.id);

      this.doacao = firestore.collection('doar-candidato').valueChanges();
      console.log(this.doacao);


  }

  ngOnInit() {
  }

}
