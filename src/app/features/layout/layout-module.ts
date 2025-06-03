import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  imports: [
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
