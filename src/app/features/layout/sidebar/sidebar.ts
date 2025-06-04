import { Component } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';
import packageJson from '../../../../../package.json';
import { Router, RouterLink } from '@angular/router';
import { ROUTES } from '../../../core/constants/menu';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports: [RouterLink, NgIf, NgFor]
})
export class Sidebar {

    public menuItems: any[] = [];
    public filteredMenuItems: any[] = [];
    public userDetails: any;
    public userRole!: string;
    public avatarName!: string;
    public logoURL!: string;
    ps: any;

    colorHlightDefault!: string;
    colorHoverDefault!: string;

    constructor(
        // public authService: AuthenticationService,
        private router: Router,
        // private data_api: DatasourceService,
        // public dialog: MatDialog,
    ) {}

    ngOnInit() {
        this.getAdminSettings();

        const userStr = localStorage.getItem('currentUser');
        if (userStr) {
            this.userDetails = JSON.parse(userStr);
            this.userRole = this.userDetails.userRole;
            this.avatarName = `https://ui-avatars.com/api/?background=0771DE&color=fff&name=${this.userDetails.name}`;
        }

        this.menuItems = ROUTES.filter(menuItem => !!menuItem);

        // ✨ Filter role-based items here
        this.filteredMenuItems = this.menuItems.filter(item => {
            return (
                (item.securitylvl === 1 && this.userRole === 'project_worker') ||
                (item.securitylvl === 2 && this.userRole === 'project_owner')
            );
        });

        // PerfectScrollbar for desktop
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            // this.ps = new PerfectScrollbar(elemSidebar);
        }
    }

    getAdminSettings() {
        // this.data_api.getFBAdminSettings().subscribe((data) => {
        //     if (data) {
        //         this.logoURL = data.logo;
        //         this.colorHlightDefault = data.colourHighlight || '';
        //         this.colorHoverDefault = data.colourHover || '';
        //     }
        // });
    }
    onButtonEnter2(target: EventTarget | null) {
      if (target instanceof HTMLElement) {
        // Safe to use target as HTMLElement
        // ...your logic here...
      }
    }
    // ...existing code...
    onButtonOut2(target: EventTarget | null) {
      if (target instanceof HTMLElement) {
        // Safe to use target as HTMLElement
        // ...your logic here...
      }
    }

    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }

    isMac(): boolean {
        return /MAC|IPAD/.test(navigator.platform.toUpperCase());
    }

    openFeedbackDialog(): void {
        // const dialogRef = this.dialog.open(FeedbackDialog, { width: '400px' });
        // dialogRef.afterClosed().subscribe(result => {
        //     if (result === 'success') {
        //         setTimeout(() => window.location.reload(), 1000);
        //     }
        // });
    }

      isActive(path: string): boolean {
    // You may need to adjust this logic based on your routing setup
    return this.router.isActive(path, false);
  }
}
