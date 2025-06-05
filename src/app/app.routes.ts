import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren : () => import('./features/layout/layout-module').then((m) => m.LayoutModule)
    },
    {
        path : 'auth', 
        loadChildren : () => import('./features/auth/auth-module').then((m) => m.AuthModule)
    },
   {
    path : '', 
    redirectTo : 'home',
    pathMatch : 'full'
   }
];
