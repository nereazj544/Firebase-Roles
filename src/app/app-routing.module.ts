import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DasbhboardComponent } from './component/dasbhboard/dasbhboard.component';
import { RegistroComponent } from './component/registro/registro.component';

const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'Dasbhboard' , component: DasbhboardComponent},
  {path: 'registro' , component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
