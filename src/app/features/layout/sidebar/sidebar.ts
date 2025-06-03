import { Component } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { NgClass, NgIf } from '@angular/common';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';
import packageJson from '../../../../../package.json';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports: [NgClass, NgIf, SidebarMenu]
})
export class Sidebar {

  public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
