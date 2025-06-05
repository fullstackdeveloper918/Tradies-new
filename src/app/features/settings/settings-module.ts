import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { Organisations } from './components/organisations/organisations';


@NgModule({
  declarations: [Organisations],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
