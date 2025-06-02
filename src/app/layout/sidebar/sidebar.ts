import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService, RouteInfo } from '../../core/services/menu.service';
import { AppService } from '../../core/services/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  standalone : false
})
export class Sidebar {

  constructor(public appService: AppService) {}

}
