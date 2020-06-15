import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from 'src/models/login-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL: string = 'http://localhost:3000'

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      // token : za23sadcx12321cd324545543
    })
  };


  cadastrar(login: LoginModel): Observable<LoginModel>{
    return this.http.post<LoginModel>(this.apiURL + '/api/user/cadastrar', JSON.stringify(login), this.httpOptions);
  }

  autenticar(){}
}
