import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http:HttpClient) { }

  ConsultaCep(cep:any){
    console.log("oi chegando.W "+cep.value);
    
    return  this.http.get(`//viacep.com.br/ws/${cep.value}/json/`) 
  }
}
