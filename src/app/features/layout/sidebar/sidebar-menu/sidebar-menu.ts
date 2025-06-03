import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SubMenuItem } from '../../../../core/models/menu.model';
import { MenuService } from '../../../../core/services/menu.service';
import { SidebarSubmenu } from '../sidebar-submenu/sidebar-submenu';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgFor,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    SidebarSubmenu
  ],
})
export class SidebarMenu {

  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {}

}
