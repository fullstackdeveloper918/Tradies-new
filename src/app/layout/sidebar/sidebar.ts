import { Component } from '@angular/core';
import { MenuService } from '../../core/services/menu.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone : false
})
export class Sidebar {

  public appJson: any

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
