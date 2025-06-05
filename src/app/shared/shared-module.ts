import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule
  ],
   exports: [
    CommonModule,
    RouterModule,
    DataTablesModule
  ]
})
export class SharedModule { }
