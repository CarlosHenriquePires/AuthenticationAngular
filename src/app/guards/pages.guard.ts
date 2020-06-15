import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate {

  constructor(public router: Router, public loginService: LoginService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.loginService.logado === true || localStorage.getItem('token') !== null){
        return true;
      } else {
        this.router.navigate(['']);
        return false;
      }
  }

}
