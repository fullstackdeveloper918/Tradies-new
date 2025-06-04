import { Component } from '@angular/core';
import { AppService } from '../../../core/services/app.service';
import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  })
export class Navbar {

constructor(private menuService: MenuService) {}

}
