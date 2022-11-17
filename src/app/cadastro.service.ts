import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private contatos$: any;

  constructor() { }

  guardaDoacao(contatos){
    this.contatos$ = contatos;
    console.log(this.contatos$);
  }

  pegaDoacoes(){
    return this.contatos$;
  }
}
