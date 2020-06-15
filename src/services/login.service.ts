import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from 'src/models/login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = 'http://localhost:3000';
  logado: boolean = false;

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      // token : za23sadcx12321cd324545543
    })
  };


  cadastrar(login: LoginModel): Observable<LoginModel>{
    return this.http.post<LoginModel>(this.apiURL + '/api/usuario/cadastrar', JSON.stringify(login), this.httpOptions);
  }

  autenticar(login: LoginModel): Observable<LoginModel>{
    return this.http.post<LoginModel>(this.apiURL + '/api/usuario/login', JSON.stringify(login), this.httpOptions);
  }
}
