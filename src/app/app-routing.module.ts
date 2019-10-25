import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './shared/layout/layout.module';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
           path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'maps',
        loadChildren: './views/maps/maps.module#MapsModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'notification',
        loadChildren: './views/notification/notification.module#NotificationModule'
      },
    ]
  },


];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
