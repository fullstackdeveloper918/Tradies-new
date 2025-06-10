import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Organisations } from './components/organisations/organisations';
import { Users } from './components/users/users';

const routes: Routes = [
    {
    path : '',
    redirectTo : 'organisations',
    pathMatch : 'full'
  },
  {
    path : 'organisations',
    component : Organisations
  },
  {
    path : 'users',
    component : Users
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
