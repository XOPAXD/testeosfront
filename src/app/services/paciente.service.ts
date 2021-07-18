import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseURL : String = environment.baseURL;

  constructor(
    private http : HttpClient,
              private snack:MatSnackBar
  ) { }

  findById(id:any):Observable<Paciente>{
    const url = this.baseURL + "/paciente/"+id;
    return this.http.get<Paciente>(url);
  }

  findAll():Observable<Paciente[]>{
    const url = this.baseURL + "/pacientes";
    return this.http.get<Paciente[]>(url);
  }
}
