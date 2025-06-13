import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from "angular-datatables";
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { ColorSketchModule } from 'ngx-color/sketch';
import { QuillModule } from 'ngx-quill';
import { AdminButtonStyleDirective } from './directives/admin-button-style-directive';
import { SettingsForm } from './components/settings-form/settings-form';



@NgModule({
  declarations: [AdminButtonStyleDirective,SettingsForm],
  imports: [
    CommonModule,
    RouterModule,
    DataTablesModule, 
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    ColorSketchModule,
    QuillModule,
    MatChipsModule
  ],
   exports: [
    CommonModule,
    RouterModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    ColorSketchModule,
    QuillModule,
    MatChipsModule,
    AdminButtonStyleDirective,
    SettingsForm
  ]
})
export class SharedModule { }
