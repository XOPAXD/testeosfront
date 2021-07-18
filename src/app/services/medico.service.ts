import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  baseURL : String = environment.baseURL;

  constructor(private http : HttpClient,
              private snack:MatSnackBar
  ) { }

  findById(id:any):Observable<Medico>{
    const url = this.baseURL + "/medico/"+id;
    return this.http.get<Medico>(url);
  }

  findAll():Observable<Medico[]>{
    const url = this.baseURL + "/medicos";
    return this.http.get<Medico[]>(url);
  }
}
