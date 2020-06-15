import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyvideosModel } from 'src/models/myvideos-model';

@Injectable({
  providedIn: 'root'
})
export class MyvideosService {
  apiURL: string = 'http://localhost:3000';
  token: string = localStorage.getItem('token');

  constructor(public http: HttpClient) { }

  httpOptions  = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'auth-token': this.token
    })
  };

  listarMyVideos(): Observable<MyvideosModel>{
    return this.http.get<MyvideosModel>(this.apiURL + '/api/myVideos/', this.httpOptions);
  }
}
