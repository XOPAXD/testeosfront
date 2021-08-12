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
}
