import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: '<h1>Notification_COMPENTE</h1>'
})
export class NotificationComponent implements OnInit, OnDestroy {

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
