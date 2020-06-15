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

  constructor(public loginService: LoginService, public route: Router) { }

  ngOnInit(): void {
  }

  efetuarLogin(usuario){
    return this.loginService.autenticar(usuario).subscribe((data: {}) => {
      console.log(data);
      this.route.navigate(['cadastrar']);
    });

  }
}
