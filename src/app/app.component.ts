import { Component } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string = '';

  constructor(public loginService: LoginService, public route: Router){

  }

  ngOnInit(): void{
    this.mostrarNavbar();
  }

  mostrarNavbar(){
    if (this.loginService.logado === true || localStorage.getItem('token')){
      this.nome = localStorage.getItem('nome');
      return true;
    }
    return false;
  }

  fazerLogout(){
    localStorage.clear();
    this.loginService.logado = false;
    this.nome = '';
    this.route.navigate(['login']);
  }
}
