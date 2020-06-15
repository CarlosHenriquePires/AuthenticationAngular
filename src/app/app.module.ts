import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginService } from 'src/services/login.service';
import { LoginComponent } from './login/login.component';
import { PagesGuard } from './guards/pages.guard';
import { ListarMyvideosComponent, SafePipe } from './listar-myvideos/listar-myvideos.component';
import { MyvideosService } from 'src/services/myvideos.service';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    SafePipe,
    LoginComponent,
    ListarMyvideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, PagesGuard, MyvideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
