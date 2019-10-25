import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'ngx-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CollapseModule.forRoot()
  ]
})
export class LayoutModule { }
