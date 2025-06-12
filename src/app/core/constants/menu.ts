import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'fas fa-chart-pie',
          label: 'Dashboard',
          route: '/home/dashboard'
        },
        {
          icon: 'fas fa-lock',
          label: 'View reports',
          route: '/',
          children: [
            { label: 'Daily reports', route: '/auth/sign-up' },
            { label: 'Weekly reports', route: '/auth/sign-in' }
          ],
        },
        {
          icon: 'fas fa-exclamation-triangle',
          label: 'Create Reports',
          route: '/errors',
          children: [
            { label: 'Daily reports', route: '/errors/404' },
            { label: 'Weekly reports', route: '/errors/500' },
          ],
        },
        {
          icon: 'fas fa-folder',
          label: 'Settings',
          route: '/home/settings',
          children: [
            { label : 'admin-settings', route : '/home/settings/admin-settings'},
            { label: 'Organisations', route: '/home/settings/organisations' },
            { label: 'users', route: '/home/settings/users' },
          ],
        },
      ],
    },
 
    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'fas fa-cog',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    //     {
    //       icon: 'fas fa-bell',
    //       label: 'Notifications',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'fas fa-folder',
    //       label: 'Folders',
    //       route: '/folders',
    //       children: [
    //         { label: 'Current Files', route: '/folders/current-files' },
    //         { label: 'Downloads', route: '/folders/download' },
    //         { label: 'Trash', route: '/folders/trash' },
    //       ],
    //     },
    //   ],
    // },
  ];
}
