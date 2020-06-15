import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { PagesGuard } from './guards/pages.guard';
import { ListarMyvideosComponent } from './listar-myvideos/listar-myvideos.component';


const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'login'},
{path: 'cadastrar', component: CadastrarComponent},
{path: 'login', component: LoginComponent},
{path: 'listarMyVideos', component: ListarMyvideosComponent,
canActivate: [PagesGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
