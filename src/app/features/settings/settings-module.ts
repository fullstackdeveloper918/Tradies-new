import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Organisations } from './components/organisations/organisations';
import { AddOrganisations } from './components/organisations/add-organisations/add-organisations';


@NgModule({
  declarations: [Organisations, AddOrganisations],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
