import { RouteInfo } from "../interfaces/sidebar.interface";


export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard',
        securitylvl: 5,
    },{
        path: '/dashboard-supervisor',
        title: 'Dashboard Supervisor',
        type: 'link',
        icontype: 'dashboard',
        securitylvl: 3,
    },{
        path: '/dashboard-client',
        title: 'Dashboard Client',
        type: 'link',
        icontype: 'dashboard',
        securitylvl: 2,
    },
    {
      path: '/',
      title: 'View Reports',
      type: 'sub',
      icontype: 'find_in_page',
      securitylvl: 2,
      collapse: 'view-report',
      children: [
          {path: 'dashboard-weekly-client', title: 'Weekly Report', ab:'WR'},
      ]
  },
  {
    path: '/client-variation',
    title: 'Variations',
    type: 'link',
    icontype : 'note_alt',
    securitylvl : 2
  },
  {
    path: '/client-selection',
    title: 'Selections',
    type: 'link',
    icontype : 'note_alt',
    securitylvl : 2
  },
  {
    path: '/client-rfi',
    title: 'RFIs',
    type: 'link',
    icontype : 'note_alt',
    securitylvl : 2
  },
    {
        path: '/dashboard-worker',
        title: 'Dashboard Worker',
        type: 'link',
        icontype: 'dashboard',
        securitylvl: 1,
    },{
        path: '/',
        title: 'View Reports',
        type: 'sub',
        icontype: 'find_in_page',
        securitylvl: 5,
        collapse: 'view-report',
        children: [
            // {path: 'options', title: 'Diary Options', ab:'DO'},  
            {path: 'dashboard-daily', title: 'Daily Report', ab:'DR'},
            {path: 'dashboard-weekly', title: 'Weekly Report', ab:'WR'},
        ]
    },{
        path: '/',
        title: 'View Reports',
        type: 'sub',
        icontype: 'find_in_page',
        securitylvl: 3,
        collapse: 'view-report',
        children: [
            // {path: 'options', title: 'Diary Options', ab:'DO'},  
            {path: 'dashboard-daily-supervisor', title: 'Daily Report', ab:'DR'},
            {path: 'dashboard-weekly-supervisor', title: 'Weekly Report', ab:'WR'},
        ]
    },
  //   {
  //     path: '/',
  //     title: 'View Reports',
  //     type: 'sub',
  //     icontype: 'find_in_page',
  //     securitylvl: 2,
  //     collapse: 'view-report',
  //     children: [
  //         // {path: 'options', title: 'Diary Options', ab:'DO'},  
  //         {path: 'dashboard-daily-supervisor', title: 'Daily Report', ab:'DR'},
  //         {path: 'dashboard-weekly-supervisor', title: 'Weekly Report', ab:'WR'},
  //     ]
  // }
  {
        path: '/',
        title: 'Create Reports',
        type: 'sub',
        icontype: 'note_add',
        securitylvl: 4,
        collapse: 'create-report',
        children: [
            // {path: 'options', title: 'Diary Options', ab:'DO'},  
            {path: 'daily-report', title: 'Daily Report', ab:'DR'},
            {path: 'weekly-report', title: 'Weekly Report', ab:'WR'},
        ]
      },{
        path: '/worker-logs',
        title: 'Worker Logs',
        type: 'link',
        icontype: 'dashboard',
        securitylvl: 1,
  
    },{
        path: '/projects',
        title: 'Projects',
        type: 'link',
        icontype: 'assignment_turned_in',
        securitylvl: 5,
    },
    {
        path: '/variations',
        title: 'Variations',
        type: 'link',
        icontype: 'note_alt',
        securitylvl: 5,
    },
    {
      path: '/selections',
      title: 'Selections',
      type: 'link',
      icontype: 'note_alt',
      securitylvl: 5,
  },
  {
    path: '/rfi',
    title: 'RFIs',
    type: 'link',
    icontype: 'note_alt',
    securitylvl: 5,
},
    {
        path: '/',
        title: 'Global List',
        type: 'sub',
        icontype: 'grading',
        securitylvl: 4,
        collapse: 'global-list',
        children: [
            // {path: 'supervisors', title: 'Supervisors', ab:'SU'},    
            // {path: 'trade-staff', title: 'Trades Staff', ab:'TS'},
            // {path: 'trade-categories', title: 'Trades Categories', ab:'TC'},
            // {path: 'employees', title: 'Employees', ab:'Em'},
            {path: 'visitors', title: 'Visitors', ab:'VI'},
            {path: 'suppliers', title: 'Suppliers', ab:'SU'},
            {path: 'product-categories', title: 'Product Categories', ab:'PC'},
            {path: 'stages', title: 'Stages', ab:'ST'},
            {path: 'costcentres', title: 'Cost Centres', ab:'CC'},
            {path: 'tools', title: 'Tools', ab:'TO'},
            {path: 'products', title: 'Products', ab:'PR'},
            {path: 'reasons', title: 'Reasons', ab:'RE'},
            {path: 'trades', title: 'Trades', ab:'TR'},
            {path: 'uom', title: 'UOM', ab:'UO'},
            {path: 'vargroupnames', title: 'Var Group Names', ab:'VG'},
        ]
    },
    {
      path: '/',
      title: 'Project Request',
      type: 'sub',
      icontype: 'contact_page',
      securitylvl: 5,
      collapse: 'proj',
      children: [
          {path: 'project-request', title: 'Request Projects', ab:'RP'},
          {path: 'project-approval', title: 'Approve Projects', ab:'AR'},
      ]
    },{
        path: '/',
        title: 'Settings',
        type: 'sub',
        icontype: 'settings',
        securitylvl: 5,
        collapse: 'settings',
        children: [
            // {path: 'options', title: 'Diary Options', ab:'DO'},  
            
            {path: 'settings-admin', title: 'Admin Settings', ab:'AS'},
            {path: 'settings-project-request', title: 'Project Request Settings', ab:'PRS'},
            {path: 'settings-variations', title: 'Variation Settings', ab:'VS'},
            {path : 'settings-selections', title : 'Selection Settings', ab : 'SS'},
            {path : 'settings-rfi', title: 'Rfi Settings', ab: 'RS'},
            {path: 'manage-users', title: 'Manage Users', ab:'MU'}, 
            {path: 'role-email-setting', title: 'Role Email Settings', ab:'RES'}, 
            {path: 'export-employees', title: 'Employees Timesheet', ab:'ES'},
            {path: 'export-trades', title: 'Trades Timesheet', ab:'ET'},
            {path: 'user-logs', title: 'User Logs', ab:'UL'},
            // {path: 'project-request', title: 'Request Projects', ab:'RP'},
            // {path: 'project-approval', title: 'Approve Projects', ab:'AR'},
        ]

    // },{
    //     path: '/update-password',
    //     title: 'Update Password',
    //     type: 'link',
    //     icontype: 'security',
    //     securitylvl: 3,
    },
    {
      path: '/client-view',
      title: 'Clients',
      type: 'link',
      icontype: 'visibility',
      securitylvl: 5,
  },

  {
  path: '/dashboard-architect',
  title: 'Dashboard architect',
  type: 'link',
  icontype: 'dashboard',
  securitylvl: 6,
},
  {
    path: '/',
    title: 'View Reports',
    type: 'sub',
    icontype: 'find_in_page',
    securitylvl: 6,
    collapse: 'view-report',
    children: [
        {path: 'dashboard-weekly-designer', title: 'Weekly Report', ab:'WR'},
    ]
},

{
  path: '/dashboard-designer',
  title: 'Dashboard Designer',
  type: 'link',
  icontype: 'dashboard',
  securitylvl: 7,
},
{
  path: '/',
  title: 'View Reports',
  type: 'sub',
  icontype: 'find_in_page',
  securitylvl: 7,
  collapse: 'view-report',
  children: [
      {path: 'dashboard-weekly-designer', title: 'Weekly Report', ab:'WR'},
  ]
},

{
  path: '/dashboard-engineer',
  title: 'Dashboard engineer',
  type: 'link',
  icontype: 'dashboard',
  securitylvl: 8,
},

{
  path: '/',
  title: 'View Reports',
  type: 'sub',
  icontype: 'find_in_page',
  securitylvl: 8,
  collapse: 'view-report',
  children: [
      {path: 'dashboard-weekly-engineer', title: 'Weekly Report', ab:'WR'},
  ]
},
];
