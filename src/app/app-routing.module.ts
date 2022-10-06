import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  canActivate,
  redirectUnauthorizedTo,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['bienvenida']);

const routes: Routes = [
  { path: '', component: BienvenidaComponent,
  },
  { path: 'bienvenida', component: BienvenidaComponent,},
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
