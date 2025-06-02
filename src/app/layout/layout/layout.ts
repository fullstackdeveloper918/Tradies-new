import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AppService } from '../../core/services/app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  standalone : false
})
export class Layout {

   title = 'pro-dashboard-angular';

  constructor(private appService: AppService) {}
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
