import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: any = {email: '', senha: ''};
  dadosUsuario: any  = {};

  constructor(public loginService: LoginService, public route: Router) { }

  ngOnInit(): void {
    if (this.loginService.logado === true || localStorage.getItem('token') !== null){
      this.route.navigate(['cadastrar']);
    }else{
      this.route.navigate(['login']);
    }
  }

  efetuarLogin(usuario){
    return this.loginService.autenticar(usuario).subscribe((data: {}) => {
      this.dadosUsuario = data;
      if (this.dadosUsuario !== null){
        localStorage.setItem('token', this.dadosUsuario.token);
        localStorage.setItem('nome', this.dadosUsuario.nome);
        localStorage.setItem('email', this.dadosUsuario.email);
        this.loginService.logado = true;
        this.route.navigate(['cadastrar']);
      }else{
        this.route.navigate(['']);
      }
    });

  }
}
