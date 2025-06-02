import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout/layout';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { SharedModule } from '../shared/shared-module';
import { SidebarMenu } from './sidebar/sidebar-menu/sidebar-menu';


@NgModule({
  declarations: [
    Layout,     
    Footer,
    Navbar, 
    Sidebar,
    // SidebarMenu
  ],
  imports: [
    SharedModule,
  ]
})
export class LayoutModule { }
