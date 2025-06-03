import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { MenuService } from '../../.././../core/services/menu.service';
import { SubMenuItem } from '../../../../core/models/menu.model';

@Component({
  selector: 'app-sidebar-submenu',
  imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink],
  templateUrl: './sidebar-submenu.html',
  styleUrl: './sidebar-submenu.scss'
})
export class SidebarSubmenu {

 @Input() public submenu = <SubMenuItem>{};

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
