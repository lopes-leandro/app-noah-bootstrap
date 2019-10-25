import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  toggleSidebarPin() {
    this.layoutService.toggleSidebarPin();
  }

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }

}
