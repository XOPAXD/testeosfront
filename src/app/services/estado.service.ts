import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http:HttpClient) { }

  getEstadosBr() {
    return this.http.get<Estado[]>('assets/dados/estadosbr.json');
  }

  getCargos(){
    return [
      { nome:'DevJunior',nivel:'Junior',desc:'Desenvolvedor Cabaço'},
      { nome:'DevPleno',nivel:'Pleno',desc:'Desenvolvedor mais ou menos'},
      { nome:'DevSenior',nivel:'Senior',desc:'Desenvolvedor phodaaa'}
    ]
  }

  getTecnologias(){
    return [
      { nome:'java',desc:'Java'},
      { nome:'javascript',desc:'JavaScript'},
      { nome:'php',desc:'PHP'},
      { nome:'angular',desc:'ANGULAR'}
    ]
  }

  getNewsLetter(){
    return [
      {valor:'s',desc:'SIM'},
      {valor:'n',desc:'NÃO'}
    ]
  }

  getFrameworks(){
    return [
      {valor:'react',desc:'React JS'},
      {valor:'vue',desc:'VUE JS'},
      {valor:'sancha',desc:'SANCHA JS'},
      {valor:'jquery',desc:'JQUERY JS'}
    ]
  }
}
