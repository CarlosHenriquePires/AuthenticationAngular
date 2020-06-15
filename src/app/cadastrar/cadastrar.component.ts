import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: any = {nome: '', email: '', senha: ''};
  constructor(public loginService: LoginService, public route: Router) { }

  ngOnInit(): void {
  }

  cadastrarUsuario(usuario){
    return this.loginService.cadastrar(usuario).subscribe((data: {}) => {
      this.route.navigate(['']);
    });

  }
  efetuarLogin(){}
}
