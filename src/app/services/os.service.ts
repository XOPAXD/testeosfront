import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OS } from '../models/os';
import { OsExame } from '../models/osexame';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseURL : String = environment.baseURL;

  constructor(private http : HttpClient,
    private snack:MatSnackBar) { }

    findAll():Observable<OS[]>{
      const url = this.baseURL + "";
      return this.http.get<OS[]>(url);
    }

    FindOsLastId():Observable<OS>{
      const url = this.baseURL + "";
      return this.http.get<OS>(url);
    }

    getAllExamesByOsId(id:any):Observable<OsExame[]>{
      const url = this.baseURL + "/os/exames/"+id;
      return this.http.get<OsExame[]>(url);
    }

    create(os:OS):Observable<OS>{
      const url = this.baseURL + "";
      return this.http.post<OS>(url,os);
    }

    createOsExame(osexame:OsExame):Observable<OsExame>{
      const url = this.baseURL + "/osexame";
      return this.http.post<OsExame>(url,osexame);
    }
    
    updOsExame(osexame:OsExame):Observable<OsExame>{
      const url = this.baseURL + "/osexame/upd";
      return this.http.post<OsExame>(url,osexame);
    }

    dltOsExame(osexame:OsExame):Observable<OsExame>{
      const url = this.baseURL + "/osexame/dlt";
      return this.http.post<OsExame>(url,osexame);
    }

    findById(id:any):Observable<OS>{
      const url = this.baseURL + "/"+id;
      return this.http.get<OS>(url);
    }

    update(os:OS):Observable<OS>{
      const url = this.baseURL +"";
      return this.http.post<OS>(url,os);
    }

    
    delete(id:any):Observable<void>{
      const url = this.baseURL + "/"+id;
      return this.http.delete<void>(url);
    }

    message(msg:string):void{
      this.snack.open(`${msg}`,'OK',{
        horizontalPosition:'center',
        verticalPosition:'top',
        duration:4000
    })
  }
}
