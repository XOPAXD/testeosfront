import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exame } from '../models/exame';


@Injectable({
  providedIn: 'root'
})
export class ExameService {

  baseURL : String = environment.baseURL;

  constructor(private http : HttpClient,
              private snack:MatSnackBar
  ) { }

  examefindAll():Observable<Exame[]>{
    const url = this.baseURL + "/exames/";
    return this.http.get<Exame[]>(url);
  }
}
