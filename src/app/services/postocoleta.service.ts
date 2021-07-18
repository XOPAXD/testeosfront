import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostoColeta } from '../models/postocoleta';

@Injectable({
  providedIn: 'root'
})
export class PostocoletaService {

  baseURL : String = environment.baseURL;

  constructor(private http : HttpClient,
              private snack:MatSnackBar) { }

  findById(id:any):Observable<PostoColeta>{
    const url = this.baseURL + "/postocoleta/"+id;
    return this.http.get<PostoColeta>(url);
  }

  findAll():Observable<PostoColeta[]>{
    const url = this.baseURL + "/postocoletas";
    return this.http.get<PostoColeta[]>(url);
  }
}
