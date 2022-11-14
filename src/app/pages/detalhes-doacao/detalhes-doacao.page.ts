import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validate } from '../../util/validate';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-detalhes-doacao',
  templateUrl: './detalhes-doacao.page.html',
  styleUrls: ['./detalhes-doacao.page.scss'],
})
export class DetalhesDoacaoPage implements OnInit {
  loading: HTMLIonLoadingElement;
  doacao: any;
  id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastController: ToastController
  ) {
    const algo = this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras) {
        this.id = getNav.extras;
        console.log(this.id);
      }
      return getNav;

    });
    console.log(algo);

  }

  ngOnInit() {
  }

}
