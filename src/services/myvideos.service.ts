import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MyvideosModel } from 'src/models/myvideos-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyvideosService {
  api = 'http://localhost:3000/api';
  token: string = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'auth-token': this.token
    })

  };

  listarMyVideos(): Observable<MyvideosModel>{
      return this.http.get<MyvideosModel>(this.api + '/myVideos', this.httpOptions);
  }
}
