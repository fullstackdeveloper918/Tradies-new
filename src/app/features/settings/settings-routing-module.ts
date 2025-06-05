import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Organisations } from './components/organisations/organisations';

const routes: Routes = [
  {
    path : 'organisations',
    component : Organisations
  },
  {
    path : '',
    redirectTo : 'organisations',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
