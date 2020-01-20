import { LoginComponent } from './pages/login/login.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'inicio', component: InicioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
