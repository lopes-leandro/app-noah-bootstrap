import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'Noah Sensoriamento Inteligente';

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  getClasses() {
    const classes = {
      'pinned-sidebar': this.layoutService.getSidebarStat().isSidebarPinned,
      'toggeled-sidebar': this.layoutService.getSidebarStat().isSidebarToggeled
    };
    return classes;
  }

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }

}
