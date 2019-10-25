import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap';
// import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LayoutComponent } from './layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// import { MapsModule } from '../../views/maps/maps.module';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    // LayoutRoutingModule,
    CollapseModule.forRoot(),
    // MapsModule

  ]
})
export class LayoutModule { }
