import { Component } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { NgClass, NgIf } from '@angular/common';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';
import packageJson from '../../../../../package.json';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports: [NgClass, NgIf, SidebarMenu]
})
export class Sidebar {

  public appJson: any = packageJson;
  hoverSidebar = false;
  userFullName = 'Pankaj Sharma';
  showUserDropdown = false;

  constructor(public menuService: MenuService, private authService : Auth, private router : Router) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  handleMouseEnter(): void {
  if (!this.menuService.showSideBar) {
    this.hoverSidebar = true;
  }
}

  get userInitials(): string {
    const [first, last] = this.userFullName.split(' ');
    return (first?.[0] ?? '') + (last?.[0] ?? '');
  }

  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }

  handleMouseLeave(): void {
    if (!this.menuService.showSideBar) {
      this.hoverSidebar = false;
    }
  }

  logOut(){
   this.authService.logOut()
   this.router.navigate(['auth'])
  }
}
