// menu.service.ts
import { Injectable } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
  securitylvl: number;
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private ROUTES: RouteInfo[] = [
    // Same ROUTES array as provided, omitted for brevity
  ];

  getMenuItems(): RouteInfo[] {
    return this.ROUTES;
  }

  filterMenuByRole(menuItems: RouteInfo[], userRole: string): RouteInfo[] {
    const roleSecurityMap: { [key: string]: number[] } = {
      project_worker: [1],
      project_owner: [2],
      project_supervisor: [3, 4],
      administrator: [4, 5],
      app_admin: [4, 5],
      project_architect: [6],
      project_designer: [7],
      project_engineer: [8],
    };

    const allowedLevels = roleSecurityMap[userRole] || [];
    return menuItems.filter(item => allowedLevels.includes(item.securitylvl));
  }
}