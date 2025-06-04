import { Routes } from '@angular/router';
import { Layout } from './features/layout/layout';

export const routes: Routes = [
     { 
    path: '',
    loadChildren: () => import('./features/layout/layout-module').then((m) => m.LayoutModule)
     }
];
