import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { AuthAdminGuard, AuthGuard } from './service/auth.guard';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { FormContatosComponent } from './form-contatos/form-contatos.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './sharedComponents/not-found/not-found.component';

const routes: Routes = [
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'lista-contatos', component: ListaContatosComponent, canActivate: [AuthGuard]},
{path: 'lista-usuarios', component: ListaUsuariosComponent, canActivate: [AuthGuard]},
{path: 'cadastro-contatos', component: FormContatosComponent, canActivate: [AuthGuard]},
{path: 'cadastro-usuarios', component: FormUsuariosComponent, canActivate: [AuthAdminGuard]},
{path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
