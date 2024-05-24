import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  backend:string='';

  constructor(private http:HttpClient) { 
      this.backend=environment.api;
  }

  IniciarSesion(usuario:string,clave:string):Observable<any>{

    let header= new HttpHeaders({'Content-Type':'application/json;charset=utf-8'})
                                .append("Access-Control-Allow-Headers", "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept")
                                .append('Access-Control-Allow-Origin','*',)
                                .append('Access-Control-Allow-Methods','*');
  
    let mensaje={"usuario":usuario,"clave":clave};
    return this.http.post(this.backend,mensaje,{headers:header});
  }
}
