import { MyvideosService } from 'src/services/myvideos.service';
import { LoginService } from 'src/services/login.service';
import { Router } from '@angular/router';
import { Component, PipeTransform, Pipe, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-listar-myvideos',
  templateUrl: './listar-myvideos.component.html',
  styleUrls: ['./listar-myvideos.component.css']
})
export class ListarMyvideosComponent implements OnInit {

  MyVideos: any = [];

  constructor(public myvideosService: MyvideosService, public loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
    this.listarMyvideos();
  }

  listarMyvideos(){
    return this.myvideosService.listarMyVideos().subscribe((data: {}) => {
      this.MyVideos = data;
    });
  }
}
