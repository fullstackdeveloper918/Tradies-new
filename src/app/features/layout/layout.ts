import { Component, ViewChild } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { AppService } from '../../core/services/app.service';
import { Navbar } from './navbar/navbar'
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Location, NgIf } from '@angular/common';
// Add the following import or interface definition for NavItem and NavItemType
// If NavItem is defined elsewhere, import it like this:
// import { NavItem, NavItemType } from 'path-to-navitem';
// Otherwise, define it here as an interface (example below):

interface NavItem {
  type: NavItemType;
  title: string;
  iconClass?: string;
  numNotifications?: number;
  dropdownItems?: (string | { title: string; iconClass?: string })[];
}

enum NavItemType {
  NavbarLeft,
  NavbarRight
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  imports : [Sidebar, RouterOutlet,Footer, Navbar, NgIf]
})
export class Layout {
    public navItems!: NavItem[];
    private _router!: Subscription;
    private lastPoppedUrl!: string | undefined;
    private yScrollStack: number[] = [];
    url!: string;
    location!: Location;
    showtop = false;
    showbottom = true;

    @ViewChild('sidebar', {static: false}) sidebar: any;
    @ViewChild(Navbar, {static: false}) navbar!: Navbar;
    constructor( private router: Router, location: Location ) {
      this.location = location;
    }
    ngOnInit() {
        const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
        const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(ev => {
            this.lastPoppedUrl = ev.url;
        });
         this.router.events.subscribe((event:any) => {
            if (event instanceof NavigationStart) {
               if (event.url != this.lastPoppedUrl)
                   this.yScrollStack.push(window.scrollY);
           } else if (event instanceof NavigationEnd) {
               if (event.url == this.lastPoppedUrl) {
                   this.lastPoppedUrl = undefined;
                   window.scrollTo(0, this.yScrollStack.pop() ?? 0);
               }
               else
                   window.scrollTo(0, 0);
           }
        this._router = this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
             elemMainPanel.scrollTop = 0;
             elemSidebar.scrollTop = 0;
        });
        });
        const html = document.getElementsByTagName('html')[0];
        // if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
        //     let ps = new PerfectScrollbar(elemMainPanel);
        //     ps = new PerfectScrollbar(elemSidebar);
        //     html.classList.add('perfect-scrollbar-on');
        // }
        // this._router = this.router.events.pipe(
        //   filter(event => event instanceof NavigationEnd)
        // ).subscribe((event: NavigationEnd) => {
        //   this.navbar.sidebarClose();
        // });
        // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //   this.navbar.sidebarClose();
        // });

        this.navItems = [
          { type: NavItemType.NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },

          {
            type: NavItemType.NavbarRight,
            title: '',
            iconClass: 'fa fa-bell-o',
            numNotifications: 5,
            dropdownItems: [
              { title: 'Notification 1' },
              { title: 'Notification 2' },
              { title: 'Notification 3' },
              { title: 'Notification 4' },
              { title: 'Another Notification' }
            ]
          },
          {
            type: NavItemType.NavbarRight,
            title: '',
            iconClass: 'fa fa-list',

            dropdownItems: [
              { iconClass: 'pe-7s-mail', title: 'Messages' },
              { iconClass: 'pe-7s-help1', title: 'Help Center' },
              { iconClass: 'pe-7s-tools', title: 'Settings' },
               'separator',
              { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
              { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
            ]
          },
          { type: NavItemType.NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },

          { type: NavItemType.NavbarLeft, title: 'Account' },
          {
            type: NavItemType.NavbarLeft,
            title: 'Dropdown',
            dropdownItems: [
              { title: 'Action' },
              { title: 'Another action' },
              { title: 'Something' },
              { title: 'Another action' },
              { title: 'Something' },
              'separator',
              { title: 'Separated link' },
            ]
          },
          { type: NavItemType.NavbarLeft, title: 'Log out' }
        ];

        elemMainPanel.addEventListener('ps-y-reach-start', () => {
             this.showtop = false;
            this.showbottom = true;
        });
        elemMainPanel.addEventListener('ps-y-reach-end', () => {
             this.showtop = true;
             this.showbottom = false;
        });

        window.addEventListener('scroll', this.scrollEvent, true);

        // window.onscroll = function(ev) {
        //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {   
        //         alert('bottom')
        //     }
        // };
      
    }

    gotoChangelog(){
      this.router.navigate(['/changelogs']);
    }

    scrollEvent = (event: any): void => {
      // if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {

      // }else{
      //   if ($(window).scrollTop() == 0){
      //       console.log('top');
      //       this.showtop = false;
      //       this.showbottom = true;
      //   }else if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      //       console.log("near bottom!");
      //       this.showtop = true;
      //        this.showbottom = false;
      //   }
      // }
           
    }

    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    public isMap() {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        } else {
            return false;
        }
    }
    runOnRouteChange(): void {
      // if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      //   const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      //   const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      //   let ps = new PerfectScrollbar(elemMainPanel);
      //   ps = new PerfectScrollbar(elemSidebar);
      //   ps.update();
      // }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    public scrollToTop(){
      // console.log('testnewer');
      // const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      // const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
     
      // let ps = new PerfectScrollbar(elemMainPanel);
      // ps = new PerfectScrollbar(elemSidebar);

      // elemMainPanel.scrollTop = 0;
      // elemSidebar.scrollTop = 0;

      // window.scrollTo(0, 0);
    }

    public scrollToBottom(){
      // console.log('testnewest');
      // const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      // const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
     
      // let ps = new PerfectScrollbar(elemMainPanel);
      // ps = new PerfectScrollbar(elemSidebar);

      // elemMainPanel.scrollTop = elemMainPanel.scrollHeight;
      // elemSidebar.scrollTop = elemMainPanel.scrollHeight;

      // window.scrollTo(0, elemMainPanel.scrollHeight);
    }
}
