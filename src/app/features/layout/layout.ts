import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { AppService } from '../../core/services/app.service';
import {Navbar} from './navbar/navbar'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  imports : [Sidebar, RouterOutlet,Footer, Navbar]
})
export class Layout {

   title = 'pro-dashboard-angular';

  constructor(private appService: AppService) {
    console.log('htis is working')
  }
  getClasses() {
    const classes = {
      'pinned-sidebar': this.appService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.appService.getSidebarStat().isSidebarToggeled
    }
    return classes;
  }
  toggleSidebar() {
    this.appService.toggleSidebar();
  }
}
