import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout';

const routes: Routes = [
    {
    path: 'dashboard',
    component: Layout,
    loadChildren: () => import('../dashboard/dashboard-module').then((m) => m.DashboardModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}