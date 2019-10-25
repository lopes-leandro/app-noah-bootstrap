import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MapsComponent } from './maps.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      component: MapsComponent,
      data: {
          pageTitle: 'Maps'
      }
  }
];

@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus'
      // apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
      apiKey: 'AIzaSyBJkhPJaz5QEsRwUYxoP8scX_SgVXcVbnc'
    }),
    HttpClientModule,
    AgmJsMarkerClustererModule
  ]
})
export class MapsModule { }
