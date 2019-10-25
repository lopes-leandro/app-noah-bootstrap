import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: '<h1>Dashboard_COMPENTE</h1>'
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() { }

  getListSensor() {
    // this.mapsService.getSensor()
    //   .subscribe((dados: any[]) => this.sensores = dados);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
