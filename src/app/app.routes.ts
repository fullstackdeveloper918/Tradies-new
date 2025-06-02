import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        // loadChildren: () => import('./dashboardnew/dashboard.module').then(m => m.DashboardNewModule),
        // canActivate: [AdminGuard],
        data: {
            role: 'app_admin'
            }
    }
];
