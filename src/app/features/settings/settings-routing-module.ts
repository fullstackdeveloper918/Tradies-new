import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Organisations } from './components/organisations/organisations';
import { Users } from './components/users/users';
import { AdminSettings } from './components/admin-settings/admin-settings';

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
  },
  {
    path : 'admin-settings',
    component : AdminSettings
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
