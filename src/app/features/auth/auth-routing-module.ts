import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth';
import { Login } from './pages/login/login';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'login', pathMatch : 'full'
  },
   {
    path : 'login',
    component : Login
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
