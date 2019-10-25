import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

// const routes: Routes = [
//   {
//     path: 'maps',
//     component: MapsComponent,
//     outlet: 'pages'
//   }
// ];

export const routes: Routes = [
  {
      path: '',
      component: DashboardComponent,
      data: {
          pageTitle: 'Dashboard'
      }
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ]
})
export class DashboardModule { }
